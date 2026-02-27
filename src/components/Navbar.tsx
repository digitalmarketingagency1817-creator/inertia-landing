"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-forest font-semibold text-lg tracking-tight"
        >
          inertia
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#how"
            className="px-5 py-2.5 rounded-full border border-forest/30 text-sm font-medium hover:bg-forest/5 transition-colors"
          >
            How inertia works
          </a>
          <a
            href="#habits"
            className="px-5 py-2.5 rounded-full border border-forest/30 text-sm font-medium hover:bg-forest/5 transition-colors"
          >
            Learn about your habits
          </a>
          <a
            href="#waitlist"
            className="px-5 py-2.5 rounded-full bg-forest text-white text-sm font-medium hover:bg-forest-light transition-colors"
          >
            Join our waitlist&nbsp;&nbsp;&rarr;
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-forest transition-transform ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-forest transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-forest transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-forest/10 px-6 pb-6 flex flex-col gap-3">
          <a
            href="#how"
            onClick={() => setOpen(false)}
            className="px-5 py-2.5 rounded-full border border-forest/30 text-sm font-medium text-center"
          >
            How inertia works
          </a>
          <a
            href="#habits"
            onClick={() => setOpen(false)}
            className="px-5 py-2.5 rounded-full border border-forest/30 text-sm font-medium text-center"
          >
            Learn about your habits
          </a>
          <a
            href="#waitlist"
            onClick={() => setOpen(false)}
            className="px-5 py-2.5 rounded-full bg-forest text-white text-sm font-medium text-center"
          >
            Join our waitlist &rarr;
          </a>
        </div>
      )}
    </nav>
  );
}
