import LineArrowAnimation from "./lineAnimation";
import Image from "next/image";
export default function ContentEducation() {
  return (
    <>
      <div className="flex h-full w-fit justify-center items-start ">
        <div className=" relative left-22">
          <LineArrowAnimation />
        </div>
        <Image
          src="/EducationImg.png"
          alt="What I Do"
          width={200} // set your desired width
          height={220} // set your desired height
          className="w-44 xl:w-52  h-auto object-contain  "
        />
        <div className=" transform scale-x-[-1] relative -left-24">
          <LineArrowAnimation />
        </div>
      </div>
    </>
  );
}
