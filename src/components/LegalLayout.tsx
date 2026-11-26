import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface LegalLayoutProps {
  title: string;
  updated: string;
  children: ReactNode;
}

export default function LegalLayout({ title, updated, children }: LegalLayoutProps) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${title} | Social Graph Ventures`;
    window.scrollTo(0, 0);

    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex";
    document.head.appendChild(robots);

    return () => {
      document.title = previousTitle;
      robots.remove();
    };
  }, [title]);

  return (
    <div className="relative min-h-screen">
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

      <main className="max-w-3xl mx-auto px-6 md:px-12 pt-36 pb-24 font-sans">
        <h1 className="text-4xl md:text-5xl font-serif font-medium mb-3">{title}</h1>
        <p className="text-sm text-sgv-grey mb-12">Last updated: {updated}</p>

        <div className="space-y-5 leading-relaxed text-sgv-white/80 [&_h2]:text-xl [&_h2]:font-medium [&_h2]:text-sgv-white [&_h2]:mt-10 [&_h2]:mb-1 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-sgv-green [&_a]:underline [&_a]:underline-offset-2">
          {children}
        </div>
      </main>
    </div>
  );
}
