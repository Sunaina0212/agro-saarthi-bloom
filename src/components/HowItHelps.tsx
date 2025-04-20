
import { useState } from "react";
import { Leaf, CloudSun, Mic, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeatureCard {
  id: string;
  title: { en: string; hi: string };
  description: { en: string; hi: string };
  icon: React.ReactNode;
  color: string;
}

const HowItHelps = () => {
  const [language, setLanguage] = useState<"en" | "hi">("en");
  const [activeCard, setActiveCard] = useState<string | null>("ai-planning");

  const features: FeatureCard[] = [
    {
      id: "ai-planning",
      title: {
        en: "AI Crop Planning",
        hi: "एआई फसल योजना"
      },
      description: {
        en: "Our AI analyzes your soil, local climate, and market trends to recommend the most profitable crops for your farm.",
        hi: "हमारा एआई आपकी मिट्टी, स्थानीय जलवायु और बाजार प्रवृत्तियों का विश्लेषण करके आपके खेत के लिए सबसे लाभदायक फसलों की सिफारिश करता है।"
      },
      icon: <Leaf className="h-6 w-6" />,
      color: "bg-agro-green-pale text-agro-green"
    },
    {
      id: "pesticide-recipes",
      title: {
        en: "Natural Pesticide Recipes",
        hi: "प्राकृतिक कीटनाशक नुस्खे"
      },
      description: {
        en: "Access a library of proven organic pesticide recipes using locally available ingredients to protect your crops naturally.",
        hi: "स्थानीय रूप से उपलब्ध सामग्री का उपयोग करके सिद्ध जैविक कीटनाशक नुस्खों की लाइब्रेरी तक पहुंचें ताकि आप अपनी फसलों को प्राकृतिक रूप से सुरक्षित रख सकें।"
      },
      icon: <Leaf className="h-6 w-6" />,
      color: "bg-agro-yellow-pale text-agro-yellow"
    },
    {
      id: "weather-suggestions",
      title: {
        en: "Weather-Based Suggestions",
        hi: "मौसम आधारित सुझाव"
      },
      description: {
        en: "Receive timely alerts and farming suggestions based on weather forecasts to protect and optimize your crops.",
        hi: "मौसम के पूर्वानुमानों के आधार पर समय पर अलर्ट और खेती के सुझाव प्राप्त करें ताकि आप अपनी फसलों की रक्षा और अनुकूलन कर सकें।"
      },
      icon: <CloudSun className="h-6 w-6" />,
      color: "bg-blue-50 text-blue-500"
    },
    {
      id: "micro-farming",
      title: {
        en: "Vertical Micro-Farming Units",
        hi: "ऊर्ध्वाधर माइक्रो-फार्मिंग इकाइयाँ"
      },
      description: {
        en: "Maximize your yield in limited space with our modular vertical farming solutions, perfect for small landholders.",
        hi: "हमारे मॉड्यूलर ऊर्ध्वाधर खेती समाधानों के साथ सीमित स्थान में अपनी उपज को अधिकतम करें, छोटे भूमिधारकों के लिए एकदम सही।"
      },
      icon: <Users className="h-6 w-6" />,
      color: "bg-agro-earth-pale text-agro-earth"
    }
  ];

  const handleCardClick = (id: string) => {
    setActiveCard(id === activeCard ? null : id);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {language === "en" ? "How AgroSaarthi Helps You" : "एग्रोसारथी आपकी मदद कैसे करता है"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === "en" 
              ? "Our smart farming solutions combine traditional wisdom with modern technology to help you grow more with less."
              : "हमारे स्मार्ट खेती समाधान पारंपरिक ज्ञान को आधुनिक तकनीक के साथ जोड़कर आपको कम में अधिक उगाने में मदद करते हैं।"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className={`rounded-xl border p-6 cursor-pointer transition-all duration-300 ${
                activeCard === feature.id 
                  ? "border-agro-green shadow-lg transform -translate-y-2" 
                  : "border-gray-200 hover:border-agro-green-light hover:shadow"
              }`}
              onClick={() => handleCardClick(feature.id)}
            >
              <div className={`w-12 h-12 rounded-full ${feature.color} flex items-center justify-center mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title[language]}</h3>
              <p className="text-gray-600 text-sm">
                {feature.description[language]}
              </p>
              
              {activeCard === feature.id && (
                <div className="mt-4 pt-4 border-t border-gray-100 animate-fade-in">
                  <div className="bg-gray-50 p-3 rounded-lg mb-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-agro-green-pale flex items-center justify-center">
                          <Mic className="h-4 w-4 text-agro-green" />
                        </div>
                        <span className="text-sm font-medium">Listen</span>
                      </div>
                      <Button size="sm" variant="ghost" className="text-agro-green">
                        {language === "en" ? "Learn More" : "अधिक जानें"}
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItHelps;
