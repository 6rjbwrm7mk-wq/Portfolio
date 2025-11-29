import { Icon } from "@iconify/react";
import Image from "next/image";

interface PopUpCardProps {
  flipCard: boolean;
  iconeName: string;
  name: string;
  description: string;
  headTitle: string;
  skills: string[];
}

function PopUpCard({
  flipCard,
  iconeName,
  name,
  description,
  headTitle,
  skills,
}: PopUpCardProps) {
  return (
    <div
      className={`w-full max-w-sm sm:max-w-md md:max-w-lg 
      h-56 sm:h-64 md:h-72 lg:h-80 
      rounded-xl shadow-lg relative overflow-hidden 
      transition-transform duration-500 transform
      ${flipCard ? "scale-x-[-1]" : ""}`}
    >
      {/* Gradient + Noise */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #0a2349 0%, rgba(79,169,245,0.5) 60%, transparent 100%)",
        }}
      >
        <Image
          src="/noise-bg.png"
          alt="Noise"
          className="object-cover opacity-25"
          fill
          priority={false}
        />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-white p-3 sm:p-4 md:p-6 
        flex flex-col gap-2 h-full transform
        ${flipCard ? "scale-x-[-1]" : ""}`}
      >
        <div className="flex items-center gap-2">
          <Icon
            icon={iconeName}
            width="1.5em"
            height="1.5em"
            className="text-white md:w-7 md:h-7"
          />
          <h2 className="text-sm sm:text-lg md:text-xl font-semibold">
            {name}
          </h2>
        </div>

        <p className="text-[11px] sm:text-sm md:text-base text-gray-300">
          {description}
        </p>

        <h3 className="font-semibold text-sm sm:text-base md:text-lg mt-1">
          {headTitle}
        </h3>

        <ul className="list-disc list-inside space-y-1 mt-1">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="text-xs sm:text-sm md:text-base text-gray-200"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PopUpCard;
