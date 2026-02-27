"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What exactly is Inertia?",
    a: "Inertia is a financial wellness tool that learns your money patterns and helps you make a few better decisions each day. It's not a budgeting app — it's a thinking partner for your finances.",
  },
  {
    q: "How is this different from other budget apps?",
    a: "Most apps focus on tracking and restricting. Inertia focuses on understanding and guiding. We don't ask you to categorize every purchase or stick to rigid budgets.",
  },
  {
    q: "Is my financial data safe?",
    a: "Absolutely. We use bank-level encryption and never sell your data. Your financial information is yours — we just help you make sense of it.",
  },
  {
    q: "When will Inertia launch?",
    a: "We're currently in private beta. Join the waitlist to get early access and help shape the product.",
  },
  {
    q: "Is Inertia free?",
    a: "We'll offer a generous free tier when we launch. Premium features will be available for a monthly subscription — pricing will be announced closer to launch.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-center text-3xl md:text-4xl lg:text-5xl text-forest mb-16">
          Things we&apos;d ask too
        </h2>
        <div className="divide-y divide-forest/10">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between py-6 text-left cursor-pointer"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="text-forest font-medium text-base md:text-lg pr-4">
                  {faq.q}
                </span>
                <span className="text-forest/40 text-2xl shrink-0 leading-none">
                  {openIndex === i ? "\u2212" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div className="pb-6 pr-12">
                  <p className="text-forest/60 text-sm md:text-base leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
