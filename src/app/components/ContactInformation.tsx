import { useState } from "react";

export default function ContactInput() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "62660411-0688-48dc-8780-6a2b8d73b1ba");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        e.currentTarget.reset();
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setResult("Error sending message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="w-full lg:w-xl h-fit flex flex-col gap-4"
    >
      <div className="text-white flex flex-col gap-3 w-full">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="h-12 lg:h-14 bg-white/10 text-white rounded-2xl px-4 placeholder-gray-300 outline-none shadow-sm focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="h-12 lg:h-14 bg-white/10 text-white rounded-2xl px-4 placeholder-gray-300 outline-none shadow-sm focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="h-40 lg:h-52 bg-white/10 text-white rounded-2xl px-4 pt-4 placeholder-gray-300 outline-none shadow-sm resize-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full h-12 lg:h-14 rounded-2xl text-white text-lg lg:text-2xl font-semibold transition
          ${
            loading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 active:scale-95"
          }`}
      >
        {loading ? "Sending..." : "Send the message"}
      </button>
    </form>
  );
}
