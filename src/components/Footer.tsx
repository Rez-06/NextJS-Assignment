import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/10 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-white/50">
        <span className="font-display font-bold text-white"><img src="/logo.png" alt="logo" />FITLOG</span>
        <span>© 2026 FitLog — Workout Library. Train hard, log honest.</span>
      </div>
    </footer>
  );
}