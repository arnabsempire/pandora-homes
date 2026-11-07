import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturedRooms } from "@/components/sections/featured-rooms";
import { StatsSection } from "@/components/sections/stats-section";
import { AmenitiesSection } from "@/components/sections/amenities-section";
import { CTASection } from "@/components/sections/cta-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { WhySection } from "@/components/sections/why-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturedRooms />
        <WhySection />
        <GallerySection />
        <AmenitiesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
