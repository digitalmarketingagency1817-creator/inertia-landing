export default function Footer() {
  return (
    <footer className="relative mt-16">
      {/* Wave / hill divider */}
      <div className="relative h-24 md:h-40">
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 160L0 100C180 40 360 10 540 20C720 30 900 80 1080 90C1260 100 1380 70 1440 60L1440 160Z"
            fill="#1A3A2A"
          />
        </svg>
      </div>

      <div className="bg-forest text-white px-6 md:px-12 lg:px-20 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Priorities prompt */}
          <div className="text-center mb-16">
            <h3 className="font-display text-2xl md:text-3xl mb-8">
              What feels most important to you right now?
            </h3>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                "Spending less",
                "Saving more",
                "Reducing stress",
                "Building a plan",
              ].map((item) => (
                <span
                  key={item}
                  className="px-5 py-2.5 rounded-full border border-white/20 text-white/80 text-sm hover:bg-white/10 transition-colors cursor-pointer"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="text-white/40 text-sm">
              Step 1: Your priorities are set
            </p>
          </div>

          {/* Footer bottom */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-white font-semibold text-lg tracking-tight">
              inertia
            </span>
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} Inertia. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
