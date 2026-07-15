"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bell,
  ChevronDown,
  LogOut,
  Menu,
  Settings,
  User,
} from "lucide-react";

interface TopbarProps {
  onOpenMobileMenu: () => void;
}

export default function Topbar({ onOpenMobileMenu }: TopbarProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6 lg:h-20 lg:px-8">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenMobileMenu}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#010F28] transition hover:bg-slate-100 lg:hidden"
          aria-label="Open dashboard navigation"
        >
          <Menu size={22} />
        </button>

        <div>
          <p className="text-xs text-slate-500">Welcome back</p>
          <h1 className="text-base font-semibold text-[#010F28] sm:text-lg">
            Buyer Dashboard
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-[#3356F0]/30 hover:bg-[#3356F0]/5 hover:text-[#3356F0]"
          aria-label="Notifications"
        >
          <Bell size={19} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#3356F0]" />
        </button>

        <div className="relative">
          <button
            type="button"
            onClick={() => setIsProfileOpen((current) => !current)}
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-1.5 pr-2 transition hover:border-slate-300"
            aria-expanded={isProfileOpen}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#3356F0]/10 font-semibold text-[#3356F0]">
              SA
            </div>

            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold text-[#010F28]">
                Syed Ali
              </p>
              <p className="text-xs text-slate-500">Buyer</p>
            </div>

            <ChevronDown
              size={16}
              className={`hidden text-slate-500 transition-transform sm:block ${
                isProfileOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
              <Link
                href="/dashboard/profile"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-100"
              >
                <User size={17} />
                Company profile
              </Link>

              <Link
                href="/dashboard/settings"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-100"
              >
                <Settings size={17} />
                Settings
              </Link>

              <button
                type="button"
                className="mt-1 flex w-full items-center gap-3 rounded-lg border-t border-slate-100 px-3 py-2.5 text-left text-sm text-red-600 hover:bg-red-50"
              >
                <LogOut size={17} />
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}