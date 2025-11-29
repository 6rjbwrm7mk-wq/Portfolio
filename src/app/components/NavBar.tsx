import { useState } from "react";
import Image from "next/image";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { Menu, X } from "lucide-react";

interface NavBarProps {
  scrollToHome: () => void;
  scrollToAbout: () => void;
  scrollToProjects: () => void;
  scrollToContact: () => void;
  scrollToFAQ: () => void; // added
}

const NavBar: React.FC<NavBarProps> = ({
  scrollToHome,
  scrollToAbout,
  scrollToProjects,
  scrollToContact,
  scrollToFAQ, // added
}) => {
  const [open, setOpen] = useState(false);

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
        <li className="hover:text-[#68D6FF]">
          <button onClick={scrollToFAQ}>AI</button>
        </li>
        <li className="hover:text-[#68D6FF]">
          <button onClick={scrollToAbout}>About</button>
        </li>
        <li className="hover:text-[#68D6FF]">
          <button onClick={scrollToProjects}>Projects</button>
        </li>
        <li className="hover:text-[#68D6FF]">
          <button onClick={scrollToContact}>Contact</button>
        </li>
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
      {/* Mobile dropdown menu */}
      {open && (
        <ul className="absolute top-full left-0 w-full bg-black  flex flex-col items-start gap-2 p-5 text-lg md:hidden border-t border-white/10 z-50">
          <li className="hover:text-[#68D6FF]">
            <button
              onClick={() => {
                scrollToFAQ(); // fixed
                setOpen(false);
              }}
            >
              AI
            </button>
          </li>
          <li className="hover:text-[#68D6FF]">
            <button
              onClick={() => {
                scrollToAbout();
                setOpen(false);
              }}
            >
              About
            </button>
          </li>
          <li className="hover:text-[#68D6FF]">
            <button
              onClick={() => {
                scrollToProjects();
                setOpen(false);
              }}
            >
              Projects
            </button>
          </li>
          <li className="hover:text-[#68D6FF]">
            <button
              onClick={() => {
                scrollToContact();
                setOpen(false);
              }}
            >
              Contact
            </button>
          </li>
        </ul>
      )}
    </header>
  );
};

export default NavBar;
