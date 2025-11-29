import { useState } from "react";
import Image from "next/image";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { Menu, X } from "lucide-react";

interface NavBarProps {
  scrollMap: Record<
    "home" | "about" | "projects" | "contact" | "faq",
    () => void
  >;
}

const NavBar: React.FC<NavBarProps> = ({ scrollMap }) => {
  const [open, setOpen] = useState(false);

  const sections: { label: string; key: keyof typeof scrollMap }[] = [
    { label: "AI", key: "faq" },
    { label: "About", key: "about" },
    { label: "Projects", key: "projects" },
    { label: "Contact", key: "contact" },
  ];

  return (
    <header className="flex w-full justify-between items-center p-5 lg:p-10 text-white relative">
      {/* Logo */}
      <div className="flex items-center h-8 gap-2">
        <Image src="/favicon.png" alt="Logo" width={36} height={36} />
        <h1 className="hidden sm:flex text-xl gap-1">
          Hi, <EncryptedText text=" Mohamed..." />
        </h1>
      </div>

      {/* Desktop nav */}
      <ul className="hidden md:flex items-center space-x-6 text-lg">
        {sections.map((sec) => (
          <li key={sec.key} className="hover:text-[#68D6FF]">
            <button onClick={scrollMap[sec.key]}>{sec.label}</button>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger button */}
      <button
        className="md:hidden"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle Menu"
      >
        {open ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile dropdown menu */}
      {open && (
        <ul className="absolute top-full left-0 w-full bg-black flex flex-col items-start gap-2 p-5 text-lg md:hidden border-t border-white/10 z-50">
          {sections.map((sec) => (
            <li key={sec.key} className="hover:text-[#68D6FF]">
              <button
                onClick={() => {
                  scrollMap[sec.key]();
                  setOpen(false);
                }}
              >
                {sec.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default NavBar;
