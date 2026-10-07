import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturedRooms } from "@/components/sections/featured-rooms";
import { StatsSection } from "@/components/sections/stats-section";
import { AmenitiesSection } from "@/components/sections/amenities-section";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturedRooms />
        <AmenitiesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
