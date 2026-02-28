import type { MindMapNode } from "@/types/mindmap";
import { federalSystemMindMap } from "./federalSystemMindMap";
import { unionAndItsTerritoryMindMap } from "./unionAndItsTerritoryMindMap";
import { citizenshipInIndiaMindMap } from "./citizenshipInIndiaMindMap";
import { directivePrinciplesMindMap } from "./directivePrinciplesMindMap";
import { parliamentarySystemMindMap } from "./parliamentarySystemMindMap";

export interface Chapter {
  id: string;
  title: string;
  subject?: string;
  mindMap: MindMapNode;
}

export const chapters: Chapter[] = [
  {
    id: "federal-system",
    title: "Federal System",
    subject: "Polity",
    mindMap: federalSystemMindMap,
  },
  {
    id: "union-and-its-territory",
    title: "Union and Its Territory",
    subject: "Polity",
    mindMap: unionAndItsTerritoryMindMap,
  },
  {
    id: "citizenship-in-india",
    title: "Citizenship in India",
    subject: "Polity",
    mindMap: citizenshipInIndiaMindMap,
  },
  {
    id: "dpsp",
    title: "Directive Principles of State Policy (DPSP)",
    subject: "Polity",
    mindMap: directivePrinciplesMindMap,
  },
  {
    id: "parliamentary-system",
    title: "Parliamentary System",
    subject: "Polity",
    mindMap: parliamentarySystemMindMap,
  },
];
