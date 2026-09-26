import Link from "next/link";
import { Workout } from "@/context/PlanContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faFire, faStar, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

interface PlanCardProps {
  workout: Workout;
  onMarkDone?: () => void;
  onRemove: () => void;
}

export default function PlanCard({ workout, onMarkDone, onRemove }: PlanCardProps) {
  return (
    <div className="flex items-center gap-4 bg-neutral-900 border border-white/10 rounded-xl p-4">
      <img src={workout.image} alt={workout.name} className="w-16 h-16 rounded-lg object-cover" />
      <div className="flex-1">
        <h4 className="font-display font-bold uppercase">{workout.name}</h4>
        <p className="text-white/50 text-xs">{workout.equipment}</p>
        <div className="flex items-center gap-4 text-xs text-white/60 mt-1">
          <span className="flex items-center">
            <FontAwesomeIcon icon={faClock} className="w-3 h-3 mr-1 text-[#f2f2f2]" />
            {workout.duration} min
          </span>
          <span className="flex items-center">
            <FontAwesomeIcon icon={faFire} className="w-3 h-3 mr-1 text-[#f2f2f2]" />
            {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center">
            <FontAwesomeIcon icon={faStar} className="w-3 h-3 mr-1 text-[#f2f2f2]" />
            {workout.rating}
          </span>
        </div>
      </div>
      <div className="flex gap-2">
        <Link href={`/workout/${workout.id}`} className="text-xs border border-white/30 px-3 py-2 rounded-full hover:bg-white/5">
          View Details
        </Link>
        {onMarkDone && (
          <button onClick={onMarkDone} className="text-xs bg-[#ccff00] text-black font-semibold px-3 py-2 rounded-full flex items-center gap-1">
            <FontAwesomeIcon icon={faCheck} className="w-3 h-3" />
            Mark as Done
          </button>
        )}
        <button onClick={onRemove} className="text-xs px-3 py-2 rounded-full hover:bg-white/10">
          <FontAwesomeIcon icon={faXmark} className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}