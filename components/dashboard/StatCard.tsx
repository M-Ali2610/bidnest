import { LucideIcon, TrendingUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
  trend?: string;
  trendPositive?: boolean;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  trend,
  trendPositive = true,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h3 className="mt-3 text-3xl font-bold text-[#010F28]">
            {value}
          </h3>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3356F0]/10">
          <Icon
            size={24}
            className="text-[#3356F0]"
          />
        </div>
      </div>

      {trend && (
        <div className="mt-5 flex items-center gap-2">
          <TrendingUp
            size={16}
            className={
              trendPositive
                ? "text-emerald-500"
                : "text-red-500"
            }
          />

          <span
            className={`text-sm font-medium ${
              trendPositive
                ? "text-emerald-600"
                : "text-red-600"
            }`}
          >
            {trend}
          </span>
        </div>
      )}
    </div>
  );
}