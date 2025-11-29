import InformationList from "@/app/components/PopupInformation";
import Image from "next/image";
function ProjectsSection() {
  const projects = [
    {
      title: "Personal Portfolio",
      time: "2025",
      headtitle: "Design + Development",
      description:
        "My minimalist personal website — designed and developed from scratch to reflect simplicity, clarity, and precision. Built to showcase my work, design style, and projects with smooth animations and a strong visual identity.",
    },
    {
      title: "E-Commerce Dashboard",
      time: "2024",
      headtitle: "UI/UX + Frontend",
      description:
        "An interactive admin dashboard built for analytics and sales tracking. Clean design with data visualization and responsive layout.",
    },
    {
      title: "Brand Identity System",
      time: "2023",
      headtitle: "Visual Design",
      description:
        "A cohesive brand identity package including logo, typography, and color system for a digital-first company.",
    },
    {
      title: "Brand Identity System",
      time: "2023",
      headtitle: "Visual Design",
      description:
        "A cohesive brand identity package including logo, typography, and color system for a digital-first company.",
    },
    // Add more projects (up to 10+)
  ];
  return (
    <>
      <section className="relative w-full min-h-dvh h-screen overflow-hidden p-5 gap-4 lg:gap-8 lg:p-10 flex flex-col  ">
        {/* Title */}
        <div className="w-full flex flex-col justify-center items-center sm:items-start gap-2">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white">
            Projects
          </h2>

          <p className="hidden lg:block text-[20px] font-normal text-[#B5B5B6] text-center">
            A few creations that blend design, code, and creativity.
          </p>
        </div>

        {/* Content Wrapper */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 mt-6">
          {/* INFORMATION LIST */}
          <div className="relative lg:-left-5  w-fit flex justify-center md:justify-end">
            <InformationList data={projects} />
          </div>
          {/* IMAGE */}
          <div className=" absolute bottom-0 right-1 md:bottom-0 md:right-0 w-40 md:relative sm:w-24 md:w-72 lg:w-[360px] flex justify-center ">
            {" "}
            <Image
              src="/ProjectsImg.png"
              alt="What I Do"
              width={480}
              height={490}
              className=" w-40 sm:w-full h-auto object-contain z-30 pointer-events-none "
              priority
            />{" "}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectsSection;
