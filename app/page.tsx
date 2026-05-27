import ContactsSection from "@/components/landing/sections/contacts-section";
import DatesSection from "@/components/landing/sections/dates-section";
import FeaturesSection from "@/components/landing/sections/features-section";
import HeroSection from "@/components/landing/sections/hero-section";
import IncludedSection from "@/components/landing/sections/included-section";
import MethodSection from "@/components/landing/sections/method-section";
import MastersSection from "@/components/landing/sections/masters-section";
import ProgramSection from "@/components/landing/sections/program-section";
import TestimonialsSection from "@/components/landing/sections/testimonials-section";
import WhoSection from "@/components/landing/sections/who-section";
import SiteHeader from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="landing-shell">
        <HeroSection />
        <MethodSection />
        <ProgramSection />
        <FeaturesSection />
        <MastersSection />
        <div className="paired-sections">
          <IncludedSection />
          <WhoSection />
        </div>
        <DatesSection />
        {/* <GallerySection /> */}
        {/* <TestimonialsSection /> */}
        <ContactsSection />
      </main>
    </>
  );
}
