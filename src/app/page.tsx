import { profileInfo, stats } from "@/data/portfolio";
import HomeClient from "@/components/HomeClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection from "@/components/sections/ContactSection";
import CtaSection from "@/components/sections/CtaSection";

export default function Page() {

  const data = {
    profile: profileInfo,
    stats: stats
  };

  return (
    <>
      <Navbar />
      <div className="relative">
        <HomeClient data={data} />
        
        {/* Full Single-Page Portfolio Stack */}
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
        <CtaSection />
      </div>
      <Footer />
    </>
  );
}
