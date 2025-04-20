
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Shop from "@/components/Shop";
import SaathiChatbot from "@/components/SaathiChatbot";
import WeatherWidget from "@/components/WeatherWidget";

const ShopPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <div className="fixed top-4 right-4 z-50">
        <WeatherWidget />
      </div>
      <main>
        <Shop />
      </main>
      <SaathiChatbot />
      <Footer />
    </div>
  );
};

export default ShopPage;
