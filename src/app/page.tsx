import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black text-white">
      <h1 className="text-4xl font-bold text-center mb-8">
        this is the new home of Ian.
      </h1>
      <div className="flex flex-col gap-4 items-center">
        <Link href="/posts" className="px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors">
          View Blog Posts
        </Link>
        <div className="flex gap-4 mt-4">
          <Link href="/sign-up" className="px-6 py-2 border border-gray-600 text-gray-400 rounded-lg text-sm hover:border-white hover:text-white transition-colors">
            Register
          </Link>
          <Link href="/sign-in" className="px-6 py-2 border border-gray-600 text-gray-400 rounded-lg text-sm hover:border-white hover:text-white transition-colors">
            Sign in
          </Link>
        </div>
      </div>
    </main>
  );
}
