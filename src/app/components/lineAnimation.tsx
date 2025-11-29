"Use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function LineArrowAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // triggers only once when in view

  return (
    <div ref={ref} className="w-[300px] h-[600px] relative">
      <svg width="300" height="595" viewBox="0 0 400 600">
        {/* Diamond + first line as a group */}
        <g>
          {/* Diamond at start */}
          <polygon points="300,0 310,10 300,20 290,10" fill="#68D6FF" />

          {/* First line starting from the diamond */}
          <motion.line
            x1="300"
            y1="10"
            x2="150"
            y2="10"
            stroke="#68D6FF"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </g>

        {/* Other lines */}
        <motion.line
          x1="150"
          y1="10"
          x2="0"
          y2="10"
          stroke="#68D6FF"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
        />

        <motion.line
          x1="150"
          y1="10"
          x2="150"
          y2="300"
          stroke="#68D6FF"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
        />

        <motion.line
          x1="150"
          y1="300"
          x2="0"
          y2="300"
          stroke="#68D6FF"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ delay: 2.25, duration: 1, ease: "easeInOut" }}
        />

        <motion.line
          x1="150"
          y1="300"
          x2="150"
          y2="580"
          stroke="#68D6FF"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ delay: 2.25, duration: 1, ease: "easeInOut" }}
        />

        <motion.line
          x1="150"
          y1="580"
          x2="0"
          y2="580"
          stroke="#68D6FF"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ delay: 3, duration: 1, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
