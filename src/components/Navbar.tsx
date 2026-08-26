import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Thesis", href: "#thesis" },
  { label: "Team", href: "#team" },
  { label: "Writing", href: "/writing", isRoute: true },
];

const SECTION_IDS = ["about", "portfolio", "thesis", "team", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-sgv-black/80 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-20">
          <a href="#top" className="flex-shrink-0">
            <img src="/logo-white.svg" alt="SGV" className="h-6 md:h-7" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-sans transition-colors duration-200 text-sgv-grey hover:text-sgv-white"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-sans transition-colors duration-200",
                    activeId === link.href.slice(1)
                      ? "text-sgv-green"
                      : "text-sgv-grey hover:text-sgv-white"
                  )}
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          <div className="hidden md:block">
            <Button variant="primary" size="sm" onClick={() => window.location.href = "mailto:contact@socialgraph.vc"}>
              Get in Touch
            </Button>
          </div>

          <button
            className="md:hidden text-sgv-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-sgv-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {NAV_LINKS.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-serif text-sgv-white hover:text-sgv-green transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-serif text-sgv-white hover:text-sgv-green transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
            <Button variant="primary" size="lg" onClick={() => { setMobileOpen(false); window.location.href = "mailto:contact@socialgraph.vc"; }}>
              Get in Touch
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
