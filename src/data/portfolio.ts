export type CompanyStatus = "Active" | "Exited" | "Shutdown";

export interface PortfolioCompany {
  id: number;
  name: string;
  tldr: string;
  dateInvested: string;   // e.g. "2023Q4"
  date?: string;          // exact investment date, e.g. "2023-11-21" (sorting only)
  link: string;
  status: CompanyStatus;
  priority?: number;      // optional display priority within Active (lower = shown first)
  logoDomain?: string;    // domain for logo lookup (overrides link domain)
}

const raw: PortfolioCompany[] = [
  { id: 1, name: "Orb", tldr: "Leading Lens client", dateInvested: "2023Q2", date: "2023-05-24", link: "https://orb.club/", status: "Shutdown" },
  { id: 2, name: "Neynar", tldr: "Leading web3 social protocol", dateInvested: "2023Q3", date: "2023-08-10", link: "https://neynar.com/", status: "Shutdown" },
  { id: 3, name: "Pods", tldr: "Podcasting", dateInvested: "2023Q4", date: "2023-10-25", link: "https://pods.media/", status: "Shutdown" },
  { id: 4, name: "Seam", tldr: "Upcoming fantasy reading social network", dateInvested: "2023Q4", date: "2023-11-21", link: "", status: "Shutdown" },
  { id: 5, name: "Unlonely", tldr: "Livestreaming", dateInvested: "2024Q1", date: "2024-02-21", link: "https://x.com/bdguan", status: "Shutdown", logoDomain: "unlonely.app" },
  { id: 6, name: "Receipts", tldr: "Community driven strava", dateInvested: "2024Q1", date: "2024-02-21", link: "http://receipts.xyz/", status: "Active" },
  { id: 7, name: "MBD", tldr: "Onchain recommendation APIs", dateInvested: "2024Q2", date: "2024-04-10", link: "https://getembed.ai/", status: "Active", logoDomain: "mbd.xyz" },
  { id: 8, name: "Discove", tldr: "Onchain social primitives", dateInvested: "2024Q2", date: "2024-05-04", link: "https://x.com/davidvfurlong", status: "Active", logoDomain: "discove.xyz" },
  { id: 9, name: "Uno", tldr: "Farcaster client", dateInvested: "2024Q2", date: "2024-05-23", link: "https://uno.fun/", status: "Active" },
  { id: 10, name: "Tapestry / Zumi", tldr: "AI companion", dateInvested: "2024Q2", date: "2024-06-01", link: "https://x.com/usetapestry", status: "Shutdown", logoDomain: "usetapestry.xyz" },
  { id: 11, name: "Confetti", tldr: "Onchain contests", dateInvested: "2024Q2", date: "2024-06-19", link: "https://confetti.win/", status: "Active" },
  { id: 12, name: "Ponder", tldr: "Social prediction markets", dateInvested: "2024Q3", date: "2024-07-25", link: "https://app.tomorrow.fun/", status: "Active" },
  { id: 13, name: "Cue", tldr: "Cultural prediction markets", dateInvested: "2024Q3", date: "2024-09-24", link: "https://cue.market/app/markets", status: "Active" },
  { id: 14, name: "4DHD", tldr: "Attention protocol", dateInvested: "2024Q4", date: "2024-11-15", link: "https://www.4dhd.org/", status: "Active" },
  { id: 15, name: "Simcluster", tldr: "Sims for AIs", dateInvested: "2024Q4", date: "2024-12-20", link: "https://simcluster.ai/", status: "Shutdown" },
  { id: 16, name: "Rodeo", tldr: "NFTs social network", dateInvested: "2025Q1", date: "2025-01-10", link: "https://x.com/saturnial", status: "Shutdown", logoDomain: "rodeo.club" },
  { id: 17, name: "$CLANKER", tldr: "Base launchpad", dateInvested: "2025Q1", date: "2025-01-27", link: "https://farcaster.xyz/clanker", status: "Exited", logoDomain: "clanker.world" },
  { id: 18, name: "Daisy", tldr: "Influencer marketing boosting platform", dateInvested: "2025Q1", date: "2025-02-26", link: "https://daisypay.io/", status: "Active", priority: 4 },
  { id: 19, name: "FOMO", tldr: "Social trading", dateInvested: "2025Q1", date: "2025-03-13", link: "https://x.com/seyong/", status: "Active", priority: 2, logoDomain: "fomo.family" },
  { id: 20, name: "Rip.fun", tldr: "TCG Pokemon cards", dateInvested: "2025Q2", date: "2025-06-09", link: "https://rip.fun/", status: "Active" },
  { id: 21, name: "$ZORA", tldr: "IG onchain", dateInvested: "2025Q2", date: "2025-06-09", link: "https://zora.co/", status: "Exited" },
  { id: 22, name: "Poof", tldr: "Vibecode Solana Apps", dateInvested: "2025Q3", date: "2025-07-15", link: "https://poof.new/", status: "Active", priority: 7 },
  { id: 23, name: "Sperm Racing", tldr: "Mens health and longevity", dateInvested: "2025Q3", date: "2025-07-15", link: "https://www.spermracing.com/", status: "Active" },
  { id: 24, name: "FXHash", tldr: "Web3 art", dateInvested: "2025Q3", date: "2025-08-28", link: "https://www.fxhash.xyz/", status: "Shutdown" },
  { id: 25, name: "Pandemic Labs", tldr: "Viral onchain games", dateInvested: "2025Q4", date: "2025-10-22", link: "https://www.pndm.org/", status: "Shutdown" },
  { id: 26, name: "Firefly", tldr: "Web3 everything app", dateInvested: "2025Q4", date: "2025-12-05", link: "https://firefly.social/following/posts", status: "Active" },
  { id: 27, name: "Giggles", tldr: "Trade trends", dateInvested: "2025Q4", date: "2025-11-13", link: "https://www.googlegiggles.com/", status: "Active" },
  { id: 28, name: "Offramp", tldr: "Web3 Neobank", dateInvested: "2025Q4", date: "2025-11-27", link: "https://offramp.xyz/", status: "Active" },
  { id: 29, name: "EarnOS", tldr: "The internet's reward program", dateInvested: "2025Q4", date: "2025-11-28", link: "https://app.earnos.com/", status: "Active" },
  { id: 30, name: "Berry", tldr: "LatAm onchain Robinhood", dateInvested: "2026Q1", date: "2026-01-07", link: "https://berryinvesting.com/", status: "Active", priority: 5 },
  { id: 31, name: "Littio", tldr: "Web3 Neobank", dateInvested: "2026Q1", date: "2026-01-27", link: "https://littio.co/en/", status: "Active", priority: 6 },
  { id: 32, name: "TypeX", tldr: "The first web3 keyboard", dateInvested: "2026Q1", date: "2026-01-15", link: "", status: "Active" },
  { id: 33, name: "Longshot", tldr: "Onchain Parlay protocol", dateInvested: "2026Q1", link: "https://longshot.xyz/", status: "Active" },
  { id: 34, name: "Frens", tldr: "Onchain group chats", dateInvested: "2023Q3", date: "2023-09-08", link: "https://frens.lol/", status: "Active" },
  { id: 35, name: "Bonsai", tldr: "Lens memecoin", dateInvested: "2024Q2", date: "2024-04-08", link: "", status: "Shutdown" },
  { id: 36, name: "Infomon", tldr: "AI creature game on X", dateInvested: "2024Q2", date: "2024-05-31", link: "https://x.com/Infomon_ai", status: "Active" },
  { id: 37, name: "PuffPaw", tldr: "Vape-to-earn", dateInvested: "2024Q3", date: "2024-08-08", link: "https://www.puffpaw.xyz/", status: "Active" },
  { id: 38, name: "Wildcard", tldr: "Farcaster social tipping", dateInvested: "2024Q3", date: "2024-08-08", link: "", status: "Shutdown" },
  { id: 39, name: "Pulse", tldr: "Web3 health wearable", dateInvested: "2024Q3", date: "2024-09-24", link: "", status: "Shutdown" },
  { id: 40, name: "Candlestick", tldr: "Copy trading", dateInvested: "2024Q4", date: "2024-12-04", link: "", status: "Shutdown" },
  { id: 41, name: "Blink", tldr: "Crypto payments app", dateInvested: "2026Q2", date: "2026-04-02", link: "https://blink.cash/", status: "Active" },
  { id: 42, name: "$BANKR", tldr: "AI trading agent", dateInvested: "2026Q2", date: "2026-04-10", link: "https://bankr.bot/", status: "Active" },
  { id: 43, name: "PreStocks", tldr: "Pre-IPO stocks onchain", dateInvested: "2026Q2", date: "2026-05-07", link: "https://prestocks.com/", status: "Active" },
  { id: 44, name: "Boski", tldr: "Personal AI agent", dateInvested: "2026Q4", date: "2026-10-01", link: "https://www.boski.com/", status: "Active" },
  { id: 45, name: "OpenTag", tldr: "AI coworker for Slack", dateInvested: "2026Q4", date: "2026-10-07", link: "https://www.tryopentag.com/", status: "Active" },
  { id: 46, name: "MetaDAO", tldr: "Futarchy token launchpad", dateInvested: "2026Q4", date: "2026-10-13", link: "https://metadao.fi/", status: "Active" },
  { id: 47, name: "Pearl Research", tldr: "Efficient AI inference", dateInvested: "2026Q4", date: "2026-10-13", link: "https://pearlresearch.ai/", status: "Active" },
];

