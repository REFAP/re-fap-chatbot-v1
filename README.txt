# Re-FAP Chatbot V1 (OpenAI only)

## ⚙️ Fonctionnement
Ce projet est un chatbot IA minimal, basé sur ChatGPT (gpt-3.5-turbo), sans Airtable.

## 📁 Structure
- `api/chat.js` : backend Node.js pour appeler l'API OpenAI
- `botv2.html` : interface HTML simple pour discuter avec le bot

## 🚀 Déploiement (Vercel)
1. Crée un nouveau dépôt GitHub, importe ce dossier
2. Connecte-le à Vercel
3. Ajoute une variable d'environnement :
   - `OPENAI_API_KEY` = ta clé OpenAI commençant par `sk-...`
4. Clique sur Deploy
5. Visite `https://tonprojet.vercel.app/botv2.html`

Et c’est en ligne 🎉