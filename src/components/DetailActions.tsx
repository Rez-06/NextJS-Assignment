"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { usePlan, Workout } from "@/context/PlanContext";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

export default function DetailActions({ workout }: { workout: Workout }) {
  const { addToPlan, addToSaved, isPlanFull } = usePlan();

  return (
    <div className="flex gap-3 mt-8">
      <button
        onClick={() => addToPlan(workout)}
        disabled={isPlanFull}
        className="bg-[#ccff00] text-black font-semibold px-5 py-3 rounded-full disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition"
      >
        <FontAwesomeIcon icon={faCalendar}/> Add to today&apos;s plan
      </button>
      <button
        onClick={() => addToSaved(workout)}
        className="border border-white/30 px-5 py-3 rounded-full hover:bg-white/5 transition"
      >
        <FontAwesomeIcon icon={faBookmark} style={{ color: "rgb(242, 242, 242)" }}/> Save for later
      </button>
    </div>
  );
}