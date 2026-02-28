import type { MindMapNode } from "@/types/mindmap";

/**
 * Union and Its Territory mind map (Polity – Laxmikant style)
 * Based on the provided reference mind map images.
 */
export const unionAndItsTerritoryMindMap: MindMapNode = {
  id: "union-territory-root",
  label: "Union and Its Territory",
  children: [
    {
      id: "ut-constitutional-provisions",
      label: "Constitutional Provisions (Articles 1-4)",
      children: [
        {
          id: "ut-art-1",
          label: "Article 1: Name and Type of Polity",
          children: [
            { id: "ut-art-1-name", label: "Name: India, that is, Bharat" },
            {
              id: "ut-art-1-polity",
              label: "Polity: Union of States (Indestructible)",
            },
            {
              id: "ut-art-1-territory",
              label: "Territory Classification: States, UTs, Acquired territories",
            },
          ],
        },
        {
          id: "ut-art-2",
          label: "Article 2: Admission/Establishment of New States (External)",
        },
        {
          id: "ut-art-3",
          label: "Article 3: Internal Reorganisation",
          children: [
            { id: "ut-art-3-formation", label: "Formation of new states" },
            {
              id: "ut-art-3-alteration",
              label: "Alteration of areas, boundaries, or names",
            },
            {
              id: "ut-art-3-conditions",
              label: "Conditions: Presidential recommendation and State reference",
            },
          ],
        },
        {
          id: "ut-art-4",
          label:
            "Article 4: Laws under Art 2 & 3 not deemed Constitutional Amendments",
        },
      ],
    },
    {
      id: "ut-evolution",
      label: "Evolution of States and UTs",
      children: [
        { id: "ut-evolution-post", label: "Post-Independence Integration" },
        {
          id: "ut-evolution-1950",
          label: "1950 Classification: Part A, B, C, and D territories",
        },
        {
          id: "ut-evolution-committees",
          label: "Reorganisation Committees",
          children: [
            {
              id: "ut-dhar",
              label: "Dhar Commission (Administrative convenience)",
            },
            { id: "ut-jvp", label: "JVP Committee (Rejected language basis)" },
            {
              id: "ut-fazl-ali",
              label: "Fazl Ali Commission (Accepted language as basis)",
            },
          ],
        },
        {
          id: "ut-evolution-sra",
          label:
            "States Reorganisation Act 1956: 14 states and 6 UTs created",
        },
      ],
    },
    {
      id: "ut-new-states",
      label: "New States Created After 1956",
      children: [
        { id: "ut-1960", label: "1960: Maharashtra and Gujarat" },
        { id: "ut-1963", label: "1963: Nagaland" },
        {
          id: "ut-1966",
          label: "1966: Haryana, Chandigarh, Himachal Pradesh",
        },
        { id: "ut-1972", label: "1972: Manipur, Tripura, Meghalaya" },
        { id: "ut-1975", label: "1975: Sikkim (22nd State)" },
        {
          id: "ut-1987",
          label: "1987: Mizoram, Arunachal Pradesh, Goa",
        },
        {
          id: "ut-2000",
          label: "2000: Chhattisgarh, Uttarakhand, Jharkhand",
        },
        { id: "ut-2014", label: "2014: Telangana" },
        {
          id: "ut-2019",
          label: "2019: Jammu & Kashmir and Ladakh (UTs)",
        },
      ],
    },
    {
      id: "ut-territorial-changes",
      label: "Territorial Changes and Acquisitions",
      children: [
        {
          id: "ut-portuguese",
          label: "Portuguese territories: Dadra & Nagar Haveli, Goa, Daman & Diu",
        },
        { id: "ut-french", label: "French territories: Puducherry" },
        {
          id: "ut-100th",
          label: "100th Amendment: Exchange of enclaves with Bangladesh",
        },
        {
          id: "ut-berubari",
          label:
            "Berubari Union Case: Cession requires Article 368 amendment",
        },
      ],
    },
    {
      id: "ut-change-names",
      label: "Change of Names",
      children: [
        {
          id: "ut-up",
          label: "United Provinces to Uttar Pradesh (1950)",
        },
        { id: "ut-madras", label: "Madras to Tamil Nadu (1969)" },
        { id: "ut-mysore", label: "Mysore to Karnataka (1973)" },
        { id: "ut-pondy", label: "Pondicherry to Puducherry (2006)" },
        { id: "ut-orissa", label: "Orissa to Odisha (2011)" },
      ],
    },
  ],
};

