/**
 * API Route: Simplify scheme text/URL into easy-to-understand format
 * POST /api/simplify-scheme
 *
 * Future: Integrate AI (OpenAI, etc.) to simplify government scheme language.
 * For now returns mock simplified output based on input.
 */

import { NextRequest, NextResponse } from "next/server";

// Mock simplification - replace with AI call in production
function mockSimplify(input: string): {
  simpleSummary: string;
  bulletPoints: string[];
  flowchart: string;
} {
  const lower = input.toLowerCase();

  // Detect common schemes and return tailored simplified content
  if (
    lower.includes("pm-kisan") ||
    lower.includes("kisan samman") ||
    lower.includes("farmer")
  ) {
    return {
      simpleSummary:
        "PM-KISAN gives ₹6,000 per year to small farmers. The money comes in 3 parts (₹2,000 each). You need to be a farmer with land. The Government sends the money directly to your bank account.",
      bulletPoints: [
        "₹6,000 per year in 3 installments of ₹2,000 each",
        "For farmers who own land (small and marginal)",
        "Money goes directly to your bank account",
        "No middleman - Government sends it to you",
        "Check if your name is in the PM-KISAN list online",
      ],
      flowchart: `flowchart TD
    A[Are you a farmer with land?] -->|Yes| B[Register on PM-KISAN portal]
    A -->|No| C[Scheme not for you]
    B --> D[Link Aadhaar with bank account]
    D --> E[Submit details to your State Govt]
    E --> F[Govt verifies your details]
    F --> G[You receive ₹2000 x 3 times per year]
    G --> H[Check status on pmkisan.gov.in]`,
    };
  }

  if (
    lower.includes("nsap") ||
    lower.includes("pension") ||
    lower.includes("senior citizen") ||
    lower.includes("widow") ||
    lower.includes("disability")
  ) {
    return {
      simpleSummary:
        "NSAP gives monthly pension to old people (60+), widows, and persons with disability. You need to be below poverty line (BPL). The amount is different for each category. Apply through your State Government office.",
      bulletPoints: [
        "Old age pension: 60+ years, BPL",
        "Widow pension: 40+ years, BPL",
        "Disability pension: 18-79 years, 40%+ disability, BPL",
        "Apply at your Block/Municipality office",
        "Need: Aadhaar, bank account, BPL certificate",
      ],
      flowchart: `flowchart TD
    A[Check if you are 60+/Widow/Disabled] -->|Yes| B[Get BPL certificate]
    A -->|No| C[Not eligible]
    B --> D[Go to Block/Municipal office]
    D --> E[Fill application form]
    E --> F[Submit with Aadhaar + bank details]
    F --> G[Govt verifies]
    G --> H[Monthly pension in your account]`,
    };
  }

  if (
    lower.includes("scholarship") ||
    lower.includes("obc") ||
    lower.includes("sc") ||
    lower.includes("st") ||
    lower.includes("student")
  ) {
    return {
      simpleSummary:
        "Post-Matric Scholarship helps OBC/SC/ST students pay for college. It covers tuition fees and gives a monthly amount for books and living. Your family income must be below ₹8 lakh per year. Apply online through the National Scholarship Portal.",
      bulletPoints: [
        "For OBC, SC, ST students in college",
        "Family income below ₹8 lakh per year",
        "Covers tuition fees + monthly allowance",
        "Apply on scholarships.gov.in (National Scholarship Portal)",
        "Need: Caste certificate, income certificate, bank account",
      ],
      flowchart: `flowchart TD
    A[Are you OBC/SC/ST student?] -->|Yes| B[Family income under ₹8 lakh?]
    A -->|No| C[Check other scholarships]
    B -->|Yes| D[Register on scholarships.gov.in]
    B -->|No| C
    D --> E[Fill application + upload documents]
    E --> F[Submit before deadline]
    F --> G[Verification by college + Govt]
    G --> H[Scholarship credited to your account]`,
    };
  }

  // Generic fallback for any scheme text
  return {
    simpleSummary:
      "Government schemes often use formal language. In simple terms: check if you match the eligibility (age, income, category). Gather the required documents. Apply through the official portal or office. Wait for verification. Once approved, you get the benefit directly.",
    bulletPoints: [
      "Read the eligibility carefully - age, income, category",
      "Collect documents: Aadhaar, bank account, income/caste certificate",
      "Apply online (official govt portal) or at the office",
      "Keep your application number for tracking",
      "Verify status online or ask at the office",
    ],
    flowchart: `flowchart TD
    A[Read scheme details] --> B[Check: Am I eligible?]
    B -->|Yes| C[Collect documents]
    B -->|No| D[Look for other schemes]
    C --> E[Apply online or at office]
    E --> F[Submit application]
    F --> G[Verification by Govt]
    G --> H[Approved?]
    H -->|Yes| I[Receive benefit]
    H -->|No| J[Check reason, re-apply if needed]`,
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const input = typeof body?.input === "string" ? body.input.trim() : "";

    if (!input) {
      return NextResponse.json(
        { success: false, message: "Please provide scheme text or URL." },
        { status: 400 }
      );
    }

    // Future: If input is URL, fetch page content first, then simplify
    // const isUrl = input.startsWith("http");
    // const content = isUrl ? await fetchAndExtract(input) : input;
    // const result = await callAISimplify(content);

    const result = mockSimplify(input);

    return NextResponse.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error("[api/simplify-scheme] Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to simplify scheme." },
      { status: 500 }
    );
  }
}
