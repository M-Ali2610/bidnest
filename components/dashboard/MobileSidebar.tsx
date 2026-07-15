"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BarChart3,
  Building2,
  FileText,
  LayoutDashboard,
  Settings,
  Users,
  X,
} from "lucide-react";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

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

export default function MobileSidebar({
  isOpen,
  onClose,
}: MobileSidebarProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button
        type="button"
        className="absolute inset-0 bg-[#010F28]/60 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close dashboard navigation"
      />

      <aside className="relative flex h-full w-[85%] max-w-80 flex-col bg-[#010F28] shadow-2xl">
        <div className="flex h-16 items-center justify-between border-b border-white/10 px-4 py-4">
          <Image
            src="/logo-white.png"
            alt="BidNest"
            width={190}
            height={60}
            className="h-45 w-auto object-contain"
          />

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10"
            aria-label="Close navigation"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <div className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
                >
                  <Icon size={19} />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>
      </aside>
    </div>
  );
}