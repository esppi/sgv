import SectionWrapper from "@/components/SectionWrapper";

const valueProps = [
  {
    number: "01",
    title: "Broad Network",
    description:
      "Our members span across venture capital, engineering, product, marketing, growth, and community building. This diversity gives our portfolio companies access to operational expertise and warm introductions across every function that matters.",
  },
  {
    number: "02",
    title: "Crypto-Native",
    description:
      "We are not tourists. Every member of SGV is an active user of the products and protocols in our ecosystem. We use the wallets, trade on the DEXs, post on the social apps, and play the games. This gives us conviction and pattern recognition that outsiders simply don't have.",
  },
  {
    number: "03",
    title: "Upscale Capital",
    description:
      "We are deeply connected to the largest and most respected VCs in the crypto space. When our portfolio companies are ready for their next round, we open doors to Tier 1 funds and help founders navigate the fundraising process with warm introductions and strategic positioning.",
  },
];

export default function WhySGV() {
  return (
    <SectionWrapper>
      <span className="text-xs uppercase tracking-[0.2em] text-sgv-green font-sans">
        Why SGV
      </span>
      <h2 className="text-3xl md:text-4xl font-serif font-medium mt-4 mb-16">
        The SGV Advantage
      </h2>

      <div className="space-y-16">
        {valueProps.map((prop) => (
          <div
            key={prop.number}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start"
          >
            <div className="md:col-span-2">
              <span className="text-6xl md:text-7xl font-serif font-medium text-sgv-green/15">
                {prop.number}
              </span>
            </div>
            <div className="md:col-span-10">
              <h3 className="text-xl md:text-2xl font-serif font-medium mb-4">
                {prop.title}
              </h3>
              <p className="text-sgv-grey font-sans text-base md:text-lg leading-relaxed max-w-3xl">
                {prop.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
