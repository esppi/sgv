export interface TeamMember {
  name: string;
  role: string;
  link?: string;
  isCofounder: boolean;
  priority?: number;
  image?: string; // custom avatar image path (in /public/team/)
}

export const cofounders: TeamMember[] = [
  { name: "Jakub", role: "Cofounder of SGV", link: "https://x.com/jakub_rusiecki", isCofounder: true },
  { name: "Morning Mist", role: "Cofounder of SGV", link: "https://x.com/0x_mist", isCofounder: true },
  { name: "Brock", role: "Analyst", link: "https://x.com/brockchainn", isCofounder: true },
];

const rawMembers: TeamMember[] = [
  { name: "P3terPan", role: "Partner at 1kx", link: "https://x.com/pet3rpan_", isCofounder: false, priority: 1 },
  { name: "Suji", role: "Founder of Mask", link: "https://x.com/suji_yan", isCofounder: false, priority: 2 },
  { name: "Victor", role: "Investor at Hydra Ventures", link: "https://x.com/twoirtter", isCofounder: false, priority: 3 },
  { name: "Matti", role: "GP at ZeePrime", link: "https://x.com/mattigags", isCofounder: false, priority: 4 },
  { name: "Lata", role: "Investor at Fabric", link: "https://x.com/LataPersson", isCofounder: false, priority: 5 },
  { name: "Eric", role: "Founder of Livepeer", link: "https://x.com/ericxtang", isCofounder: false },
  { name: "Sandeep", role: "Founder of Polygon", link: "https://x.com/sandeepnailwal", isCofounder: false },
  { name: "David", role: "Ecosystem at Base", link: "https://x.com/davidtsocy", isCofounder: false },
  { name: "Pratik", role: "Marketing at Eigen", link: "https://x.com/0xpratik", isCofounder: false },
  { name: "Long Solitude", role: "Partner at ZeePrime", link: "https://x.com/long_solitude", isCofounder: false },
  { name: "Cecilia", role: "Investments at Mask", link: "https://x.com/Cecilia_liCC", isCofounder: false },
  { name: "Nemo", role: "Investor at Daedalus", link: "https://x.com/ncerovac", isCofounder: false },
  { name: "Joe", role: "Investor at Beast Ventures", link: "https://x.com/TakayamaJoe", isCofounder: false },
  { name: "Lyuben", role: "Partner at LaunchHub", link: "https://x.com/lyuben", isCofounder: false },
  { name: "Ben M.", role: "Crypto investor", link: "https://x.com/pokiethepanda", isCofounder: false },
  { name: "Ryan", role: "Founder Cyberconnect", link: "https://x.com/ryanli", isCofounder: false },
  { name: "Blake", role: "Crypto investor", link: "https://x.com/BlakeGao", isCofounder: false },

  { name: "Lawson", role: "Crypto M&A", link: "https://x.com/lwsnbaker", isCofounder: false },
  { name: "KC", role: "Founder of Hooga", link: "https://x.com/vtes369", isCofounder: false },
  { name: "Evgeny", role: "Founder of Zerion", link: "https://x.com/evgeth_", isCofounder: false },
  { name: "Abi", role: "Product at Zerion", link: "https://x.com/abishek", isCofounder: false },
  { name: "Eldar", role: "Partner at Polymorphic", link: "https://x.com/eldar_pm", isCofounder: false },
  { name: "Prasanna", role: "Founder of 0xPPL and Rippling", link: "https://x.com/myprasanna", isCofounder: false },
  { name: "Leah", role: "Director of Emfarsis", link: "https://x.com/leah_cb", isCofounder: false },
  { name: "Vajresh", role: "Product at FantasticDay", link: "https://x.com/bvajresh", isCofounder: false },
  { name: "Parzival", role: "Partner at 3KeysLab", link: "https://x.com/parzivalsong3", isCofounder: false },
  { name: "Karan", role: "Founder of Wildcard", link: "https://x.com/defikaran", isCofounder: false },
  { name: "Hadrien", role: "Founder of Sismo", link: "https://x.com/dhadrien_", isCofounder: false },
  { name: "Kartik", role: "GP at Families fund", link: "https://x.com/sathaxe", isCofounder: false },
  { name: "Eric R.", role: "Investing at VentureClub", link: "https://x.com/eric_rsno", isCofounder: false },
  { name: "Sid", role: "Founder of Roll", link: "https://x.com/sidkal", isCofounder: false },
  { name: "Evgeny R.", role: "Founder at re7", link: "https://x.com/Re7Capital", isCofounder: false },
  { name: "Eskender", role: "Strategy at ENS", link: "https://x.com/esk3nder", isCofounder: false },
  { name: "Michael", role: "Director at Ava Labs", link: "https://x.com/mmartinxyz", isCofounder: false },
  { name: "James", role: "Founder of FireEyes", link: "https://x.com/blockchainjames", isCofounder: false },
  { name: "George", role: "PM at MoonPay", link: "https://x.com/Gkas23", isCofounder: false },
  { name: "TPan", role: "Director at MilkRoad", link: "https://x.com/TPan____", isCofounder: false },
  { name: "Sky", role: "Crypto investor", link: "https://farcaster.xyz/sky", isCofounder: false, image: "/team/sky.png" },
];

/** Extract X/Twitter username from a link, or null */
export function getTwitterHandle(link?: string): string | null {
  if (!link) return null;
  try {
    const url = new URL(link);
    if (url.hostname === "x.com" || url.hostname === "twitter.com") {
      const handle = url.pathname.split("/").filter(Boolean)[0];
      return handle || null;
    }
  } catch { /* ignore */ }
  return null;
}

/** Prioritised members first, then alphabetical */
export const teamMembers: TeamMember[] = [
  ...rawMembers.filter((m) => m.priority != null).sort((a, b) => a.priority! - b.priority!),
  ...rawMembers.filter((m) => m.priority == null).sort((a, b) => a.name.localeCompare(b.name)),
];
