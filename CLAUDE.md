# HospitAI Website — Build Context

## Project Overview

Build the pre-launch credibility website for **HospitAI** (hospitai.co.uk) — an AI-powered hotel operating system being developed under Tashid UK Limited. This is NOT a product sales site. The product does not exist yet. This website exists to establish credibility and legitimacy with universities, funding bodies, and future technical hires.

**Critical framing:** HospitAI is an independent technology company. It is NOT a hotel brand. It is NOT connected visually or aesthetically to Bastet (its pilot customer). The website should read as a serious AI/deep-tech company that happens to work in hospitality — not as a hospitality company that uses AI.

---

## Tech Stack

- **React 18** + **Vite** (NOT Next.js)
- **TypeScript**
- **Tailwind CSS** (v3.4+)
- **React Router** for client-side routing
- **Lucide React** for icons
- **Framer Motion** for animations (optional but recommended)
- Deployable to **Vercel**, **Netlify**, or **GitHub Pages** (static export)
- No backend, no CMS, no database — purely static

---

## Project Structure

```
hospitai-website/
├── public/
│   ├── favicon.svg
│   └── og-image.png
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css                    # Tailwind directives + custom styles
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Technology.tsx
│   │   ├── Pilot.tsx
│   │   ├── About.tsx
│   │   ├── Careers.tsx
│   │   └── Contact.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── PageLayout.tsx
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── CapabilitiesGrid.tsx
│   │   │   ├── MarketOpportunity.tsx
│   │   │   ├── PilotTeaser.tsx
│   │   │   └── CTASection.tsx
│   │   ├── technology/
│   │   │   ├── VisionStatement.tsx
│   │   │   ├── IntegrationDiagram.tsx
│   │   │   ├── CapabilityAreas.tsx
│   │   │   └── RDRoadmap.tsx
│   │   ├── pilot/
│   │   │   ├── PropertyOverview.tsx
│   │   │   ├── Timeline.tsx
│   │   │   └── TestbedValue.tsx
│   │   ├── about/
│   │   │   ├── CompanyStory.tsx
│   │   │   ├── GroupStructure.tsx
│   │   │   └── VisionMission.tsx
│   │   ├── careers/
│   │   │   ├── WhyJoin.tsx
│   │   │   ├── RoleCategories.tsx
│   │   │   └── RegisterInterest.tsx
│   │   ├── contact/
│   │   │   └── ContactForm.tsx
│   │   └── shared/
│   │       ├── SectionHeader.tsx
│   │       ├── StatCard.tsx
│   │       ├── NodeGraph.tsx        # Abstract interconnected nodes visual
│   │       ├── GlowCard.tsx         # Card with subtle glow/border effect
│   │       └── AnimatedCounter.tsx
│   └── lib/
│       ├── constants.ts             # All copy, stats, capability data
│       └── utils.ts
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── vite.config.ts
└── CLAUDE.md
```

---

## Pages & Content

### 1. Homepage (`/`)

The homepage is the primary landing page. It should immediately communicate: "This is a real AI technology company with a serious vision and a live deployment."

**Sections in order:**

1. **Hero** — Full-viewport dark section. Large headline, subheadline, and a subtle abstract visual (node graph, data flow, or interconnected system diagram). No stock photos. No hotel imagery.
   - Headline: "The AI operating system for hotels"
   - Subheadline: "One integrated platform. Every system connected. Built for the properties the industry forgot."
   - Single CTA: "Explore our vision" → links to /technology

2. **What We're Building** — Brief overview of HospitAI's integrated approach. 2-3 short paragraphs explaining the problem (fragmented point solutions) and the solution (unified AI layer). Keep it high-level and visionary.

3. **Capability Areas** — Six cards displayed in a grid (2×3 on desktop, stacked on mobile). Each card has an icon, title, and 1-2 sentence description. Use abstract, technical language — NOT product feature descriptions.
   - Energy Optimisation
   - Revenue & Pricing Intelligence
   - Guest Services & Communication
   - Predictive Maintenance
   - Smart Room & Building Automation
   - Operational Intelligence & Security

