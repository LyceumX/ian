import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      {/* Header */}
      <header className="h-16 border-b flex items-center justify-between px-8" style={{ borderColor: 'var(--border)' }}>
        <div className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
          Ian's Dev Blog
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
        <h1 className="text-4xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
          Welcome to Ian's Dev Blog
        </h1>

        <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
          Thoughts on code, development, and daily progress.
        </p>

        <div className="border-t pt-8 mb-8" style={{ borderColor: 'var(--border)' }}>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
            Recent Posts
          </h2>

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

          {/* Another Sample Post */}
          <article className="mb-8">
            <Link href="/posts/another-post" className="block">
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--accent)' }}>
                Building a Dev Blog Workflow
              </h3>
              <p className="mb-2" style={{ color: 'var(--text-secondary)' }}>
                How we set up the Ianfluencer daily blog content workflow.
              </p>
              <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                March 11, 2026 • 8 min read
              </div>
            </Link>
          </article>
        </div>
      </div>

      {/* Footer */}
      <footer className="h-12 border-t flex items-center justify-center" style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
        © 2026 Ian Xie
      </footer>
    </main>
  );
}
