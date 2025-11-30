import FAQBtn from "@/app/components/FaqBtn";
import { motion } from "framer-motion";
import Image from "next/image";
import { SetStateAction, useState } from "react";
import { askGemini } from "@/app/utils/gemini"; // import helper
import { Icon } from "@iconify/react";

export default function AskMyTwinAi() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async (e: React.FormEvent, question: string) => {
    e.preventDefault();

    setMessage(question); // show the question
    setInput(""); // clear input
    setApiResponse(""); // clear previous response
    setLoading(true); // show loading

    const response = await askGemini(question); // send the question
    setApiResponse(response);
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessage(input.trim());
    setInput("");
    setApiResponse("");
    setLoading(true);

    const response = await askGemini(input.trim());
    setApiResponse(response);
    setLoading(false);
  };

  return (
    <section className="relative w-full h-dvh min-h-dvh overflow-hidden p-5 sm:p-8 flex flex-col justify-between items-center">
      {/* Title + Floating Image */}
      <div className="flex flex-col items-center gap-4 sm:gap-8">
        {!message && (
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white">
            Ask My Digital Twin
          </h2>
        )}

        <motion.div
          animate={{
            x: ["0px", "-5px", "0px"],
            y: ["0px", "-5px", "0px"],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <div
            className={
              message
                ? "w-16 sm:w-28 lg:w-32 rotate-2"
                : "w-28 sm:w-32 lg:w-40 rotate-2"
            }
          >
            <Image src="/AskAIImg.png" alt="Ask AI" width={8000} height={8} />
          </div>
        </motion.div>
      </div>

      {/* Input + FAQ Buttons */}
      <form
        onSubmit={handleSubmit}
        className={
          message
            ? "relative w-full h-full flex flex-col-reverse items-center gap-3 sm:gap-4"
            : "w-full h-fit flex flex-col items-center gap-3 sm:gap-4"
        }
      >
        {message && (
          <p className="text-white py-2 px-4 rounded-4xl bg-[#3A7BD5] absolute top-4">
            {message}
          </p>
        )}

        <div className="relative w-full sm:w-fit flex justify-center rounded-2xl overflow-hidden ">
          <input
            type="text"
            placeholder="Ask me anything..."
            required
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full sm:w-xl h-14 bg-white/10 text-white rounded-2xl px-4 placeholder-gray-400 outline-none shadow-sm"
          />
          <button
            type="submit"
            className="absolute right-0 flex justify-center items-center bg-blue-400 w-12 h-full"
          >
            <Icon
              icon="maki:arrow"
              width="24"
              height="24"
              className="text-white"
            />
          </button>
        </div>

        <div
          className={
            message
              ? "w-full sm:w-xl px-1.5 gap-2 sm:gap-0 flex items-center justify-between"
              : "w-full sm:w-xl px-1.5 gap-3 sm:gap-0 flex flex-col sm:flex-row items-center justify-between"
          }
        >
          <div
            className="w-full"
            onClick={(e) => handleClick(e, "Could you introduce yourself?")}
          >
            <FAQBtn
              message={message}
              iconeName="mingcute:happy-line"
              name="Me"
            />
          </div>
          <div
            className="w-full"
            onClick={(e) =>
              handleClick(e, "Which skills do you know more about?")
            }
          >
            <FAQBtn
              message={message}
              iconeName="qlementine-icons:layers-more-16"
              name="Skills"
            />
          </div>
          <div
            className="w-full"
            onClick={(e) => handleClick(e, "How do I get in touch with you?")}
          >
            <FAQBtn
              message={message}
              iconeName="iconamoon:profile-bold"
              name="Contact"
            />
          </div>
        </div>

        {/* API Response */}
        {loading ? (
          <div className="mt-4 text-white">Loading...</div>
        ) : (
          apiResponse && (
            <div className="absolute top-12 mt-4 w-full sm:w-xl bg-[#1E1E1E]/70 text-white p-4 rounded-2xl shadow-inner text-sm sm:text-base">
              {apiResponse}
            </div>
          )
        )}
      </form>
    </section>
  );
}
