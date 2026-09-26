import { notFound } from "next/navigation";
import DetailActions from "@/components/DetailActions";
import { Workout } from "@/context/PlanContext";

export default async function WorkoutDetail({params,}: {params: Promise<{ id: string }>;}) {
  const { id } = await params;
  
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog", { cache: "no-store" });
  const workouts: Workout[] = await res.json();
  const workout = workouts.find((w) => w.id === Number(id));

  if (!workout) return notFound();

  const specs: [string, string | number][] = [
    ["EQUIPMENT", workout.equipment],
    ["DIFFICULTY", workout.difficulty],
    ["SETS", workout.sets],
    ["REPS", workout.reps],
    ["DURATION", `${workout.duration} min`],
    ["CALORIES", `${workout.caloriesBurned} kcal`],
    ["RATING", workout.rating],
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
      <img src={workout.image} alt={workout.name} className="rounded-xl w-full object-cover" />
      <div>
        <h1 className="font-display text-3xl font-bold uppercase">{workout.name}</h1>
        <p className="text-white/60 mt-2">{workout.description}</p>
        <div className="flex gap-2 mt-4">
          {workout.muscleGroups.map((m) => (
            <span key={m} className="bg-[#ccff00] text-black text-xs font-semibold px-2 py-1 rounded-full">
              {m}
            </span>
          ))}
        </div>
        <div className="mt-6 divide-y divide-white/10 border border-white/10 rounded-lg">
          {specs.map(([label, value]) => (
            <div key={label} className="flex justify-between px-4 py-2 text-sm">
              <span className="text-white/50">{label}</span>
              <span className="font-medium">{value}</span>
            </div>
          ))}
        </div>
        <h3 className="font-display font-semibold mt-8 mb-2">INSTRUCTIONS</h3>
        <ol className="list-decimal list-inside space-y-1 text-white/70 text-sm">
          {workout.instructions.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
        <DetailActions workout={workout} />
      </div>
    </div>
  );
}