import type { MindMapNode } from "@/types/mindmap";

/**
 * Directive Principles of State Policy (DPSP) mind map.
 * Built from the provided chapter images.
 */
export const directivePrinciplesMindMap: MindMapNode = {
  id: "dpsp-root",
  label: "Directive Principles of State Policy (DPSP)",
  children: [
    {
      id: "dpsp-features",
      label: "Features",
      children: [
        { id: "dpsp-feat-part-iv", label: "Part IV, Articles 36-51" },
        { id: "dpsp-feat-irish", label: "Borrowed from Irish Constitution" },
        { id: "dpsp-feat-instrument", label: "Instrument of Instructions" },
        { id: "dpsp-feat-non-justiciable", label: "Non-justiciable nature" },
        { id: "dpsp-feat-welfare", label: "Aims at Welfare State" },
      ],
    },
    {
      id: "dpsp-classification",
      label: "Classification",
      children: [
        {
          id: "dpsp-socialistic",
          label: "Socialistic Principles",
          children: [
            { id: "dpsp-soc-38", label: "Social order and welfare (Art 38)" },
            { id: "dpsp-soc-39", label: "Adequate livelihood (Art 39)" },
            {
              id: "dpsp-soc-39a",
              label: "Equal justice and free legal aid (Art 39A)",
            },
            {
              id: "dpsp-soc-41",
              label: "Right to work and education (Art 41)",
            },
            {
              id: "dpsp-soc-43",
              label: "Living wage for workers (Art 43)",
            },
          ],
        },
        {
          id: "dpsp-gandhian",
          label: "Gandhian Principles",
          children: [
            { id: "dpsp-gandhi-40", label: "Village panchayats (Art 40)" },
            { id: "dpsp-gandhi-43", label: "Cottage industries (Art 43)" },
            {
              id: "dpsp-gandhi-43b",
              label: "Co-operative societies (Art 43B)",
            },
            {
              id: "dpsp-gandhi-46",
              label: "Interests of SCs and STs (Art 46)",
            },
            {
              id: "dpsp-gandhi-47",
              label: "Prohibit intoxicating drinks (Art 47)",
            },
          ],
        },
        {
          id: "dpsp-liberal",
          label: "Liberal-Intellectual Principles",
          children: [
            { id: "dpsp-lib-44", label: "Uniform Civil Code (Art 44)" },
            {
              id: "dpsp-lib-45",
              label: "Early childhood care (Art 45)",
            },
            {
              id: "dpsp-lib-48a",
              label: "Environment protection (Art 48A)",
            },
            {
              id: "dpsp-lib-50",
              label: "Separate judiciary from executive (Art 50)",
            },
            {
              id: "dpsp-lib-51",
              label: "International peace (Art 51)",
            },
          ],
        },
      ],
    },
    {
      id: "dpsp-amendments",
      label: "Amendments",
      children: [
        {
          id: "dpsp-42nd",
          label: "42nd Amendment (1976): Added Arts 39, 39A, 43A, 48A",
        },
        {
          id: "dpsp-44th",
          label: "44th Amendment (1978): Minimise inequalities (Art 38)",
        },
        {
          id: "dpsp-86th",
          label: "86th Amendment (2002): Subject matter of Art 45",
        },
        {
          id: "dpsp-97th",
          label: "97th Amendment (2011): Co-operative societies (Art 43B)",
        },
      ],
    },
    {
      id: "dpsp-conflict",
      label: "Conflict with Fundamental Rights",
      children: [
        {
          id: "dpsp-champakam",
          label: "Champakam Dorairajan case: FRs prevail",
        },
        {
          id: "dpsp-golaknath",
          label: "Golaknath case: FRs cannot be abridged",
        },
        {
          id: "dpsp-minerva",
          label: "Minerva Mills case: Balance between FRs and DPSPs",
        },
      ],
    },
    {
      id: "dpsp-criticism",
      label: "Criticism",
      children: [
        { id: "dpsp-crit-no-legal", label: "No legal force" },
        { id: "dpsp-crit-illogical", label: "Illogically arranged" },
        { id: "dpsp-crit-conservative", label: "Conservative philosophy" },
        {
          id: "dpsp-crit-conflict",
          label: "Potential constitutional conflict",
        },
      ],
    },
    {
      id: "dpsp-implementation",
      label: "Implementation Examples",
      children: [
        {
          id: "dpsp-impl-planning",
          label: "Planning Commission / NITI Aayog",
        },
        {
          id: "dpsp-impl-land-reform",
          label: "Land Reform Laws",
        },
        {
          id: "dpsp-impl-min-wages",
          label: "Minimum Wages Act",
        },
        {
          id: "dpsp-impl-maternity",
          label: "Maternity Benefit Act",
        },
        {
          id: "dpsp-impl-panchayat",
          label: "Panchayati Raj (73rd Amendment)",
        },
      ],
    },
  ],
};