4. **Market Opportunity** — Data-driven section with animated counters or stat cards:
   - 187,000 hotels globally
   - 17.5M rooms worldwide
   - $220B hospitality tech market by 2030
   - Aparthotel segment: fastest growing, lowest tech adoption

5. **Pilot Teaser** — Brief mention of the 270-unit pilot property under construction. Link to /pilot for details. Frame as "real-world testbed" not "our hotel."

6. **Contact CTA** — Simple "Get in touch" section with link to /contact.

### 2. Technology / Vision (`/technology`)

This is the most important page for universities and technical hires. It should communicate the R&D vision clearly without claiming the product is built.

**Sections:**

1. **Vision Statement** — Why integrated AI matters in hospitality. The problem of fragmented point solutions. The opportunity for cross-system intelligence.

2. **Integration Architecture** — Visual diagram (built in CSS/SVG, not an image) showing how the six capability areas connect through a shared data layer and unified guest profiles. This is the core visual that communicates the platform concept.

3. **Capability Deep Dives** — Expanded cards for each of the six areas. For each:
   - What problem it addresses
   - The AI/ML approach (high level — e.g., "reinforcement learning for dynamic pricing," "NLP for multilingual guest communication," "anomaly detection for predictive maintenance")
   - Why integration with other systems creates compounding value
   - Frame as R&D vision, not product spec

4. **R&D Approach** — Brief section on the company's approach to development. Mention:
   - UK-based R&D with international deployment
   - University collaboration interest (KTP, Innovate UK)
   - Real-world testbed for validation
   - Open to academic partnerships

### 3. Pilot Project (`/pilot`)

Presents Bastet Hurghada as a client project / pilot deployment — NOT as a sister brand.

**Sections:**

1. **The Testbed** — Why a real property under construction is the ideal proving ground. 270 units, greenfield deployment, every system designed from day one for AI integration.

2. **Property Overview** — Key facts presented cleanly:
   - 270 units (studios, 1-bed, 2-bed, penthouses)
   - ~32,000 sqm total
   - Kawthar District, Hurghada, Egypt
   - Opening Q2 2027

3. **Timeline** — Visual timeline showing:
   - Structure complete (April 2026)
   - MEP & smart infrastructure (April–September 2026)
   - AI systems integration (December 2026–March 2027)
   - Soft launch (Q2 2027)
   - Performance validation (2027–2029)

4. **Why This Property** — Bullet points on why it's an ideal testbed:
   - Greenfield — every system designed for AI from day one
   - 270 units — meaningful scale for data and validation
   - Emerging market (Egypt) — high-impact environment for efficiency gains
   - Aparthotel format — the exact segment HospitAI targets
   - Real operational data from day one

### 4. About (`/about`)

Lean company page. Early-stage but intentional.

**Sections:**

1. **Company Story** — HospitAI was founded to solve a specific problem: hospitality technology is fragmented, expensive, and built for the wrong properties. We're building the integrated AI operating system the industry needs — purpose-built for aparthotels and extended-stay properties in high-growth markets.

2. **Group Structure** — Simple visual showing:
   - Tashid UK Limited (parent company / investment group)
   - HospitAI (AI technology subsidiary — UK-based R&D and IP)
   - Bastet Hurghada (first pilot customer — separate hotel brand)

3. **Vision & Mission:**
   - Vision: "To make every hotel intelligent — starting with the properties the industry forgot."
   - Mission: "We're building an integrated AI operating system for aparthotels and extended-stay properties, starting with high-growth emerging markets where technology can have the greatest impact."

4. **Key Facts:**
   - Registered in the UK (Tashid UK Limited)
   - UK-developed intellectual property
   - First pilot: 270-unit property in Egypt, opening Q2 2027
   - Sector: Hospitality AI / PropTech
   - Stage: Pre-revenue, development phase

### 5. Careers / Join Us (`/careers`)

