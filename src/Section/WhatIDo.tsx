import PopUpCard from "@/app/components/card2";
import Image from "next/image";

function WhatIDoSection() {
  return (
    <section
      className="
      relative w-full h-screen 
      flex flex-col items-center 
      gap-8 md:gap-12 lg:gap-16 
      overflow-hidden px-5 lg:px-10 py-10
      
    "
    >
      {/* Title */}
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white">
          What I Do
        </h2>

        <p className="hidden lg:block text-[20px] font-normal text-[#B5B5B6] text-center">
          I design and build modern web experiences — minimal, fast, and built
          with purpose.
        </p>
      </div>

      {/* Cards + Image */}
      <div
        className="
          w-full flex flex-col 
          items-center justify-center
          gap-6 md:gap-10 
          lg:flex-row lg:justify-between lg:items-center
        "
      >
        {/* Left Card */}
        <PopUpCard
          flipCard={false}
          iconeName="fluent-color:phone-laptop-16"
          name="Frontend Development"
          description="Building responsive, elegant, and high-performance web apps."
          headTitle="Tech & Focus:"
          skills={[
            "Next.js",
            "TailwindCSS",
            "Framer Motion",
            "Responsive design",
            "Speed & Smooth interaction",
          ]}
        />

        {/* Center Image */}
        <div
          className="
          absolute bottom-0 right-1 md:bottom-0 md:right-0 w-24 md:relative sm:w-24 md:w-40 lg:w- xl:w-[200px]
          flex justify-center
        "
        >
          <Image
            src="/WhatIDoImg.png"
            alt="What I Do"
            width={480}
            height={490}
            className="
              w-40 sm:w-full h-auto object-contain 
              z-30 pointer-events-none
            "
            priority
          />
        </div>

        {/* Right Card */}
        <PopUpCard
          flipCard={true}
          iconeName="fluent-color:design-ideas-16"
          name="UI/Ux Design"
          description="Designing clear, balanced, and minimal user interfaces."
          headTitle="Stack & Skills:"
          skills={[
            "Figma",
            "Basic editing",
            "Web & Mobile design",
            "Minimal & simple design",
            "Crypto & Security basics concepts",
          ]}
        />
      </div>
    </section>
  );
}

export default WhatIDoSection;
