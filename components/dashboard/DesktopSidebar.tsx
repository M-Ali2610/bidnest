import Image from "next/image";
import Link from "next/link";
import {
  BarChart3,
  Building2,
  FileText,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react";

const navigation = [
  {
    name: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "RFQs",
    href: "/dashboard/rfqs",
    icon: FileText,
  },
  {
    name: "Quotations",
    href: "/dashboard/quotations",
    icon: BarChart3,
  },
  {
    name: "Suppliers",
    href: "/dashboard/suppliers",
    icon: Users,
  },
  {
    name: "Company Profile",
    href: "/dashboard/profile",
    icon: Building2,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden h-screen w-72 shrink-0 flex-col bg-[#010F28] lg:flex">
      <div className="flex h-20 items-center border-b border-white/10 px-6">
        <Link href="/dashboard" aria-label="BidNest dashboard">
          <Image
            src="/logo-white.png"
            alt="BidNest"
            width={210}
            height={70}
            priority
            className="h-45 w-auto object-contain"
          />
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-6">
        <p className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Workspace
        </p>

        <div className="mt-3 space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <Icon size={19} />
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="border-t border-white/10 p-4">
        <div className="rounded-xl bg-white/5 p-4">
          <p className="text-sm font-semibold text-white">Need assistance?</p>

          <p className="mt-1 text-xs leading-5 text-slate-400">
            Contact BidNest support for help with your account.
          </p>

          <Link
            href="/contact"
            className="mt-3 inline-flex text-sm font-semibold text-[#6F8BFF] hover:text-white"
          >
            Contact support
          </Link>
        </div>
      </div>
    </aside>
  );
}