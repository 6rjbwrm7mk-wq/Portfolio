import Image from "next/image";

interface Props {
  title: string;
  time: string;
  headtitle?: string;
  description: string;
}

export default function PopUp({ title, time, headtitle, description }: Props) {
  return (
    <div
      className={`
        relative w-full max-w-3xl
        h-auto sm:h-56 lg:h-48
        rounded-md overflow-hidden cursor-pointer
        transition-transform lg:mx-5
        hover:scale-[1.03]
        hover:shadow-[0_0_15px_rgba(79,169,245,0.4)]
      `}
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0 z-10"
        style={{
          opacity: 0.55,
          background:
            "linear-gradient(135deg, #0a2349 0%, rgba(79,169,245,0.5) 60%, transparent 100%)",
        }}
      />

      {/* Noise overlay */}
      <Image
        src="/noise-bg.png"
        alt="Noise"
        className="object-cover opacity-25 pointer-events-none"
        fill
        priority={false}
      />

      {/* Foreground container */}
      <div className="relative z-30 text-white w-full h-full flex flex-col justify-center p-4 md:p-5">
        {/* Clipped glass overlay */}
        <div
          className="
            absolute inset-0
            bg-[#414141]/40
            [clip-path:polygon(0_0,44%_0,100%_100%,0%_100%)]
            z-20
            pointer-events-none
          "
        />

        {/* Content */}
        <div className="relative z-30 flex flex-col gap-1 sm:gap-3">
          <div className="w-full flex flex-row items-center justify-between">
            <h2 className="w-[180px] sm:w-fit text-base sm:text-2xl font-semibold">
              {title}
            </h2>

            <p
              className="
                w-20 h-6 sm:w-40 sm:h-10
                bg-[#3A7BD5]
                flex justify-center items-center
                rounded-[40px]
                font-normal sm:font-medium text-xs sm:text-lg
              "
            >
              {time}
            </p>
          </div>

          {headtitle && (
            <h3 className="text-[#9CA3AF] font-normal sm:font-medium text-sm sm:text-base">
              {headtitle}
            </h3>
          )}

          <p className="text-[#9CA3AF] font-thin sm:font-normal text-xs sm:text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
