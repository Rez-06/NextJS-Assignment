import Link from "next/link";
import { Workout } from "@/context/PlanContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faFire, faStar } from "@fortawesome/free-solid-svg-icons";

export default function WorkoutCard({ w }: { w: Workout }) {
  return (
    <Link
      href={`/workout/${w.id}`}
      className="block rounded-xl bg-neutral-900 hover:bg-neutral-800 transition overflow-hidden border border-white/5"
    >
      <img
        src={w.image}
        alt={w.name}
        className="h-40 w-full object-cover"
      />

      <div className="p-4">
        <div className="flex gap-2 mb-2">
          {w.muscleGroups.map((m) => (
            <span
              key={m}
              className="text-[10px] font-bold bg-[#ccff00] text-black px-2 py-0.5 rounded-full"
            >
              {m.toUpperCase()}
            </span>
          ))}
        </div>

        <h3 className="font-display font-bold uppercase">
          {w.name}
        </h3>

        <p className="text-white/50 text-xs mt-1">
          {w.equipment}
        </p>

        <div className="flex items-center gap-4 text-xs text-white/60 mt-3 whitespace-nowrap">
          <span className="flex items-center">
            <FontAwesomeIcon
              icon={faClock}
              className="w-3 h-3 mr-1 text-[#f2f2f2]"
            />
            {w.duration} min
          </span>

          <span className="flex items-center">
            <FontAwesomeIcon
              icon={faFire}
              className="w-3 h-3 mr-1 text-[#f2f2f2]"
            />
            {w.caloriesBurned} kcal
          </span>

          <span className="flex items-center">
            <FontAwesomeIcon
              icon={faStar}
              className="w-3 h-3 mr-1 text-[#f2f2f2]"
            />
            {w.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}