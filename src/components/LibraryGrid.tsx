"use client";
import { useState } from "react";
import { Workout } from "@/context/PlanContext";
import WorkoutCard from "./WorkoutCard";

export default function LibraryGrid({ workouts }: { workouts: Workout[] }) {
  const [query, setQuery] = useState("");

  const filtered = workouts.filter(
    (w) =>
      w.name.toLowerCase().includes(query.toLowerCase()) ||
      w.muscleGroups.some((m) => m.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or muscle group…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full max-w-xs mb-8 bg-neutral-900 border border-white/10 rounded-full px-4 py-2 text-sm outline-none focus:border-[#ccff00]"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((w) => (
          <WorkoutCard key={w.id} w={w} />
        ))}
      </div>
    </div>
  );
}