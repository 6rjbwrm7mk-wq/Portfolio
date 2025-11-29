"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import PopUp from "./PopupCard";

interface Project {
  title: string;
  time: string;
  headtitle?: string;
  description: string;
}

interface Props {
  data: Project[];
}

export default function InformationList({ data: projects }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const shouldScroll = projects.length > 3;

  return (
    <div className="relative w-full max-w-[880px] h-auto lg:h-[580px]  lg:pr-4  flex items-center">
      {/* List Wrapper */}
      <div
        ref={containerRef}
        className={`
          w-full 
          flex flex-col gap-4  lg:pb-8
          ${
            shouldScroll
              ? "h-[540px] overflow-y-scroll scroll-smooth"
              : "h-[540px] "
          }
          ${shouldScroll ? "snap-y snap-mandatory " : ""}
          [&::-webkit-scrollbar]:hidden 
          [-ms-overflow-style:none] 
          [scrollbar-width:none]
        `}
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className={shouldScroll ? "snap-start" : ""}
          >
            <PopUp {...p} />
          </motion.div>
        ))}
      </div>

      {/* Scroll Indicator Dots (Only when scrolling enabled) */}
    </div>
  );
}
