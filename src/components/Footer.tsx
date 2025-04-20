
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Leaf, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-agro-green flex items-center justify-center">
                <span className="font-bold text-white">AS</span>
              </div>
              <span className="font-bold text-agro-green">AgroSaarthi</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Your AI-powered farming companion, helping small-scale farmers grow more with less.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-agro-green">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Button>
              <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-agro-green">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Button>
              <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-agro-green">
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                  <path d="M13.5 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                  <path d="M9 14h6"></path>
                </svg>
              </Button>
              <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-agro-green">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-agro-green text-sm">Home</Link>
              </li>
              <li>
                <Link to="/how-it-helps" className="text-gray-600 hover:text-agro-green text-sm">How It Helps</Link>
              </li>
              <li>
                <Link to="/farmer-speak" className="text-gray-600 hover:text-agro-green text-sm">Farmer Speak</Link>
              </li>
              <li>
                <Link to="/soil-to-seed" className="text-gray-600 hover:text-agro-green text-sm">Soil-to-Seed Tool</Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-600 hover:text-agro-green text-sm">Community</Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-600 hover:text-agro-green text-sm">Shop</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-600 hover:text-agro-green text-sm">Crop Library</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-agro-green text-sm">Weather Updates</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-agro-green text-sm">Market Prices</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-agro-green text-sm">Farming Calendar</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-agro-green text-sm">Government Schemes</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-agro-green text-sm">Success Stories</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-agro-green mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-600 text-sm">123 Farming Avenue, Tech Hub, Pune, Maharashtra, India</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-agro-green mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-600 text-sm">support@agrosaarthi.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-agro-green mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-600 text-sm">+91 123 456 7890</span>
              </li>
            </ul>
            <div className="mt-6">
              <div className="flex items-center">
                <Globe className="h-5 w-5 text-agro-green mr-2" />
                <span className="text-gray-700 font-medium">Language / भाषा</span>
              </div>
              <div className="flex space-x-2 mt-2">
                <Button variant="outline" size="sm" className="border-agro-green text-agro-green bg-white">
                  English
                </Button>
                <Button variant="outline" size="sm" className="border-gray-200 text-gray-700 hover:border-agro-green hover:text-agro-green">
                  हिंदी
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-8 mt-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm text-center md:text-left mb-4 md:mb-0">
            © 2025 AgroSaarthi. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="#" className="text-gray-500 hover:text-agro-green text-sm">Privacy Policy</Link>
            <Link to="#" className="text-gray-500 hover:text-agro-green text-sm">Terms of Service</Link>
            <Link to="#" className="text-gray-500 hover:text-agro-green text-sm">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
