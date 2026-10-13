import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import MobiusStrip from "@/components/MobiusStrip";
import { portfolioCompanies, formatQuarter, formatStatus, getLogoDomain } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  Active: "bg-sgv-green/10 text-sgv-green",
  Exited: "bg-sgv-blue/20 text-sgv-blue",
  Shutdown: "bg-sgv-grey/15 text-sgv-grey",
};

function CompanyLogo({ name, domain }: { name: string; domain: string | null }) {
  const [failed, setFailed] = useState(false);

  if (!domain || failed) {
    return (
      <span className="text-xl font-serif text-sgv-grey/30 select-none">
        {name[0] === "$" ? name.slice(0, 2) : name[0]}
      </span>
    );
  }

  return (
    <img
      src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
      alt={`${name} logo`}
      className="h-10 w-10 object-contain rounded-lg"
      onError={() => setFailed(true)}
      loading="lazy"
    />
  );
}

export default function PortfolioPage() {

  return (
    <>
      <MobiusStrip />
      <div className="relative min-h-screen">
        {/* Top bar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-sgv-black/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-20">
            <Link to="/" className="flex-shrink-0">
              <img src="/logo-white.svg" alt="SGV" className="h-6 md:h-7" />
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-sans text-sgv-grey hover:text-sgv-green transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
          </div>
        </nav>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-36 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-sgv-green font-sans">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-medium mt-4 mb-4">
              Our Investments
            </h1>
            <p className="text-sgv-grey font-sans mb-10 max-w-xl">
              Early-stage companies across consumer crypto, AI applications, and AI infrastructure.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioCompanies.map((company, i) => {
              // Shut down companies render greyed out and are not clickable
              const inactive = company.status === "Shutdown";
              const href = inactive ? "" : company.link;
              const Wrapper = href ? "a" : "div";
              const linkProps = href
                ? { href, target: "_blank" as const, rel: "noopener noreferrer" }
                : {};
              const domain = getLogoDomain(company);

              return (
                <motion.div
                  key={company.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.6) }}
                >
                  <Wrapper
                    {...linkProps}
                    className={cn(
                      "block bg-sgv-mirage/50 border border-sgv-mirage rounded-xl p-6",
                      inactive ? "opacity-40 grayscale" : "group hover:border-sgv-green/30 transition-all duration-300",
                      href && "cursor-pointer"
                    )}
                  >
                    <div className="flex items-start gap-4">
                      {/* Logo */}
                      <div className="w-14 h-14 bg-sgv-black/50 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                        <CompanyLogo name={company.name} domain={domain} />
                      </div>

                      <div className="flex-1 min-w-0">
                        {/* Name + status */}
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-serif font-medium text-sgv-white group-hover:text-sgv-green transition-colors truncate">
                            {company.name}
                          </h3>
                          {href && (
                            <ExternalLink className="w-3.5 h-3.5 text-sgv-grey/40 group-hover:text-sgv-green/60 transition-colors flex-shrink-0" />
                          )}
                        </div>

                        {/* TLDR */}
                        <p className="text-sm text-sgv-grey font-sans leading-relaxed mb-3">
                          {company.tldr}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center gap-3">
                          <span
                            className={cn(
                              "text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full font-sans font-medium whitespace-nowrap",
                              statusStyles[company.status] ?? statusStyles.Active
                            )}
                          >
                            {formatStatus(company.status)}
                          </span>
                          <span className="text-xs text-sgv-grey/50 font-sans">
                            {formatQuarter(company.dateInvested)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-sgv-mirage">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8 flex items-center justify-between">
            <span className="text-sm text-sgv-grey font-sans">
              &copy; {new Date().getFullYear()} Social Graph Ventures
            </span>
            <Link
              to="/"
              className="text-sm text-sgv-grey hover:text-sgv-green transition-colors font-sans flex items-center gap-1"
            >
              Back to Home <ArrowLeft className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
