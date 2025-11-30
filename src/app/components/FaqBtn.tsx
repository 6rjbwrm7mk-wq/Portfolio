import { Icon } from "@iconify/react";
import Image from "next/image";

interface PopUpCardProps {
  message?: string;
  iconeName: string;
  name: string;
}

export default function FAQBtn({ message, iconeName, name }: PopUpCardProps) {
  const isCompact = Boolean(message);
  const iconSize = isCompact ? 16 : 32;

  const containerClasses = `
    relative w-full rounded-md overflow-hidden cursor-pointer transition-transform
    hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(79,169,245,0.4)]
    ${isCompact ? "h-10 sm:w-44 sm:h-20" : "h-16 sm:w-44 sm:h-28"}
  `;

  const contentClasses = `
    relative w-full z-4 text-white flex items-center justify-center gap-2
    ${
      isCompact ? "py-2 sm:py-3" : "w-full h-full sm:flex-col px-3 py-2 sm:py-0"
    }
  `;

  const textClasses = `
    ${
      isCompact
        ? "text-sm sm:text-xl font-medium"
        : "text-lg sm:text-2xl font-semibold"
    }
  `;

  return (
    <button type="button" className={containerClasses}>
      {/* Gradient background */}
      <div
        className="absolute inset-0 z-1 opacity-55"
        style={{
          background:
            "linear-gradient(135deg, #0a2349 0%, rgba(79,169,245,0.5) 60%, transparent 100%)",
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

      {/* Overlay shape */}
      <div className="absolute inset-0 z-3 bg-[#414141]/40 [clip-path:polygon(0_0,44%_0,100%_100%,0%_100%)]" />

      {/* Foreground Content */}
      <div className={contentClasses}>
        <Icon
          className="text-[#3A7BD5]"
          icon={iconeName}
          width={iconSize}
          height={iconSize}
        />
        <h2 className={textClasses}>{name}</h2>
      </div>
    </button>
  );
}
