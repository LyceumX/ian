import Link from "next/link";

export default function PostPage({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      {/* Header */}
      <header className="h-16 border-b flex items-center justify-between px-8" style={{ borderColor: 'var(--border)' }}>
        <div className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
          <Link href="/" className="hover:opacity-75">
            Ian's Dev Blog
          </Link>
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
        <Link href="/posts" className="inline-block mb-8" style={{ color: 'var(--accent)' }}>
          ← Back to Posts
        </Link>

        <article>
          <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            {params.slug === "sample-post" ? "Getting Started with Next.js 15" : "Building a Dev Blog Workflow"}
          </h1>

          <div className="text-sm mb-8" style={{ color: 'var(--text-secondary)' }}>
            {params.slug === "sample-post" ? "March 12, 2026 • 5 min read" : "March 11, 2026 • 8 min read"}
          </div>

          <div className="prose" style={{ color: 'var(--text-primary)' }}>
            <p className="mb-4">
              Welcome to this sample blog post! This is where the content would go.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: 'var(--text-primary)' }}>
              Code Example
            </h2>

            <pre className="p-4 rounded-lg mb-4" style={{ backgroundColor: 'var(--code-bg)', color: 'var(--text-primary)' }}>
              <code className="text-sm">
{`// This is a sample code block
function helloWorld() {
  console.log("Hello, World!");
}

helloWorld();`}
              </code>
            </pre>

            <p className="mb-4">
              That&apos;s a quick sample! More content to come.
            </p>
          </div>
        </article>
      </div>

      {/* Footer */}
      <footer className="h-12 border-t flex items-center justify-center" style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}>
        © 2026 Ian Xie
      </footer>
    </main>
  );
}
