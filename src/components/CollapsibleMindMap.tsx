"use client";

/**
 * Collapsible mind map matching reference: horizontal layout, root on left,
 * branches to the right, curved lavender connectors, arrow (>/<) for expand/collapse.
 */

import { useState, useLayoutEffect, useRef, useCallback, useEffect } from "react";
import type { MindMapNode } from "@/types/mindmap";

interface CollapsibleMindMapProps {
  data: MindMapNode;
  className?: string;
}

interface Point {
  x: number;
  y: number;
}

interface Connector {
  from: Point;
  to: Point;
}

function curvePath(from: Point, to: Point): string {
  const midX = from.x + (to.x - from.x) * 0.5;
  return `M ${from.x} ${from.y} C ${midX} ${from.y}, ${midX} ${to.y}, ${to.x} ${to.y}`;
}

export default function CollapsibleMindMap({ data, className = "" }: CollapsibleMindMapProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [connectors, setConnectors] = useState<Connector[]>([]);
  const [size, setSize] = useState({ w: 800, h: 400 });
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const toggle = useCallback((id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const setNodeRef = useCallback((id: string, el: HTMLDivElement | null) => {
    nodeRefs.current[id] = el;
  }, []);

  const recompute = useCallback(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    const rootEl = rootRef.current;
    if (!container || !content || !rootEl || !data.children) return;

    const rect = content.getBoundingClientRect();
    const getRelative = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      return {
        rightCenter: { x: r.right - rect.left, y: r.top - rect.top + r.height / 2 },
        leftCenter: { x: r.left - rect.left, y: r.top - rect.top + r.height / 2 },
      };
    };

    // SVG must match the scrollable content size (not just the viewport)
    const w = Math.max(content.scrollWidth, rect.width);
    const h = Math.max(content.scrollHeight, rect.height);
    setSize({ w, h });

    const rootBox = getRelative(rootEl);
    const lines: Connector[] = [];

    data.children.forEach((l1) => {
      const l1El = nodeRefs.current[l1.id];
      if (!l1El) return;
      const l1Box = getRelative(l1El);
      lines.push({ from: rootBox.rightCenter, to: l1Box.leftCenter });

      if (expanded[l1.id] !== false && l1.children?.length) {
        l1.children.forEach((l2) => {
          const l2El = nodeRefs.current[l2.id];
          if (!l2El) return;
          const l2Box = getRelative(l2El);
          lines.push({ from: l1Box.rightCenter, to: l2Box.leftCenter });
          if (expanded[l2.id] !== false && l2.children?.length) {
            l2.children.forEach((l3) => {
              const l3El = nodeRefs.current[l3.id];
              if (!l3El) return;
              const l3Box = getRelative(l3El);
              lines.push({ from: l2Box.rightCenter, to: l3Box.leftCenter });
            });
          }
        });
      }
    });

    setConnectors(lines);
  }, [data, expanded]);

  useLayoutEffect(() => {
    // After layout paints with new expanded state, recompute paths.
    recompute();
  }, [recompute]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => recompute());
    };
    container.addEventListener("scroll", onScroll, { passive: true });

    const ro = new ResizeObserver(() => recompute());
    if (contentRef.current) ro.observe(contentRef.current);
    ro.observe(container);

    return () => {
      cancelAnimationFrame(raf);
      container.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
  }, [recompute]);

  const hasChildren = data.children && data.children.length > 0;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-auto rounded-2xl border border-slate-600/50 bg-slate-900 p-6 ${className}`}
      style={{ minHeight: "380px" }}
    >
      {/* Content-sized canvas (SVG + nodes move together when scrolling) */}
      <div ref={contentRef} className="relative inline-flex items-stretch gap-10">
        {/* Curved connector lines (lavender) */}
        <svg
          className="pointer-events-none absolute left-0 top-0"
          width={size.w}
          height={size.h}
          viewBox={`0 0 ${size.w} ${size.h}`}
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="mindmap-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#c4b5fd" stopOpacity={0.9} />
            </linearGradient>
          </defs>
          {connectors.map((c, i) => (
            <path
              key={i}
              d={curvePath(c.from, c.to)}
              fill="none"
              stroke="url(#mindmap-stroke)"
              strokeWidth={1.5}
              strokeLinecap="round"
            />
          ))}
        </svg>

        {/* Nodes */}
        <div className="relative z-10 flex flex-row items-stretch gap-10">
          {/* Root node - left */}
          <div
            ref={rootRef}
            className="mind-map-root flex shrink-0 items-center justify-center rounded-xl border border-slate-500/60 bg-slate-800 px-5 py-4 shadow-lg"
          >
            <span className="text-center text-base font-semibold text-slate-100">
              {data.label}
            </span>
          </div>

          {/* Level 1 branches - to the right */}
          {hasChildren && (
            <div className="flex flex-col justify-center gap-5">
              {data.children!.map((l1) => {
                const isExpanded = expanded[l1.id] !== false;
                const hasKids = l1.children && l1.children.length > 0;

                return (
                  <div
                    key={l1.id}
                    className="flex flex-row items-center gap-6"
                  >
                    {/* L1 node: dark gray, arrow on right */}
                    <div
                      ref={(el) => setNodeRef(l1.id, el)}
                      className={`mind-map-l1 flex shrink-0 items-center gap-2 rounded-xl border border-slate-500/60 bg-slate-800 px-4 py-2.5 shadow-lg ${
                        hasKids
                          ? "cursor-pointer hover:border-violet-400/50 hover:bg-slate-700"
                          : ""
                      }`}
                      onClick={hasKids ? () => toggle(l1.id) : undefined}
                      role={hasKids ? "button" : undefined}
                      aria-expanded={hasKids ? isExpanded : undefined}
                    >
                      <span className="text-sm font-medium text-slate-100">
                        {l1.label}
                      </span>
                      {hasKids && (
                        <span className="text-slate-400" aria-hidden>
                          {isExpanded ? (
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </span>
                      )}
                    </div>

                    {/* Level 2 (and L3 when L2 expanded): teal-gray nodes */}
                    {hasKids && isExpanded && l1.children && (
                      <div className="flex flex-col gap-2">
                        {l1.children.map((l2) => {
                          const l2Expanded = expanded[l2.id] === true; // L2 collapsed by default
                          const l2HasKids = l2.children && l2.children.length > 0;
                          return (
                            <div key={l2.id} className="flex flex-row items-center gap-4">
                              <div
                                ref={(el) => setNodeRef(l2.id, el)}
                                className={`mind-map-l2 flex shrink-0 items-center gap-1.5 rounded-lg border border-slate-600/50 bg-slate-700/90 px-3 py-2 shadow ${
                                  l2HasKids
                                    ? "cursor-pointer hover:border-violet-400/40 hover:bg-slate-600/90"
                                    : ""
                                }`}
                                onClick={l2HasKids ? () => toggle(l2.id) : undefined}
                                role={l2HasKids ? "button" : undefined}
                                aria-expanded={l2HasKids ? l2Expanded : undefined}
                              >
                                <span className="text-sm text-slate-200">{l2.label}</span>
                                {l2HasKids && (
                                  <span className="text-slate-400">
                                    {l2Expanded ? (
                                      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                      </svg>
                                    ) : (
                                      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                      </svg>
                                    )}
                                  </span>
                                )}
                              </div>
                              {l2HasKids && l2Expanded && l2.children && (
                                <div className="flex flex-col gap-1.5">
                                  {l2.children.map((l3) => (
                                    <div
                                      key={l3.id}
                                      ref={(el) => setNodeRef(l3.id, el)}
                                      className="mind-map-l3 shrink-0 rounded-md border border-slate-600/40 bg-slate-700/80 px-2.5 py-1.5"
                                    >
                                      <span className="text-xs text-slate-300">{l3.label}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
