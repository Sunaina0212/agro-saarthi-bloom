
import HomeHero from "@/components/HomeHero";
import HowItHelps from "@/components/HowItHelps";
import FarmerSpeak from "@/components/FarmerSpeak";
import WeatherWidget from "@/components/WeatherWidget";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SaathiChatbot from "@/components/SaathiChatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <div className="fixed top-4 right-4 z-50">
        <WeatherWidget />
      </div>
      <main>
        <HomeHero />
        <HowItHelps />
        <FarmerSpeak />
      </main>
      <SaathiChatbot />
      <Footer />
    </div>
  );
};

export default Index;
