"use client";
import { useState } from "react";
import { usePlan } from "@/context/PlanContext";
import PlanCard from "@/components/PlanCard";
import Link from "next/link";

type SortKey = "duration" | "caloriesBurned" | "rating";

export default function MyPlan() {
  const { plan, saved, markDone, removeFromPlan, removeFromSaved } = usePlan();
  const [tab, setTab] = useState<"today" | "saved">("today");
  const [sortBy, setSortBy] = useState<SortKey>("duration");
  const [loading, setLoading] = useState(true);


  useState(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  });

  const list = tab === "today" ? plan : saved;
  const sorted = [...list].sort((a, b) => b[sortBy] - a[sortBy]);

  const minutes = plan.reduce((s, w) => s + w.duration, 0);
  const calories = plan.reduce((s, w) => s + w.caloriesBurned, 0);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="font-display text-3xl font-bold">MY PLAN</h1>
      <p className="text-white/50">Cap of five lifts for today. Finish them, then load more.</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
        {[
          ["Exercises", plan.length],
          ["Minutes", minutes],
          ["Calories", calories],
        ].map(([label, val]) => (
          <div key={label as string} className="bg-neutral-900 border border-white/10 rounded-xl p-4">
            <p className="text-white/50 text-sm">{label}</p>
            <p className="text-2xl font-bold text-[#ccff00]">{val}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-1 bg-neutral-900 rounded-full p-1 border border-white/10">
          <button
            onClick={() => setTab("today")}
            className={`px-4 py-1.5 rounded-full text-sm ${tab === "today" ? "bg-white/10 font-semibold" : "text-white/60"}`}
          >
            Today's Plan
          </button>
          <button
            onClick={() => setTab("saved")}
            className={`px-4 py-1.5 rounded-full text-sm ${tab === "saved" ? "bg-white/10 font-semibold" : "text-white/60"}`}
          >
            Saved
          </button>
        </div>

        <div className="flex items-center gap-2 text-sm text-white/50">
          <span>Sort By</span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortKey)}
              className="appearance-none bg-neutral-900 border border-white/10 rounded-md pl-3 pr-8 py-1.5 text-sm text-white outline-none"
            >
              <option value="duration">Duration</option>
              <option value="caloriesBurned">Calories</option>
              <option value="rating">Rating</option>
            </select>
            <svg
              className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>

      {loading ? (
        <p className="text-center text-white/50 py-20">Loading workouts…</p>
      ) : sorted.length === 0 ? (
        <div className="text-center py-20 border border-white/10 rounded-xl">
          <h3 className="font-display font-bold text-xl">NOTHING HERE YET</h3>
          <p className="text-white/50 mt-2">Browse the library and add a lift to get today moving.</p>
          <Link href="/" className="inline-block mt-4 bg-[#ccff00] text-black px-4 py-2 rounded-full font-semibold">
            Go to workouts
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {sorted.map((w) => (
            <PlanCard
              key={w.id}
              workout={w}
              onMarkDone={tab === "today" ? () => markDone(w.id) : undefined}
              onRemove={() => (tab === "today" ? removeFromPlan(w.id) : removeFromSaved(w.id))}
            />
          ))}
        </div>
      )}
    </div>
  );
}