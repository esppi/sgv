export interface ThesisArea {
  title: string;
  summary: string;
  subFocusAreas: string[];
}

export const thesisAreas: ThesisArea[] = [
  {
    title: "Social Protocols",
    summary: "Decentralized identity and social graphs that put users in control of their data and relationships.",
    subFocusAreas: ["Decentralized Identity", "Social Graphs", "Creator Economies", "Reputation Systems"],
  },
  {
    title: "DeFi for the Masses",
    summary: "Consumer apps and middleware that enable permissionless finance to the masses.",
    subFocusAreas: ["Lending & Borrowing", "Decentralized Exchanges", "Stablecoins", "Real World Assets"],
  },
  {
    title: "AI x Crypto",
    summary: "The convergence of artificial intelligence and blockchain creating new paradigms for decentralized computation.",
    subFocusAreas: ["Data Marketplaces", "AI Agents", "Companions", "Vibecoding", "Simulations"],
  },
  {
    title: "Growth & Entertainment",
    summary: "New apps that make crypto more fun.",
    subFocusAreas: ["Cultural Prediction Markets", "Livestreaming", "UGC Marketing"],
  },
];
