"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navigation = [
  // { name: "How It Works", href: "#how-it-works" },
  { name: "Features", href: "#features" },
  // { name: "Categories", href: "#categories" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-2 sm:h-18 sm:px-4 lg:h-20 lg:px-6 xl:px-8"
        aria-label="Main navigation"
      >
        {/* Left Side */}
        <div className="flex min-w-0 items-center gap-6 xl:gap-14">
          {/* Logo */}
<Link
  href="/"
  onClick={closeMenu}
  className="-ml-10 flex shrink-0 items-center sm:-ml-4 lg:-ml-2 xl:ml-0"
  aria-label="BidNest home"
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

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-5 lg:flex xl:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="whitespace-nowrap text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-[#3356F0] xl:text-[15px]"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden shrink-0 items-center gap-2 lg:flex xl:gap-3">
          <Link
            href="/login"
            className="rounded-lg px-3 py-2 text-sm font-semibold text-[#010F28] transition-colors hover:bg-slate-100 xl:px-5 xl:py-2.5 xl:text-[15px]"
          >
            Log in
          </Link>

          <Link
            href="/register"
            className="rounded-xl bg-[#3356F0] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#2948D8] hover:shadow-md xl:px-6 xl:py-3 xl:text-[15px]"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#010F28] transition-colors hover:bg-slate-100 lg:hidden"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6 sm:py-5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-[#F9FAFC] hover:text-[#3356F0]"
              >
                {item.name}
              </Link>
            ))}

            <div className="mt-4 grid gap-3 border-t border-slate-200 pt-4 sm:mt-5 sm:pt-5">
              <Link
                href="/login"
                onClick={closeMenu}
                className="rounded-lg border border-slate-300 px-5 py-3 text-center font-semibold text-[#010F28] transition hover:bg-[#F9FAFC]"
              >
                Log in
              </Link>

              <Link
                href="/register"
                onClick={closeMenu}
                className="rounded-xl bg-[#3356F0] px-5 py-3 text-center font-semibold text-white transition hover:bg-[#2948D8]"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}