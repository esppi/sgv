import { useEffect, useState } from "react";

export interface SubstackPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  image: string | null;
}

// In dev, Vite proxies /api/feed → Substack RSS.
// In production, replace with your own serverless function or proxy.
const FEED_PATH = "/api/feed";

export function useSubstackFeed() {
  const [posts, setPosts] = useState<SubstackPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchFeed() {
      try {
        const res = await fetch(FEED_PATH);
        if (!res.ok) throw new Error("Failed to fetch feed");
        const xml = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(xml, "text/xml");
        const items = doc.querySelectorAll("item");

        const parsed: SubstackPost[] = Array.from(items).map((item) => {
          const title = item.querySelector("title")?.textContent ?? "";
          const link = item.querySelector("link")?.textContent ?? "";
          const pubDate = item.querySelector("pubDate")?.textContent ?? "";
          const descRaw = item.querySelector("description")?.textContent ?? "";

          // Image from <enclosure> tag (Substack puts cover images here)
          const enclosure = item.querySelector("enclosure");
          const image = enclosure?.getAttribute("url") ?? null;

          // Strip HTML tags for plain text description
          const descDoc = parser.parseFromString(descRaw, "text/html");
          const description = descDoc.body.textContent?.trim() ?? "";

          return { title, link, pubDate, description, image };
        });

        if (!cancelled) setPosts(parsed);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "Unknown error");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchFeed();
    return () => { cancelled = true; };
  }, []);

  return { posts, loading, error };
}
