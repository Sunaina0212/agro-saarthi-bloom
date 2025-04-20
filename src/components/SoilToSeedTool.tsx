
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Calendar, Leaf, CloudRain } from "lucide-react";

const SoilToSeedTool = () => {
  const [language, setLanguage] = useState<"en" | "hi">("en");
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    soilType: "",
    location: "",
    landSize: "",
    cropPreference: "",
    waterAvailability: "",
  });
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  const resetForm = () => {
    setFormData({
      soilType: "",
      location: "",
      landSize: "",
      cropPreference: "",
      waterAvailability: "",
    });
    setStep(1);
    setShowResult(false);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {language === "en" ? "Soil-to-Seed Planner" : "मिट्टी से बीज योजनाकार"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === "en"
              ? "Get a personalized crop plan based on your soil type, location, and preferences."
              : "अपनी मिट्टी के प्रकार, स्थान और प्राथमिकताओं के आधार पर एक व्यक्तिगत फसल योजना प्राप्त करें।"}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-agro-green-light/20 overflow-hidden">
          {!showResult ? (
            <div className="p-6 md:p-8">
              <div className="flex justify-between mb-8">
                {[1, 2, 3].map((stepNum) => (
                  <div key={stepNum} className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        step >= stepNum
                          ? "bg-agro-green text-white"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {stepNum}
                    </div>
                    <div
                      className={`text-xs mt-2 ${
                        step >= stepNum ? "text-agro-green" : "text-gray-400"
                      }`}
                    >
                      {stepNum === 1 && (language === "en" ? "Soil Details" : "मिट्टी विवरण")}
                      {stepNum === 2 && (language === "en" ? "Preferences" : "प्राथमिकताएँ")}
                      {stepNum === 3 && (language === "en" ? "Confirm" : "पुष्टि करें")}
                    </div>
                  </div>
                ))}
              </div>

              {step === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === "en" ? "Soil Type" : "मिट्टी का प्रकार"}
                    </label>
                    <Select
                      value={formData.soilType}
                      onValueChange={(value) => handleChange("soilType", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={language === "en" ? "Select soil type" : "मिट्टी का प्रकार चुनें"} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="clay">
                          {language === "en" ? "Clay" : "चिकनी मिट्टी"}
                        </SelectItem>
                        <SelectItem value="sandy">
                          {language === "en" ? "Sandy" : "रेतीली मिट्टी"}
                        </SelectItem>
                        <SelectItem value="loamy">
                          {language === "en" ? "Loamy" : "दोमट मिट्टी"}
                        </SelectItem>
                        <SelectItem value="black">
                          {language === "en" ? "Black" : "काली मिट्टी"}
                        </SelectItem>
                        <SelectItem value="red">
                          {language === "en" ? "Red" : "लाल मिट्टी"}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === "en" ? "Location" : "स्थान"}
                    </label>
                    <Input
                      type="text"
                      placeholder={language === "en" ? "District, State" : "जिला, राज्य"}
                      value={formData.location}
                      onChange={(e) => handleChange("location", e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === "en" ? "Land Size (in acres)" : "भूमि का आकार (एकड़ में)"}
                    </label>
                    <Input
                      type="text"
                      placeholder={language === "en" ? "e.g. 2.5" : "जैसे 2.5"}
                      value={formData.landSize}
                      onChange={(e) => handleChange("landSize", e.target.value)}
                    />
                  </div>

                  <div className="flex justify-end mt-8">
                    <Button
                      onClick={nextStep}
                      className="bg-agro-green hover:bg-agro-green/90"
                    >
                      {language === "en" ? "Next" : "अगला"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === "en" ? "Crop Preference" : "फसल प्राथमिकता"}
                    </label>
                    <Select
                      value={formData.cropPreference}
                      onValueChange={(value) => handleChange("cropPreference", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={language === "en" ? "Select crop type" : "फसल प्रकार चुनें"} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="grains">
                          {language === "en" ? "Grains" : "अनाज"}
                        </SelectItem>
                        <SelectItem value="pulses">
                          {language === "en" ? "Pulses" : "दालें"}
                        </SelectItem>
                        <SelectItem value="vegetables">
                          {language === "en" ? "Vegetables" : "सब्जियां"}
                        </SelectItem>
                        <SelectItem value="fruits">
                          {language === "en" ? "Fruits" : "फल"}
                        </SelectItem>
                        <SelectItem value="oilseeds">
                          {language === "en" ? "Oilseeds" : "तिलहन"}
                        </SelectItem>
                        <SelectItem value="cash_crops">
                          {language === "en" ? "Cash Crops" : "नकदी फसलें"}
                        </SelectItem>
                        <SelectItem value="no_preference">
                          {language === "en" ? "No Preference (recommend best)" : "कोई प्राथमिकता नहीं (सर्वश्रेष्ठ की सिफारिश करें)"}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {language === "en" ? "Water Availability" : "पानी की उपलब्धता"}
                    </label>
                    <Select
                      value={formData.waterAvailability}
                      onValueChange={(value) => handleChange("waterAvailability", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={language === "en" ? "Select water availability" : "पानी की उपलब्धता चुनें"} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="abundant">
                          {language === "en" ? "Abundant (Good irrigation)" : "प्रचुर (अच्छी सिंचाई)"}
                        </SelectItem>
                        <SelectItem value="moderate">
                          {language === "en" ? "Moderate (Periodic irrigation)" : "मध्यम (आवधिक सिंचाई)"}
                        </SelectItem>
                        <SelectItem value="limited">
                          {language === "en" ? "Limited (Mainly rain-fed)" : "सीमित (मुख्य रूप से वर्षा-आधारित)"}
                        </SelectItem>
                        <SelectItem value="scarce">
                          {language === "en" ? "Scarce (Drought-prone area)" : "अभाव (सूखा-प्रवण क्षेत्र)"}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex justify-between mt-8">
                    <Button
                      variant="outline"
                      onClick={prevStep}
                      className="border-agro-green text-agro-green"
                    >
                      {language === "en" ? "Back" : "पीछे"}
                    </Button>
                    <Button
                      onClick={nextStep}
                      className="bg-agro-green hover:bg-agro-green/90"
                    >
                      {language === "en" ? "Next" : "अगला"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="animate-fade-in">
                  <h3 className="text-xl font-semibold mb-4">
                    {language === "en" ? "Review Your Information" : "अपनी जानकारी की समीक्षा करें"}
                  </h3>

                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">
                          {language === "en" ? "Soil Type" : "मिट्टी का प्रकार"}
                        </p>
                        <p className="font-medium">
                          {formData.soilType === "clay" && (language === "en" ? "Clay" : "चिकनी मिट्टी")}
                          {formData.soilType === "sandy" && (language === "en" ? "Sandy" : "रेतीली मिट्टी")}
                          {formData.soilType === "loamy" && (language === "en" ? "Loamy" : "दोमट मिट्टी")}
                          {formData.soilType === "black" && (language === "en" ? "Black" : "काली मिट्टी")}
                          {formData.soilType === "red" && (language === "en" ? "Red" : "लाल मिट्टी")}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">
                          {language === "en" ? "Location" : "स्थान"}
                        </p>
                        <p className="font-medium">{formData.location}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">
                          {language === "en" ? "Land Size" : "भूमि का आकार"}
                        </p>
                        <p className="font-medium">{formData.landSize} {language === "en" ? "acres" : "एकड़"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">
                          {language === "en" ? "Crop Preference" : "फसल प्राथमिकता"}
                        </p>
                        <p className="font-medium">
                          {formData.cropPreference === "grains" && (language === "en" ? "Grains" : "अनाज")}
                          {formData.cropPreference === "pulses" && (language === "en" ? "Pulses" : "दालें")}
                          {formData.cropPreference === "vegetables" && (language === "en" ? "Vegetables" : "सब्जियां")}
                          {formData.cropPreference === "fruits" && (language === "en" ? "Fruits" : "फल")}
                          {formData.cropPreference === "oilseeds" && (language === "en" ? "Oilseeds" : "तिलहन")}
                          {formData.cropPreference === "cash_crops" && (language === "en" ? "Cash Crops" : "नकदी फसलें")}
                          {formData.cropPreference === "no_preference" && (language === "en" ? "No Preference" : "कोई प्राथमिकता नहीं")}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">
                          {language === "en" ? "Water Availability" : "पानी की उपलब्धता"}
                        </p>
                        <p className="font-medium">
                          {formData.waterAvailability === "abundant" && (language === "en" ? "Abundant" : "प्रचुर")}
                          {formData.waterAvailability === "moderate" && (language === "en" ? "Moderate" : "मध्यम")}
                          {formData.waterAvailability === "limited" && (language === "en" ? "Limited" : "सीमित")}
                          {formData.waterAvailability === "scarce" && (language === "en" ? "Scarce" : "अभाव")}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-agro-yellow-pale/50 p-4 rounded-lg border border-agro-yellow/20 mb-6">
                    <div className="flex gap-2 items-center text-agro-yellow">
                      <CloudRain className="h-5 w-5" />
                      <p className="text-sm font-medium">
                        {language === "en"
                          ? "We'll analyze current and forecasted weather for your location to provide accurate recommendations."
                          : "सटीक सिफारिशें प्रदान करने के लिए हम आपके स्थान के लिए वर्तमान और पूर्वानुमानित मौसम का विश्लेषण करेंगे।"}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between mt-8">
                    <Button
                      variant="outline"
                      onClick={prevStep}
                      className="border-agro-green text-agro-green"
                    >
                      {language === "en" ? "Back" : "पीछे"}
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      className="bg-agro-green hover:bg-agro-green/90"
                    >
                      {language === "en" ? "Generate Crop Plan" : "फसल योजना बनाएं"}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="bg-agro-green p-4 text-white">
                <h3 className="text-xl font-bold">
                  {language === "en" ? "Your Personalized Crop Plan" : "आपकी व्यक्तिगत फसल योजना"}
                </h3>
                <p className="text-sm opacity-90">
                  {language === "en"
                    ? "Based on soil analysis, weather patterns, and your preferences"
                    : "मिट्टी विश्लेषण, मौसम पैटर्न और आपकी प्राथमिकताओं के आधार पर"}
                </p>
              </div>

              <div className="p-6 md:p-8">
                <Tabs defaultValue="recommendations">
                  <TabsList className="mb-6">
                    <TabsTrigger value="recommendations">
                      {language === "en" ? "Recommendations" : "अनुशंसाएँ"}
                    </TabsTrigger>
                    <TabsTrigger value="calendar">
                      {language === "en" ? "Calendar" : "कैलेंडर"}
                    </TabsTrigger>
                    <TabsTrigger value="soil">
                      {language === "en" ? "Soil Analysis" : "मिट्टी विश्लेषण"}
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="recommendations" className="space-y-6">
                    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                      <div className="flex gap-4 items-start">
                        <div className="w-12 h-12 bg-agro-green-pale rounded-full flex items-center justify-center flex-shrink-0">
                          <Leaf className="h-6 w-6 text-agro-green" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">
                            {language === "en" ? "Primary Recommendation" : "प्राथमिक अनुशंसा"}
                          </h4>
                          <p className="text-2xl font-bold text-agro-green mb-2">
                            {language === "en" ? "Soybean" : "सोयाबीन"}
                          </p>
                          <p className="text-gray-600">
                            {language === "en"
                              ? "Based on your black soil type and moderate water availability, soybean is an excellent choice for your 2.5 acre farm in Maharashtra. This crop requires minimal irrigation and is well-suited to your soil conditions."
                              : "आपके काली मिट्टी के प्रकार और मध्यम पानी की उपलब्धता के आधार पर, सोयाबीन महाराष्ट्र में आपके 2.5 एकड़ के खेत के लिए एक उत्कृष्ट विकल्प है। इस फसल को न्यूनतम सिंचाई की आवश्यकता होती है और यह आपकी मिट्टी की स्थिति के लिए अच्छी तरह से उपयुक्त है।"}
                          </p>
                          <div className="mt-4 grid grid-cols-2 gap-3">
                            <div className="bg-gray-50 p-2 rounded-md">
                              <p className="text-xs text-gray-500">
                                {language === "en" ? "Expected Yield" : "अपेक्षित उपज"}
                              </p>
                              <p className="font-semibold">25-30 {language === "en" ? "quintals/acre" : "क्विंटल/एकड़"}</p>
                            </div>
                            <div className="bg-gray-50 p-2 rounded-md">
                              <p className="text-xs text-gray-500">
                                {language === "en" ? "Market Rate" : "बाजार दर"}
                              </p>
                              <p className="font-semibold">₹4,200-4,500 {language === "en" ? "per quintal" : "प्रति क्विंटल"}</p>
                            </div>
                            <div className="bg-gray-50 p-2 rounded-md">
                              <p className="text-xs text-gray-500">
                                {language === "en" ? "Sowing Time" : "बुवाई का समय"}
                              </p>
                              <p className="font-semibold">{language === "en" ? "June-July" : "जून-जुलाई"}</p>
                            </div>
                            <div className="bg-gray-50 p-2 rounded-md">
                              <p className="text-xs text-gray-500">
                                {language === "en" ? "Harvest Time" : "कटाई का समय"}
                              </p>
                              <p className="font-semibold">{language === "en" ? "October-November" : "अक्टूबर-नवंबर"}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                        <h4 className="font-semibold">
                          {language === "en" ? "Alternative Option 1" : "वैकल्पिक विकल्प 1"}
                        </h4>
                        <p className="text-xl font-bold text-agro-yellow mb-2">
                          {language === "en" ? "Cotton" : "कपास"}
                        </p>
                        <p className="text-gray-600 text-sm mb-3">
                          {language === "en"
                            ? "Good match for your soil. Requires slightly more water but offers higher returns."
                            : "आपकी मिट्टी के लिए अच्छा मेल। थोड़ा अधिक पानी की आवश्यकता होती है लेकिन उच्च रिटर्न प्रदान करता है।"}
                        </p>
                        <Button variant="outline" size="sm" className="w-full border-agro-green text-agro-green">
                          {language === "en" ? "View Details" : "विवरण देखें"}
                        </Button>
                      </div>

                      <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                        <h4 className="font-semibold">
                          {language === "en" ? "Alternative Option 2" : "वैकल्पिक विकल्प 2"}
                        </h4>
                        <p className="text-xl font-bold text-agro-earth mb-2">
                          {language === "en" ? "Pigeon Pea (Tur Dal)" : "अरहर दाल (तूर दाल)"}
                        </p>
                        <p className="text-gray-600 text-sm mb-3">
                          {language === "en"
                            ? "Perfect for crop rotation. Helps fix nitrogen in soil for future crops."
                            : "फसल चक्र के लिए एकदम सही। भविष्य की फसलों के लिए मिट्टी में नाइट्रोजन को ठीक करने में मदद करता है।"}
                        </p>
                        <Button variant="outline" size="sm" className="w-full border-agro-green text-agro-green">
                          {language === "en" ? "View Details" : "विवरण देखें"}
                        </Button>
                      </div>
                    </div>

                    <div className="bg-agro-green-pale p-4 rounded-lg">
                      <div className="flex gap-2 mb-3">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                          <span className="font-bold text-agro-green">+</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-agro-green">
                            {language === "en" ? "Companion Planting Suggestion" : "साथी रोपण का सुझाव"}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {language === "en"
                              ? "Consider planting marigold along the borders of your soybean field to naturally deter pests."
                              : "कीटों को प्राकृतिक रूप से हतोत्साहित करने के लिए अपने सोयाबीन के खेत की सीमाओं के साथ गेंदा लगाने पर विचार करें।"}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between mt-6">
                      <Button variant="outline" onClick={resetForm} className="border-agro-green text-agro-green">
                        {language === "en" ? "Start Over" : "फिर से शुरू करें"}
                      </Button>
                      <Button className="bg-agro-green hover:bg-agro-green/90">
                        {language === "en" ? "Download Full Report" : "पूरी रिपोर्ट डाउनलोड करें"}
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="calendar">
                    <div className="bg-white rounded-lg border p-4 mb-4">
                      <h4 className="font-semibold mb-3">
                        {language === "en" ? "Soybean Farming Calendar" : "सोयाबीन खेती कैलेंडर"}
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="flex gap-3 items-start">
                          <div className="w-10 h-10 bg-agro-yellow-pale rounded-full flex items-center justify-center flex-shrink-0">
                            <Calendar className="h-5 w-5 text-agro-yellow" />
                          </div>
                          <div>
                            <p className="font-medium">{language === "en" ? "May - Early June" : "मई - जून की शुरुआत"}</p>
                            <p className="text-gray-600 text-sm">
                              {language === "en" ? "Soil preparation and field leveling" : "मिट्टी की तैयारी और खेत का समतलीकरण"}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-3 items-start">
                          <div className="w-10 h-10 bg-agro-green-pale rounded-full flex items-center justify-center flex-shrink-0">
                            <Calendar className="h-5 w-5 text-agro-green" />
                          </div>
                          <div>
                            <p className="font-medium">{language === "en" ? "June - Early July" : "जून - जुलाई की शुरुआत"}</p>
                            <p className="text-gray-600 text-sm">
                              {language === "en" ? "Sowing after first monsoon rain" : "पहली मानसून बारिश के बाद बुवाई"}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-3 items-start">
                          <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                            <Calendar className="h-5 w-5 text-blue-500" />
                          </div>
                          <div>
                            <p className="font-medium">{language === "en" ? "July - August" : "जुलाई - अगस्त"}</p>
                            <p className="text-gray-600 text-sm">
                              {language === "en" ? "Weed management and first fertilizer application" : "खरपतवार प्रबंधन और पहला उर्वरक अनुप्रयोग"}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-3 items-start">
                          <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0">
                            <Calendar className="h-5 w-5 text-purple-500" />
                          </div>
                          <div>
                            <p className="font-medium">{language === "en" ? "September" : "सितंबर"}</p>
                            <p className="text-gray-600 text-sm">
                              {language === "en" ? "Pest monitoring and second fertilizer application" : "कीट निगरानी और दूसरा उर्वरक अनुप्रयोग"}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex gap-3 items-start">
                          <div className="w-10 h-10 bg-agro-earth-pale rounded-full flex items-center justify-center flex-shrink-0">
                            <Calendar className="h-5 w-5 text-agro-earth" />
                          </div>
                          <div>
                            <p className="font-medium">{language === "en" ? "October - November" : "अक्टूबर - नवंबर"}</p>
                            <p className="text-gray-600 text-sm">
                              {language === "en" ? "Harvesting and post-harvest management" : "कटाई और कटाई के बाद प्रबंधन"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="soil">
                    <div className="bg-white rounded-lg border p-4 mb-4">
                      <div className="flex gap-3 items-start mb-4">
                        <div className="w-10 h-10 bg-agro-earth-pale rounded-full flex items-center justify-center flex-shrink-0">
                          <Leaf className="h-5 w-5 text-agro-earth" />
                        </div>
                        <div>
                          <h4 className="font-semibold">
                            {language === "en" ? "Soil Analysis Results" : "मिट्टी विश्लेषण परिणाम"}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {language === "en"
                              ? "Based on general properties of black soil in your region"
                              : "आपके क्षेत्र में काली मिट्टी के सामान्य गुणों के आधार पर"}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-gray-50 p-3 rounded-md">
                          <p className="text-xs text-gray-500">
                            {language === "en" ? "pH Level" : "पीएच स्तर"}
                          </p>
                          <p className="font-semibold">7.5 - 8.2</p>
                          <p className="text-xs text-agro-green">
                            {language === "en" ? "Slightly Alkaline" : "थोड़ा क्षारीय"}
                          </p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-md">
                          <p className="text-xs text-gray-500">
                            {language === "en" ? "Organic Matter" : "जैविक पदार्थ"}
                          </p>
                          <p className="font-semibold">1.2 - 1.5%</p>
                          <p className="text-xs text-yellow-500">
                            {language === "en" ? "Medium" : "मध्यम"}
                          </p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-md">
                          <p className="text-xs text-gray-500">
                            {language === "en" ? "Nitrogen (N)" : "नाइट्रोजन (N)"}
                          </p>
                          <p className="font-semibold">240 kg/ha</p>
                          <p className="text-xs text-yellow-500">
                            {language === "en" ? "Medium" : "मध्यम"}
                          </p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-md">
                          <p className="text-xs text-gray-500">
                            {language === "en" ? "Phosphorus (P)" : "फास्फोरस (P)"}
                          </p>
                          <p className="font-semibold">12 kg/ha</p>
                          <p className="text-xs text-red-500">
                            {language === "en" ? "Low" : "कम"}
                          </p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-md">
                          <p className="text-xs text-gray-500">
                            {language === "en" ? "Potassium (K)" : "पोटेशियम (K)"}
                          </p>
                          <p className="font-semibold">320 kg/ha</p>
                          <p className="text-xs text-agro-green">
                            {language === "en" ? "High" : "उच्च"}
                          </p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-md">
                          <p className="text-xs text-gray-500">
                            {language === "en" ? "Water Retention" : "जल धारण"}
                          </p>
                          <p className="font-semibold">65-70%</p>
                          <p className="text-xs text-agro-green">
                            {language === "en" ? "Good" : "अच्छा"}
                          </p>
                        </div>
                      </div>

                      <div className="bg-agro-yellow-pale/50 p-4 rounded-lg border border-agro-yellow/20 mb-4">
                        <h5 className="font-medium text-agro-yellow mb-2">
                          {language === "en" ? "Soil Improvement Recommendations" : "मिट्टी सुधार अनुशंसाएँ"}
                        </h5>
                        <ul className="text-sm text-gray-600 space-y-2">
                          <li>• {language === "en" ? "Add single super phosphate (SSP) at 200 kg/ha before sowing" : "बुवाई से पहले 200 किग्रा/हेक्टेयर की दर से सिंगल सुपर फॉस्फेट (एसएसपी) डालें"}</li>
                          <li>• {language === "en" ? "Apply farm yard manure (FYM) at 5 tonnes/ha to improve organic matter" : "जैविक पदार्थ में सुधार के लिए 5 टन/हेक्टेयर की दर से फार्म यार्ड खाद (FYM) लगाएं"}</li>
                          <li>• {language === "en" ? "Consider green manuring with dhaincha before soybean to improve soil health" : "मिट्टी के स्वास्थ्य में सुधार के लिए सोयाबीन से पहले ढैंचा के साथ हरी खाद पर विचार करें"}</li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SoilToSeedTool;