const statusOrder: Record<CompanyStatus, number> = { Active: 0, Exited: 1, Shutdown: 2 };

/** Exact date if known, else the first day of the quarter ("2023Q4" -> Oct 1 2023) */
function sortKey(c: PortfolioCompany): number {
  if (c.date) return Date.parse(c.date);
  const year = parseInt(c.dateInvested.slice(0, 4), 10);
  const quarter = parseInt(c.dateInvested.slice(-1), 10);
  return Date.UTC(year, (quarter - 1) * 3, 1);
}

/** Format "2024Q3" → "Q3 2024" */
export function formatQuarter(d: string): string {
  return `Q${d.slice(-1)} ${d.slice(0, 4)}`;
}

/** Badge label for a status ("Shutdown" -> "Shut down") */
export function formatStatus(s: CompanyStatus): string {
  return s === "Shutdown" ? "Shut down" : s;
}

/** Extract domain from a company (prefers logoDomain, falls back to link domain, skips x.com) */
export function getLogoDomain(c: PortfolioCompany): string | null {
  if (c.logoDomain) return c.logoDomain;
  if (!c.link) return null;
  try {
    const host = new URL(c.link).hostname.replace("www.", "");
    if (host === "x.com" || host === "twitter.com") return null;
    // Strip "app." prefix for cleaner domain matching
    return host.replace(/^app\./, "");
  } catch {
    return null;
  }
}

/** Active first (prioritised ones up front), then Exited, then Shutdown; newest first within each group */
export const portfolioCompanies: PortfolioCompany[] = [...raw].sort(
  (a, b) =>
    statusOrder[a.status] - statusOrder[b.status] ||
    (a.priority ?? Infinity) - (b.priority ?? Infinity) ||
    sortKey(b) - sortKey(a)
);
