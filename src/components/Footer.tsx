import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-sgv-mirage py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <img src="/icon-white.svg" alt="SGV" className="h-8 opacity-50" />

        <div className="flex items-center gap-6">
          <a
            href="https://x.com/socialgraphvc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sgv-grey hover:text-sgv-green transition-colors text-sm font-sans"
          >
            Twitter/X
          </a>
          <a
            href="https://linkedin.com/company/socialgraphventures"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sgv-grey hover:text-sgv-green transition-colors text-sm font-sans"
          >
            LinkedIn
          </a>
        </div>

        <div className="flex flex-col items-center md:items-end gap-1">
          <span className="text-xs text-sgv-grey/50 font-sans">
            &copy; {new Date().getFullYear()} Social Graph Ventures. All rights reserved.
          </span>
          <div className="flex items-center gap-3 text-[11px] text-sgv-grey/40 font-sans">
            <Link to="/privacy" className="hover:text-sgv-grey transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-sgv-grey transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
