import Image from "next/image";

export default function Statement() {
  return (
    <section className="py-16 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-forest">
            Your money doesn&apos;t need perfection, it needs direction.
          </h2>
        </div>
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80&auto=format&fit=crop"
            alt="Person enjoying life with financial confidence"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
