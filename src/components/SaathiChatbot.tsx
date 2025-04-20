
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mic, Send, X } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  time: string;
}

const SaathiChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "नमस्ते! मैं आपका सारथी हूँ। मैं आपकी कैसे मदद कर सकता हूँ? / Hello! I am your Saathi. How can I help you today?",
      sender: "bot",
      time: "Just now",
    },
  ]);
  const [input, setInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      time: "Just now",
    };
    setMessages([...messages, userMessage]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      let botResponse: Message;
      
      if (input.toLowerCase().includes("crop") || input.toLowerCase().includes("फसल")) {
        botResponse = {
          id: messages.length + 2,
          text: "Based on your soil type and region, I recommend planting soybean or cotton this season. Would you like a detailed crop plan?",
          sender: "bot",
          time: "Just now",
        };
      } else if (input.toLowerCase().includes("weather") || input.toLowerCase().includes("मौसम")) {
        botResponse = {
          id: messages.length + 2,
          text: "The weather forecast indicates light rain in the next 3 days. It's a good time to prepare your soil for sowing.",
          sender: "bot",
          time: "Just now",
        };
      } else {
        botResponse = {
          id: messages.length + 2,
          text: "How can I assist you with your farming needs today? I can help with crop suggestions, pest management, or connect you with local AgroSaarthi Champions.",
          sender: "bot",
          time: "Just now",
        };
      }
      
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    
    // Simulate voice recognition
    if (!isRecording) {
      setTimeout(() => {
        setInput("What crops should I plant this season?");
        setIsRecording(false);
      }, 2000);
    }
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={toggleChat}
          className="bg-agro-yellow hover:bg-agro-yellow-light h-12 w-12 rounded-full shadow-lg fixed bottom-6 right-6 z-50"
          size="icon"
        >
          <MessageCircle className="text-white" />
        </Button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 bg-white rounded-xl shadow-xl z-50 overflow-hidden flex flex-col animate-grow">
          <div className="bg-agro-green text-white p-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="font-bold text-white text-sm">S</span>
              </div>
              <div>
                <h3 className="font-medium">Saathi</h3>
                <p className="text-xs opacity-80">Your farming assistant</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleChat}
              className="text-white hover:bg-white/20"
            >
              <X size={18} />
            </Button>
          </div>

          <div className="flex-grow overflow-y-auto p-3 max-h-80 bg-agro-green-pale/30">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`mb-3 max-w-[85%] ${
                  msg.sender === "user" ? "ml-auto" : ""
                }`}
              >
                <div
                  className={`p-3 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-agro-green text-white"
                      : "bg-white border border-agro-green-light/20"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {msg.time}
                </p>
              </div>
            ))}
          </div>

          <div className="p-3 border-t">
            <div className="flex gap-2">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message or speak..."
                className="min-h-10 resize-none"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
              />
              <div className="flex flex-col gap-2">
                <Button
                  size="icon"
                  className={`${
                    isRecording
                      ? "bg-red-500 hover:bg-red-600 animate-pulse"
                      : "bg-agro-green hover:bg-agro-green/90"
                  }`}
                  onClick={toggleRecording}
                >
                  <Mic size={18} className="text-white" />
                </Button>
                <Button
                  size="icon"
                  className="bg-agro-yellow hover:bg-agro-yellow-light"
                  onClick={handleSend}
                  disabled={!input.trim()}
                >
                  <Send size={18} className="text-white" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SaathiChatbot;
