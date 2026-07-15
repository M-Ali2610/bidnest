import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

interface QuickActionCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export default function QuickActionCard({
  title,
  description,
  href,
  icon: Icon,
}: QuickActionCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#3356F0]/30 hover:shadow-lg"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3356F0]/10 text-[#3356F0] transition group-hover:bg-[#3356F0] group-hover:text-white">
        <Icon size={24} />
      </div>

      <h3 className="mt-5 text-lg font-semibold text-[#010F28]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {description}
      </p>

      <div className="mt-6 flex items-center gap-2 font-semibold text-[#3356F0]">
        <span>Open</span>

        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}