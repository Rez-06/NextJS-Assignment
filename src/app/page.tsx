import Hero from "@/components/Hero";
import LibraryGrid from "@/components/LibraryGrid";
import { Workout } from "@/context/PlanContext";

export default async function Home() {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog", { cache: "no-store" });
  const workouts: Workout[] = await res.json();

  return (
    <>
      <Hero />
      <section id="library" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="font-display text-3xl font-bold">THE LIBRARY</h2>
        <p className="text-white/50 mb-8">Twelve lifts covering every major muscle group.</p>
        <LibraryGrid workouts={workouts} />
      </section>
    </>
  );
}