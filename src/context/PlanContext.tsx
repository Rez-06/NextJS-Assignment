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