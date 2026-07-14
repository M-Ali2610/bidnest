import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  FileText,
  PackageSearch,
  Users,
} from "lucide-react";

const benefits = [
  "Verified suppliers",
  "Transparent quotations",
  "Centralized procurement",
];

const rfqs = [
  {
    title: "Industrial Packaging Materials",
    category: "Packaging",
    quotations: 12,
    status: "Open",
  },
  {
    title: "Stainless Steel Sheets",
    category: "Raw Materials",
    quotations: 8,
    status: "Open",
  },
  {
    title: "Freight Services to Germany",
    category: "Logistics",
    quotations: 6,
    status: "Closing Soon",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F9FAFC]">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -right-40 top-10 h-72 w-72 rounded-full bg-[#3356F0]/10 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute -left-40 bottom-0 h-64 w-64 rounded-full bg-[#010F28]/5 blur-3xl sm:h-80 sm:w-80" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-16 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-24">
        {/* Left content */}
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-[#3356F0]/20 bg-[#3356F0]/5 px-3 py-2 text-xs font-medium text-[#3356F0] sm:mb-6 sm:px-4 sm:text-sm">
            <BadgeCheck size={16} className="shrink-0" />
            <span>Built for modern procurement teams</span>
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#010F28] sm:text-5xl lg:text-6xl xl:text-7xl">
            Simplify procurement.
            <span className="block text-[#3356F0]">
              Compare better bids.
            </span>
            Buy with confidence.
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0">
            BidNest connects businesses with verified suppliers through a
            streamlined RFQ process. Post requirements, receive competitive
            quotations, and manage procurement from one platform.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/register?role=buyer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#3356F0] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#2948D8] hover:shadow-md sm:w-auto"
            >
              Post an RFQ
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/register?role=supplier"
              className="inline-flex w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-[#010F28] transition hover:border-[#3356F0] hover:text-[#3356F0] sm:w-auto"
            >
              Join as Supplier
            </Link>
          </div>

          <div className="mt-7 flex flex-col items-center gap-3 text-sm text-slate-600 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-5 lg:justify-start">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2">
                <CheckCircle2
                  size={17}
                  className="shrink-0 text-[#3356F0]"
                />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard preview */}
        <div className="relative mx-auto w-full max-w-2xl lg:mx-0">
          <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-200/70 sm:p-3">
            <div className="overflow-hidden rounded-xl border border-slate-200">
              {/* Dashboard header */}
              <div className="flex items-center justify-between gap-4 bg-[#010F28] px-4 py-4 sm:px-5">
                <div className="min-w-0">
                  <p className="text-xs text-slate-400">
                    Procurement overview
                  </p>
                  <h2 className="mt-1 truncate text-base font-semibold text-white sm:text-lg">
                    Buyer Dashboard
                  </h2>
                </div>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <BarChart3 size={19} className="text-white" />
                </div>
              </div>

              <div className="bg-[#F9FAFC] p-3 sm:p-5">
                {/* Stats */}
                <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-3">
                  <StatCard
                    icon={<FileText size={18} />}
                    value="24"
                    label="Open RFQs"
                  />
                  <StatCard
                    icon={<Users size={18} />}
                    value="86"
                    label="Suppliers"
                  />
                  <StatCard
                    icon={<PackageSearch size={18} />}
                    value="147"
                    label="Quotations"
                  />
                </div>

                {/* RFQ list */}
                <div className="mt-4 rounded-xl border border-slate-200 bg-white sm:mt-5">
                  <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-3 py-3 sm:px-4">
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-[#010F28]">
                        Recent RFQs
                      </h3>
                      <p className="truncate text-xs text-slate-500">
                        Latest procurement requirements
                      </p>
                    </div>

                    <span className="shrink-0 text-xs font-semibold text-[#3356F0]">
                      View all
                    </span>
                  </div>

                  <div className="divide-y divide-slate-100">
                    {rfqs.map((rfq) => (
                      <div
                        key={rfq.title}
                        className="flex flex-col gap-3 px-3 py-4 min-[480px]:flex-row min-[480px]:items-center min-[480px]:justify-between sm:px-4"
                      >
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-[#010F28]">
                            {rfq.title}
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            {rfq.category} · {rfq.quotations} quotations
                          </p>
                        </div>

                        <span
                          className={`w-fit shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${
                            rfq.status === "Open"
                              ? "bg-emerald-50 text-emerald-700"
                              : "bg-amber-50 text-amber-700"
                          }`}
                        >
                          {rfq.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-6 -left-3 hidden rounded-xl border border-slate-200 bg-white p-4 shadow-lg md:block lg:-left-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#3356F0]/10 text-[#3356F0]">
                <BadgeCheck size={20} />
              </div>

              <div>
                <p className="text-sm font-semibold text-[#010F28]">
                  Supplier verified
                </p>
                <p className="text-xs text-slate-500">
                  Company profile approved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#3356F0]/10 text-[#3356F0]">
        {icon}
      </div>

      <p className="mt-3 text-xl font-bold text-[#010F28]">{value}</p>
      <p className="mt-1 text-xs text-slate-500">{label}</p>
    </div>
  );
}