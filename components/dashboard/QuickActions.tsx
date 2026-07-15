import {
  FilePlus2,
  Search,
  BarChart3,
} from "lucide-react";

import QuickActionCard from "./QuickActionCard";

export default function QuickActions() {
  return (
    <section className="mt-10">
      <h2 className="mb-6 text-xl font-semibold text-[#010F28]">
        Quick Actions
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <QuickActionCard
          title="Create RFQ"
          description="Post a new procurement request."
          href="/dashboard/rfqs/new"
          icon={FilePlus2}
        />

        <QuickActionCard
          title="Browse Suppliers"
          description="Explore verified suppliers."
          href="/dashboard/suppliers"
          icon={Search}
        />

        <QuickActionCard
          title="Procurement Reports"
          description="View purchasing insights."
          href="/dashboard/reports"
          icon={BarChart3}
        />
      </div>
    </section>
  );
}