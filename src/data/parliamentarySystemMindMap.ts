import type { MindMapNode } from "@/types/mindmap";

/**
 * Parliamentary System mind map (Polity – Laxmikant style)
 * Based on the provided reference mind map images.
 */
export const parliamentarySystemMindMap: MindMapNode = {
  id: "parl-root",
  label: "Parliamentary System",
  children: [
    {
      id: "parl-features",
      label: "Features",
      children: [
        { id: "parl-dual-exec", label: "Dual Executive (Nominal and Real)" },
        { id: "parl-majority-rule", label: "Majority Party Rule" },
        { id: "parl-collective", label: "Collective Responsibility" },
        { id: "parl-homogeneity", label: "Political Homogeneity" },
        { id: "parl-double-membership", label: "Double Membership" },
        { id: "parl-pm-lead", label: "Leadership of the Prime Minister" },
        { id: "parl-dissolution", label: "Dissolution of Lower House" },
        { id: "parl-secrecy", label: "Secrecy of Procedure" },
      ],
    },
    {
      id: "parl-merits",
      label: "Merits",
      children: [
        {
          id: "parl-merit-harmony",
          label: "Harmony Between Legislature and Executive",
        },
        {
          id: "parl-merit-responsible",
          label: "Responsible Government",
        },
        {
          id: "parl-merit-despotism",
          label: "Prevents Despotism",
        },
        {
          id: "parl-merit-representation",
          label: "Wide Representation",
        },
        {
          id: "parl-merit-alternative",
          label: "Ready Alternative Government",
        },
      ],
    },
    {
      id: "parl-demerits",
      label: "Demerits",
      children: [
        { id: "parl-dem-unstable", label: "Unstable Government" },
        {
          id: "parl-dem-no-continuity",
          label: "No Continuity of Policies",
        },
        {
          id: "parl-dem-dictatorship",
          label: "Dictatorship of the Cabinet",
        },
        {
          id: "parl-dem-separation",
          label: "Against Separation of Powers",
        },
        {
          id: "parl-dem-amateurs",
          label: "Government by Amateurs",
        },
      ],
    },
    {
      id: "parl-reasons",
      label: "Reasons for Adoption in India",
      children: [
        { id: "parl-reason-familiar", label: "Familiarity with the System" },
        {
          id: "parl-reason-responsibility",
          label: "Preference to More Responsibility",
        },
        {
          id: "parl-reason-avoid-conflict",
          label: "Need to Avoid Legislative–Executive Conflicts",
        },
        {
          id: "parl-reason-society",
          label: "Nature of Indian Society (Heterogeneity)",
        },
      ],
    },
    {
      id: "parl-comparison",
      label: "Comparison with Presidential System",
      children: [
        {
          id: "parl-pres-features",
          label: "Presidential Features",
          children: [
            { id: "parl-pres-single", label: "Single Executive" },
            {
              id: "parl-pres-non-resp",
              label: "Non-Responsibility to Legislature",
            },
            { id: "parl-pres-tenure", label: "Fixed Tenure" },
            { id: "parl-pres-separation", label: "Separation of Powers" },
          ],
        },
      ],
    },
    {
      id: "parl-indian-british",
      label: "Indian vs. British Model",
      children: [
        {
          id: "parl-indian-republic",
          label: "Republican vs. Monarchical Head",
        },
        {
          id: "parl-indian-parliament",
          label: "Limited vs. Sovereign Parliament",
        },
        {
          id: "parl-indian-pm",
          label: "PM Membership Requirements",
        },
        {
          id: "parl-indian-legal",
          label: "Legal Responsibility of Ministers",
        },
        {
          id: "parl-indian-shadow",
          label: "Shadow Cabinet Existence",
        },
      ],
    },
  ],
};

