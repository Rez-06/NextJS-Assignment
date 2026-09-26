"use client";
import React from 'react';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlan } from "@/context/PlanContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = usePlan();

 const linkClass = (href: string) =>
  `text-sm font-medium px-4 py-2 rounded-full ${
    pathname === href
      ? "text-[#ccff00] bg-white/10"
      : "text-white/70 hover:text-white"
  }`;

  return (
    <header className="sticky top-0 z-50 bg-black/95 border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex font-display font-bold text-lg tracking-wide"><img src="/logo.png" alt="logo" />FITLOG</Link>
        <div className="hidden md:flex gap-8">
          <Link href="/" className={linkClass("/")}>Workouts</Link>
          <Link href="/my-plan" className={linkClass("/my-plan")}>My Plan</Link>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Link href="/my-plan" className="px-3 py-1 rounded-full bg-[#ccff00] text-black font-semibold">
            Plan {plan.length}
          </Link>
          <Link href="/my-plan" className="px-3 py-1 rounded-full border border-white/30">
            Saved {saved.length}
          </Link>
        </div>
      </nav>
    </header>
  );
}