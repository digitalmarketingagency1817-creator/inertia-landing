const cards = [
  { label: "Spending pulse", value: "Steady" },
  { label: "This week", value: "$340 left" },
  { label: "Next decision", value: "Tomorrow" },
];

export default function Steadiness() {
  return (
    <section className="py-16 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-center text-3xl md:text-5xl lg:text-6xl text-forest mb-16 leading-tight">
          Less reacting.
          <br />
          More steadiness.
        </h2>

        {/* Mock UI cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {cards.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl p-6 border border-forest/5 text-center"
            >
              <p className="text-xs text-forest/40 uppercase tracking-wider mb-2">
                {item.label}
              </p>
              <p className="text-forest font-display text-2xl">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
