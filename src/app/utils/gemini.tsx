/**
 * Sends a question to the Gemini backend API and returns the response as a string.
 * @param {string} question - The question to ask Gemini.
 * @returns {Promise<string>} - The response from Gemini as a string.
 */
export async function askGemini(question: string): Promise<string> {
  try {
    // Call your backend API route that handles Gemini requests securely
    const res = await fetch("/api/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();
    return data?.content || "No response from Gemini";
  } catch (err) {
    if (process.env.NODE_ENV !== "production") {
      // Only log errors in non-production environments
      console.error("Fetch error:", err);
    }
    return "Something went wrong while fetching the response.";
  }
}
