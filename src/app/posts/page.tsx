
import Link from 'next/link';
import { getSortedPostsData } from '../../../lib/posts';

export default function PostsPage() {
  const allPostsData = getSortedPostsData();

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
        <div className="space-y-8">
          {allPostsData.map(({ id, date, title, excerpt, categories }) => (
            <article key={id} className="border-b border-gray-700 pb-8">
              <Link href={`/posts/${id}`} className="hover:opacity-75">
                <h2 className="text-2xl font-semibold mb-2">{title}</h2>
              </Link>
              <div className="text-sm text-gray-400 mb-2">
                {date} • {categories.join(', ')}
              </div>
              <p className="text-gray-300">{excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
