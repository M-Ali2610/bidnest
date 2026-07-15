import Navbar from "@/components/layout/LandingNavbar"
import Footer from "@/components/layout/Footer";

import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Pricing from "@/components/landing/Pricing";
import FAQs from "@/components/landing/FAQs";





export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9FAFC]">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <FAQs />
      <Footer />
    </main>
  );
}