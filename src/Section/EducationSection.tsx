import ContentEducation from "@/app/components/Contentanimation";
import ContentEducationMobileV from "@/app/components/ContentEducationMobileV";
import PopUpEducation from "@/app/components/EducationPopUp";
import { useEffect, useState } from "react";

export default function EducationSection() {
  const educationListLeft = [
    {
      title: "Baccalaureate certificate",
      time: "2024",
      headtitle: "Department of Media Studies",
      description: "Farhat Hached Institute, Sousse",
    },
    {
      title: "Bachelor of CS",
      time: "2024-2028",
      headtitle: "Software Engineering",
      description: "Higher School of Science and Technology of Hammam Sousse",
    },
    {
      title: "Next Steps",
      time: "Future",
      headtitle: "Advanced Studies",
      description:
        "Planning to specialize further—possibly expand both technical and design expertise",
    },
  ];
  const educationListRigth = [
    {
      title: "Technical Skills",
      time: "2023-Present",
      headtitle: "Frontend Development",
      description:
        "Experience with React, Next.js, Tailwind CSS, and modern UI workflows.",
    },
    {
      title: "Technical Skills",
      time: "2025-Present",
      headtitle: "Backend Development",
      description:
        "Experience with React, Next.js, Tailwind CSS, and modern UI workflows.",
    },
    {
      title: "Design Experience",
      time: "2024-Present",
      headtitle: "UI/UX Foundations",
      description:
        "Good with Figma and interface creation; still improving toward a professional design workflow.",
    },
  ];
  const [device, setDevice] = useState<boolean>(true);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setDevice(width >= 1440);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <section className="relative w-full min-h-dvh h-screen overflow-hidden p-5 lg:gap-4 lg:p-10 flex flex-col">
      <div className="w-full flex flex-col justify-center items-center ">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white">
          Education
        </h2>
      </div>

      {device ? (
        <div className="flex h-full items-center gap-10">
          <PopUpEducation items={educationListLeft} />
          <div className="hidden lg:block">
            <ContentEducation />
          </div>
          <PopUpEducation items={educationListRigth} />
        </div>
      ) : (
        <ContentEducationMobileV />
      )}
    </section>
  );
}
