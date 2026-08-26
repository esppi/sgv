import SectionWrapper from "@/components/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
        <div className="md:col-span-2">
          <span className="text-xs uppercase tracking-[0.2em] text-sgv-green font-sans">Who We Are</span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mt-4">
            Conviction-driven investing in consumer crypto and AI
          </h2>
        </div>

        <div className="md:col-span-3 space-y-6 text-sgv-grey font-sans text-base md:text-lg leading-relaxed">
          <p>
            Social Graph Ventures is a crypto-native, member-managed investment LLC that writes
            $25K to $150K checks as early as possible to back founders building the next generation
            of widely used crypto and AI apps.
          </p>
          <p>
            Our thesis is simple: the infra is ready, anyone can build large consumer apps, and
            distribution is differentiation. We back teams that can build great products, but also
            reach millions of users at scale.
          </p>
          <p>
            AI is the second half of that thesis. As models commoditize, value is shifting to two
            places: applications that own the user relationship, and the infrastructure everything
            else is built on — agents, data, compute, and payment rails. We invest in both.
          </p>
          <p>
            Our portfolio spans consumer and middleware companies in consumer DeFi, social, casual
            gaming, media, prediction markets, consumer vibecoding, influencer marketing, and a
            growing set of AI applications and AI infrastructure.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
