import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black text-white">
      <h1 className="text-4xl font-bold text-center mb-8">
        this is the new home of Ian.
      </h1>
      <div className="flex gap-4">
        <Link href="/sign-up" className="px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors">
          Register
        </Link>
        <Link href="/sign-in" className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-black transition-colors">
          Sign in
        </Link>
      </div>
    </main>
  );
}
