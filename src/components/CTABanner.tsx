import SectionWrapper from "@/components/SectionWrapper";
import { ArrowUp } from "lucide-react";

export default function CTABanner() {
  return (
    <SectionWrapper id="contact">
      <div className="text-center">
        <span className="text-xs uppercase tracking-[0.2em] text-sgv-green font-sans mb-8 block">Slide into Our DMs</span>
        <h2 className="text-3xl md:text-4xl font-serif font-medium mb-8">Let's Build the Future Together</h2>

        <a
          href="mailto:contact@socialgraph.vc"
          className="inline-block text-xl md:text-3xl lg:text-4xl font-serif text-sgv-grey hover:text-sgv-green transition-colors duration-300 break-all"
        >
          contact@socialgraph.vc
        </a>

        <div className="mt-16">
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-sm text-sgv-grey hover:text-sgv-green transition-colors font-sans"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
