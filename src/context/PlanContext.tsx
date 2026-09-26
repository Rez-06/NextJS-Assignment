"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { toast } from "react-toastify";


export interface Workout {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}

interface PlanContextType {
  plan: Workout[];
  saved: Workout[];
  addToPlan: (w: Workout) => void;
  addToSaved: (w: Workout) => void;
  markDone: (id: number) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  isPlanFull: boolean;
}

const PlanContext = createContext<PlanContextType | null>(null);

export function PlanProvider({children} : {children : ReactNode}){
    const [plan , setPlan]=useState<Workout[]>([]);
    const [saved,setSaved]=useState<Workout[]>([]);

    const addToPlan = (w:Workout) =>{
        if (plan.length >=5 ) return toast.error("Plan is full (5 lifts max)");
        if(plan.some((s)=>s.id==w.id))return toast.info("Already in today's plan");
        setPlan([...plan,w]);
        toast.success("Added to today's plan");
    };

    const addToSaved =(w:Workout)=>{
        if(saved.some((s)=>s.id==w.id))return toast.info("Already saved");
        setSaved([...saved,w]);
        toast.success("Saved for later");
    };


    const markDone = (id: number) => {
        setPlan(plan.filter((w)=>w.id != id));
        toast.success("Marked as done");

    }
    const removeFromPlan = (id:number)=>{
        setPlan(plan.filter((w)=> w.id !=id));
        toast.info("Removed from plan");

    }

    const removeFromSaved = (id:number)=>{
        setSaved(plan.filter((w)=> w.id !=id));
        toast.info("Removed from saved");
        
    };

    return (
        <PlanContext.Provider
         value={{ plan, saved, addToPlan, addToSaved, markDone, removeFromPlan, removeFromSaved, isPlanFull: plan.length >= 5 }}
        >
        {children}
        </PlanContext.Provider>
    )
}

export function usePlan() {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error("usePlan must be used within PlanProvider");
  return ctx;
}