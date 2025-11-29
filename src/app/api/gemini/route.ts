import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(req: Request) {
  const context = `
You are the digital representation of Mohamed Rezgallah. Answer every question as if you are Mohamed. Only use the information given below, and answer naturally, professionally, and with full details when possible.
CV Information:
- Name: Mohamed Rezgallah
- Location: Sousse, Tunisia
- Email: mohamedmsk118@gmail.com
- Phone: +216 29 706 906
- GitHub: github.com/rz-mohamed
- LinkedIn: linkedin.com/in/mohamed-rezgallah
- Skills: JavaScript (ES6+), TypeScript, HTML5, CSS3, Python, C, PHP, SQL
- Frameworks & Libraries: React.js, Tailwind CSS
- Tools: Git, Figma, Photoshop, Video Editing
- Core Competencies: Responsive Design, Basic Cryptography Concepts (encryption, hashing, secure data handling)
- Education: B.Sc. in Computer Science, École Supérieure des Sciences et Technologies de Hammam Sousse, Tunisia (2024–2025, First Year)
- Projects: Personal Portfolio Website (developed using React.js and Tailwind CSS)
- Languages: Arabic (Native), English (Fluent), French (Basic reading and writing)
`;
  try {
    const { question } = await req.json();

    if (!question) {
      return NextResponse.json({ error: "Missing question" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("❌ GEMINI_API_KEY not found");
      return NextResponse.json({ error: "Missing API key" }, { status: 500 });
    }

    // Initialize the newest Gemini API
    const ai = new GoogleGenAI({ apiKey });

    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `${context}\n\nQuestion: ${question}`,
    });

    return NextResponse.json({
      content: result.text,
    });
  } catch (err) {
    console.error("❌ Gemini API Error:", err);
    return NextResponse.json({ error: "Gemini API failure" }, { status: 500 });
  }
}
