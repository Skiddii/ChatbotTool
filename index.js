import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
import readline from 'readline';
dotenv.config(); 

const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

userInterface.prompt()

userInterface.on("line", async input => { 

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const result = await model.generateContent(input);
console.log(result.response.text());
})