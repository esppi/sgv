export type CompanyStatus = "Active" | "Acquired" | "Divested";

export interface PortfolioCompany {
  id: number;
  name: string;
  tldr: string;
  team: string;
  dateInvested: string;   // e.g. "2023Q4"
  link: string;
  status: CompanyStatus;
  priority?: number;      // optional display priority (lower = shown first)
  logoDomain?: string;    // domain for logo lookup (overrides link domain)
}

const raw: PortfolioCompany[] = [
  { id: 1, name: "Orb", tldr: "Leading Lens client", team: "Nilesh and Kimmo", dateInvested: "2023Q4", link: "https://orb.club/", status: "Acquired" },
  { id: 2, name: "Neynar / Farcaster", tldr: "Leading web3 social protocol", team: "Rish and Manan", dateInvested: "2023Q4", link: "https://farcaster.xyz/", status: "Active", priority: 1, logoDomain: "neynar.com" },
  { id: 3, name: "Pods", tldr: "Podcasting", team: "Lucas and Dan", dateInvested: "2023Q4", link: "https://pods.media/", status: "Divested" },
  { id: 4, name: "Seam / Tome", tldr: "Upcoming fantasy reading social network", team: "Nick", dateInvested: "2024Q1", link: "https://tomebooks.com/", status: "Active" },
  { id: 5, name: "Unlonely", tldr: "Livestreaming", team: "Brian", dateInvested: "2024Q1", link: "https://x.com/bdguan", status: "Active", logoDomain: "unlonely.app" },
  { id: 6, name: "Receipts", tldr: "Community driven strava", team: "Victor and Steph", dateInvested: "2024Q1", link: "http://receipts.xyz/", status: "Active" },
  { id: 7, name: "MBD", tldr: "Onchain recommendation APIs", team: "Yassine", dateInvested: "2024Q2", link: "https://getembed.ai/", status: "Active", logoDomain: "mbd.xyz" },
  { id: 8, name: "Discove", tldr: "Onchain social primitives", team: "David", dateInvested: "2024Q2", link: "https://x.com/davidvfurlong", status: "Active", logoDomain: "discove.xyz" },
  { id: 9, name: "Uno", tldr: "Farcaster client", team: "Chris", dateInvested: "2024Q2", link: "https://uno.fun/", status: "Active" },
  { id: 10, name: "Tapestry / Zumi", tldr: "AI companion", team: "David", dateInvested: "2024Q2", link: "https://x.com/usetapestry", status: "Active", logoDomain: "usetapestry.xyz" },
  { id: 11, name: "Confetti", tldr: "Onchain contests", team: "David and Siobhan", dateInvested: "2024Q2", link: "https://confetti.win/", status: "Active" },
  { id: 12, name: "Ponder", tldr: "Social prediction markets", team: "Colin", dateInvested: "2024Q3", link: "https://app.tomorrow.fun/", status: "Active" },
  { id: 13, name: "Cue", tldr: "Cultural prediction markets", team: "Winnie", dateInvested: "2024Q3", link: "https://cue.market/app/markets", status: "Active" },
  { id: 14, name: "4DHD", tldr: "Attention protocol", team: "Mike", dateInvested: "2024Q3", link: "https://www.4dhd.org/", status: "Active" },
  { id: 15, name: "Simcluster", tldr: "Sims for AIs", team: "Harvey", dateInvested: "2024Q4", link: "https://simcluster.ai/", status: "Active", priority: 3 },
  { id: 16, name: "Rodeo", tldr: "NFTs social network", team: "Kayvon", dateInvested: "2025Q1", link: "https://x.com/saturnial", status: "Active", logoDomain: "rodeo.club" },
  { id: 17, name: "$CLANKER", tldr: "Base launchpad", team: "Jack", dateInvested: "2025Q1", link: "https://farcaster.xyz/clanker", status: "Active", logoDomain: "clanker.world" },
  { id: 18, name: "Daisy", tldr: "Influencer marketing boosting platform", team: "Ray and Ian", dateInvested: "2025Q1", link: "https://daisypay.io/", status: "Active", priority: 4 },
  { id: 19, name: "FOMO", tldr: "Social trading", team: "Paul and Se", dateInvested: "2025Q1", link: "https://x.com/seyong/", status: "Active", priority: 2, logoDomain: "fomo.family" },
  { id: 20, name: "Rip.fun", tldr: "TCG Pokemon cards", team: "Lucas and Jake", dateInvested: "2025Q2", link: "https://rip.fun/", status: "Active" },
  { id: 21, name: "$ZORA", tldr: "IG onchain", team: "Jacob and Dee", dateInvested: "2025Q2", link: "https://zora.co/", status: "Active" },
  { id: 22, name: "Poof", tldr: "Vibecode Solana Apps", team: "Amit and Bilal", dateInvested: "2025Q3", link: "https://poof.new/", status: "Active", priority: 7 },
  { id: 23, name: "Sperm Racing", tldr: "Mens health and longevity", team: "Eric and Nick", dateInvested: "2025Q3", link: "https://www.spermracing.com/", status: "Active" },
  { id: 24, name: "FXHash", tldr: "Web3 art", team: "Ciphrd and Paul", dateInvested: "2025Q3", link: "https://www.fxhash.xyz/", status: "Active" },
  { id: 25, name: "Pandemic Labs", tldr: "Viral onchain games", team: "Tuna", dateInvested: "2025Q4", link: "https://www.pndm.org/", status: "Active" },
  { id: 26, name: "Firefly", tldr: "Web3 everything app", team: "Suji", dateInvested: "2025Q4", link: "https://firefly.social/following/posts", status: "Active" },
  { id: 27, name: "Giggles", tldr: "Trade trends", team: "Justin", dateInvested: "2025Q4", link: "https://www.googlegiggles.com/", status: "Active" },
  { id: 28, name: "Offramp", tldr: "Web3 Neobank", team: "Luc", dateInvested: "2025Q4", link: "https://offramp.xyz/", status: "Active" },
  { id: 29, name: "EarnOS", tldr: "The internet's reward program", team: "Phil and Tom", dateInvested: "2025Q4", link: "https://app.earnos.com/", status: "Active" },
  { id: 30, name: "Berry", tldr: "LatAm onchain Robinhood", team: "Lucca", dateInvested: "2026Q1", link: "https://berryinvesting.com/", status: "Active", priority: 5 },
  { id: 31, name: "Littio", tldr: "Web3 Neobank", team: "Christian", dateInvested: "2026Q1", link: "https://littio.co/en/", status: "Active", priority: 6 },
  { id: 32, name: "TypeX", tldr: "The first web3 keyboard", team: "Young and Junbo", dateInvested: "2026Q1", link: "", status: "Active" },
  { id: 33, name: "Longshot", tldr: "Onchain Parlay protocol", team: "Mikey and Terry", dateInvested: "2026Q1", link: "", status: "Active" },
];

/** Parse "2023Q4" → numeric sortable value (2023.75) */
function dateToSortKey(d: string): number {
  const year = parseInt(d.slice(0, 4), 10);
  const quarter = parseInt(d.slice(-1), 10);
  return year + (quarter - 1) * 0.25;
}

/** Format "2024Q3" → "Q3 2024" */
export function formatQuarter(d: string): string {
  return `Q${d.slice(-1)} ${d.slice(0, 4)}`;
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

/** Prioritised companies first (ascending), then by timeline (ascending) */
export const portfolioCompanies: PortfolioCompany[] = [
  ...raw.filter((c) => c.priority != null).sort((a, b) => a.priority! - b.priority!),
  ...raw.filter((c) => c.priority == null).sort((a, b) => dateToSortKey(a.dateInvested) - dateToSortKey(b.dateInvested)),
];
