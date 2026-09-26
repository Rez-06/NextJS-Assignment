export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-8">
      <section className="bg-neutral-900 rounded-2xl px-8 py-14 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <p className="text-[#ccff00] text-xs font-bold tracking-widest uppercase mb-3">Workout Library</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold uppercase leading-tight">
            Train With Intent. Log Every Set.
          </h1>
          <p className="text-white/60 mt-4 max-w-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          
           <a href="#library"
            className="inline-block mt-6 bg-[#ccff00] text-black font-semibold px-5 py-3 rounded-full hover:opacity-90 transition"
          >
            Browse Workouts →
          </a>
        </div>
        <div className="flex-1">
          <img src="/banner.png" alt="Workout" className="rounded-2xl w-full object-cover" />
        </div>
      </section>
    </div>
  );
}