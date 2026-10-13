import { useState } from "react";
import type { PortfolioCompany } from "@/data/portfolio";
import { formatQuarter, formatStatus, getLogoDomain } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  company: PortfolioCompany;
  index: number;
  total: number;
}

const statusStyles: Record<string, string> = {
  Active: "bg-sgv-green/10 text-sgv-green",
  Exited: "bg-sgv-blue/20 text-sgv-blue",
  Shutdown: "bg-sgv-grey/15 text-sgv-grey",
};

export default function PortfolioCard({ company, index, total }: PortfolioCardProps) {
  // Shut down companies render greyed out and are not clickable
  const inactive = company.status === "Shutdown";
  const href = inactive ? "" : company.link;
  const Wrapper = href ? "a" : "div";
  const linkProps = href
    ? { href, target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  const domain = getLogoDomain(company);
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <Wrapper
      {...linkProps}
      className={cn(
        "flex-shrink-0 w-72 md:w-80 bg-sgv-mirage/50 border border-sgv-mirage rounded-2xl p-6",
        inactive ? "opacity-40 grayscale" : "group hover:border-sgv-green/30 transition-all duration-300",
        href && "cursor-pointer"
      )}
    >
      {/* Header: index + status */}
      <div className="flex items-center justify-between mb-5">
        <span className="text-xs text-sgv-grey/60 font-sans tabular-nums">
          {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
        </span>
        <span
          className={cn(
            "text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full font-sans font-medium whitespace-nowrap",
            statusStyles[company.status] ?? statusStyles.Active
          )}
        >
          {formatStatus(company.status)}
        </span>
      </div>

      {/* Logo */}
      <div className="w-full h-24 bg-sgv-black/50 rounded-xl mb-5 flex items-center justify-center overflow-hidden">
        {domain && !logoFailed ? (
          <img
            src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
            alt={`${company.name} logo`}
            className="h-12 w-12 object-contain rounded-lg"
            onError={() => setLogoFailed(true)}
            loading="lazy"
          />
        ) : (
          <span className="text-2xl font-serif text-sgv-grey/30 select-none">
            {company.name[0] === "$" ? company.name.slice(0, 2) : company.name[0]}
          </span>
        )}
      </div>

      {/* Name + link icon */}
      <div className="flex items-center gap-2 mb-1">
        <h3 className="text-lg font-serif font-medium text-sgv-white group-hover:text-sgv-green transition-colors truncate">
          {company.name}
        </h3>
        {href && (
          <ExternalLink className="w-3.5 h-3.5 text-sgv-grey/40 group-hover:text-sgv-green/60 transition-colors flex-shrink-0" />
        )}
      </div>

      {/* TLDR */}
      <p className="text-sm text-sgv-grey font-sans leading-relaxed mb-4">
        {company.tldr}
      </p>

      {/* Meta row: quarter */}
      <div className="flex items-center justify-end pt-4 border-t border-sgv-mirage">
        <span className="text-xs text-sgv-grey/50 font-sans whitespace-nowrap">
          {formatQuarter(company.dateInvested)}
        </span>
      </div>
    </Wrapper>
  );
}
