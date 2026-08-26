import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { cofounders, teamMembers, getTwitterHandle } from "@/data/team";

const backers = [
  { name: "Hydra Ventures", domain: "hydraventures.xyz", link: "https://www.hydraventures.xyz/" },
  { name: "1kx", domain: "1kx.network", link: "https://1kx.network/" },
  { name: "Mask Network", domain: "mask.io", link: "https://mask.io/" },
  { name: "Avara (Aave)", domain: "aave.com", link: "https://aave.com/" },
  { name: "MoonPay", domain: "moonpay.com", link: "https://www.moonpay.com/" },
  { name: "Zerion", domain: "zerion.io", link: "https://zerion.io/" },
  { name: "Livepeer", domain: "livepeer.org", link: "https://livepeer.org/" },
  { name: "EigenLayer", domain: "eigenlayer.xyz", link: "https://www.eigenlayer.xyz/" },
  { name: "Coinbase", domain: "coinbase.com", link: "https://www.coinbase.com/" },
  { name: "re7", domain: "re7.capital", link: "https://www.re7.capital/" },
];

function TeamCard({ name, role, link, large = false, image }: { name: string; role: string; link?: string; large?: boolean; image?: string }) {
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2);
  const handle = getTwitterHandle(link);
  const [imgFailed, setImgFailed] = useState(false);

  const sizeClasses = large
    ? "w-28 h-28 md:w-36 md:h-36 text-2xl"
    : "w-16 h-16 md:w-20 md:h-20 text-sm";

  // Determine avatar source: custom image > Twitter avatar > initials
  const avatarSrc = image ? image : handle && !imgFailed ? `https://unavatar.io/x/${handle}` : null;

  const inner = (
    <div className="flex flex-col items-center text-center group">
      <div
        className={`${sizeClasses} rounded-full bg-sgv-mirage border border-sgv-mirage flex items-center justify-center font-serif text-sgv-grey group-hover:border-sgv-green/30 group-hover:text-sgv-green transition-all duration-300 overflow-hidden`}
      >
        {avatarSrc ? (
          <img
            src={avatarSrc}
            alt={name}
            className="w-full h-full object-cover"
            onError={() => setImgFailed(true)}
            loading="lazy"
          />
        ) : (
          initials
        )}
      </div>
      <h4 className={`${large ? "text-lg md:text-xl mt-4" : "text-sm mt-3"} font-serif font-medium group-hover:text-sgv-green transition-colors`}>
        {name}
      </h4>
      <span className={`${large ? "text-sm" : "text-xs"} text-sgv-grey font-sans mt-1`}>{role}</span>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }

  return inner;
}

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

export default function Team() {
  return (
    <SectionWrapper id="team">
      <span className="text-xs uppercase tracking-[0.2em] text-sgv-green font-sans">Team</span>
      <h2 className="text-3xl md:text-4xl font-serif font-medium mt-4 mb-16">The People Behind SGV</h2>

      <div className="flex justify-center gap-16 md:gap-24 mb-20">
        {cofounders.map((member) => (
          <TeamCard key={member.name} name={member.name} role={member.role} link={member.link} image={member.image} large />
        ))}
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 mb-24">
        {teamMembers.map((member, i) => (
          <TeamCard key={`${member.name}-${i}`} name={member.name} role={member.role} link={member.link} image={member.image} />
        ))}
      </div>

      {/* Backed By */}
      <div>
        <span className="text-xs uppercase tracking-[0.2em] text-sgv-green font-sans">Backed By</span>
        <h3 className="text-2xl md:text-3xl font-serif font-medium mt-4 mb-10">Our Partners</h3>

        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="flex gap-12 w-max animate-scroll-slow hover:[animation-play-state:paused]">
            {[...backers, ...backers].map((b, i) => (
              <a
                key={`${b.name}-${i}`}
                href={b.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300"
              >
                <LogoImg name={b.name} domain={b.domain} />
                <span className="text-lg font-serif text-sgv-white whitespace-nowrap">{b.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
