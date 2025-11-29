import InformationList from "./PopupInformation";
import Image from "next/image";
export default function ContentEducationMobileV() {
  const education = [
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
    {
      title: "Master's Degree",
      time: "2023-2025",
      description: "DEF University",
    },
    {
      title: "Master's Degree",
      time: "2023-2025",
      description: "DEF University",
    },
  ];
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 mt-6">
      {/* INFORMATION LIST */}
      <div className=" w-fit flex justify-center md:justify-end">
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
          className=" w-12 sm:w-full h-auto object-contain z-30 pointer-events-none "
          priority
        />{" "}
      </div>
    </div>
  );
}
