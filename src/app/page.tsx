"use client";

/**
 * Chapters — collapsible mind maps for Polity / study
 */

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CollapsibleMindMap from "@/components/CollapsibleMindMap";
import { chapters } from "@/data/chapters";

export default function Home() {
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(
    chapters.length > 0 ? chapters[0].id : null
  );

  const selectedChapter = chapters.find((c) => c.id === selectedChapterId);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <label htmlFor="chapter-select" className="text-sm font-medium text-slate-200">
              Chapter:
            </label>
            <select
              id="chapter-select"
              value={selectedChapterId ?? ""}
              onChange={(e) => setSelectedChapterId(e.target.value || null)}
              className="rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 text-sm font-medium text-white shadow-lg backdrop-blur-sm focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400/30"
            >
              {chapters.map((ch) => (
                <option key={ch.id} value={ch.id} className="bg-slate-800 text-slate-100">
                  {ch.subject ? `${ch.title} (${ch.subject})` : ch.title}
                </option>
              ))}
            </select>
          </div>
          {selectedChapter && (
            <CollapsibleMindMap data={selectedChapter.mindMap} className="min-h-[420px]" />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
