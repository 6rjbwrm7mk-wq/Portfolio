"use client"; // Required for Next.js app directory if using motion

import MessagePopUp from "@/app/components/MessagePopUp";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesSection() {
  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const popUpVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 120 },
    },
  };

  return (
    <section className="relative w-full h-dvh min-h-dvh overflow-hidden p-5 gap-8 md:gap-4 lg:p-10 flex flex-col items-center justify-start md:justify-between">
      {/* Title & Subtitle */}
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white">
          Services
        </h2>

        <p className="hidden lg:block text-[20px] font-normal text-[#B5B5B6] text-center">
          Turning ideas into elegant, functional experiences.
        </p>
      </div>

      {/* CONTENT LAYOUT */}
      <motion.div
        className="
          w-full 
          flex 
          flex-col items-start justify-start 
          md:flex-row  md:items-center md:justify-center
          gap-1 sm:gap-6
        "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* LEFT POPUPS (2 items) */}
        <motion.div
          className="flex flex-col gap-3 sm:gap-6 lg:gap-8 w-full md:w-auto"
          variants={containerVariants}
        >
          <motion.div variants={popUpVariants}>
            <MessagePopUp
              title="Web Design"
              message="Creating clean, modern, and responsive websites focused on simplicity, user experience, and emotion."
              isVisible={true}
            />
          </motion.div>

          <motion.div variants={popUpVariants}>
            <MessagePopUp
              title="Front-End Development"
              message="Bringing ideas to life with code — fast, lightweight, and pixel-perfect experiences."
              isVisible={true}
            />
          </motion.div>
        </motion.div>

        {/* IMAGE CENTER */}
        <motion.div
          className="flex justify-center w-full md:w-auto "
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.6,
              type: "spring" as const,
              stiffness: 100,
            },
          }}
        >
          <Image
            src="/ServicesImg.png"
            alt="What I Do"
            width={320}
            height={480}
            className="
              absolute bottom-0 right-0  sm:relative w-28 sm:w-52 md:w-60 
            "
          />
        </motion.div>

        {/* RIGHT POPUPS (2 items) */}
        <motion.div
          className="flex flex-col gap-3 sm:gap-6 lg:gap-8 w-full md:w-auto"
          variants={containerVariants}
        >
          <motion.div variants={popUpVariants}>
            <MessagePopUp
              title="Branding & Identity"
              message="Designing unique visual identities that tell your story through color, typography, and feeling."
              isVisible={true}
            />
          </motion.div>

          <motion.div variants={popUpVariants}>
            <MessagePopUp
              title="Creative Collaboration"
              message="Working with clients and teams to shape powerful digital experiences from concept to launch."
              isVisible={true}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* BUTTON */}
      <motion.button
        className="w-52 h-12 sm:w-64 sm:h-14 lg:h-16 bg-[#3A7BD5] rounded-[40px] text-[#E0E0E0] font-medium text-lg sm:text-xl lg:text-2xl cursor-pointer hover:bg-[#335f9e] transition-colors duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
      >
        Let’s Work Together
      </motion.button>
    </section>
  );
}
