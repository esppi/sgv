import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";

const followOnInvestors = [
  { name: "Multicoin Capital", domain: "multicoin.capital", link: "https://multicoin.capital/" },
  { name: "Paradigm", domain: "paradigm.xyz", link: "https://www.paradigm.xyz/" },
  { name: "Benchmark Capital", domain: "benchmark.com", link: "https://benchmark.com/" },
  { name: "Union Square Ventures", domain: "usv.com", link: "https://www.usv.com/" },
  { name: "a16z", domain: "a16z.com", link: "https://a16z.com/" },
  { name: "1confirmation", domain: "1confirmation.com", link: "https://www.1confirmation.com/" },
  { name: "Maven11", domain: "maven11.com", link: "https://www.maven11.com/" },
  { name: "1kx", domain: "1kx.network", link: "https://1kx.network/" },
  { name: "6th Man Ventures", domain: "6thman.ventures", link: "https://6thman.ventures/" },
  { name: "Strobe", domain: "strobe.fund", link: "https://strobe.fund/" },
  { name: "Archetype", domain: "archetype.fund", link: "https://www.archetype.fund/" },
  { name: "EV3", domain: "ev3.xyz", link: "https://www.ev3.xyz/" },
  { name: "Variant", domain: "variant.fund", link: "https://variant.fund/" },
  { name: "Coinbase Ventures", domain: "coinbase.com", link: "https://www.coinbase.com/ventures" },
];

function LogoImg({ name, domain }: { name: string; domain: string }) {
  const [src, setSrc] = useState(
    `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}&size=128`
  );
  const [attempt, setAttempt] = useState(0);

  const handleError = () => {
    if (attempt === 0) {
      setSrc(`https://icon.horse/icon/${domain}`);
      setAttempt(1);
    } else {
      setAttempt(2);
    }
  };

  if (attempt >= 2) {
    return (
      <div className="h-8 w-8 rounded-md bg-sgv-mirage flex items-center justify-center text-xs font-sans text-sgv-grey">
        {name[0]}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      className="h-8 w-8 rounded-md object-contain"
      loading="lazy"
      draggable={false}
      onError={handleError}
    />
  );
}

export default function FollowOnInvestors() {
  return (
    <SectionWrapper>
      <span className="text-xs uppercase tracking-[0.2em] text-sgv-green font-sans">
        Track Record
      </span>
      <h3 className="text-2xl md:text-3xl font-serif font-medium mt-4 mb-10">
        Our Companies Have Gone On to Raise From
      </h3>

      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="flex gap-12 w-max animate-scroll hover:[animation-play-state:paused]">
          {[...followOnInvestors, ...followOnInvestors].map((inv, i) => (
            <a
              key={`${inv.name}-${i}`}
              href={inv.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              <LogoImg name={inv.name} domain={inv.domain} />
              <span className="text-lg font-serif text-sgv-white whitespace-nowrap">
                {inv.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
