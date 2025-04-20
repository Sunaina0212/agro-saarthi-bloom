
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, Leaf, ShoppingCart, Star, ArrowRight } from "lucide-react";

interface Product {
  id: string;
  name: {
    en: string;
    hi: string;
  };
  description: {
    en: string;
    hi: string;
  };
  price: number;
  image: string;
  category: string;
  rating: number;
  bestseller?: boolean;
}

const Shop = () => {
  const [language, setLanguage] = useState<"en" | "hi">("en");
  const [cart, setCart] = useState<string[]>([]);

  const addToCart = (productId: string) => {
    setCart((prev) => [...prev, productId]);
  };

  const products: Product[] = [
    {
      id: "vf-starter",
      name: {
        en: "Vertical Farming Starter Kit",
        hi: "ऊर्ध्वाधर खेती स्टार्टर किट"
      },
      description: {
        en: "Perfect for beginners. Includes 5 modular units, soil bags, nutrition mix, and seeds for leafy greens.",
        hi: "शुरुआती लोगों के लिए एकदम सही। इसमें 5 मॉड्यूलर इकाइयां, मिट्टी के थैले, पोषण मिश्रण और पत्तेदार सब्जियों के बीज शामिल हैं।"
      },
      price: 2499,
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=400",
      category: "kits",
      rating: 4.5,
      bestseller: true
    },
    {
      id: "vf-pro",
      name: {
        en: "Vertical Farming Pro Kit",
        hi: "ऊर्ध्वाधर खेती प्रो किट"
      },
      description: {
        en: "Advanced system with 10 modules, automated irrigation, nutrient sensors, and a variety of vegetable seeds.",
        hi: "10 मॉड्यूल, स्वचालित सिंचाई, पोषक तत्व सेंसर और विभिन्न प्रकार के सब्जी के बीजों के साथ उन्नत प्रणाली।"
      },
      price: 4999,
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=400",
      category: "kits",
      rating: 4.8
    },
    {
      id: "organic-pest",
      name: {
        en: "Organic Pest Control Kit",
        hi: "जैविक कीट नियंत्रण किट"
      },
      description: {
        en: "Natural pest control solutions using neem oil, garlic extract, and other organic ingredients with application tools.",
        hi: "नीम तेल, लहसुन अर्क और अन्य जैविक सामग्रियों का उपयोग करके प्राकृतिक कीट नियंत्रण समाधान, अनुप्रयोग उपकरणों के साथ।"
      },
      price: 899,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400",
      category: "inputs",
      rating: 4.3,
      bestseller: true
    },
    {
      id: "soil-enhancer",
      name: {
        en: "Soil Enhancer Pack",
        hi: "मिट्टी एनहांसर पैक"
      },
      description: {
        en: "Organic soil supplements to improve fertility, water retention, and beneficial microbial activity.",
        hi: "उर्वरता, जल धारण क्षमता और लाभकारी सूक्ष्मजीव गतिविधि में सुधार के लिए जैविक मिट्टी के सप्लीमेंट्स।"
      },
      price: 599,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400",
      category: "inputs",
      rating: 4.7
    },
    {
      id: "harvest-plus",
      name: {
        en: "Harvest+ Subscription",
        hi: "हार्वेस्ट+ सदस्यता"
      },
      description: {
        en: "Monthly delivery of seasonal seeds, organic inputs, and personalized farming guidance based on your soil.",
        hi: "आपकी मिट्टी के आधार पर मौसमी बीजों, जैविक इनपुट और व्यक्तिगत खेती मार्गदर्शन की मासिक डिलीवरी।"
      },
      price: 799,
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=400",
      category: "subscription",
      rating: 4.9
    },
    {
      id: "micro-greenhouse",
      name: {
        en: "Micro Greenhouse Kit",
        hi: "माइक्रो ग्रीनहाउस किट"
      },
      description: {
        en: "Compact greenhouse with temperature control for year-round growing of vegetables regardless of weather.",
        hi: "मौसम की परवाह किए बिना साल भर सब्जियां उगाने के लिए तापमान नियंत्रण के साथ कॉम्पैक्ट ग्रीनहाउस।"
      },
      price: 3499,
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=400",
      category: "kits",
      rating: 4.6
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-agro-yellow-pale mb-4">
            <Package className="h-8 w-8 text-agro-yellow" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {language === "en" ? "AgroSaarthi Kit Shop" : "एग्रोसारथी किट शॉप"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === "en"
              ? "Everything you need to start smart farming - from vertical farming kits to organic inputs and monthly subscriptions."
              : "स्मार्ट खेती शुरू करने के लिए आपको जो कुछ भी चाहिए - ऊर्ध्वाधर खेती किट से लेकर जैविक इनपुट और मासिक सदस्यता तक।"}
          </p>
        </div>

        <div className="flex justify-between items-center mb-8">
          <div className="relative w-full max-w-md">
            <Input
              type="text"
              placeholder={language === "en" ? "Search products..." : "उत्पाद खोजें..."}
              className="pr-10"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Button>
          </div>

          <div className="hidden md:flex items-center">
            <Button
              variant="outline"
              size="sm"
              className="relative border-gray-200 text-gray-700"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              {language === "en" ? "Cart" : "कार्ट"}
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-agro-green text-white text-xs flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="mb-8 flex justify-center">
            <TabsTrigger value="all">
              {language === "en" ? "All Products" : "सभी उत्पाद"}
            </TabsTrigger>
            <TabsTrigger value="kits">
              {language === "en" ? "Farming Kits" : "खेती किट"}
            </TabsTrigger>
            <TabsTrigger value="inputs">
              {language === "en" ? "Organic Inputs" : "जैविक इनपुट"}
            </TabsTrigger>
            <TabsTrigger value="subscription">
              {language === "en" ? "Subscriptions" : "सदस्यता"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  language={language} 
                  onAddToCart={addToCart} 
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="kits" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products
                .filter((p) => p.category === "kits")
                .map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    language={language} 
                    onAddToCart={addToCart} 
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="inputs" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products
                .filter((p) => p.category === "inputs")
                .map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    language={language} 
                    onAddToCart={addToCart} 
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="subscription" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products
                .filter((p) => p.category === "subscription")
                .map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    language={language} 
                    onAddToCart={addToCart} 
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-agro-green-pale rounded-xl p-8 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/30 rounded-full -mr-20 -mt-20 z-0"></div>
          <div className="relative z-10">
            <div className="mb-6 max-w-3xl">
              <h3 className="text-2xl font-bold mb-4 text-agro-green">
                {language === "en" ? "Need Custom Solutions?" : "कस्टम समाधान की आवश्यकता है?"}
              </h3>
              <p className="text-gray-700 mb-4">
                {language === "en"
                  ? "We can create custom farming solutions tailored to your specific needs, soil type, and available space."
                  : "हम आपकी विशिष्ट आवश्यकताओं, मिट्टी के प्रकार और उपलब्ध स्थान के अनुकूल कस्टम खेती समाधान बना सकते हैं।"}
              </p>
              <Button className="bg-agro-green hover:bg-agro-green/90">
                {language === "en" ? "Contact Our Experts" : "हमारे विशेषज्ञों से संपर्क करें"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProductCardProps {
  product: Product;
  language: "en" | "hi";
  onAddToCart: (id: string) => void;
}

const ProductCard = ({ product, language, onAddToCart }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 transition-all hover:shadow-lg group">
      <div className="relative">
        <div className="h-48 overflow-hidden">
          <img
            src={product.image}
            alt={product.name[language]}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
        {product.bestseller && (
          <div className="absolute top-2 left-2 bg-agro-yellow text-white text-xs font-bold px-2 py-1 rounded-full">
            {language === "en" ? "BESTSELLER" : "बेस्टसेलर"}
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
          <div className="flex items-center">
            <div className="flex items-center space-x-1 bg-white/90 px-2 py-1 rounded-full">
              <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
              <span className="text-xs font-medium">{product.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 text-gray-800">{product.name[language]}</h3>
        <p className="text-sm text-gray-600 mb-3 h-16 overflow-hidden">
          {product.description[language]}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="text-agro-green font-bold text-xl">₹{product.price}</div>
          <Button 
            size="sm" 
            onClick={() => onAddToCart(product.id)}
            className="bg-agro-green hover:bg-agro-green/90"
          >
            {language === "en" ? "Add to Cart" : "कार्ट में जोड़ें"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
