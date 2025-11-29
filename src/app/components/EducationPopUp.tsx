import { motion } from "framer-motion";
import Image from "next/image";

type PopUpEducationItem = {
  title: string;
  time: string;
  description: string;
};

type PopUpEducationProps = {
  items: PopUpEducationItem[];
};

export default function PopUpEducation({ items }: PopUpEducationProps) {
  return (
    <div className="flex flex-col gap-16 h-fit">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: index * 0.3 }}
        >
          <div className="relative w-96 h-32 rounded-md overflow-hidden cursor-pointer transition-transform hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(79,169,245,0.4)]">
            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #0a2349 0%, rgba(79,169,245,0.5) 60%, transparent 100%)",
                opacity: 0.55,
                zIndex: 10,
              }}
            />

            {/* Noise overlay */}
            <Image
              src="/noise-bg.png"
              alt="Noise"
              className="object-cover opacity-25"
              fill
              priority={false}
            />

            {/* Clipped overlay shape */}
            <div className="absolute inset-0 bg-[#414141]/40 [clip-path:polygon(0_0,44%_0,100%_100%,0%_100%)] z-20" />

            {/* Content */}
            <div className="relative z-30 text-white flex flex-col justify-center h-full p-5 gap-2">
              <div className="flex items-center justify-between w-full">
                <h2 className="text-[20px] font-semibold">{item.title}</h2>
                <p className="flex w-32 h-10 bg-[#3A7BD5] justify-center items-center rounded-full text-[16px] font-medium">
                  {item.time}
                </p>
              </div>
              <p className="text-[#9CA3AF]">{item.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
