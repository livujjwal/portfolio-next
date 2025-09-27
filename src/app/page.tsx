import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";
import FooterSection from "@/sections/FooterSection";
import HeaderSection from "@/sections/HeaderSection";
import HeroSection from "@/sections/HeroSection";
import ProjectsSection from "@/sections/ProjectsSection";
import TapeSection from "@/sections/TapeSection";
import TestimonialSection from "@/sections/TestimonialSection";

export default function Home() {
  return (
    <div className="">
      <HeaderSection />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <TestimonialSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
