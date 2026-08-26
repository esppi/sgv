import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { useSubstackFeed } from "@/hooks/useSubstackFeed";

function formatDate(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default function WritingPreview() {
  const { posts, loading } = useSubstackFeed();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const dragged = useRef(false);

  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragged.current = false;
    setStartX(e.clientX);
    setScrollLeft(scrollRef.current?.scrollLeft ?? 0);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 5) dragged.current = true;
    if (scrollRef.current) scrollRef.current.scrollLeft = scrollLeft - dx;
  };

  const onPointerUp = () => setIsDragging(false);

  const handleClick = (e: React.MouseEvent) => {
    if (dragged.current) e.preventDefault();
  };

  if (loading || posts.length === 0) return null;

  return (
    <SectionWrapper>
      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-sgv-green font-sans">
            Writing
          </span>
          <h3 className="text-2xl md:text-3xl font-serif font-medium mt-4">
            Latest from SGV
          </h3>
        </div>
        <Link
          to="/writing"
          className="hidden md:flex items-center gap-1 text-sm text-sgv-grey hover:text-sgv-green transition-colors font-sans"
        >
          View all <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none pb-2"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {posts.slice(0, 8).map((post) => (
          <a
            key={post.link}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="flex-shrink-0 w-72 md:w-80 group block bg-sgv-mirage/50 border border-sgv-mirage rounded-xl p-5 hover:border-sgv-green/30 transition-all duration-300"
          >
            <span className="text-xs text-sgv-grey font-sans">
              {formatDate(post.pubDate)}
            </span>
            <h4 className="text-base font-serif font-medium mt-2 mb-2 group-hover:text-sgv-green transition-colors line-clamp-2">
              {post.title}
            </h4>
            <p className="text-sm text-sgv-grey font-sans line-clamp-2">
              {post.description}
            </p>
          </a>
        ))}
      </div>

      <Link
        to="/writing"
        className="md:hidden flex items-center gap-1 text-sm text-sgv-grey hover:text-sgv-green transition-colors font-sans mt-6"
      >
        View all <ArrowRight className="w-4 h-4" />
      </Link>
    </SectionWrapper>
  );
}
