import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const buyerFeatures = [
  "Unlimited RFQs",
  "Receive unlimited quotations",
  "Compare supplier bids",
  "Procurement dashboard",
  "Document management",
  "Email notifications",
];

const supplierFeatures = [
  "Access all active RFQs",
  "Unlimited quotation submissions",
  "Company profile",
  "Verified supplier badge",
  "Quotation history",
  "Priority email notifications",
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-[#F9FAFC] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#3356F0]/10 px-4 py-2 text-xs font-semibold tracking-wide text-[#3356F0] sm:text-sm">
            PRICING
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#010F28] sm:mt-6 sm:text-4xl lg:text-5xl">
            Simple and transparent pricing
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
            Buyers can source products free of charge, while suppliers pay one
            affordable monthly subscription to access verified business
            opportunities.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:mt-14 lg:mt-16 lg:grid-cols-2 lg:gap-8">
          {/* Buyer */}
          <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#3356F0] sm:text-sm">
                Buyer
              </p>

              <h3 className="mt-4 text-3xl font-bold text-[#010F28]">
                Free
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                Everything you need to manage procurement and compare supplier
                quotations.
              </p>
            </div>

            <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
              {buyerFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3356F0]/10">
                    <Check size={16} className="text-[#3356F0]" />
                  </div>

                  <span className="text-sm leading-6 text-slate-700 sm:text-base">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/register?role=buyer"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-[#010F28] transition hover:border-[#3356F0] hover:text-[#3356F0] sm:mt-10 sm:px-6 sm:text-base"
            >
              Register as Buyer
            </Link>
          </div>

          {/* Supplier */}
          <div className="relative flex h-full flex-col rounded-3xl border-2 border-[#3356F0] bg-white p-6 pt-16 shadow-xl sm:p-8 sm:pt-16 lg:p-10 lg:pt-10">
            <span className="absolute right-5 top-5 rounded-full bg-[#3356F0] px-3 py-1 text-xs font-semibold text-white sm:right-8 sm:top-8 sm:px-4 sm:text-sm">
              Most Popular
            </span>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#3356F0] sm:text-sm">
                Supplier
              </p>

              <div className="mt-4 flex flex-wrap items-end gap-x-2 gap-y-1">
                <span className="text-4xl font-bold leading-none text-[#010F28] sm:text-5xl">
                  PKR 4,000
                </span>

                <span className="pb-1 text-sm text-slate-500 sm:pb-2 sm:text-base">
                  / month
                </span>
              </div>

              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                Connect with verified buyers and respond to unlimited RFQs.
              </p>
            </div>

            <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
              {supplierFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3356F0]/10">
                    <Check size={16} className="text-[#3356F0]" />
                  </div>

                  <span className="text-sm leading-6 text-slate-700 sm:text-base">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/register?role=supplier"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#3356F0] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2948D8] sm:mt-10 sm:px-6 sm:text-base"
            >
              Become a Supplier
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}