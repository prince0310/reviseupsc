import type { MindMapNode } from "@/types/mindmap";

/**
 * Federal System mind map data (Polity – Laxmikant style)
 * Structure matches the collapsible mind map layout.
 */
export const federalSystemMindMap: MindMapNode = {
  id: "root",
  label: "Federal System",
  children: [
    {
      id: "nature",
      label: "Nature of Government",
      children: [
        {
          id: "unitary",
          label: "Unitary",
          children: [
            { id: "u1", label: "Power vested in National Government" },
            { id: "u2", label: "Examples: Britain, France, Japan, China" },
          ],
        },
        {
          id: "federal",
          label: "Federal",
          children: [
            { id: "f1", label: "Division of powers by Constitution" },
            { id: "f2", label: "Independent jurisdictions" },
            { id: "f3", label: "Examples: US, Switzerland, Canada, India" },
          ],
        },
      ],
    },
    {
      id: "indian",
      label: "Indian Federal System",
      children: [
        { id: "i1", label: "Based on Canadian model" },
        { id: "i2", label: 'Described as "Union of States"' },
        { id: "i3", label: "Indestructible Union of destructible states" },
        { id: "i4", label: "Reasons: large size and socio-cultural diversity" },
      ],
    },
    {
      id: "fed-features",
      label: "Federal Features",
      children: [
        { id: "ff1", label: "Dual Polity (Centre and States)" },
        { id: "ff2", label: "Written Constitution (Lengthiest)" },
        { id: "ff3", label: "Division of Powers (Union, State, Concurrent Lists)" },
        { id: "ff4", label: "Supremacy of the Constitution" },
        { id: "ff5", label: "Rigid Constitution" },
        { id: "ff6", label: "Independent Judiciary" },
        { id: "ff7", label: "Bicameralism (Rajya Sabha and Lok Sabha)" },
      ],
    },
    {
      id: "unitary-features",
      label: "Unitary Features",
      children: [
        { id: "uf1", label: "Strong Centre (Residuary powers)" },
        { id: "uf2", label: "States Not Indestructible" },
        { id: "uf3", label: "Single Constitution" },
        { id: "uf4", label: "Flexibility of the Constitution" },
        { id: "uf5", label: "No Equality of State Representation" },
        { id: "uf6", label: "Emergency Provisions" },
        { id: "uf7", label: "Single Citizenship" },
        { id: "uf8", label: "Integrated Judiciary" },
        { id: "uf9", label: "All-India Services (IAS, IPS, IFS)" },
        { id: "uf10", label: "Integrated Audit Machinery (CAG)" },
        { id: "uf11", label: "Appointment of Governor by President" },
        { id: "uf12", label: "Integrated Election Machinery" },
        { id: "uf13", label: "Veto over State bills" },
      ],
    },
    {
      id: "critical",
      label: "Critical Evaluation",
      children: [
        { id: "ce1", label: 'K.C. Wheare: "Quasi-Federal"' },
        { id: "ce2", label: "K. Santhanam: 'Financial dominance of Centre'" },
        { id: "ce3", label: 'Granville Austin: "Cooperative federalism"' },
        { id: "ce4", label: 'Morris Jones: "Bargaining Federalism"' },
        {
          id: "ce5",
          label: "Supreme Court (Bommai Case): federalism is 'basic feature'",
        },
      ],
    },
  ],
};
