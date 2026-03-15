import HeroSection from '@/components/home/HeroSection';
import WhatWereBuilding from '@/components/home/WhatWereBuilding';
import CapabilitiesGrid from '@/components/home/CapabilitiesGrid';
import MarketOpportunity from '@/components/home/MarketOpportunity';
import PilotTeaser from '@/components/home/PilotTeaser';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatWereBuilding />
      <CapabilitiesGrid />
      <MarketOpportunity />
      <PilotTeaser />
      <CTASection />
    </>
  );
}
