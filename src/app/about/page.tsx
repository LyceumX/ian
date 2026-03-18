import Link from "next/link";

export default function AboutPage() {
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
          {/* Filter Buttons (just links since it's the About page) */}
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
          <Link href="/about" className="px-3 py-1.5 rounded-lg text-sm font-medium" style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
            About
          </Link>
          {/* EN/CN Toggle Button: Default to "CN" (shows English content by default) */}
          <button
            className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors border-2"
            style={{
              borderColor: 'var(--border)',
              color: 'var(--text-secondary)'
            }}
          >
            CN
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-8 py-16">
        <Link href="/" className="inline-block mb-8" style={{ color: 'var(--accent)' }}>
          ← Back to Posts
        </Link>

        <article>
          <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            About
          </h1>

          <div className="prose" style={{ color: 'var(--text-primary)' }}>
            {/* Content will be added later */}
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
