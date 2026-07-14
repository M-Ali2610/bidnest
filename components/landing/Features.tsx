import {
  FileText,
  Scale,
  BadgeCheck,
  FolderOpen,
  Bell,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Create RFQs",
    description:
      "Post detailed procurement requirements with specifications, quantities, deadlines, and supporting documents.",
  },
  {
    icon: Scale,
    title: "Compare Quotations",
    description:
      "Evaluate supplier quotations side by side based on price, delivery time, payment terms, and more.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Suppliers",
    description:
      "Connect with verified suppliers to improve trust and reduce procurement risk.",
  },
  {
    icon: FolderOpen,
    title: "Document Management",
    description:
      "Keep quotations, RFQs, specifications, and procurement records organized in one secure place.",
  },
  {
    icon: Bell,
    title: "Real-time Notifications",
    description:
      "Receive instant updates whenever suppliers submit quotations or RFQs require attention.",
  },
  {
    icon: BarChart3,
    title: "Procurement Insights",
    description:
      "Track procurement activity, supplier engagement, and quotation trends from your dashboard.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#3356F0]/10 px-4 py-2 text-xs font-semibold tracking-wide text-[#3356F0] sm:text-sm">
            FEATURES
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-[#010F28] sm:text-4xl lg:text-5xl">
            Everything you need to modernize procurement
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            BidNest simplifies the complete procurement lifecycle—from posting
            RFQs and collecting quotations to supplier management and purchasing
            decisions.
          </p>
        </div>

        {/* Feature Grid */}

        <div className="mt-12 grid gap-6 sm:mt-14 md:grid-cols-2 lg:gap-8 xl:mt-16 xl:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-[#F9FAFC] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#3356F0]/20 hover:shadow-xl sm:p-7 lg:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3356F0]/10 text-[#3356F0] transition-all duration-300 group-hover:bg-[#3356F0] group-hover:text-white sm:h-14 sm:w-14">
                  <Icon size={26} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-[#010F28] sm:mt-6 sm:text-xl">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 sm:mt-4 sm:text-base">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}