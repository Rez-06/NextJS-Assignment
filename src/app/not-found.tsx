import Link from "next/link";
export default function NotFound() {
  return (
    <div className="text-center py-32">
      <h1 className="font-display text-4xl font-bold">404</h1>
      <p className="text-white/50 mt-2">This page doesn&apos;t exist.</p>
      <Link href="/" className="inline-block mt-6 bg-[#ccff00] text-black px-4 py-2 rounded-full font-semibold">
        Back home
      </Link>
    </div>
  );
}