import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "./ui/button";
import assistantImage from "figma:asset/rainbow_logo_main.png";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const predefinedResponses: Record<string, string> = {
  "bonjour": "Bonjour ! 👋 Je suis l'assistant Rainbow. Comment puis-je vous aider aujourd'hui ?",
  "hello": "Hello! 👋 I'm the Rainbow assistant. How can I help you today?",
  "pricing": "Nos tarifs : Rainbow Webinar Start à 49€/mois (120 participants), Rainbow Webinar Pro à 129€/mois (500 participants), et Rainbow Webinar Enterprise sur mesure (500+ participants). 💰",
  "features": "Rainbow Webinar offre : streaming HD, enregistrement automatique, sondages interactifs, Q&A en temps réel, statistiques d'engagement, et intégration calendrier/CRM. ✨",
  "demo": "Pour voir une démo de Rainbow Webinar : https://app.storylane.io/share/njaxojcgqihp 🎥",
  "trial": "Essayez Rainbow Webinar gratuitement pendant 30 jours ! Aucune carte bancaire requise. Cliquez sur 'Essai gratuit' pour commencer. 🚀",
  "participants": "Rainbow Webinar Start permet 120 participants, Pro permet 500 participants, et Enterprise permet 500+ participants avec des options personnalisées. 👥",
  "contact": "Pour nous contacter : Email: contact@openrainbow.com | Téléphone: +33 1 234 567 890 📞",
  "alcatel": "Rainbow est un produit d'Alcatel-Lucent Enterprise, leader mondial des communications d'entreprise. 🏢",
  "collaboration": "Rainbow Collaboration est notre plateforme complète de communication d'entreprise avec messagerie, visioconférence, téléphonie et partage de fichiers sécurisé. 💼",
  "aide": "Je peux vous aider sur : les tarifs, l'essai gratuit, les fonctionnalités, la démo, les participants, ou le contact. Posez-moi vos questions ! 😊",
  "help": "I can help you with: pricing, free trial, features, demo, participants, or contact information. Ask me anything! 😊"
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Bonjour ! 👋 Je suis votre assistant Rainbow. Comment puis-je vous aider ?",
      sender: "bot",
      timestamp: new Date()
    },
    {
      id: "2",
      text: "💡 Astuce : Je peux répondre à vos questions sur les tarifs, fonctionnalités, la démo, et bien plus encore !",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Recherche de mots-clés dans le message
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }

    // Réponse par défaut
    return "Merci pour votre message ! Pour des questions spécifiques, contactez-nous à contact@openrainbow.com ou essayez notre démo interactive. 💬";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simuler le temps de réponse du bot
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <button
              className="h-16 w-16 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 overflow-hidden border-4 border-white relative"
              onClick={() => setIsOpen(true)}
            >
              <img 
                src={assistantImage}
                alt="Assistant Rainbow"
                className="h-full w-full object-cover"
              />
              {/* Badge "En ligne" */}
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3, type: "spring", bounce: 0.3 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border-2 border-gray-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#5e2d91] to-[#6639B7] p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Assistant Rainbow</h3>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-xs text-white/90">En ligne</span>
                    </div>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/20 rounded-full h-8 w-8 p-0"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-2 ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.sender === "bot" && (
                    <div className="w-8 h-8 bg-gradient-to-br from-[#5e2d91] to-[#6639B7] rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                      message.sender === "user"
                        ? "bg-gradient-to-br from-[#5e2d91] to-[#6639B7] text-white"
                        : "bg-white text-gray-800 shadow-md border border-gray-100"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap break-words">{message.text}</p>
                    <span
                      className={`text-xs mt-1 block ${
                        message.sender === "user" ? "text-white/70" : "text-gray-400"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString("fr-FR", {
                        hour: "2-digit",
                        minute: "2-digit"
                      })}
                    </span>
                  </div>
                  {message.sender === "user" && (
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="h-5 w-5 text-gray-600" />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2 justify-start"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-[#5e2d91] to-[#6639B7] rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl px-4 py-3 shadow-md border border-gray-100">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Tapez votre message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#5e2d91] focus:border-transparent text-sm"
                />
                <Button
                  size="sm"
                  className="h-10 w-10 rounded-full bg-gradient-to-br from-[#5e2d91] to-[#6639B7] text-white hover:scale-110 transition-transform p-0"
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">
                Propulsé par Rainbow AI Assistant
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}