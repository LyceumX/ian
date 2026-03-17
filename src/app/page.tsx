'use client';

import Link from "next/link";
import { useState } from "react";

type PostCategory = "dev-log" | "reflections";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: PostCategory;
  href: string;
}

const posts: Post[] = [
  {
    id: "day-3-the-foundation",
    title: "Day 3 of Ianfluencer: The Foundation — Organizing Chaos Before Creating Order",
    excerpt: "Every project starts with chaos.",
    date: "March 16, 2026",
    readTime: "8 min read",
    category: "dev-log",
    href: "/posts/day-3-the-foundation"
  },
  {
    id: "day-2-building-the-machine",
    title: "Day 2 — Building the Machine",
    excerpt: "Process scales better than heroics.",
    date: "March 11, 2026",
    readTime: "6 min read",
    category: "dev-log",
    href: "/posts/day-2-building-the-machine"
  },
  {
    id: "sample-post",
    title: "Getting Started with Next.js 15",
    excerpt: "A quick guide to setting up Next.js 15 with TypeScript and Tailwind CSS.",
    date: "March 12, 2026",
    readTime: "5 min read",
    category: "dev-log",
    href: "/posts/sample-post"
  }
];

export default function Home() {
  const [filter, setFilter] = useState<PostCategory>("dev-log");

  const filteredPosts = posts.filter(post => post.category === filter);

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      {/* Header */}
      <header className="h-16 border-b flex items-center justify-between px-8" style={{ borderColor: 'var(--border)' }}>
        <div className="flex items-center gap-3">
          <img src="/ianfluencer-logo-v1-bold.png" alt="Ianfluencer Logo" className="h-8 w-8" />
          <div className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Project Ianfluencer
          </div>
        </div>
        <div className="flex items-center gap-6">
          {/* Filter Buttons: Reflections first, then Dev Log */}
          <div className="flex gap-3">
            <button
              onClick={() => setFilter("reflections")}
              className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
              style={{
                backgroundColor: filter === "reflections" ? "var(--accent)" : "transparent",
                borderColor: filter === "reflections" ? "var(--accent)" : "var(--border)",
                color: filter === "reflections" ? "white" : "var(--text-secondary)",
                border: filter === "reflections" ? "2px solid var(--accent)" : "2px solid var(--border)"
              }}
            >
              Reflections
            </button>
            <button
              onClick={() => setFilter("dev-log")}
              className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
              style={{
                backgroundColor: filter === "dev-log" ? "var(--accent)" : "transparent",
                borderColor: filter === "dev-log" ? "var(--accent)" : "var(--border)",
                color: filter === "dev-log" ? "white" : "var(--text-secondary)",
                border: filter === "dev-log" ? "2px solid var(--accent)" : "2px solid var(--border)"
              }}
            >
              Dev Log
            </button>
          </div>

          {/* Other Nav Links: GitHub first, then About */}
          <a href="https://github.com/LyceumX" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }} className="hover:opacity-75">
            GitHub
          </a>
          <Link href="/about" style={{ color: 'var(--text-secondary)' }} className="hover:opacity-75">
            About
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-8 py-16">
        <h1 className="text-4xl font-bold mb-12" style={{ color: 'var(--text-primary)' }}>
          {filter === "dev-log" ? "Dev Log" : "Reflections"}
        </h1>

        {/* Post List */}
        <div className="space-y-8">
          {filteredPosts.map(post => (
            <article key={post.id}>
              <Link href={post.href} className="block">
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--accent)' }}>
                  {post.title}
                </h3>
                <p className="mb-2" style={{ color: 'var(--text-secondary)' }}>
                  {post.excerpt}
                </p>
                <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {post.date} • {post.readTime}
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="h-12 border-t flex items-center justify-center" style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
        Project Ianfluencer, 2026
      </footer>
    </main>
  );
}
