"use client";

/**
 * Header: Logo and title for Chapters
 */

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/5 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-4 sm:px-6">
        <a href="/" className="flex items-center gap-3 hover:opacity-90">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 text-xl font-bold text-white shadow-lg">
            C
          </div>
          <div>
            <span className="text-xl font-bold text-white">Chapters</span>
            <p className="text-xs text-slate-400">Mind maps · Polity & more</p>
          </div>
        </a>
      </div>
    </header>
  );
}
