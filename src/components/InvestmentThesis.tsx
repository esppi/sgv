import SectionWrapper from "@/components/SectionWrapper";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { thesisAreas } from "@/data/thesis";

export default function InvestmentThesis() {
  return (
    <SectionWrapper id="thesis">
      <span className="text-xs uppercase tracking-[0.2em] text-sgv-green font-sans">Investment Thesis</span>
      <h2 className="text-3xl md:text-4xl font-serif font-medium mt-4 mb-12">What We Invest In</h2>

      <Accordion type="multiple" className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
        {thesisAreas.map((area, i) => (
          <AccordionItem key={i} value={`thesis-${i}`}>
            <AccordionTrigger className="text-xl font-serif">
              {area.title}
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 text-sgv-grey">{area.summary}</p>
              <ul className="space-y-2">
                {area.subFocusAreas.map((focus, j) => (
                  <li key={j} className="text-sm text-sgv-grey/80 flex items-center gap-2">
                    <span className="text-sgv-green">+</span> {focus}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionWrapper>
  );
}
