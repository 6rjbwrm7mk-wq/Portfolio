import InformationList from "@/app/components/PopupInformation";
import Image from "next/image";

function ExperienceSection() {
  const Experience = [
    {
      title: "Solo Developer",
      time: "Oct 2025",
      headtitle: "Personal Project",
      description:
        "Developed a web-based portfolio to showcase design and development skills. Implemented responsive layouts and interactive features using modern web technologies.",
    },
    {
      title: "Developer Intern",
      time: "2024-2025",
      headtitle: "Astrolab",
      description:
        "Collaborated on web development projects and contributed to building AI-powered tools. Learned best practices in coding and teamwork while supporting the development of functional prototypes.",
    },
    {
      title: "Freelance Designer & Developer",
      time: "2024-2025",
      headtitle: "Various Clients",
      description:
        "Worked with clients to design and develop web solutions tailored to their needs. Focused on creating minimalist, user-friendly interfaces and improving overall user experience.",
    },
    {
      title: "Freelance Designer & Developer",
      time: "2024-2025",
      headtitle: "Various Clients",
      description:
        "Worked with clients to design and develop web solutions tailored to their needs. Focused on creating minimalist, user-friendly interfaces and improving overall user experience.",
    },
  ];

  return (
    <section className="relative w-full h-dvh min-h-dvh overflow-hidden p-5 gap-4 lg:gap- lg:p-10 flex flex-col">
      {/* Title */}
      <div className="w-full flex flex-col justify-center items-center md:items-start  gap-2 lg:gap-4">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white">
          Experience
        </h2>

        <p className="hidden lg:block text-[20px] font-normal text-[#B5B5B6] text-center">
          Something short, personal, and meaningful.
        </p>
      </div>

      {/* Content Wrapper */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 mt-6 lg:mt-0 overflow-hidden">
        {/* IMAGE */}
        <div className="scale-x-[-1] sm:scale-x-[1] absolute bottom-0 right-1 md:bottom-0 md:right-0 w-48 md:relative sm:w-24 md:w-72 lg:w-[400px] flex justify-center z-40 ">
          {" "}
          <Image
            src="/ExperienceImg.png"
            alt="What I Do"
            width={480}
            height={490}
            className=" w-40 sm:w-80 h-auto object-contain  pointer-events-none "
            priority
          />{" "}
        </div>
        {/* INFORMATION LIST */}
        <div className=" w-fit z-30 flex justify-center md:justify-end">
          <InformationList data={Experience} />
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
