import Image from "next/image";

const pills = ["needs", "goals", "plans", "life"];

export default function ValueProp() {
  return (
    <section id="habits" className="py-16 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Top: heading + image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-20">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-forest">
            We help you make a few money decisions each day
          </h2>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&auto=format&fit=crop"
              alt="People making thoughtful decisions together"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Bottom: habits + pills */}
        <div className="text-center">
          <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-forest mb-8">
            that adapt to your habits
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {pills.map((pill) => (
              <span
                key={pill}
                className="px-6 py-2.5 rounded-full border border-forest/25 text-forest text-sm md:text-base font-medium"
              >
                {pill}
              </span>
            ))}
          </div>
          <p className="text-forest/60 text-sm md:text-base max-w-md mx-auto">
            Why? Because you can&apos;t fit your life into rigid categories.
          </p>
        </div>
      </div>
    </section>
  );
}
