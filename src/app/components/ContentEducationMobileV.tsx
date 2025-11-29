import InformationList from "./PopupInformation";
import Image from "next/image";
export default function ContentEducationMobileV() {
  const education = [
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
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-12 mt-6">
      {/* INFORMATION LIST */}
      <div className=" w-full flex justify-center md:justify-end">
        <InformationList data={education} />
      </div>
      {/* IMAGE */}
      <div className=" absolute bottom-0 right-1 md:bottom-0 md:right-0 w-24 md:relative sm:w-24 md:w-72 lg:w-[360px] flex justify-center ">
        {" "}
        <Image
          src="/EducationImg.png"
          alt="What I Do"
          width={480}
          height={490}
          className=" w-40 sm:w-full h-auto object-contain z-30 pointer-events-none "
          priority
        />{" "}
      </div>
    </div>
  );
}