No active listings. This is a recruitment signal page.

**Sections:**

1. **Why Join** — Aspirational copy about building something from zero. Ground-floor opportunity. Real-world AI deployment, not theoretical research. UK-based team with international impact.

2. **What We're Looking For** — Role categories (not job posts):
   - **CTO / Technical Co-founder** — Lead the platform architecture and engineering team
   - **AI/ML Engineers** — Build the models that power energy, pricing, and guest intelligence
   - **Data Scientists** — Design the data pipelines and analytics that drive cross-system intelligence
   - **Full-Stack Engineers** — Build the platform, APIs, and operator dashboards
   - **Product & Domain Experts** — Bridge the gap between AI capability and hospitality operations

3. **What We Offer** — Brief list:
   - Equity participation (early-stage opportunity)
   - UK-based with flexible/remote options
   - Real deployment environment (not just research)
   - Direct impact on a $220B market
   - Innovate UK / KTP collaboration opportunities

4. **Register Interest** — Simple form: name, email, LinkedIn URL, brief note. Stored client-side or mailto: link. No backend required.

### 6. Contact (`/contact`)

Simple, professional contact page.

- Brief intro: "HospitAI is in active development. Whether you're a university exploring research partnerships, a funding body evaluating innovation in hospitality, or a technologist interested in what we're building — we'd like to hear from you."
- Contact form: name, email, organisation, message
- Form can use mailto: link, Formspree, or similar no-backend solution
- Email: hello@hospitai.co.uk (display only — actual form handling is separate)
- No phone number. No address. No "book a demo."

---

## Brand & Design System

### Colour Palette

```
// Primary
navy-950:     #0A0F1C    // Deepest background
navy-900:     #0F1729    // Primary background
navy-800:     #162033    // Card backgrounds, elevated surfaces
navy-700:     #1E2D44    // Borders, dividers

// Accent
cyan-400:     #22D3EE    // Primary accent — links, highlights, active states
cyan-500:     #06B6D4    // Secondary accent
cyan-300:     #67E8F9    // Light accent for subtle highlights
emerald-400:  #34D399    // Secondary accent — success, energy/sustainability topics

// Text
white:        #FFFFFF    // Primary text on dark backgrounds
slate-300:    #CBD5E1    // Secondary/body text
slate-400:    #94A3B8    // Muted text, captions
slate-500:    #64748B    // Disabled/placeholder text

// Utility
red-400:      #F87171    // Error states
amber-400:    #FBBF24    // Warning/attention
```

### Typography

- **Headings:** Inter or Space Grotesk (clean, geometric sans-serif)
- **Body:** Inter (highly legible at all sizes)
- **Monospace:** JetBrains Mono (for any code-like or data elements)
- No decorative fonts. No serif fonts. No display fonts.
- Font weights: 400 (body), 500 (medium emphasis), 600 (semibold headings), 700 (bold headlines)

### Design Principles

1. **Dark mode throughout** — navy-950/navy-900 backgrounds. Light text. Never white backgrounds.
2. **Generous whitespace** — Sections should breathe. Minimum 6rem vertical padding between sections.
3. **Subtle depth** — Use very subtle gradients, faint border glows (cyan at 10-15% opacity), and soft shadows to create depth without being flashy.
4. **Technical aesthetic** — Abstract node graphs, connection lines, data flow visualisations. Think: neural networks, system architecture diagrams, interconnected nodes.
5. **No stock photography** — All visuals are generated through CSS/SVG: geometric patterns, animated gradients, node networks, grid overlays.
6. **Restrained animation** — Subtle fade-ins on scroll, counter animations for stats. No bouncing, no parallax, no heavy motion.
7. **Asymmetric layouts** — Avoid everything being centred. Use left-aligned text with right-side graphics. Vary section layouts.
8. **Data-forward** — Use numbers and metrics prominently. Stats should feel grounded and real.

### Component Patterns

