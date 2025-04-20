
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, UserPlus, MessageCircle, Calendar } from "lucide-react";

const Community = () => {
  const [language, setLanguage] = useState<"en" | "hi">("en");

  const communityData = {
    champions: [
      {
        id: 1,
        name: "Vijay Sharma",
        location: "Nashik, Maharashtra",
        expertise: language === "en" ? "Organic Farming" : "जैविक खेती",
        image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=200",
        farmersHelped: 45,
      },
      {
        id: 2,
        name: "Anita Patil",
        location: "Pune, Maharashtra",
        expertise: language === "en" ? "Vertical Farming" : "ऊर्ध्वाधर खेती",
        image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=200",
        farmersHelped: 32,
      },
      {
        id: 3,
        name: "Ramesh Kumar",
        location: "Nagpur, Maharashtra",
        expertise: language === "en" ? "Water Conservation" : "जल संरक्षण",
        image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=200",
        farmersHelped: 28,
      },
    ],
    events: [
      {
        id: 1,
        title: language === "en" ? "Organic Farming Workshop" : "जैविक खेती कार्यशाला",
        date: "25 Apr 2025",
        location: "Nashik, Maharashtra",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=200",
        attendees: 120,
      },
      {
        id: 2,
        title: language === "en" ? "Vertical Farming Demo" : "ऊर्ध्वाधर खेती डेमो",
        date: "10 May 2025",
        location: "Pune, Maharashtra",
        image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=200",
        attendees: 85,
      },
      {
        id: 3,
        title: language === "en" ? "Monsoon Preparedness Meet" : "मानसून तैयारी बैठक",
        date: "5 Jun 2025",
        location: "Mumbai, Maharashtra",
        image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=200",
        attendees: 150,
      },
    ],
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-agro-green-pale mb-4">
            <Users className="h-8 w-8 text-agro-green" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {language === "en" ? "Join Our Growing Community" : "हमारे बढ़ते समुदाय से जुड़ें"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === "en"
              ? "Connect with fellow farmers, learn from AgroSaarthi Champions, and participate in events to enhance your farming knowledge."
              : "साथी किसानों से जुड़ें, एग्रोसारथी चैंपियंस से सीखें, और अपने कृषि ज्ञान को बढ़ाने के लिए कार्यक्रमों में भाग लें।"}
          </p>
        </div>

        <Tabs defaultValue="champions" className="mb-12">
          <TabsList className="mb-8 flex justify-center">
            <TabsTrigger value="champions" className="px-6">
              <UserPlus className="h-4 w-4 mr-2" />
              {language === "en" ? "AgroSaarthi Champions" : "एग्रोसारथी चैंपियंस"}
            </TabsTrigger>
            <TabsTrigger value="events" className="px-6">
              <Calendar className="h-4 w-4 mr-2" />
              {language === "en" ? "Upcoming Events" : "आगामी कार्यक्रम"}
            </TabsTrigger>
            <TabsTrigger value="groups" className="px-6">
              <MessageCircle className="h-4 w-4 mr-2" />
              {language === "en" ? "Farmer Groups" : "किसान समूह"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="champions">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communityData.champions.map((champion) => (
                <div
                  key={champion.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-agro-green-light/20 transition-transform hover:scale-[1.02] hover:shadow-lg"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={champion.image}
                      alt={champion.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-xl">{champion.name}</h3>
                    <p className="text-gray-500 text-sm">{champion.location}</p>
                    <p className="mt-2 text-agro-green font-medium">{champion.expertise}</p>
                    
                    <div className="flex justify-between items-center mt-4">
                      <div className="text-sm text-gray-500">
                        <span className="font-semibold text-gray-700">{champion.farmersHelped}+</span>{" "}
                        {language === "en" ? "farmers helped" : "किसानों की मदद की"}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-agro-green text-agro-green hover:bg-agro-green-pale"
                      >
                        {language === "en" ? "Connect" : "जुड़ें"}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-agro-green-pale/50 rounded-xl border border-dashed border-agro-green/40 p-6 flex flex-col items-center justify-center text-center transition-transform hover:scale-[1.02]">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4">
                  <UserPlus className="h-8 w-8 text-agro-green" />
                </div>
                <h3 className="font-bold text-xl text-agro-green mb-2">
                  {language === "en" ? "Become a Champion" : "चैंपियन बनें"}
                </h3>
                <p className="text-gray-600 mb-4">
                  {language === "en"
                    ? "Share your farming expertise and help other farmers in your community."
                    : "अपनी कृषि विशेषज्ञता साझा करें और अपने समुदाय के अन्य किसानों की मदद करें।"}
                </p>
                <Button
                  className="bg-agro-green hover:bg-agro-green/90 mt-2"
                >
                  {language === "en" ? "Apply Now" : "अभी आवेदन करें"}
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="events">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {communityData.events.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-agro-green-light/20 transition-all hover:shadow-lg group"
                >
                  <div className="h-40 overflow-hidden relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <div className="bg-white text-agro-green font-bold px-3 py-1 rounded-full text-sm">
                        {event.date}
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-xl mb-1">{event.title}</h3>
                    <p className="text-gray-500 text-sm mb-3">{event.location}</p>
                    
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">
                        <span className="font-semibold text-gray-700">{event.attendees}</span>{" "}
                        {language === "en" ? "attendees" : "प्रतिभागी"}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-agro-green text-agro-green hover:bg-agro-green-pale"
                      >
                        {language === "en" ? "Register" : "पंजीकरण करें"}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button className="bg-agro-green hover:bg-agro-green/90">
                {language === "en" ? "View All Events" : "सभी कार्यक्रम देखें"}
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="groups">
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6 border border-agro-green-light/20">
              <h3 className="font-bold text-xl mb-4 text-center">
                {language === "en" ? "Find Your Local Farmer Group" : "अपना स्थानीय किसान समूह खोजें"}
              </h3>
              
              <div className="mb-6">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder={language === "en" ? "Enter your village or district" : "अपना गांव या जिला दर्ज करें"}
                    className="pr-12"
                  />
                  <Button
                    className="absolute right-1 top-1 bg-agro-green hover:bg-agro-green/90 h-8"
                    size="sm"
                  >
                    {language === "en" ? "Search" : "खोजें"}
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 border rounded-lg hover:border-agro-green/40 hover:bg-agro-green-pale/20 transition-colors cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">{language === "en" ? "Nashik Organic Farmers" : "नासिक जैविक किसान"}</h4>
                      <p className="text-sm text-gray-500">{language === "en" ? "120 members • Very active" : "120 सदस्य • बहुत सक्रिय"}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-agro-green text-agro-green hover:bg-agro-green-pale"
                    >
                      {language === "en" ? "Join" : "जुड़ें"}
                    </Button>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg hover:border-agro-green/40 hover:bg-agro-green-pale/20 transition-colors cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">{language === "en" ? "Maharashtra Cotton Growers" : "महाराष्ट्र कपास उत्पादक"}</h4>
                      <p className="text-sm text-gray-500">{language === "en" ? "85 members • Active" : "85 सदस्य • सक्रिय"}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-agro-green text-agro-green hover:bg-agro-green-pale"
                    >
                      {language === "en" ? "Join" : "जुड़ें"}
                    </Button>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg hover:border-agro-green/40 hover:bg-agro-green-pale/20 transition-colors cursor-pointer">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">{language === "en" ? "Pune Water Conservation Group" : "पुणे जल संरक्षण समूह"}</h4>
                      <p className="text-sm text-gray-500">{language === "en" ? "65 members • Somewhat active" : "65 सदस्य • कुछ हद तक सक्रिय"}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-agro-green text-agro-green hover:bg-agro-green-pale"
                    >
                      {language === "en" ? "Join" : "जुड़ें"}
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <Button className="bg-agro-green hover:bg-agro-green/90">
                  {language === "en" ? "Start Your Own Group" : "अपना समूह शुरू करें"}
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-agro-yellow-pale/60 rounded-xl p-8 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-agro-yellow-pale rounded-full -mr-20 -mt-20 z-0"></div>
          <div className="relative z-10">
            <div className="mb-6 max-w-3xl">
              <h3 className="text-2xl font-bold mb-4">
                {language === "en" ? "Become an AgroSaarthi Partner" : "एग्रोसारथी पार्टनर बनें"}
              </h3>
              <p className="text-gray-700">
                {language === "en"
                  ? "Are you an agricultural expert, NGO, or company working in the agricultural space? Partner with us to help more farmers and expand your reach."
                  : "क्या आप एक कृषि विशेषज्ञ, एनजीओ, या कृषि क्षेत्र में काम करने वाली कंपनी हैं? अधिक किसानों की मदद करने और अपनी पहुंच बढ़ाने के लिए हमारे साथ भागीदारी करें।"}
              </p>
            </div>
            
            <Button
              className="bg-agro-earth hover:bg-agro-earth-light text-white"
            >
              {language === "en" ? "Partner With Us" : "हमारे साथ भागीदारी करें"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
