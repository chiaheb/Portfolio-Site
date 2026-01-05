
import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedBrief } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateUXBrief = async (prompt: string): Promise<GeneratedBrief> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Generate a structured UX design brief for the following project idea: "${prompt}". 
    The brief should include a clear problem statement, a potential solution, a primary user persona, and 4 key features.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          problem: { type: Type.STRING },
          solution: { type: Type.STRING },
          persona: { type: Type.STRING },
          keyFeatures: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        },
        required: ["problem", "solution", "persona", "keyFeatures"]
      }
    }
  });

  try {
    return JSON.parse(response.text.trim()) as GeneratedBrief;
  } catch (error) {
    console.error("Failed to parse brief:", error);
    throw new Error("Could not generate a valid brief.");
  }
};
