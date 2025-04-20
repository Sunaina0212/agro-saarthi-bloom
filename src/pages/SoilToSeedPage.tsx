
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SoilToSeedTool from "@/components/SoilToSeedTool";
import SaathiChatbot from "@/components/SaathiChatbot";
import WeatherWidget from "@/components/WeatherWidget";

const SoilToSeedPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <div className="fixed top-4 right-4 z-50">
        <WeatherWidget />
      </div>
      <main>
        <SoilToSeedTool />
      </main>
      <SaathiChatbot />
      <Footer />
    </div>
  );
};

export default SoilToSeedPage;
