const reasons = [
  {
    number: "01",
    title: "It starts with understanding you",
    description:
      "Inertia learns your financial patterns before suggesting changes. No assumptions, no judgment.",
  },
  {
    number: "02",
    title: "It doesn't try to fix everything",
    description:
      "Instead of overwhelming you with data, it surfaces just a few things that matter each day.",
  },
  {
    number: "03",
    title: "It adapts as life changes",
    description:
      "Your finances aren't static. Inertia adjusts as your income, goals, and priorities shift.",
  },
];

export default function WhyItWorks() {
  return (
    <section className="py-16 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-center text-3xl md:text-4xl lg:text-5xl text-forest mb-16">
          Why Inertia works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reasons.map((r) => (
            <div key={r.number} className="text-center">
              <div className="w-16 h-16 rounded-full bg-sage flex items-center justify-center text-forest font-semibold text-sm mx-auto mb-6">
                {r.number}
              </div>
              <h3 className="text-forest font-semibold text-lg mb-3">
                {r.title}
              </h3>
              <p className="text-forest/60 text-sm leading-relaxed">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
