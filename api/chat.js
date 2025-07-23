const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  try {
    const { message } = req.body;
    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message invalide ou manquant" });
    }

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "Tu es un mécano expérimenté. Tu parles de manière claire, directe et simple.",
        },
        { role: "user", content: message }
      ],
    });

    const reply = completion.data.choices[0].message.content;
    return res.status(200).json({ reply });

  } catch (error) {
    console.error("Erreur :", error.message);
    return res.status(500).json({ error: "Erreur serveur", details: error.message });
  }
};
