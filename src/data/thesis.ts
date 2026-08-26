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
    title: "AI Applications",
    summary: "Consumer AI products that own the user relationship and cross into the mainstream.",
    subFocusAreas: ["AI Agents", "Companions", "Vibecoding", "Creative Tools", "Simulations"],
  },
  {
    title: "AI Infrastructure",
    summary: "The rails AI applications run on — agent tooling, data, compute, and payments.",
    subFocusAreas: ["Agent Infrastructure", "Data Marketplaces", "Inference & Compute", "Agentic Payments"],
  },
  {
    title: "Growth & Entertainment",
    summary: "New apps that make crypto more fun.",
    subFocusAreas: ["Cultural Prediction Markets", "Livestreaming", "UGC Marketing"],
  },
];
