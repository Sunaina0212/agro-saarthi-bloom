
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Community from "@/components/Community";
import SaathiChatbot from "@/components/SaathiChatbot";
import WeatherWidget from "@/components/WeatherWidget";

const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <div className="fixed top-4 right-4 z-50">
        <WeatherWidget />
      </div>
      <main>
        <Community />
      </main>
      <SaathiChatbot />
      <Footer />
    </div>
  );
};

export default CommunityPage;
