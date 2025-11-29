"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import InfoList from "./infoHeroList";

function HeroContent() {
  return (
    <section className="relative flex justify-center items-center w-full h-screen">
      <div className="text-white flex flex-col justify-center items-center gap-6 sm:gap-8 absolute top-[13%]  p-5">
        <h1 className="flex flex-col items-center sm:flex-row gap-1 text-[40px] sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold z-40">
          Developer From <span className="text-[#68D6FF]">Tunisia</span>
        </h1>

        <div className="w-full sm:w-[642px] flex flex-col justify-center items-center gap-2 z-40">
          <p className="text-sm sm:text-lg lg:text-xl font-light text-[#B5B5B6] text-center">
            A <span className="font-medium">minimalist</span> developer
            passionate about creating elegant, intuitive digital experiences
            that feel effortless — inspired by simplicity and precision.
          </p>

          {/* UL — mobile hidden, desktop visible */}
          <div className="hidden sm:block">
            <InfoList />
          </div>
        </div>

        <button className="bg-[#3A7BD5] w-44 h-12 sm:w-64 sm:h-16 font-normal text-xl md:text-2xl rounded-[40px] z-0 ">
          View My Work
        </button>
      </div>

      {/* IMAGE with mobile/tablet/laptop Position D */}
      <motion.div
        className="
        w-44 sm:w-72 lg:w-80 xl:w-96 h-auto
          absolute 
                                 
          top-80 left-0.5

          /* TABLET POSITION D */
          sm:-bottom-12 sm:left-20

          /* LAPTOP POSITION D */
          lg:top-16 lg:left-4

          xl:top-12 xl:left-40

          z-20 sm:z-0 
        "
        animate={{
          y: ["0px", "-30px", "0px"],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <Image
          src="/HeroSectionImg.png"
          alt="Hero Image"
          className="-rotate-8 "
          width={480}
          height={520}
        />
      </motion.div>
    </section>
  );
}

export default HeroContent;
