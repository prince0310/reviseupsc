"use client";

/**
 * Renders Mermaid flowchart from string
 * Used to display simplified scheme flow
 */

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

interface MermaidDiagramProps {
  chart: string;
}

export default function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!chart || !ref.current) return;

    mermaid.initialize({
      startOnLoad: false,
      theme: "neutral",
      securityLevel: "loose",
    });

    const id = `mermaid-${Date.now()}`;

    mermaid
      .render(id, chart)
      .then(({ svg }) => {
        if (ref.current) {
          ref.current.innerHTML = svg;
          setError("");
        }
      })
      .catch((err) => {
        setError("Could not render flowchart.");
        if (ref.current) ref.current.innerHTML = "";
        console.warn("Mermaid error:", err);
      });
  }, [chart]);

  if (error) {
    return (
      <div className="rounded-lg bg-amber-50 p-4 text-sm text-amber-800">
        {error} Showing raw steps instead.
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="mermaid-container flex min-h-[120px] items-center justify-center overflow-x-auto"
    />
  );
}
