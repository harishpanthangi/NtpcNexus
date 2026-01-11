
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY || '' });

export const refineRequirement = async (rawInput) => {
    if (!import.meta.env.VITE_API_KEY) return rawInput;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash", // Updated to a stable model or keep as is if known to exist
            contents: `You are a technical business analyst. A user submitted this raw feedback/requirement for an internal software application: "${rawInput}". 
      Please refine this into a structured, professional, and technical requirement document that includes:
      1. Clear Objective
      2. Functional Description
      3. Potential Benefits.
      Keep it concise but highly professional.`,
            config: {
                temperature: 0.7,
            }
        });

        return response.text || rawInput;
    } catch (error) {
        console.error("Gemini refinement failed:", error);
        return rawInput;
    }
};

export const generateAppSuggestionBenefits = async (appIdea) => {
    if (!import.meta.env.VITE_API_KEY) return "AI benefits generation unavailable.";

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: `A user has suggested a new application idea: "${appIdea}". 
      List 3 bullet points of high-level strategic benefits this app could bring to a large organization like NTPC (Power Sector).`,
            config: {
                temperature: 0.8,
            }
        });

        return response.text || "No AI benefits generated.";
    } catch (error) {
        console.error("Gemini suggestion failed:", error);
        return "Error generating benefits.";
    }
};
