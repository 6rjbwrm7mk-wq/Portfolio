import ContactInput from "@/app/components/ContactInformation";
import FooterBar from "@/app/components/FooterBar";
import SocailMedia from "@/app/components/SocailMedia";
import Image from "next/image";

function ContactSection() {
  return (
    <section className="relative w-full min-h-dvh h-screen pt-10 flex flex-col justify-between overflow-visible">
      <div className="relative flex flex-col lg:flex-row justify-between mb-6 items-center lg:items-end gap-10 px-5 lg:px-10 flex-1">
        {/* Left content */}
        <div className="w-full max-w-xl flex flex-col justify-center gap-10 md:gap-4">
          {/* Title */}
          <div className="flex flex-col items-center sm:items-start ">
            <h2 className="text-[40px] font-semibold text-white">Contact</h2>
            <p className="hidden sm:block text-[18px] text-[#B5B5B6]">
              Whether you want to send me a message or just get my info, I’ve
              got you covered.
            </p>
          </div>

          {/* Form + Social */}
          <div className="h-full flex flex-col items-center lg:items-start lg:flex-row gap-6">
            <ContactInput />
            <SocailMedia
              linkedin="https://www.linkedin.com/in/mohamed-rezgallah/"
              github="https://github.com/6rjbwrm7mk-wq"
              whatsapp="#"
            />
          </div>
        </div>

        {/* Right Image */}

        <Image
          src="/ContactImg.png"
          alt="Contact Image"
          width={260}
          height={260}
          className="w-32 sm:w-24 lg:w-64 absolute right-1 -bottom-7 lg:relative lg:right-0 lg:bottom-0 "
        />
      </div>

      <FooterBar />
    </section>
  );
}

export default ContactSection;
