const features = [
  {
    title: "Understands your patterns",
    description:
      "Inertia watches how you actually spend — not just what you spend. It picks up on routines, moods, and moments that drive your money decisions — and gets smarter over time.",
    metric: "80",
    metricLabel: "pattern accuracy",
    card: {
      title: "Weekly spending",
      subtitle: "Blackheart Brewery",
      amount: "$12.50",
      tag: "Routine purchase",
    },
  },
  {
    title: "Highlights what matters",
    description:
      "Surfaces a small set of money decisions that actually matter today. No endless dashboards. Just what you need to see, right now.",
    metric: "3",
    metricLabel: "daily insights",
    card: {
      title: "Today\u2019s focus",
      subtitle: "Subscription review",
      amount: "$47/mo",
      tag: "Could save $24",
    },
  },
  {
    title: "Helps you follow through",
    description:
      "Once you decide, Inertia makes it easy to follow through — with gentle nudges, not rigid rules.",
    metric: "2x",
    metricLabel: "follow-through rate",
    card: {
      title: "Goal progress",
      subtitle: "Emergency fund",
      amount: "$2,400",
      tag: "On track",
    },
  },
];

export default function Features() {
  return (
    <section id="how" className="py-16 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-24 md:space-y-36">
        {features.map((feature, i) => {
          const reversed = i % 2 === 1;
          return (
            <div
              key={feature.title}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
            >
              {/* Text */}
              <div className={reversed ? "md:order-2" : ""}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-16 h-16 rounded-full bg-sage flex items-center justify-center text-forest font-semibold text-xl">
                    {feature.metric}
                  </span>
                  <span className="text-forest/50 text-sm">
                    {feature.metricLabel}
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-forest mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-forest/60 text-base md:text-lg leading-relaxed max-w-md">
                  {feature.description}
                </p>
              </div>

              {/* Mock card */}
              <div className={reversed ? "md:order-1" : ""}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-forest/5 max-w-sm mx-auto">
                  <p className="text-xs text-forest/40 uppercase tracking-wider mb-2">
                    {feature.card.title}
                  </p>
                  <p className="text-forest font-semibold text-lg mb-1">
                    {feature.card.subtitle}
                  </p>
                  <p className="text-forest text-2xl font-display mb-3">
                    {feature.card.amount}
                  </p>
                  <span className="inline-block px-3 py-1 rounded-full bg-sage text-forest text-xs font-medium">
                    {feature.card.tag}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
