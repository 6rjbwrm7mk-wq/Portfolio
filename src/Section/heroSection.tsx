// Section/heroSection.tsx
"use client";

import { useRef } from "react";
import NavBar from "@/app/components/NavBar";
import HeroContent from "@/app/components/hero-content";
import InfoList from "@/app/components/infoHeroList";

interface HeroSectionProps {
  homeRef: React.RefObject<HTMLDivElement | null>;
  aboutRef: React.RefObject<HTMLDivElement | null>;
  whatRef: React.RefObject<HTMLDivElement | null>;
  experienceRef: React.RefObject<HTMLDivElement | null>;
  educationRef: React.RefObject<HTMLDivElement | null>;
  projectsRef: React.RefObject<HTMLDivElement | null>;
  servicesRef: React.RefObject<HTMLDivElement | null>;
  faqRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  homeRef,
  aboutRef,
  projectsRef,
  contactRef,
  faqRef,
}) => {
  // Map section names to refs for centralized scrolling
  const sections = {
    home: homeRef,
    about: aboutRef,
    projects: projectsRef,
    contact: contactRef,
    faq: faqRef,
  };

  // Build scrollMap for NavBar
  const scrollMap: Record<
    "home" | "about" | "projects" | "contact" | "faq",
    () => void
  > = Object.fromEntries(
    Object.entries(sections).map(([key, ref]) => [
      key,
      () => ref.current?.scrollIntoView({ behavior: "smooth" }),
    ])
  ) as Record<"home" | "about" | "projects" | "contact" | "faq", () => void>;

  return (
    <section className="relative w-full h-dvh min-h-dvh flex flex-col items-center overflow-hidden">
      {/* Navigation */}
      <NavBar scrollMap={scrollMap} />

      {/* Hero content */}
      <HeroContent />

      {/* Mobile-only info list */}
      <div className="sm:hidden">
        <InfoList />
      </div>
    </section>
  );
};

export default HeroSection;
