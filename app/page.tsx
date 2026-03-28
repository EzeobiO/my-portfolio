import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { InteractiveCards } from "./components/InteractiveCards";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { CertificationsSection } from "./components/CertificateSection";
import { ContactSection } from "./components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navigation />
      <main className="relative">
        <HeroSection />
        <InteractiveCards />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </div>
  );
}