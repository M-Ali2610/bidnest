import { ReactNode } from "react";

import AuthNavbar from "@/components/layout/AuthNavbar";
import Footer from "@/components/layout/Footer";

interface AuthLayoutProps {
  children: ReactNode;
  actionLabel: string;
  actionHref: string;
}

export default function AuthLayout({
  children,
  actionLabel,
  actionHref,
}: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[#F9FAFC]">
      <AuthNavbar
        actionLabel={actionLabel}
        actionHref={actionHref}
      />

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}