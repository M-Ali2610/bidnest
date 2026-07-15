import {
  BarChart3,
  FileText,
  ShoppingBag,
  Users,
} from "lucide-react";

import QuickActions from "@/components/dashboard/QuickActions";
import RecentQuotations from "@/components/dashboard/RecentQuotations";
import RecentRFQs from "@/components/dashboard/RecentRFQs";
import SectionHeader from "@/components/dashboard/SectionHeader";
import StatCard from "@/components/dashboard/StatCard";

export default function DashboardPage() {
  return (
    <>
      <SectionHeader
        title="Dashboard Overview"
        description="Monitor procurement activity and supplier engagement."
      />

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Open RFQs"
          value={0}
          icon={FileText}
        />

        <StatCard
          title="Quotations Received"
          value={0}
          icon={BarChart3}
        />

        <StatCard
          title="Active Suppliers"
          value={0}
          icon={Users}
        />

        <StatCard
          title="Awarded Orders"
          value={0}
          icon={ShoppingBag}
        />
      </div>

      <QuickActions />

      <div className="mt-10 grid gap-8 xl:grid-cols-2">
        <RecentRFQs />

        <RecentQuotations />
      </div>
    </>
  );
}