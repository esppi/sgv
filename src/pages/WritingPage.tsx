import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import MobiusStrip from "@/components/MobiusStrip";
import { useSubstackFeed } from "@/hooks/useSubstackFeed";

function formatDate(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default function WritingPage() {
  const { posts, loading, error } = useSubstackFeed();

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
              Writing
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-medium mt-4 mb-4">
              Latest from SGV
            </h1>
            <p className="text-sgv-grey font-sans mb-16 max-w-xl">
              Research, market insights, and founder stories from the Social Graph Ventures team.
            </p>
          </motion.div>

          {loading && (
            <div className="flex items-center justify-center py-24">
              <div className="w-8 h-8 border-2 border-sgv-green/30 border-t-sgv-green rounded-full animate-spin" />
            </div>
          )}

          {error && (
            <p className="text-sgv-grey text-center py-24">
              Unable to load posts.{" "}
              <a
                href="https://socialgraphventures.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sgv-green hover:underline"
              >
                Read on Substack
              </a>
            </p>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, i) => (
                <motion.a
                  key={post.link}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group block bg-sgv-mirage/50 border border-sgv-mirage rounded-xl overflow-hidden hover:border-sgv-green/30 transition-all duration-300"
                >
                  <div className="p-6">
                    <span className="text-xs text-sgv-grey font-sans">
                      {formatDate(post.pubDate)}
                    </span>
                    <h3 className="text-lg font-serif font-medium mt-2 mb-3 group-hover:text-sgv-green transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-sgv-grey font-sans line-clamp-3">
                      {post.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-xs text-sgv-green font-sans opacity-0 group-hover:opacity-100 transition-opacity">
                      Read on Substack <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-sgv-mirage">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8 flex items-center justify-between">
            <span className="text-sm text-sgv-grey font-sans">
              &copy; {new Date().getFullYear()} Social Graph Ventures
            </span>
            <a
              href="https://socialgraphventures.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-sgv-grey hover:text-sgv-green transition-colors font-sans flex items-center gap-1"
            >
              Subscribe on Substack <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
