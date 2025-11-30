import Image from "next/image";
function AboutSection() {
  return (
    <>
      <section className="relative w-full h-dvh min-h-dvh flex flex-col  items-end md:gap-2 md:justify-between md:items-center md:flex-row  overflow-hidden px-5 py-10 lg:p-10">
        <div className="text-white w-full lg:w-xl gap-2 flex flex-col mt-10 ">
          <h2 className="text-3xl lg:text-5xl font-semibold">About Me</h2>
          <p className="text-base  lg:text-xl xl:text-2xl font-normal text-[#B5B5B6] z-10">
            I appreciate your interest!
            <br /> I am Mohamed Rezgallah, a web developer based in Sousse,
            Tunisia. My work blends clean code with minimalist design — always
            focused on simplicity, performance, and beauty.
            <br />I believe in creating experiences that feel natural and
            effortless, with interfaces that respect the users attention. My
            tools include JavaScript, TypeScript, React, CSS, and Python — but
            my philosophy goes beyond code: design with purpose, build with
            care.
          </p>
        </div>
        <Image
          src="/AboutMeImg.png"
          alt="About me image"
          width={480}
          height={490}
          className="w-[72vw]  absolute -bottom-1 right-0 md:w-64 lg:w-[340px] xl:w-[480px] xl:h-[490px] sm:relative  object-contain"
        />
      </section>
    </>
  );
}
export default AboutSection;
