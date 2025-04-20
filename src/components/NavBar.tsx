
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe, Volume2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "hi">("en");

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleLanguage = () => setLanguage(language === "en" ? "hi" : "en");

  const navLinks = [
    { name: { en: "Home", hi: "होम" }, path: "/" },
    { name: { en: "How It Helps", hi: "यह कैसे मदद करता है" }, path: "/how-it-helps" },
    { name: { en: "Farmer Speak", hi: "किसान की बात" }, path: "/farmer-speak" },
    { name: { en: "Soil-to-Seed", hi: "मिट्टी से बीज" }, path: "/soil-to-seed" },
    { name: { en: "Community", hi: "समुदाय" }, path: "/community" },
    { name: { en: "Shop", hi: "दुकान" }, path: "/shop" },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-agro-green-light/20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-agro-green flex items-center justify-center">
            <span className="font-bold text-white">AS</span>
          </div>
          <span className="font-bold text-agro-green hidden sm:block">
            {language === "en" ? "AgroSaarthi" : "एग्रोसारथी"}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-gray-600 hover:text-agro-green px-3 py-2 transition-colors text-sm"
            >
              {link.name[language]}
            </Link>
          ))}
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleLanguage} 
            className="text-gray-600 hover:text-agro-green"
          >
            <Globe size={20} />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-gray-600 hover:text-agro-green"
          >
            <Volume2 size={20} />
          </Button>
          
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-600"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white animate-fade-in">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-agro-green-pale hover:text-agro-green rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name[language]}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Floating Assistants */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3">
        <Button size="icon" className="bg-green-500 hover:bg-green-600 h-12 w-12 rounded-full shadow-lg">
          {/* WhatsApp icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
            <path d="M13.5 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
            <path d="M9 14h6" />
          </svg>
        </Button>
        <Button size="icon" className="bg-agro-yellow hover:bg-agro-yellow-light h-12 w-12 rounded-full shadow-lg">
          <MessageCircle size={24} className="text-white" />
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
