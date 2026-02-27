const approaches = [
  {
    title: "Pattern-first, not budget-first",
    description:
      "We learn how you naturally spend before suggesting any changes.",
  },
  {
    title: "Decisions, not dashboards",
    description:
      "A few clear choices each day instead of overwhelming charts and graphs.",
  },
  {
    title: "Progress, not perfection",
    description:
      "Small, consistent steps that compound over time — not rigid rules that break.",
  },
];

export default function DifferentApproach() {
  return (
    <section className="py-16 md:py-28 px-6 md:px-12 lg:px-20 bg-sage/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-center text-3xl md:text-4xl lg:text-5xl text-forest mb-16">
          A different approach to money
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approaches.map((a, i) => (
            <div
              key={a.title}
              className="bg-white rounded-2xl p-8 border border-forest/5"
            >
              <span className="text-forest/30 text-sm font-mono">
                0{i + 1}
              </span>
              <h3 className="text-forest font-semibold text-lg mt-3 mb-3">
                {a.title}
              </h3>
              <p className="text-forest/60 text-sm leading-relaxed">
                {a.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
