import ContentEducation from "@/app/components/Contentanimation";
import ContentEducationMobileV from "@/app/components/ContentEducationMobileV";
import PopUpEducation from "@/app/components/EducationPopUp";
import { useEffect, useState } from "react";

export default function EducationSection() {
  const educationList = [
    { title: "High School", time: "2015-2019", description: "XYZ High School" },
    {
      title: "Bachelor's Degree",
      time: "2019-2023",
      description: "ABC University",
    },
    {
      title: "Master's Degree",
      time: "2023-2025",
      description: "DEF University",
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
    <section className="relative w-full h-screen overflow-hidden p-5 lg:gap-4 lg:p-10 flex flex-col">
      <div className="w-full flex flex-col justify-center items-center ">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white">
          Education
        </h2>
      </div>

      {device ? (
        <div className="flex h-full items-center gap-10">
          <PopUpEducation items={educationList} />
          <div className="hidden lg:block">
            <ContentEducation />
          </div>
          <PopUpEducation items={educationList} />
        </div>
      ) : (
        <ContentEducationMobileV />
      )}
    </section>
  );
}
