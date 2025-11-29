import { Icon } from "@iconify/react";

interface SocialMediaProps {
  linkedin: string;
  github: string;
  whatsapp: string;
}

export default function SocialMedia({
  linkedin,
  github,
  whatsapp,
}: SocialMediaProps) {
  return (
    <div className="text-[#3A7BD5] flex lg:flex-col gap-4 items-center">
      <a
        href={linkedin}
        target="_blank"
        className="transition-transform hover:scale-110"
      >
        <Icon
          icon="mdi:linkedin"
          className="w-10 h-10 lg:w-[60px] lg:h-[60px]"
        />
      </a>

      <a
        href={github}
        target="_blank"
        className="transition-transform hover:scale-110"
      >
        <Icon icon="mdi:github" className="w-10 h-10 lg:w-[60px] lg:h-[60px]" />
      </a>

      <a
        href={whatsapp}
        target="_blank"
        className="transition-transform hover:scale-110"
      >
        <Icon
          icon="ic:baseline-whatsapp"
          className="w-10 h-10 lg:w-[60px] lg:h-[60px]"
        />
      </a>
    </div>
  );
}
