
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  image: string;
  quote: {
    en: string;
    hi: string;
  };
  audioUrl: string;
  videoUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: "farmer1",
    name: "Rajesh Patel",
    location: "Satara, Maharashtra",
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=400",
    quote: {
      en: "AgroSaarthi's soil analysis saved my cotton crop. The AI suggested exactly what my soil needed, and my yield increased by 40% last season!",
      hi: "एग्रोसारथी के मिट्टी विश्लेषण ने मेरी कपास की फसल को बचाया। एआई ने सुझाव दिया कि मेरी मिट्टी को क्या चाहिए, और पिछले सीजन में मेरी उपज 40% बढ़ गई!"
    },
    audioUrl: "#farmer1-audio",
    videoUrl: "#farmer1-video"
  },
  {
    id: "farmer2",
    name: "Lakshmi Devi",
    location: "Guntur, Andhra Pradesh",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400",
    quote: {
      en: "The vertical farming unit has changed my life. Now I grow vegetables for my family and sell the surplus in the local market, all from my small backyard!",
      hi: "ऊर्ध्वाधर खेती इकाई ने मेरा जीवन बदल दिया है। अब मैं अपने परिवार के लिए सब्जियां उगाती हूं और अतिरिक्त को स्थानीय बाजार में बेचती हूं, यह सब मेरे छोटे आंगन से!"
    },
    audioUrl: "#farmer2-audio",
    videoUrl: "#farmer2-video"
  },
  {
    id: "farmer3",
    name: "Harpreet Singh",
    location: "Amritsar, Punjab",
    image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=400",
    quote: {
      en: "The weather alerts have saved my crops twice from unexpected rains. The WhatsApp integration makes it so easy to get daily updates and advice.",
      hi: "मौसम अलर्ट ने मेरी फसलों को अप्रत्याशित बारिश से दो बार बचाया है। व्हाट्सएप एकीकरण दैनिक अपडेट और सलाह प्राप्त करना बहुत आसान बनाता है।"
    },
    audioUrl: "#farmer3-audio",
    videoUrl: "#farmer3-video"
  }
];

const FarmerSpeak = () => {
  const [activeTestimonial, setActiveTestimonial] = useState<string>("farmer1");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [language, setLanguage] = useState<"en" | "hi">("en");
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const handleTestimonialClick = (id: string) => {
    setActiveTestimonial(id);
    setIsPlaying(false);
  };
  
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  
  const currentTestimonial = testimonials.find(t => t.id === activeTestimonial) || testimonials[0];

  return (
    <section className="py-16 bg-agro-green-pale/30 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {language === "en" ? "Farmer Speak" : "किसान की बात"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === "en" 
              ? "Hear real stories from farmers who have transformed their fields with AgroSaarthi."
              : "एग्रोसारथी के साथ अपने खेतों को बदलने वाले किसानों की वास्तविक कहानियां सुनें।"}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 relative rounded-xl overflow-hidden bg-black shadow-xl">
            <div className="aspect-w-16 aspect-h-9 relative">
              {/* For prototype, using image as placeholder for video */}
              <img 
                src={currentTestimonial.image} 
                alt={currentTestimonial.name}
                className="w-full h-full object-cover opacity-90"
              />
              
              {/* This would be a video in production */}
              <video 
                ref={videoRef}
                poster={currentTestimonial.image}
                className="hidden w-full h-full object-cover"
                muted={isMuted}
                onEnded={() => setIsPlaying(false)}
              >
                <source src={currentTestimonial.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <div className="text-white mb-6">
                  <h3 className="text-xl font-bold">{currentTestimonial.name}</h3>
                  <p className="text-white/80">{currentTestimonial.location}</p>
                </div>
                
                <p className="text-white text-lg mb-8 max-w-2xl">
                  "{currentTestimonial.quote[language]}"
                </p>
                
                <div className="flex items-center gap-3">
                  <Button 
                    onClick={togglePlayPause} 
                    size="icon" 
                    className="bg-white text-agro-green hover:bg-white/90 h-12 w-12 rounded-full"
                  >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </Button>
                  
                  <Button 
                    onClick={toggleMute}
                    variant="ghost" 
                    size="icon" 
                    className="text-white hover:bg-white/20 h-10 w-10 rounded-full"
                  >
                    {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                  </Button>
                  
                  <div className="ml-2">
                    <div className="bg-white/20 h-1 w-40 sm:w-64 rounded-full overflow-hidden">
                      <div className="bg-white h-full w-1/3"></div>
                    </div>
                    <div className="text-white/70 text-xs mt-1">01:20 / 03:45</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              {language === "en" ? "More Farmer Stories" : "और किसान कहानियां"}
            </h3>
            
            <div className="space-y-4">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 flex gap-4 ${
                    activeTestimonial === testimonial.id 
                      ? "bg-white shadow-md border-l-4 border-agro-green" 
                      : "bg-white/50 hover:bg-white hover:shadow-sm"
                  }`}
                  onClick={() => handleTestimonialClick(testimonial.id)}
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <h4 className="font-medium text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    <p className="text-gray-600 mt-2 text-sm line-clamp-2">
                      "{testimonial.quote[language].substring(0, 80)}..."
                    </p>
                  </div>
                  
                  <div className="flex items-center">
                    <Button 
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 rounded-full text-agro-green hover:text-agro-green hover:bg-agro-green-pale"
                    >
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <Button variant="outline" className="w-full border-agro-green text-agro-green hover:bg-agro-green-pale">
                {language === "en" ? "View All Stories" : "सभी कहानियां देखें"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmerSpeak;
