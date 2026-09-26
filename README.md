# FitLog — Workout Library

A gym companion built with Next.js. Browse workouts, build today's plan, and track your progress.

## Description
FitLog lets users browse a library of 12 workouts, view detailed instructions and specs for each, add lifts to a daily plan (capped at 5), save workouts for later, and track live stats.

## Technologies Used
- Next.js (App Router, TypeScript)
- Tailwind CSS v4
- daisyUI
- react-toastify

## Features
1. Responsive workout library with live search and sort
2. Detailed workout pages with specs table and step-by-step instructions
3. "My Plan" tracker with live exercise/minute/calorie metrics and a 5-lift cap
4. Global plan/saved state via React Context (Provider + useContext)
5. Toast notifications for add/save/remove/mark-done actions
6. Custom 404 page and loading spinner, fully responsive on mobile/tablet/desktop