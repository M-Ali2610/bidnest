import { FileText } from "lucide-react";

import EmptyState from "./EmptyState";

export default function RecentRFQs() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-[#010F28]">
          Recent RFQs
        </h2>
      </div>

      <EmptyState
        icon={FileText}
        title="No RFQs yet"
        description="Create your first RFQ to start receiving supplier quotations."
        buttonText="Create RFQ"
        buttonHref="/dashboard/rfqs/new"
      />
    </section>
  );
}