"use client";

import { ReactNode, useState } from "react";

import MobileSidebar from "@/components/dashboard/MobileSidebar";
import DesktopSidebar from "@/components/dashboard/DesktopSidebar";
import Topbar from "@/components/dashboard/Topbar";

interface DashboardShellProps {
  children: ReactNode;
}

export default function DashboardShell({
  children,
}: DashboardShellProps) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F9FAFC] lg:flex">
      <DesktopSidebar />

      <div className="min-w-0 flex-1">
        <Topbar
          onOpenMobileMenu={() => setIsMobileSidebarOpen(true)}
        />

        <main className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {children}
        </main>
      </div>

      <MobileSidebar
        isOpen={isMobileSidebarOpen}
        onClose={() => setIsMobileSidebarOpen(false)}
      />
    </div>
  );
}