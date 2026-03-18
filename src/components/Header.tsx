'use client';

import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";

interface HeaderProps {
  showFilters?: boolean;
  activeFilter?: "dev-log" | "reflections";
  onFilterChange?: (filter: "dev-log" | "reflections") => void;
}

export default function Header({ showFilters = false, activeFilter, onFilterChange }: HeaderProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="h-16 border-b flex items-center justify-between px-8" style={{ borderColor: 'var(--border)' }}>
      <div className="flex items-center gap-3">
        <img src="/ianfluencer-logo-v1-bold.png" alt="Ianfluencer Logo" className="h-8 w-8" />
        <div className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
          Project Ianfluencer
        </div>
      </div>
      <div className="flex items-center gap-6">
        {/* Filter Buttons (if shown) */}
        {showFilters && activeFilter && onFilterChange && (
          <div className="flex gap-3">
            <button
              onClick={() => onFilterChange("reflections")}
              className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
              style={{
                backgroundColor: activeFilter === "reflections" ? "#3B82F6" : "transparent",
                borderColor: activeFilter === "reflections" ? "#3B82F6" : "var(--border)",
                color: activeFilter === "reflections" ? "white" : "var(--text-secondary)",
                border: activeFilter === "reflections" ? "2px solid #3B82F6" : "2px solid var(--border)"
              }}
            >
              Reflections
            </button>
            <button
              onClick={() => onFilterChange("dev-log")}
              className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
              style={{
                backgroundColor: activeFilter === "dev-log" ? "var(--accent)" : "transparent",
                borderColor: activeFilter === "dev-log" ? "var(--accent)" : "var(--border)",
                color: activeFilter === "dev-log" ? "white" : "var(--text-secondary)",
                border: activeFilter === "dev-log" ? "2px solid var(--accent)" : "2px solid var(--border)"
              }}
            >
              Dev Log
            </button>
          </div>
        )}

        {/* Other Nav Links */}
        <a href="https://github.com/LyceumX" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }} className="hover:opacity-75">
          GitHub
        </a>
        <Link href="/about" style={{ color: 'var(--text-secondary)' }} className="hover:opacity-75">
          About
        </Link>
        {/* EN/CN Toggle Button: Default to "CN" (shows English content by default) */}
        <button
          onClick={() => setLanguage(language === "en" ? "zh" : "en")}
          className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors border-2"
          style={{
            borderColor: 'var(--border)',
            color: 'var(--text-secondary)'
          }}
        >
          {language === "en" ? "CN" : "EN"}
        </button>
      </div>
    </header>
  );
}
