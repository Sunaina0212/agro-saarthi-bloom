
import { useState, useEffect } from "react";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const farmingSteps = [
  "Soil Analysis",
  "AI Crop Planning",
  "Smart Irrigation",
  "Precision Farming",
  "Market Connection",
];

const HomeHero = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % farmingSteps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[80vh] px-4 pt-8 pb-16 flex flex-col justify-center relative overflow-hidden bg-gradient-to-b from-white via-agro-green-pale/50 to-white">
      {/* Decorative circles */}
      <div className="absolute left-0 top-20 w-64 h-64 rounded-full bg-agro-yellow-pale opacity-60 blur-3xl -z-10"></div>
      <div className="absolute right-0 bottom-20 w-72 h-72 rounded-full bg-agro-green-pale opacity-70 blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 md:pr-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Your AI-Powered
            <br />
            <span className="text-agro-green">Farming Companion</span>
          </h1>
          
          <div className="mt-6 relative h-20">
            {farmingSteps.map((step, index) => (
              <p
                key={step}
                className={`absolute transition-all duration-500 text-lg md:text-xl text-gray-600 left-0 right-0 md:left-0 md:right-auto ${
                  index === currentStep
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <span className="inline-block w-8 h-8 mr-2 bg-agro-yellow text-white rounded-full text-sm flex items-center justify-center">
                  {index + 1}
                </span>
                {step}
              </p>
            ))}
          </div>
          
          <p className="mt-16 text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
            AgroSaarthi combines AI technology with traditional farming wisdom to help small-scale farmers increase yields and income sustainably.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="bg-agro-green hover:bg-agro-green/90 text-white py-6">
              Get Your Free Crop Plan
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button variant="outline" className="border-agro-green text-agro-green hover:bg-agro-green-pale py-6">
              <Play className="mr-2 h-5 w-5" />
              Watch How It Works
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-gray-500 flex items-center justify-center md:justify-start">
            <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
            Trusted by 5000+ farmers across 200+ villages
          </div>
        </div>
        
        <div className="md:w-1/2 relative">
          <div className="bg-white rounded-xl border border-agro-green-light/20 shadow-xl overflow-hidden relative z-10 animate-pulse-gentle">
            <div className="aspect-w-1 aspect-h-1 relative">
              <img 
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=800" 
                alt="Farmer using AgroSaarthi app" 
                className="object-cover w-full rounded-t-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <p className="text-white font-medium">Smart farming in action at Rajesh's farm in Maharashtra</p>
              </div>
            </div>
            
            <div className="p-4 bg-agro-green-pale/50">
              <div className="flex mb-2">
                <div className="h-2 w-3/4 bg-agro-green/20 rounded-full"></div>
              </div>
              <div className="flex mb-2">
                <div className="h-2 w-1/2 bg-agro-green/20 rounded-full"></div>
              </div>
              <div className="flex">
                <div className="h-2 w-2/3 bg-agro-green/20 rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-4 -right-4 bg-white p-3 rounded-lg shadow-lg z-20 animate-seed-bloom">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-agro-yellow-pale flex items-center justify-center">
                <span className="text-agro-yellow text-lg font-bold">+</span>
              </div>
              <div>
                <p className="text-sm font-medium">Crop Yield</p>
                <p className="text-green-500 font-bold">+40%</p>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-lg z-20 animate-seed-bloom" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-agro-green-pale flex items-center justify-center">
                <span className="text-agro-green text-lg font-bold">-</span>
              </div>
              <div>
                <p className="text-sm font-medium">Water Usage</p>
                <p className="text-green-500 font-bold">-30%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
