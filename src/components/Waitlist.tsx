"use client";

export default function Waitlist() {
  return (
    <section id="waitlist" className="py-16 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-forest mb-4">
          Join the waitlist
        </h2>
        <p className="text-forest/60 text-base md:text-lg mb-10">
          Be the first to know when Inertia launches.
        </p>
        <form
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-6 py-3.5 rounded-full border border-forest/20 bg-white text-forest placeholder:text-forest/40 focus:outline-none focus:border-forest/50 transition-colors"
            required
          />
          <button
            type="submit"
            className="px-8 py-3.5 rounded-full bg-forest text-white font-medium hover:bg-forest-light transition-colors whitespace-nowrap cursor-pointer"
          >
            Join waitlist
          </button>
        </form>
        <p className="text-forest/40 text-xs mt-4">
          No spam. Just updates on our launch.
        </p>
      </div>
    </section>
  );
}
