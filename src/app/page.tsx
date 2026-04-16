import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RotatingBadge from "@/components/RotatingBadge";
import BrandsMarquee from "@/components/BrandsMarquee";
import ContentSection from "@/components/ContentSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import Footer from "@/components/Footer";
import HeroCard from "@/components/HeroCard";
import IntroSection from "@/components/IntroSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <IntroSection />
      <div className="section-divider" />
      <ExpertiseSection />
      <div className="section-divider" />
      <ContentSection />
      <div className="section-divider" />
      <BrandsMarquee />
      <Footer />
    </main>
  );
}
