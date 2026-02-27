export default function Clarity() {
  return (
    <section className="py-16 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.15] text-forest max-w-3xl mx-auto">
          Inertia brings clarity to{" "}
          <span className="italic">money decisions.</span>
        </h2>
        {/* Decorative curved line */}
        <svg
          className="mx-auto mt-12 w-64 h-16 text-forest/20"
          viewBox="0 0 256 64"
          fill="none"
        >
          <path
            d="M0 48 C40 48, 60 16, 128 16 C196 16, 216 48, 256 48"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </section>
  );
}
