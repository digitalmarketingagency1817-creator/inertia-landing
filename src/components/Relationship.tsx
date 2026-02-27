export default function Relationship() {
  return (
    <section className="relative py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-forest text-white overflow-hidden">
      {/* Decorative wavy line — top-left */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -top-4 -left-8 w-[320px] md:w-[480px] h-auto opacity-[0.12]"
        viewBox="0 0 480 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-20 120C30 60 90 140 150 100S240 20 310 80S390 150 460 90"
          stroke="#A3C9B0"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M-10 160C50 110 100 170 170 130S260 60 330 110S410 170 490 120"
          stroke="#A3C9B0"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Decorative wavy line — bottom-right */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-4 -right-8 w-[320px] md:w-[480px] h-auto opacity-[0.12]"
        viewBox="0 0 480 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M500 80C440 140 380 60 310 100S220 180 150 120S60 50 -10 110"
          stroke="#A3C9B0"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M490 40C430 90 370 30 300 70S210 140 140 90S50 30 -20 80"
          stroke="#A3C9B0"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] mb-8">
          What&apos;s your relationship with money?
        </h2>
        <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Most tools ask you to track every dollar. Inertia starts with a
          different question — one that helps you understand your habits before
          trying to change them.
        </p>
      </div>
    </section>
  );
}
