import { useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import PortfolioCard from "@/components/PortfolioCard";
import { portfolioCompanies } from "@/data/portfolio";

export default function PortfolioCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);
  const rafId = useRef<number>(0);

  const step = useCallback(() => {
    const el = scrollRef.current;
    if (el && !isHovered.current) {
      el.scrollLeft += 0.5;
      // Loop: when we've scrolled past the halfway mark (duplicated content), reset
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }
    }
    rafId.current = requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    rafId.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId.current);
  }, [step]);

  return (
    <SectionWrapper id="portfolio" fullWidth>
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-12 flex items-end justify-between">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-sgv-green font-sans">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mt-4">Our Investments</h2>
        </div>
        <Link
          to="/portfolio"
          className="hidden md:flex items-center gap-2 text-sm font-sans text-sgv-grey hover:text-sgv-green transition-colors"
        >
          Full Portfolio <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide"
        onMouseEnter={() => { isHovered.current = true; }}
        onMouseLeave={() => { isHovered.current = false; }}
      >
        <div className="flex gap-6 pl-6 md:pl-12 lg:pl-20 pr-6">
          {/* Render twice for seamless looping */}
          {[...portfolioCompanies, ...portfolioCompanies].map((company, i) => (
            <PortfolioCard
              key={`${company.id}-${i}`}
              company={company}
              index={i % portfolioCompanies.length}
              total={portfolioCompanies.length}
            />
          ))}
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mt-8 md:hidden">
        <Link
          to="/portfolio"
          className="flex items-center gap-2 text-sm font-sans text-sgv-grey hover:text-sgv-green transition-colors"
        >
          Full Portfolio <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </SectionWrapper>
  );
}
