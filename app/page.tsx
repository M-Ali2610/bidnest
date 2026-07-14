import Navbar from "@/components/landing/NavbarTemp";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Pricing from "@/components/landing/Pricing";
import FAQs from "@/components/landing/FAQs";
import Footer from "@/components/landing/Footer";

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