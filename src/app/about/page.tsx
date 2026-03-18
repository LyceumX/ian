import Link from "next/link";
import Header from "../../components/Header";

export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      {/* Header */}
      <Header />

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
