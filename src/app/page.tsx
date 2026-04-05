import ParticlesBackground from "@/components/ParticlesBackground";
import CloudScene from "@/components/CloudScene";
import HeroSection from "@/components/HeroSection";
import InvitationSection from "@/components/InvitationSection";
import ParentSection from "@/components/ParentSection";
import LoveStoryCarousel from "@/components/LoveStoryCarousel";
import CountdownTimer from "@/components/CountdownTimer";
import CalendarSection from "@/components/CalendarSection";
import VenueSection from "@/components/VenueSection";
import RSVPSection from "@/components/RSVPSection";
import PhotoGallery from "@/components/PhotoGallery";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { PARENTS } from "@/lib/constants";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary relative">
      <ParticlesBackground />
      <CloudScene />

      <div className="relative z-10">
        <HeroSection />

        <ScrollReveal>
          <InvitationSection />
        </ScrollReveal>

        <section className="py-4 bg-bg-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: "radial-gradient(circle, #0ea5e9 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <ScrollReveal>
            <ParentSection
              role="father"
              title={PARENTS.father.title}
              message={PARENTS.father.message}
            />
          </ScrollReveal>
          <ScrollReveal>
            <ParentSection
              role="mother"
              title={PARENTS.mother.title}
              message={PARENTS.mother.message}
            />
          </ScrollReveal>
        </section>

        <ScrollReveal>
          <LoveStoryCarousel />
        </ScrollReveal>

        <ScrollReveal>
          <CountdownTimer />
        </ScrollReveal>

        <ScrollReveal>
          <CalendarSection />
        </ScrollReveal>

        <ScrollReveal>
          <VenueSection />
        </ScrollReveal>

        <ScrollReveal>
          <RSVPSection />
        </ScrollReveal>

        <ScrollReveal>
          <PhotoGallery />
        </ScrollReveal>

        <ScrollReveal>
          <Footer />
        </ScrollReveal>
      </div>
    </main>
  );
}
