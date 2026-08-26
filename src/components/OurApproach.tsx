import SectionWrapper from "@/components/SectionWrapper";
import { approachPillars } from "@/data/approach";

export default function OurApproach() {
  return (
    <SectionWrapper>
      <span className="text-xs uppercase tracking-[0.2em] text-sgv-green font-sans">Our Approach</span>
      <h2 className="text-3xl md:text-4xl font-serif font-medium mt-4 mb-16">How We Work</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {approachPillars.map((pillar, i) => (
          <div key={i} className="border-t border-sgv-green/30 pt-8">
            <span className="text-xs uppercase tracking-[0.2em] text-sgv-green font-sans font-medium">
              {pillar.label}
            </span>
            <h3 className="text-lg font-serif font-medium mt-3 mb-4">{pillar.tagline}</h3>
            <p className="text-sgv-grey font-sans text-sm leading-relaxed">{pillar.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
