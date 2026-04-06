import ParticlesBackground from "@/components/ParticlesBackground";
import CloudScene from "@/components/CloudScene";
import HeroSection from "@/components/HeroSection";
import SectionDivider from "@/components/SectionDivider";
import InvitationSection from "@/components/InvitationSection";
import ParentSection from "@/components/ParentSection";
import LoveStoryCarousel from "@/components/LoveStoryCarousel";
import CountdownTimer from "@/components/CountdownTimer";
import CalendarSection from "@/components/CalendarSection";
import VenueSection from "@/components/VenueSection";
import RSVPSection from "@/components/RSVPSection";
import PhotoGallery from "@/components/PhotoGallery";
import Footer from "@/components/Footer";
import { PARENTS } from "@/lib/constants";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary relative">
      <ParticlesBackground />
      <CloudScene />

      <div className="relative z-10">
        <HeroSection />

        <SectionDivider variant="wave" fromColor="#ffffff" toColor="#ffffff" tintColor="rgba(186,230,253,0.2)" />

        <InvitationSection />

        <SectionDivider variant="curve" fromColor="#ffffff" toColor="#f0f9ff" />

        <section className="py-4 bg-bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: "radial-gradient(circle, #0ea5e9 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <ParentSection
            role="father"
            title={PARENTS.father.title}
            message={PARENTS.father.message}
          />
          <ParentSection
            role="mother"
            title={PARENTS.mother.title}
            message={PARENTS.mother.message}
          />
        </section>

        <SectionDivider variant="hills" fromColor="#f0f9ff" toColor="#f0f9ff" tintColor="rgba(186,230,253,0.18)" />

        <LoveStoryCarousel />

        <SectionDivider variant="wave" fromColor="#f0f9ff" toColor="#f0f9ff" tintColor="rgba(186,230,253,0.15)" />

        <CountdownTimer />

        <SectionDivider variant="curve" fromColor="#ffffff" toColor="#ffffff" tintColor="rgba(186,230,253,0.2)" />

        <CalendarSection />

        <SectionDivider variant="clouds" fromColor="#ffffff" toColor="#ffffff" tintColor="rgba(186,230,253,0.22)" />

        <VenueSection />

        <SectionDivider variant="wave" fromColor="#ffffff" toColor="#f0f9ff" tintColor="rgba(186,230,253,0.18)" />

        <RSVPSection />

        <SectionDivider variant="curve" fromColor="#f0f9ff" toColor="#ffffff" />

        <PhotoGallery />
        <Footer />
      </div>
    </main>
  );
}