**GlowCard** — Card with a faint cyan border glow on hover:
```
bg-navy-800/50 border border-navy-700 hover:border-cyan-400/30
rounded-lg p-6 transition-all duration-300
```

**Section Header** — Left-aligned by default:
```
<span class="text-cyan-400 text-sm font-medium tracking-wider uppercase">Label</span>
<h2 class="text-3xl md:text-4xl font-semibold text-white mt-2">Heading</h2>
<p class="text-slate-400 mt-4 max-w-2xl">Description</p>
```

**Stat Card** — Large number with label:
```
<div class="text-4xl font-bold text-white">187,000</div>
<div class="text-slate-400 text-sm mt-1">Hotels globally</div>
```

**Navbar** — Fixed, transparent on hero, solid navy-900 on scroll. Logo left, nav links right, "Get in touch" CTA button.

**Footer** — Minimal. Logo, nav links, "Part of Tashid UK Limited," copyright. No social media links (company doesn't have them yet).

---

## Key Copy & Messaging Guidelines

### Tone
- Confident but not arrogant
- Technical but accessible
- Forward-looking but grounded in reality
- Concise — no marketing fluff

### Words to USE
- "integrated," "unified," "cross-system"
- "purpose-built," "sector-specific"
- "emerging markets," "high-growth"
- "R&D," "research," "validation"
- "testbed," "pilot," "proving ground"
- "intelligence," "optimisation"

### Words to AVOID
- "revolutionary," "disruptive," "game-changing"
- "cutting-edge," "next-generation"
- "book a demo," "pricing," "plans"
- "our hotel," "our property" (it's a client/pilot)
- "luxury," "experience" (hotel marketing language)
- Any product module names (e.g., "HospitAI Energy Pro")
- "blockchain," "metaverse," "web3"

### Framing Rules
- The six capability areas are R&D directions, not finished products
- Bastet Hurghada is a pilot deployment / first customer, not "our hotel"
- HospitAI is a technology company, not a hotel operator
- The product is in development — be honest about stage without undermining credibility
- Market data should be cited with confidence (the numbers are real)
- University partnerships are aspirational but concrete (KTP, Innovate UK are real programmes)

---

## Data & Facts Reference

### Market Data (use on homepage and throughout)
- 187,000 hotels globally, 17.5 million rooms
- Hospitality tech market projected to reach $220B by 2030
- Aparthotel segment is fastest growing but has lowest tech adoption
- Hospitality has one of the lowest AI adoption rates among major economic sectors
- Egypt tourism: 15.8M visitors in 2024, government targeting 30M by 2028-2030

### Pilot Property Facts (use on /pilot page)
- 270 units: 180 studios, 76 one-bedroom, 10 two-bedroom, 4 penthouses
- ~32,000 sqm total built area
- Kawthar District, Hurghada, Red Sea, Egypt
- Ground + 4 floors + rooftop
- Opening Q2 2027
- Skeleton phase completing mid-April 2026
- MEP phase: April–September 2026
- Smart systems integration: December 2026–March 2027
- Smart tech CAPEX budget: $800K–$1.2M
- Projected AI impact: $970K–$1.53M annual benefit per 270-unit property
  - Staff cost savings: $600K–$900K (50-55% headcount reduction)
  - Energy savings: $150K–$250K (20-30% reduction)
  - Revenue uplift: $300K–$500K (8-15% RevPAR increase)
- Technology payback period: under 1 year
- GOP margin improvement: 8-12 percentage points above industry benchmark

### Company Structure
- **Tashid UK Limited** — Parent company / investment group (UK-registered)
- **HospitAI** — AI technology subsidiary (UK-based R&D, IP ownership)
- **Bastet Hurghada** — First pilot customer (separate hotel brand, Egypt-based entity)

### Funding & Partnership Context (for Technology page)
- Innovate UK programmes: BridgeAI (£25K–£1.2M), Smart Grants (£25K–£2M)
- Knowledge Transfer Partnerships (KTP) with UK universities
- R&D Tax Credits (up to 27% of qualifying spend)
- UKEF export finance potential
- UK International Climate Finance (Egypt qualifies)

---

## AI Capability Areas — Detailed Descriptions

Use these for the Technology page deep dives. Frame as R&D vision, not product spec.

### 1. Energy Optimisation
ML-driven optimisation of HVAC, lighting, and water systems using occupancy data, weather forecasts, and guest preferences. Cross-system intelligence means the energy system knows when guests are checking in, when events are scheduled, and when maintenance is planned — enabling predictive rather than reactive energy management.

### 2. Revenue & Pricing Intelligence
Real-time rate optimisation using demand signals, competitor pricing, booking pace, and local events. Integration with the energy and operations systems means the pricing engine can factor in operational capacity and cost dynamics — not just demand.

### 3. Guest Services & Communication
Multilingual NLP-powered communication handling 80%+ of routine guest inquiries across app, messaging, and in-lobby interfaces. Connected to all other systems, so the AI knows about maintenance schedules, energy states, pricing, and operational status when responding to guests.

### 4. Predictive Maintenance
IoT sensor networks with ML anomaly detection for HVAC, plumbing, and electrical systems. Predicts failures before they impact guests. Connected to the energy system for efficiency correlation and to guest services for proactive communication.

### 5. Smart Room & Building Automation
Occupancy-aware automation of lighting, climate, and access. Preference learning creates personalised environments. Connected to energy optimisation for efficiency and to guest profiles for continuity across stays.

### 6. Operational Intelligence & Security
Computer vision and data analytics for security, occupancy monitoring, and operational insights. Connected to energy, maintenance, and guest systems for a unified operational picture.

---

## What NOT to Build

- No booking engine, no reservation system
- No pricing page, no product tiers
- No "book a demo" CTA anywhere
- No user authentication or login
- No blog (unless specifically requested later)
- No stock hotel photography
- No Egyptian motifs, warm gold tones, or luxury aesthetic
- No animations that feel like a SaaS marketing template
- No chatbot or AI assistant widget
- No social media links or feeds
- No testimonials (there are no customers yet)
- No team photos or bios (team is being assembled)
- No "powered by" or technology partner logos

---

## SEO & Meta

- Title format: "HospitAI — [Page Title]"
- Meta description: Focus on AI operating system for hotels, UK-developed, integrated platform
- OG image: Dark, branded graphic with HospitAI logo and tagline
- Canonical domain: hospitai.co.uk
- robots.txt: Allow all
- sitemap.xml: Include all pages

---

## Performance Requirements

- Lighthouse score: 90+ on all categories
- No external API calls on page load
- Lazy load below-fold sections
- Optimise all SVG/CSS animations for 60fps
- Total bundle size target: under 200KB gzipped
- First contentful paint: under 1.5s

---

## Tailwind Config

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0A0F1C',
          900: '#0F1729',
          800: '#162033',
          700: '#1E2D44',
          600: '#2A3F5F',
        },
        cyan: {
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
        },
        emerald: {
          400: '#34D399',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## Implementation Notes

1. **Start with the layout shell** — Navbar + Footer + PageLayout wrapper with React Router
2. **Build the homepage first** — It's the most content-dense and sets the design system
3. **Create shared components early** — SectionHeader, GlowCard, StatCard will be reused everywhere
4. **Build the NodeGraph component** — An abstract SVG/CSS visual of interconnected nodes that can be reused on Home and Technology pages. This is the signature visual element.
5. **Keep all copy in constants.ts** — Makes it easy to iterate on messaging without touching component logic
6. **Contact form** — Use Formspree (formspree.io) or a simple mailto: link. No backend.
7. **The Technology page integration diagram** — This should be a custom SVG/CSS component showing six capability nodes connected to a central "Shared Intelligence Layer." It's the most important visual on the entire site.

---

## Deployment

The site should export as static files. Configure Vite for static build:

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
```

For GitHub Pages, add a `404.html` that redirects to `index.html` for client-side routing support.
