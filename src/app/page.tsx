import { Hero } from "@/components/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { FeaturedProject } from "@/components/home/FeaturedProject";
import { ExpertisePreview } from "@/components/home/ExpertisePreview";
import { AwardsPreview } from "@/components/home/AwardsPreview";
import { CTABanner } from "@/components/home/CTABanner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutPreview />
      <FeaturedProject />
      <ExpertisePreview />
      <AwardsPreview />
      <CTABanner />
    </main>
  );
}
