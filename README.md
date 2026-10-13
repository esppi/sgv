# Social Graph Ventures (SGV) Website

The official website for Social Graph Ventures, a consumer crypto and AI venture fund.

**Live site:** Deployed on Vercel

## What is SGV?

Social Graph Ventures is a VC fund focused on consumer crypto and AI applications. The fund invests in early-stage startups building:

- **Social Protocols** - Decentralized identity, social graphs, creator economies
- **DeFi for the Masses** - Consumer DeFi, lending, DEXs, stablecoins, RWA
- **AI Applications** - AI agents, companions, vibecoding, creative tools
- **AI Infrastructure** - Agent tooling, data, compute, agentic payments
- **Growth & Entertainment** - Prediction markets, livestreaming, UGC marketing

## Tech Stack

- **React 19** + TypeScript
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Three Fiber** - 3D graphics (Mobius strip background)
- **Vercel** - Deployment

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
  components/       # React components
    ui/             # Reusable UI primitives (button, accordion)
    Hero.tsx        # Hero section
    Navbar.tsx      # Navigation
    PortfolioCarousel.tsx
    Team.tsx
    ...
  data/             # Static data
    portfolio.ts    # Portfolio companies (33 investments)
    team.ts         # Team and LPs
    thesis.ts       # Investment thesis areas
    approach.ts     # Fund approach
    metrics.ts      # Impact metrics
  hooks/            # Custom React hooks
  pages/            # Page components
    LandingPage.tsx
    PortfolioPage.tsx
    WritingPage.tsx
  lib/              # Utilities
public/             # Static assets
api/                # Vercel serverless functions
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with all sections |
| `/portfolio` | Full portfolio company list |
| `/writing` | Blog posts from Substack |

## Team

**Cofounders:**
- Jakub
- Morning Mist
- Brock (Analyst)

## License

Private repository.
