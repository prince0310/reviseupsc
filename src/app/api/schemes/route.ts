/**
 * API Route: Fetch schemes from myScheme.gov.in
 * GET /api/schemes - Fetches schemes (from myScheme or fallback)
 * POST /api/schemes - Same, with optional eligibility params for future filtering
 */

import { NextRequest, NextResponse } from "next/server";
import { fetchSchemesFromMyScheme } from "@/lib/myscheme-fetcher";
import { MOCK_SCHEMES } from "@/data/mockSchemes";
import { Scheme } from "@/types";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  return handleFetch();
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    // Future: use body (age, gender, state, etc.) for eligibility filtering
    // when myScheme API supports it or we add our own logic
    return handleFetch(body);
  } catch {
    return handleFetch();
  }
}

async function handleFetch(_params?: Record<string, unknown>) {
  try {
    const { schemes, source } = await fetchSchemesFromMyScheme();

    if (schemes.length > 0) {
      return NextResponse.json({
        success: true,
        schemes,
        source,
        message:
          source === "myscheme-api"
            ? "Schemes fetched from myScheme.gov.in API"
            : "Schemes fetched from myScheme.gov.in",
      });
    }

    // Fallback to mock data when myScheme fetch returns nothing
    const fallbackSchemes: Scheme[] = MOCK_SCHEMES.map((s) => ({
      ...s,
      sourceUrl: "https://www.myscheme.gov.in",
    }));

    return NextResponse.json({
      success: true,
      schemes: fallbackSchemes,
      source: "fallback",
      message:
        "Using sample schemes. myScheme.gov.in data unavailable. Visit myScheme.gov.in for official scheme search.",
    });
  } catch (error) {
    console.error("[api/schemes] Error:", error);
    const fallbackSchemes: Scheme[] = MOCK_SCHEMES.map((s) => ({
      ...s,
      sourceUrl: "https://www.myscheme.gov.in",
    }));
    return NextResponse.json({
      success: true,
      schemes: fallbackSchemes,
      source: "fallback",
      message:
        "Using sample schemes due to temporary error. Visit myScheme.gov.in for official scheme search.",
    });
  }
}
