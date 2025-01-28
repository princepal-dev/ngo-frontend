"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="flex justify-center items-center flex-col py-60 gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>

      <button
        className="inline-block bg-accent-500 border border-black px-6 py-3 text-lg"
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
}
