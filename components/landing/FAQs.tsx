"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is BidNest free for buyers?",
    answer:
      "Yes. Buyers can register, create unlimited RFQs, receive quotations, compare suppliers, and manage procurement at no cost.",
  },
  {
    question: "Who can register as a supplier?",
    answer:
      "Any legitimate business supplying products or services to other businesses can register. All supplier accounts are reviewed before approval.",
  },
  {
    question: "Are suppliers verified?",
    answer:
      "Yes. BidNest verifies supplier information before granting access to the marketplace, helping buyers connect with trusted businesses.",
  },
  {
    question: "How do suppliers receive RFQs?",
    answer:
      "Approved suppliers can browse active RFQs relevant to their products and services and submit competitive quotations directly through the platform.",
  },
  {
    question: "Can buyers compare multiple quotations?",
    answer:
      "Absolutely. BidNest allows buyers to compare quotations based on pricing, delivery time, payment terms, and other procurement criteria in one centralized dashboard.",
  },
  {
    question: "What industries does BidNest support?",
    answer:
      "BidNest is designed for manufacturers, exporters, importers, distributors, wholesalers, logistics providers, packaging companies, industrial suppliers, and many other B2B industries.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faqs"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-[#3356F0]/10 px-4 py-2 text-sm font-semibold text-[#3356F0]">
            FAQs
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#010F28]">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Everything you need to know before getting started with BidNest.
          </p>

        </div>

        <div className="mt-14 space-y-4">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-[#F9FAFC]"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between px-7 py-6 text-left"
                >
                  <span className="text-lg font-semibold text-[#010F28]">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={22}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#3356F0]" : "text-slate-500"
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-7 pb-6 leading-8 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}