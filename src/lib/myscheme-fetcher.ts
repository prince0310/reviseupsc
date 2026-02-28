/**
 * Service to fetch scheme data from myScheme.gov.in
 * https://www.myscheme.gov.in
 *
 * myScheme is India's National Platform for Government schemes.
 * This fetcher attempts multiple strategies since no public API is documented.
 */

import * as cheerio from "cheerio";
import { Scheme } from "@/types";

const MYSCHEME_BASE_URL = "https://www.myscheme.gov.in";

/**
 * Try to fetch schemes from myScheme's internal API (if discoverable)
 */
async function tryFetchFromApi(): Promise<Scheme[] | null> {
  const apiEndpoints = [
    `${MYSCHEME_BASE_URL}/api/schemes`,
    `${MYSCHEME_BASE_URL}/api/v1/schemes`,
    `${MYSCHEME_BASE_URL}/api/scheme/list`,
    `${MYSCHEME_BASE_URL}/api/search/schemes`,
  ];

  for (const url of apiEndpoints) {
    try {
      const res = await fetch(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Accept: "application/json",
        },
      });

      if (res.ok) {
        const data = await res.json();
        const schemes = normalizeApiResponse(data);
        if (schemes.length > 0) return schemes;
      }
    } catch {
      continue;
    }
  }
  return null;
}

/**
 * Normalize various API response shapes to our Scheme type
 */
function normalizeApiResponse(data: unknown): Scheme[] {
  if (!data || typeof data !== "object") return [];

  const arr = Array.isArray(data)
    ? data
    : (data as { data?: unknown[]; schemes?: unknown[] }).data ??
      (data as { schemes?: unknown[] }).schemes ??
      [];

  return arr
    .filter((item): item is Record<string, unknown> => item && typeof item === "object")
    .map((item, i) => ({
      id: String((item.id as string) ?? i + 1),
      name: String(item.name ?? item.title ?? item.schemeName ?? "Unnamed Scheme"),
      description: String(
        item.description ?? item.desc ?? item.summary ?? item.benefits ?? ""
      ),
      eligibilitySummary: String(
        item.eligibility ?? item.eligibilityCriteria ?? item.eligibilitySummary ?? ""
      ),
      sourceUrl: item.url ? String(item.url) : undefined,
    }))
    .filter((s) => s.name && s.name !== "Unnamed Scheme");
}

/**
 * Fetch and parse schemes from myScheme.gov.in HTML pages
 */
async function tryFetchFromHtml(): Promise<Scheme[] | null> {
  const pagesToTry = [
    `${MYSCHEME_BASE_URL}/`,
    `${MYSCHEME_BASE_URL}/schemes`,
    `${MYSCHEME_BASE_URL}/find-schemes`,
  ];

  for (const url of pagesToTry) {
    try {
      const res = await fetch(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        },
      });

      if (!res.ok) continue;

      const html = await res.text();
      const schemes = parseSchemesFromHtml(html, MYSCHEME_BASE_URL);

      if (schemes.length > 0) return schemes;
    } catch {
      continue;
    }
  }
  return null;
}

/**
 * Parse scheme data from HTML using common patterns
 */
function parseSchemesFromHtml(html: string, baseUrl: string): Scheme[] {
  const $ = cheerio.load(html);
  const schemes: Scheme[] = [];
  const seen = new Set<string>();

  // Pattern 1: Scheme cards/links with common class names
  const selectors = [
    "a[href*='scheme']",
    "[data-scheme-name]",
    ".scheme-card",
    ".scheme-item",
    "[class*='scheme']",
  ];

  for (const selector of selectors) {
    $(selector).each((_, el) => {
      const $el = $(el);
      const href = $el.attr("href");
      const name =
        $el.attr("data-scheme-name") ??
        $el.find("[class*='title'], [class*='name']").first().text().trim() ??
        $el.text().trim();

      if (name && name.length > 3 && name.length < 200 && !seen.has(name)) {
        seen.add(name);
        const fullUrl = href?.startsWith("http") ? href : href ? new URL(href, baseUrl).href : undefined;
        schemes.push({
          id: `myscheme-${schemes.length + 1}`,
          name: name.replace(/\s+/g, " ").trim(),
          description: $el.find("[class*='desc'], [class*='summary']").first().text().trim().slice(0, 300) || "Government scheme - view details for more info.",
          eligibilitySummary: "Check official myScheme portal for eligibility criteria.",
          sourceUrl: fullUrl,
        });
      }
    });
  }

  // Pattern 2: JSON-LD or embedded JSON in page
  $('script[type="application/ld+json"]').each((_, el) => {
    try {
      const json = JSON.parse($(el).html() ?? "{}");
      const items = Array.isArray(json) ? json : json["@graph"] ?? [json];
      for (const item of items) {
        if (item["@type"] === "GovernmentService" || item.name) {
          const name = item.name ?? item.title;
          if (name && !seen.has(name)) {
            seen.add(name);
            schemes.push({
              id: `myscheme-${schemes.length + 1}`,
              name,
              description: item.description ?? "",
              eligibilitySummary: item.eligibility ?? "Check official portal.",
              sourceUrl: item.url,
            });
          }
        }
      }
    } catch {
      // Ignore parse errors
    }
  });

  return schemes.slice(0, 20);
}

/**
 * Main fetcher: tries API first, then HTML, returns schemes or null
 */
export async function fetchSchemesFromMyScheme(): Promise<{
  schemes: Scheme[];
  source: "myscheme-api" | "myscheme-html" | "fallback";
}> {
  // Strategy 1: Try API endpoints
  const apiSchemes = await tryFetchFromApi();
  if (apiSchemes && apiSchemes.length > 0) {
    return { schemes: apiSchemes, source: "myscheme-api" };
  }

  // Strategy 2: Try HTML parsing
  const htmlSchemes = await tryFetchFromHtml();
  if (htmlSchemes && htmlSchemes.length > 0) {
    return { schemes: htmlSchemes, source: "myscheme-html" };
  }

  return { schemes: [], source: "fallback" };
}
