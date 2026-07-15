import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#010F28] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div>
            <Image
              src="/logo-white.png"
              alt="BidNest"
              width={220}
              height={60}
              className="h-30 w-auto"
            />

            <p className="mt-6 max-w-sm leading-8 text-slate-300">
              Modern B2B procurement platform helping businesses connect with
              verified suppliers, compare quotations, and streamline purchasing
              decisions.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold">Product</h3>

            <div className="mt-5 flex flex-col gap-4">
              <Link
                href="#features"
                className="text-slate-300 transition hover:text-white"
              >
                Features
              </Link>

              <Link
                href="#pricing"
                className="text-slate-300 transition hover:text-white"
              >
                Pricing
              </Link>

              <Link
                href="#faqs"
                className="text-slate-300 transition hover:text-white"
              >
                FAQs
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold">Company</h3>

            <div className="mt-5 flex flex-col gap-4">
              <Link
                href="/about"
                className="text-slate-300 transition hover:text-white"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="text-slate-300 transition hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold">Legal</h3>

            <div className="mt-5 flex flex-col gap-4">
              <Link
                href="/privacy"
                className="text-slate-300 transition hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-slate-300 transition hover:text-white"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>

            <div className="mt-5 space-y-5">
              <div className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="mt-1 shrink-0 text-[#3356F0]"
                />
                <span className="text-slate-300">
                  hello@bidnest.pk
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="mt-1 shrink-0 text-[#3356F0]"
                />
                <span className="text-slate-300">
                  +92 300 1234567
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-[#3356F0]"
                />
                <span className="text-slate-300">
                  Sialkot, Pakistan
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-slate-700 pt-8 md:flex-row">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} BidNest. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <Link
              href="#"
              className="rounded-lg bg-white/5 p-2 transition-all hover:bg-[#3356F0]"
            >
              <FaLinkedinIn size={18} />
            </Link>

            <Link
              href="#"
              className="rounded-lg bg-white/5 p-2 transition-all hover:bg-[#3356F0]"
            >
              <FaFacebookF size={18} />
            </Link>

            <Link
              href="#"
              className="rounded-lg bg-white/5 p-2 transition-all hover:bg-[#3356F0]"
            >
              <FaXTwitter size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}