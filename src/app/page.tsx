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
    <main className="bg-black h-screen overflow-y-scroll snap-y snap-mandatory ">
      <div className="snap-start" ref={homeRef}>
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

      <div className="snap-start" ref={aboutRef}>
        <AboutSection />
      </div>

      <div className="snap-start" ref={whatRef}>
        <WhatIDoSection />
      </div>

      <div className="snap-start" ref={experienceRef}>
        <ExperienceSection />
      </div>

      <div className="snap-start" ref={educationRef}>
        <EducationSection />
      </div>

      <div className="snap-start" ref={projectsRef}>
        <ProjectsSection />
      </div>

      <div className="snap-start" ref={servicesRef}>
        <ServicesSection />
      </div>

      <div className="snap-start" ref={faqRef}>
        <FAQSection />
      </div>

      <div className="snap-start" ref={contactRef}>
        <ContactSection />
      </div>
    </main>
  );
}
