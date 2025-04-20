
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HowItHelps from "@/components/HowItHelps";
import SaathiChatbot from "@/components/SaathiChatbot";
import WeatherWidget from "@/components/WeatherWidget";

const HowItHelpsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <div className="fixed top-4 right-4 z-50">
        <WeatherWidget />
      </div>
      <main>
        <HowItHelps />
      </main>
      <SaathiChatbot />
      <Footer />
    </div>
  );
};

export default HowItHelpsPage;
