import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      {/* Header */}
      <header className="h-16 border-b flex items-center justify-between px-8" style={{ borderColor: 'var(--border)' }}>
        <div className="flex items-center gap-3">
          <img src="/ianfluencer-logo-v1-bold.png" alt="Ianfluencer Logo" className="h-8 w-8" />
          <div className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Ian's Dev Blog
          </div>
        </div>
        <div className="flex gap-6">
          <Link href="/posts" style={{ color: 'var(--text-secondary)' }} className="hover:opacity-75">
            Posts
          </Link>
          <Link href="/about" style={{ color: 'var(--text-secondary)' }} className="hover:opacity-75">
            About
          </Link>
          <a href="https://github.com/LyceumX" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }} className="hover:opacity-75">
            GitHub
          </a>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-8 py-16">
        <h1 className="text-4xl font-bold mb-12" style={{ color: 'var(--text-primary)' }}>
          Daily Posts
        </h1>

        {/* The Ianfluencer Experiment (Manifesto) */}
        <article className="mb-8">
          <Link href="/posts/the-ianfluencer-experiment" className="block">
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--accent)' }}>
              The Ianfluencer Experiment: Building in Public at the Intersection of AI and Human Expertise
            </h3>
            <p className="mb-2" style={{ color: 'var(--text-secondary)' }}>
              How do we integrate AI tools into our workflows in a way that amplifies our capabilities without eroding our expertise?
            </p>
            <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              March 16, 2026 • 12 min read
            </div>
          </Link>
        </article>

        {/* Day 3 Post */}
        <article className="mb-8">
          <Link href="/posts/day-3-the-foundation" className="block">
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--accent)' }}>
              Day 3 of Ianfluencer: The Foundation — Organizing Chaos Before Creating Order
            </h3>
            <p className="mb-2" style={{ color: 'var(--text-secondary)' }}>
              Every project starts with chaos.
            </p>
            <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              March 16, 2026 • 8 min read
            </div>
          </Link>
        </article>

        {/* Day 2 Post */}
        <article className="mb-8">
          <Link href="/posts/day-2-building-the-machine" className="block">
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--accent)' }}>
              Day 2 — Building the Machine
            </h3>
            <p className="mb-2" style={{ color: 'var(--text-secondary)' }}>
              Process scales better than heroics.
            </p>
            <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              March 11, 2026 • 6 min read
            </div>
          </Link>
        </article>

        {/* Sample Post */}
        <article className="mb-8">
          <Link href="/posts/sample-post" className="block">
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--accent)' }}>
              Getting Started with Next.js 15
            </h3>
            <p className="mb-2" style={{ color: 'var(--text-secondary)' }}>
              A quick guide to setting up Next.js 15 with TypeScript and Tailwind CSS.
            </p>
            <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              March 12, 2026 • 5 min read
            </div>
          </Link>
        </article>
      </div>

      {/* Footer */}
      <footer className="h-12 border-t flex items-center justify-center" style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
        Project Ianfluencer, 2026
      </footer>
    </main>
  );
}
