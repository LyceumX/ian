
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPostIds, getPostData } from '../../../../lib/posts';

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="h-16 border-b border-gray-700 flex items-center justify-between px-8">
        <div className="text-xl font-bold">
          <Link href="/" className="hover:opacity-75">
            Ian's Dev Blog
          </Link>
        </div>
        <div className="flex gap-6">
          <Link href="/posts" className="text-gray-400 hover:opacity-75">
            Posts
          </Link>
          <a href="https://github.com/LyceumX" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:opacity-75">
            GitHub
          </a>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-8 py-16">
        <Link href="/posts" className="inline-block mb-8 text-blue-400">
          ← Back to Posts
        </Link>

        <article>
          {postData.image && (
            <img
              src={postData.image}
              alt={postData.title}
              className="w-full rounded-lg mb-8"
            />
          )}
          <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
          <div className="text-sm text-gray-400 mb-8">
            {postData.date} • {postData.categories.join(', ')}
          </div>
          <div className="prose prose-invert max-w-none">
            <MDXRemote source={postData.content} />
          </div>
        </article>
      </div>

      <footer className="h-12 border-t border-gray-700 flex items-center justify-center text-gray-400">
        Project Ianfluencer, 2026
      </footer>
    </main>
  );
}
