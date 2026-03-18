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
  thumbnail?: string;
  bodyPreview?: string;
}

const posts: Post[] = [
  {
    id: "day-4-the-agent-explosion-what-24-hours-of-ai-news-reveals",
    title: "Reflection: The Agent Explosion — What 24 Hours of AI News Reveals About Where We're Headed",
    excerpt: "From GPT-5.4's humanity to Nvidia's enterprise army, a single day shows us the future.",
    date: "March 17, 2026",
    readTime: "12 min read",
    category: "reflections",
    href: "/posts/day-4-the-agent-explosion-what-24-hours-of-ai-news-reveals",
    thumbnail: "/Day-4-The-Agent-Explosion-What-24-Hours-of-AI-News-Reveals-featured.png",
    bodyPreview: "Yesterday felt like a month in the AI world. In a single 24-hour window, we got: GPT-5.4's massive API adoption, Sam Altman talking about 'humanity' over raw intelligence, Andrew Ng launching a Stack Overflow for AI agents, Nvidia deploying an enterprise agent army with Adobe and Salesforce..."
  },
  {
    id: "what-working-on-youtube-right-now-for-ai-creators",
    title: "What's Working on YouTube Right Now for AI Creators",
    excerpt: "A data-driven look at the content that's actually getting views.",
    date: "March 17, 2026",
    readTime: "15 min read",
    category: "reflections",
    href: "/posts/what-working-on-youtube-right-now-for-ai-creators",
    thumbnail: "/What-Working-on-YouTube-Right-Now-for-AI-Creators-featured.png",
    bodyPreview: "Last night, I pulled the trending data for AI creator content on YouTube. Not the 'what's popular' surface-level stuff — the actual numbers. Views, CTRs, engagement patterns, keyword volumes, competitive gaps."
  },
  {
    id: "the-ianfluencer-experiment",
    title: "The Manifesto: Why I'm Building in Public",
    excerpt: "How do we integrate AI tools into our workflows in a way that amplifies our capabilities without eroding our expertise?",
    date: "March 16, 2026",
    readTime: "12 min read",
    category: "reflections",
    href: "/about"
  },
  {
    id: "day-3-the-foundation",
    title: "Day 3 — Organizing Chaos Before Creating Order",
    excerpt: "Every project starts with chaos.",
    date: "March 16, 2026",
    readTime: "8 min read",
    category: "dev-log",
    href: "/posts/day-3-the-foundation",
    bodyPreview: "Every project starts with chaos. Not the romantic, artistic kind — the messy, disorganized kind that comes from moving fast, trying things, and accumulating files faster than you can organize them. Today was about facing that chaos head-on."
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
                backgroundColor: filter === "reflections" ? "#3B82F6" : "transparent",
                borderColor: filter === "reflections" ? "#3B82F6" : "var(--border)",
                color: filter === "reflections" ? "white" : "var(--text-secondary)",
                border: filter === "reflections" ? "2px solid #3B82F6" : "2px solid var(--border)"
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
          {filteredPosts.map((post, index) => (
            <article key={post.id} className={index === 0 ? 'mb-12' : ''}>
              <Link href={post.href} className="block">
                {/* Show thumbnail and body preview only for first post */}
                {index === 0 && post.thumbnail && (
                  <img 
                    src={post.thumbnail} 
                    alt={post.title} 
                    className="w-full mb-6 rounded-lg"
                  />
                )}
                <h3 
                  className={index === 0 ? 'text-3xl font-bold mb-4' : 'text-xl font-semibold mb-2'}
                  style={{ 
                    color: post.category === 'reflections' ? '#3B82F6' : 'var(--accent)'
                  }}
                >
                  {post.title}
                </h3>
                {/* Show body preview only for first post */}
                {index === 0 && post.bodyPreview && (
                  <p className="mb-4 text-lg" style={{ color: 'var(--text-primary)' }}>
                    {post.bodyPreview}
                  </p>
                )}
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
