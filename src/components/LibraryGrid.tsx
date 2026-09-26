import { Workout } from "@/context/PlanContext";
import WorkoutCard from "./WorkoutCard";

export default function LibraryGrid({ workouts }: { workouts: Workout[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {workouts.map((w) => (
        <WorkoutCard key={w.id} w={w} />
      ))}
    </div>
  );
}