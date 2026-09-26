"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlan } from "@/context/PlanContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = usePlan();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const linkClass = (href: string) =>
    `text-sm font-medium ${pathname === href ? "text-[#ccff00]" : "text-white/70 hover:text-white"}`;

  return (
    <header className="sticky top-0 z-50 bg-black/95 border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className=" flex font-display font-bold text-lg tracking-wide gap-2">
          <img src="/logo.png" alt="logo" className="h-7 w-7" />
          FITLOG
        </Link>

        <div className="hidden md:flex gap-8">
          <Link href="/" className={linkClass("/")}>Workouts</Link>
          <Link href="/my-plan" className={linkClass("/my-plan")}>My Plan</Link>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3 text-sm">
            <Link href="/my-plan" className="px-3 py-1 rounded-full bg-[#ccff00] text-black font-semibold">
              Plan {plan.length}
            </Link>
            <Link href="/my-plan" className="px-3 py-1 rounded-full border border-white/30">
              Saved {saved.length}
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          <Link href="/" className={linkClass("/")} onClick={() => setMenuOpen(false)}>
            Workouts
          </Link>
          <Link href="/my-plan" className={linkClass("/my-plan")} onClick={() => setMenuOpen(false)}>
            My Plan
          </Link>
        </div>
      )}
    </header>
  );
}