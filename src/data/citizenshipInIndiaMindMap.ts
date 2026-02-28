import type { MindMapNode } from "@/types/mindmap";

/**
 * Citizenship in India mind map (Polity – Laxmikant style)
 * Based on the provided reference mind map images.
 */
export const citizenshipInIndiaMindMap: MindMapNode = {
  id: "citizenship-root",
  label: "Citizenship in India",
  children: [
    {
      id: "cit-meaning",
      label: "Meaning and Significance",
      children: [
        {
          id: "cit-citizens",
          label: "Citizens (Full Members)",
        },
        {
          id: "cit-aliens",
          label: "Aliens",
          children: [
            { id: "cit-friendly-aliens", label: "Friendly Aliens" },
            { id: "cit-enemy-aliens", label: "Enemy Aliens (Lesser Rights)" },
          ],
        },
        {
          id: "cit-rights-only",
          label: "Rights for Citizens Only",
          children: [
            { id: "cit-art-15", label: "Article 15 (No Discrimination)" },
            { id: "cit-art-16", label: "Article 16 (Public Employment)" },
            { id: "cit-art-19", label: "Article 19 (Six Freedoms)" },
            { id: "cit-arts-29-30", label: "Articles 29 & 30 (Cultural Rights)" },
            { id: "cit-vote", label: "Right to Vote and Contest" },
            { id: "cit-offices", label: "Eligibility for Public Offices" },
          ],
        },
      ],
    },
    {
      id: "cit-const-provisions",
      label: "Constitutional Provisions (Articles 5-11)",
      children: [
        { id: "cit-art5", label: "Article 5 (Domicile in India)" },
        { id: "cit-art6", label: "Article 6 (Migrated from Pakistan)" },
        { id: "cit-art7", label: "Article 7 (Migrants to Pakistan)" },
        { id: "cit-art8", label: "Article 8 (PIOs Residing Outside)" },
        { id: "cit-art9", label: "Article 9 (Foreign Citizenship Loss)" },
        { id: "cit-art10", label: "Article 10 (Continuance of Rights)" },
        { id: "cit-art11", label: "Article 11 (Parliamentary Regulation)" },
      ],
    },
    {
      id: "cit-act-1955",
      label: "Citizenship Act 1955",
      children: [
        {
          id: "cit-acquisition",
          label: "Acquisition Ways",
          children: [
            { id: "cit-by-birth", label: "By Birth" },
            { id: "cit-by-descent", label: "By Descent" },
            { id: "cit-by-registration", label: "By Registration" },
            { id: "cit-by-naturalisation", label: "By Naturalisation" },
            { id: "cit-by-incorporation", label: "By Incorporation of Territory" },
          ],
        },
        {
          id: "cit-loss",
          label: "Loss of Citizenship",
          children: [
            { id: "cit-renunciation", label: "By Renunciation" },
            { id: "cit-termination", label: "By Termination" },
            { id: "cit-deprivation", label: "By Deprivation" },
          ],
        },
      ],
    },
    {
      id: "cit-single",
      label: "Single Citizenship",
      children: [
        { id: "cit-unified", label: "Unified Indian Citizenship" },
        { id: "cit-no-state", label: "No Separate State Citizenship" },
        { id: "cit-fraternity", label: "Promotion of Fraternity and Unity" },
        {
          id: "cit-exceptions",
          label: "Exceptions",
          children: [
            { id: "cit-residential", label: "Residential Qualifications (Art 16)" },
            { id: "cit-tribal", label: "Tribal Area Protections (Art 19)" },
            { id: "cit-state-specific", label: "State Specific Benefits (Art 15)" },
          ],
        },
      ],
    },
    {
      id: "cit-oci",
      label: "Overseas Citizenship of India (OCI)",
      children: [
        {
          id: "cit-oci-scheme",
          label: "OCI Cardholder Scheme (2015 Merger)",
        },
        {
          id: "cit-oci-eligibility",
          label: "Registration Eligibility",
        },
        {
          id: "cit-oci-rights",
          label: "Rights Conferred",
          children: [
            { id: "cit-oci-visa", label: "Multiple Entry Lifelong Visa" },
            { id: "cit-oci-parity", label: "Parity with NRIs" },
            { id: "cit-oci-profession", label: "Professional Practice (Doctors, etc.)" },
          ],
        },
        {
          id: "cit-oci-restrictions",
          label: "Restrictions",
          children: [
            { id: "cit-oci-no-vote", label: "No Voting Rights" },
            { id: "cit-oci-no-public", label: "No Public Employment Equality" },
            { id: "cit-oci-no-const", label: "No Constitutional Offices" },
          ],
        },
        {
          id: "cit-oci-cancel",
          label: "Cancellation Grounds",
        },
      ],
    },
  ],
};

