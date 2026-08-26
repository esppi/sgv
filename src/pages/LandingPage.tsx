import MobiusStrip from "@/components/MobiusStrip";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import ImpactMetrics from "@/components/ImpactMetrics";
import InvestmentThesis from "@/components/InvestmentThesis";
import OurApproach from "@/components/OurApproach";
import WritingPreview from "@/components/WritingPreview";
import FollowOnInvestors from "@/components/FollowOnInvestors";
import Team from "@/components/Team";
import WhySGV from "@/components/WhySGV";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <>
      <MobiusStrip />
      <div id="top" className="relative">
        <Navbar />
        <Hero />
        <About />
        <PortfolioCarousel />
        <ImpactMetrics />
        <FollowOnInvestors />
        <InvestmentThesis />
        <WritingPreview />
        <OurApproach />
        <Team />
        <WhySGV />
        <CTABanner />
        <Footer />
      </div>
    </>
  );
}
