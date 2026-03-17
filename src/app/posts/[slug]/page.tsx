import Link from "next/link";

export default function PostPage() {
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
          {/* Filter Buttons (just links since it's a post page) */}
          <div className="flex gap-3">
            <Link href="/" className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors" style={{ color: 'var(--text-secondary)' }}>
              Reflections
            </Link>
            <Link href="/" className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors" style={{ color: 'var(--text-secondary)' }}>
              Dev Log
            </Link>
          </div>

          {/* Other Nav Links */}
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
        <Link href="/" className="inline-block mb-8" style={{ color: 'var(--accent)' }}>
          ← Back to Posts
        </Link>

        <article>
          <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Day 2 — Building the Machine
          </h1>

          <div className="text-sm mb-8" style={{ color: 'var(--text-secondary)' }}>
            March 11, 2026
          </div>

          <div className="prose" style={{ color: 'var(--text-primary)' }}>
            <p className="mb-4">
              Welcome to this sample blog post! This is where the content would go.
            </p>
          </div>
        </article>
      </div>

      {/* Footer */}
      <footer className="h-12 border-t flex items-center justify-center" style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
        Project Ianfluencer, 2026
      </footer>
    </main>
  );
}
