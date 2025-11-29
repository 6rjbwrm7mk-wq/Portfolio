import NavBar from "@/app/components/NavBar";
import HeroContent from "@/app/components/hero-content";
import InfoList from "@/app/components/infoHeroList";

interface HeroSectionProps {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  faqRef: React.RefObject<HTMLDivElement>; // added
}

const HeroSection: React.FC<HeroSectionProps> = ({
  homeRef,
  aboutRef,
  projectsRef,
  contactRef,
  faqRef, // added
}) => {
  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    if (!ref.current) return;
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen flex flex-col items-center overflow-hidden">
      <NavBar
        scrollToHome={() => scrollTo(homeRef)}
        scrollToAbout={() => scrollTo(aboutRef)}
        scrollToProjects={() => scrollTo(projectsRef)}
        scrollToContact={() => scrollTo(contactRef)}
        scrollToFAQ={() => scrollTo(faqRef)} // added
      />
      <HeroContent />
      <div className="sm:hidden">
        <InfoList />
      </div>
    </section>
  );
};

export default HeroSection;
