import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BidNest",
    template: "%s | BidNest",
  },
  description:
    "BidNest is a modern B2B procurement platform connecting buyers and suppliers through a streamlined RFQ and quotation management system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={`${inter.className} min-h-full flex flex-col bg-[#F9FAFC] text-[#010F28] antialiased`}>
        {children}
      </body>
    </html>
  );
}