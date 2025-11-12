import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import "./chatbot.css";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Inicializa fora do componente
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "models/gemini-2.5-flash" });

export default function ChatBot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Olá! 👋 Sou o assistente do Matheus. Como posso te ajudar?" },
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { sender: "user", text: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setLoading(true);

        // Contexto fixo sobre mim
       const aboutMatheus = `
Você é o assistente pessoal do Matheus, um desenvolvedor Full Stack com experiência em hardware e software.
Ele criou este portfólio para apresentar seus projetos e habilidades em React, Node.js e design responsivo.

💻 Github: https://github.com/matheussvdev  
🔗 LinkedIn: https://www.linkedin.com/in/matheussvdev  
📧 E-mail: matheus.dev@gmail.com

Seu papel é responder apenas perguntas relacionadas a ele, sua carreira, seus projetos e seu portfólio.
Se o usuário perguntar algo fora desse contexto (como política, esportes, ou curiosidades gerais),
responda educadamente: "Desculpe, posso responder apenas sobre o Matheus e seu trabalho 😊".

Quando o usuário pedir para ver o portfólio ou LinkedIn, forneça o link direto e um breve comentário simpático.
Fale sempre de forma clara, profissional e amigável.
`;

        try {
            // ✅ Aqui usamos o contexto + a pergunta do usuário
            const result = await model.generateContent([
                aboutMatheus,
                `Usuário: ${input}`,
            ]);

            const response = result.response.text();
            setMessages((prev) => [...prev, { sender: "bot", text: response }]);
        } catch (error) {
            console.error("Erro ao gerar resposta:", error);
            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: "Desculpe 😅, ocorreu um erro ao processar sua pergunta." },
            ]);
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <div className="chatbot-button" onClick={() => setOpen(!open)}>
                {open ? <X size={26} color="white" /> : <MessageCircle size={26} color="white" />}
            </div>

            {open && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <h4>Assistente do Matheus</h4>
                    </div>
                    <div className="chatbot-body">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`chat-message ${msg.sender === "user" ? "user" : "bot"}`}
                            >
                                {msg.text}
                            </div>
                        ))}
                        {loading && <div className="chat-message bot">Digitando...</div>}
                    </div>
                    <div className="chatbot-input">
                        <input
                            type="text"
                            placeholder="Digite sua dúvida..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        />
                        <button onClick={handleSend}>Enviar</button>
                    </div>
                </div>
            )}
        </>
    );
}
