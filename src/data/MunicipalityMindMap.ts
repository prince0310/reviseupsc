import type { MindMapNode } from "@/types/mindmap";

/**
 * Municipalities in India mind map (Polity – Laxmikant style)
 * Based on the provided reference mind map images.
 */
export const municipalitiesIndiaMindMap: MindMapNode = {
    id: "muni-root",
    label: "Municipalities in India",
    children: [
        {
            id: "muni-overview",
            label: "Overview",
            children: [
                { id: "muni-ov-def", label: "Urban Local Government Definition" },
                { id: "muni-ov-min", label: "Three Functional Ministries" },
                { id: "muni-ov-74caa", label: "74th Constitutional Amendment Act 1992" },
            ],
        },
        {
            id: "muni-evolution",
            label: "Evolution",
            children: [
                { id: "muni-ev-madras", label: "First Corporation: Madras (1688)" },
                { id: "muni-ev-mayo", label: "Lord Mayo's Resolution (1870)" },
                { id: "muni-ev-ripon", label: "Lord Ripon's Resolution (1882)" },
                { id: "muni-ev-1919", label: "Government of India Act (1919)" },
                { id: "muni-ev-1935", label: "Government of India Act (1935)" },
            ],
        },
        {
            id: "muni-74th-features",
            label: "74th Amendment Features",
            children: [
                { id: "muni-feat-part", label: "Part IX-A (Articles 243-P to 243-ZG)" },
                { id: "muni-feat-sched", label: "Twelfth Schedule (18 Functional Items)" },
                { id: "muni-feat-tier", label: "Three Tier System" },
                { id: "muni-feat-elec", label: "Direct Elections" },
                { id: "muni-feat-res", label: "Reservation of Seats (SC, ST, Women)" },
                { id: "muni-feat-dur", label: "Five-Year Duration" },
                { id: "muni-feat-sec", label: "State Election Commission" },
                { id: "muni-feat-sfc", label: "State Finance Commission" },
            ],
        },
        {
            id: "muni-types",
            label: "Types of Urban Governments",
            children: [
                { id: "muni-type-corp", label: "Municipal Corporation" },
                { id: "muni-type-muni", label: "Municipality" },
                { id: "muni-type-nac", label: "Notified Area Committee" },
                { id: "muni-type-tac", label: "Town Area Committee" },
                { id: "muni-type-canton", label: "Cantonment Board" },
                { id: "muni-type-township", label: "Township" },
                { id: "muni-type-port", label: "Port Trust" },
                { id: "muni-type-spa", label: "Special Purpose Agency" },
            ],
        },
        {
            id: "muni-planning",
            label: "Planning Committees",
            children: [
                { id: "muni-plan-dpc", label: "District Planning Committee" },
                { id: "muni-plan-mpc", label: "Metropolitan Planning Committee" },
            ],
        },
        {
            id: "muni-personnel",
            label: "Municipal Personnel",
            children: [
                { id: "muni-pers-sep", label: "Separate Personnel System" },
                { id: "muni-pers-uni", label: "Unified Personnel System" },
                { id: "muni-pers-int", label: "Integrated Personnel System" },
            ],
        },
        {
            id: "muni-revenue",
            label: "Municipal Revenue",
            children: [
                { id: "muni-rev-tax", label: "Tax Revenue" },
                { id: "muni-rev-nontax", label: "Non-Tax Revenue" },
                { id: "muni-rev-grants", label: "Grants" },
                { id: "muni-rev-dev", label: "Devolution" },
                { id: "muni-rev-loans", label: "Loans" },
            ],
        },
        {
            id: "muni-council",
            label: "Central Council of Local Government",
            children: [
                { id: "muni-coun-est", label: "Established 1954" },
                { id: "muni-coun-adv", label: "Advisory Body" },
                { id: "muni-coun-chair", label: "Chaired by Union Minister" },
            ],
        },
    ],
};