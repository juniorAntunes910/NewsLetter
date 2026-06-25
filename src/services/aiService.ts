import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

const { newsletterPrompt } = require("../prompts/newsletter");


interface INewsRequest {
    assunto: string
}

async function gerarNewsLetter({ assunto }: INewsRequest) {

    assunto = `${newsletterPrompt}`

    for (let i = 0; i < 5; i++) {
        try {
            const response = await ai.models.generateContent({
                model: "gemini-3.1-flash-lite",//"gemini-2.5-flash",

                contents: `${assunto}`
            });
            return response.text;
        } catch (error) {
            console.log("Tentativa: ", i + 1);
            console.log(error)
        }
    }
}

module.exports = {
    gerarNewsLetter
}