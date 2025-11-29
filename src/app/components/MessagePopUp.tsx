"use client";

import { motion, AnimatePresence } from "framer-motion";

interface MessagePopUpProps {
  title: string;
  message: string;
  isVisible: boolean;
}

export default function MessagePopUp({
  title,
  message,
  isVisible,
}: MessagePopUpProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.95 }}
          transition={{ duration: 0.25, type: "spring", stiffness: 140 }}
          className="w-full h-24 sm:w-60 sm:h-[136px] lg:w-96 lg:h-40 rounded-2xl bg-[#262629] flex flex-col p-3 sm:p-4 gap-1 lg:gap-2 border border-[#3A3A3C] shadow-lg"
        >
          <h2 className="text-sm sm:text-xl lg:text-2xl font-medium text-amber-50">
            {title}
          </h2>

          <p className="text-xs sm:text-base lg:text-lg text-[#B5B5B6] font-light">
            {message}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
