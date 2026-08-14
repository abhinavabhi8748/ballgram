require("dotenv").config();
const express = require("express");
const OpenAI = require("openai");

const app = express();

app.use(express.json());
app.use(express.static("."));

const PORT = 3000;

const client = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY
});

app.get("/", (req, res) => {
    res.send("Ballgram AI backend is running! ⚽🤖");
});

app.get("/test-ai", async (req, res) => {
    try {
        const completion = await client.chat.completions.create({
            model: "openrouter/free",
            messages: [
                {
                    role: "user",
                    content: "Say hello to Ballgram in one short sentence."
                }
            ]
        });

        res.send(completion.choices[0].message.content);

    } catch (error) {
        console.error(error);
        res.status(500).send("AI request failed.");
    }
});

app.post("/chat", async (req, res) => {
    try {
        const userMessage = req.body.message;

        const stream = await client.chat.completions.create({
            model: "openrouter/free",
            messages: [
                {
                    role: "system",
                    content: "You are Ballgram AI, a friendly football-focused AI assistant."
                },
                {
                    role: "user",
                    content: userMessage
                }
            ],
            stream: true
        });

        res.setHeader("Content-Type", "text/plain; charset=utf-8");

        for await (const chunk of stream) {
            const text = chunk.choices[0]?.delta?.content || "";
            res.write(text);
        }

        res.end();

    } catch (error) {
        console.error(error);
        res.status(500).send("Sorry, Ballgram AI had a problem.");
    }
});

app.listen(PORT, () => {
    console.log(`Ballgram AI server running at http://localhost:${PORT}`);
});