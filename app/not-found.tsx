import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center py-60 space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">
        This page could not be found :(
      </h1>
      <Link
        href="/"
        className="inline-block bg-accent-500 border border-black px-6 py-3 text-lg"
      >
        Go back home
      </Link>
    </main>
  );
}
