import { Zap, TrendingUp, MessageSquare, Wrench, Home, Shield } from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Technology', href: '/technology' },
  { label: 'Pilot', href: '/pilot' },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
];

export const HERO = {
  headline: 'The AI operating system for hotels',
  subheadline:
    'One integrated platform. Every system connected. Built for the properties the industry forgot.',
  cta: { label: 'Explore our vision', href: '/technology' },
};

export const WHAT_WERE_BUILDING = {
  label: 'What we\'re building',
  heading: 'An integrated intelligence layer for hotel operations',
  paragraphs: [
    'Hotels rely on dozens of disconnected systems — none of which talk to each other.',
    'HospitAI connects every operational system through a shared intelligence layer. When one system learns, they all get smarter.',
  ],
};

export const CAPABILITIES = [
  {
    icon: Zap,
    title: 'Energy Optimisation',
    description: 'ML-driven HVAC, lighting, and water optimisation using occupancy and weather data.',
    approach: 'Reinforcement learning integrating occupancy predictions with weather and utility pricing.',
    problem: 'Hotels waste 30-40% of energy through reactive, schedule-based systems.',
    integration: 'Connected to occupancy, maintenance, and booking data for predictive energy management.',
  },
  {
    icon: TrendingUp,
    title: 'Revenue & Pricing',
    description: 'Real-time rate optimisation using demand signals, competitors, and local events.',
    approach: 'Dynamic pricing factoring demand, competitor behaviour, and operational capacity.',
    problem: 'Disconnected revenue management ignores the relationship between costs and pricing.',
    integration: 'Pricing that understands energy costs, maintenance capacity, and staffing — not just demand.',
  },
  {
    icon: MessageSquare,
    title: 'Guest Services',
    description: 'Multilingual NLP handling 80%+ of routine inquiries across all channels.',
    approach: 'LLM fine-tuned for hospitality with context-aware responses from live operational data.',
    problem: 'Guest communication is expensive, inconsistent, and disconnected from operations.',
    integration: 'AI responds with full awareness of maintenance, energy, pricing, and operational status.',
  },
  {
    icon: Wrench,
    title: 'Predictive Maintenance',
    description: 'IoT sensor networks with ML anomaly detection across building systems.',
    approach: 'Anomaly detection trained on sensor patterns to predict failures before impact.',
    problem: 'Reactive maintenance costs 3-5x more and directly impacts guest experience.',
    integration: 'Connected to energy, guest services, and pricing for capacity-aware scheduling.',
  },
  {
    icon: Home,
    title: 'Smart Rooms',
    description: 'Occupancy-aware automation with preference learning for personalised environments.',
    approach: 'Edge computing for real-time control, cloud-based preference learning across stays.',
    problem: 'Room automation operates in isolation, missing efficiency and personalisation opportunities.',
    integration: 'Connected to energy, guest profiles, and maintenance for a unified room experience.',
  },
  {
    icon: Shield,
    title: 'Operational Intelligence',
    description: 'Computer vision and analytics for security, occupancy, and operational insights.',
    approach: 'Privacy-preserving computer vision combined with operational data fusion.',
    problem: 'Security, occupancy, and analytics exist as separate silos.',
    integration: 'Unified operational picture across energy, maintenance, and guest systems.',
  },
];

export const MARKET_STATS = [
  { value: 187000, label: 'Hotels globally', suffix: '' },
  { value: 17.5, label: 'Rooms worldwide', suffix: 'M' },
  { value: 220, label: 'Hospitality tech market by 2030', prefix: '$', suffix: 'B' },
  { value: 1, label: 'Aparthotels: fastest growing, lowest tech adoption', suffix: 'st', isOrdinal: true },
];

export const PILOT_FACTS = {
  units: 270,
  breakdown: '180 studios, 76 one-bed, 10 two-bed, 4 penthouses',
  area: '~32,000 sqm',
  location: 'Kawthar District, Hurghada, Egypt',
  floors: 'Ground + 4 floors + rooftop',
  opening: 'Q2 2027',
};

export const PILOT_TIMELINE = [
  { date: 'April 2026', title: 'Structure Complete', description: 'Building envelope sealed. Ready for internal works.' },
  { date: 'Apr – Sep 2026', title: 'MEP & Smart Infrastructure', description: 'Smart infrastructure backbone installed throughout.' },
  { date: 'Dec 2026 – Mar 2027', title: 'AI Systems Integration', description: 'Sensors, automation, and intelligence layer brought online.' },
  { date: 'Q2 2027', title: 'Soft Launch', description: 'Full AI integration from day one.' },
  { date: '2027 – 2029', title: 'Performance Validation', description: 'Data collection, model refinement, benchmark measurement.' },
];

export const PILOT_TARGETS = [
  { label: 'Operational efficiency', description: 'Automate routine tasks across guest services, energy, and maintenance.' },
  { label: 'Energy reduction', description: 'Occupancy-aware HVAC, lighting, and water management.' },
  { label: 'Revenue optimisation', description: 'Dynamic pricing informed by demand, costs, and capacity.' },
  { label: 'Faster response times', description: 'AI-assisted triage for guest service and maintenance.' },
];

export const TESTBED_REASONS = [
  'Greenfield — every system designed for AI from day one',
  '270 units — meaningful scale for validation',
  'Emerging market — high-impact environment',
  'Aparthotel format — the exact segment we target',
  'Real operational data from day one',
];

export const COMPANY_FACTS = [
  { label: 'Registered in', value: 'United Kingdom' },
  { label: 'IP', value: 'UK-developed' },
  { label: 'First pilot', value: '270 units, Egypt, Q2 2027' },
  { label: 'Sector', value: 'Hospitality AI / PropTech' },
  { label: 'Stage', value: 'Pre-revenue, development' },
];

export const ROLE_CATEGORIES = [
  { title: 'CTO / Technical Co-founder', description: 'Lead platform architecture and engineering.' },
  { title: 'AI/ML Engineers', description: 'Build models for energy, pricing, and guest intelligence.' },
  { title: 'Data Scientists', description: 'Design pipelines and analytics for cross-system intelligence.' },
  { title: 'Full-Stack Engineers', description: 'Build the platform, APIs, and operator dashboards.' },
  { title: 'Product & Domain Experts', description: 'Bridge AI capability and hospitality operations.' },
];

export const WHAT_WE_OFFER = [
  'Equity participation',
  'UK-based, flexible/remote',
  'Real deployment environment',
  'Direct impact on a $220B market',
];
