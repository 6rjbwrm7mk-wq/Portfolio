"use client";
import { useRef } from "react";
import HeroSection from "@/Section/heroSection";
import AboutSection from "@/Section/aboutSection";
import ProjectsSection from "@/Section/ProjectsSection";
import ContactSection from "@/Section/contactSection";
import WhatIDoSection from "@/Section/WhatIDo";
import FAQSection from "@/Section/FAQSection";
import ExperienceSection from "@/Section/ExperienceSection";
import EducationSection from "@/Section/EducationSection";
import ServicesSection from "@/Section/ServicesSection";

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const whatRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null); // renamed FAQRef -> faqRef
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <main className="bg-black">
      <div ref={homeRef}>
        <HeroSection
          homeRef={homeRef}
          aboutRef={aboutRef}
          whatRef={whatRef}
          experienceRef={experienceRef}
          educationRef={educationRef}
          projectsRef={projectsRef}
          servicesRef={servicesRef}
          faqRef={faqRef} // updated
          contactRef={contactRef}
        />
      </div>

      <div ref={aboutRef}>
        <AboutSection />
      </div>

      <div ref={whatRef}>
        <WhatIDoSection />
      </div>

      <div ref={experienceRef}>
        <ExperienceSection />
      </div>

      <div ref={educationRef}>
        <EducationSection />
      </div>

      <div ref={projectsRef}>
        <ProjectsSection />
      </div>

      <div ref={servicesRef}>
        <ServicesSection />
      </div>

      <div ref={faqRef}>
        <FAQSection />
      </div>

      <div ref={contactRef}>
        <ContactSection />
      </div>
    </main>
  );
}
