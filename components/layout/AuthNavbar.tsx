"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface AuthNavbarProps {
  actionLabel: string;
  actionHref: string;
}

export default function AuthNavbar({
  actionLabel,
  actionHref,
}: AuthNavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Authentication Navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="BidNest Home"
        >
          <Image
            src="/logo.png"
            alt="BidNest"
            width={450}
            height={550}
            priority
            className="h-45 w-auto object-contain sm:h-14 md:h-16 lg:h-18 xl:h-45"
          />
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="hidden items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-[#3356F0] sm:flex"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <Link
            href={actionHref}
            className="rounded-xl bg-[#3356F0] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#2948D8] hover:shadow-md"
          >
            {actionLabel}
          </Link>
        </div>
      </nav>
    </header>
  );
}