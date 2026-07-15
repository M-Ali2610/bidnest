import { BarChart3 } from "lucide-react";

import EmptyState from "./EmptyState";

export default function RecentQuotations() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-[#010F28]">
          Recent Quotations
        </h2>
      </div>

      <EmptyState
        icon={BarChart3}
        title="No quotations received"
        description="Supplier quotations will appear here after you publish an RFQ."
        buttonText="View RFQs"
        buttonHref="/dashboard/rfqs"
      />
    </section>
  );
}