import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  try {
    const response = await fetch("https://socialgraphventures.substack.com/feed");
    if (!response.ok) {
      return res.status(response.status).send("Failed to fetch feed");
    }
    const xml = await response.text();
    res.setHeader("Content-Type", "application/xml");
    res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate=60");
    return res.status(200).send(xml);
  } catch (e) {
    return res.status(500).send("Error fetching feed");
  }
}
