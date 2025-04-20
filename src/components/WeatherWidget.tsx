
import { useState, useEffect } from "react";
import { CloudSun, CloudRain } from "lucide-react";

interface WeatherData {
  location: string;
  temperature: number;
  condition: "sunny" | "cloudy" | "rainy";
  humidity: number;
}

// For prototype purposes, we're using mock data
const mockWeatherData: WeatherData = {
  location: "Pune, Maharashtra",
  temperature: 28,
  condition: "sunny",
  humidity: 65,
};

const WeatherWidget = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be a fetch call to a weather API with geolocation
    const fetchWeatherData = () => {
      setTimeout(() => {
        setWeather(mockWeatherData);
        setLoading(false);
      }, 1000);
    };

    fetchWeatherData();
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse bg-white/80 rounded-lg p-3 shadow-sm w-full max-w-xs">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-6 bg-gray-200 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
      </div>
    );
  }

  if (!weather) return null;

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-agro-green-light/20 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-medium text-gray-500 text-sm">{weather.location}</h3>
          <div className="flex items-end gap-1">
            <span className="text-3xl font-semibold">{weather.temperature}°</span>
            <span className="text-gray-500 text-sm mb-1">C</span>
          </div>
          <p className="text-sm text-gray-500">Humidity: {weather.humidity}%</p>
        </div>
        <div className="p-2 bg-agro-green-pale rounded-full">
          {weather.condition === "sunny" ? (
            <CloudSun className="text-agro-yellow h-8 w-8" />
          ) : (
            <CloudRain className="text-blue-500 h-8 w-8" />
          )}
        </div>
      </div>
      <div className="mt-2 text-xs text-agro-green">
        <p>Perfect weather for cotton and soybean crops!</p>
      </div>
    </div>
  );
};

export default WeatherWidget;
