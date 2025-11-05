import { Mic, Wallet, MapPin, Beaker, Plane } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/travel-hero.jpg";
import translatorIcon from "@/assets/translator-icon.png";
import budgetIcon from "@/assets/budget-icon.png";
import guideIcon from "@/assets/guide-icon.png";

const Dashboard = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Mic,
      title: "Speech Translator",
      description: "Break language barriers instantly with real-time translation and audio playback",
      route: "/translator",
      imageSrc: translatorIcon,
      bgGradient: "bg-gradient-translator",
    },
    {
      icon: Wallet,
      title: "Budget Planner",
      description: "Smart AI-powered cost estimation for your dream vacation",
      route: "/budget",
      imageSrc: budgetIcon,
      bgGradient: "bg-gradient-budget",
    },
    {
      icon: MapPin,
      title: "Smart Guide",
      description: "Discover hidden gems and local favorites wherever you go",
      route: "/guide",
      imageSrc: guideIcon,
      bgGradient: "bg-gradient-guide",
    },
  ];

  return (
    <div className="space-y-12 animate-fade-in -mt-8">
      {/* Hero Section */}
      <div className="relative -mx-8 -mt-8 mb-12 overflow-hidden rounded-3xl shadow-colorful">
        <div className="relative h-[500px]">
          <img 
            src={heroImage} 
            alt="Travel destinations" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-70"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl animate-scale-in">
              Your Smart Travel Companion
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl drop-shadow-lg font-medium">
              Explore the world with confidence - translate, plan, and discover like never before ✈️
            </p>
            <div className="flex gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-glow-blue text-lg px-8 py-6 rounded-xl font-semibold"
                onClick={() => navigate("/translator")}
              >
                <Plane className="w-5 h-5 mr-2" />
                Start Exploring
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="space-y-6">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Everything You Need for Perfect Travel
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful tools designed to make your journey smooth, affordable, and unforgettable
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} gradient />
          ))}
        </div>
      </div>

      {/* Demo CTA */}
      <div className="relative overflow-hidden rounded-2xl shadow-glow-orange">
        <div className="absolute inset-0 bg-gradient-guide opacity-90"></div>
        <div className="relative p-8 text-center space-y-4">
          <Beaker className="w-16 h-16 text-white mx-auto drop-shadow-lg" />
          <h2 className="text-3xl font-bold text-white drop-shadow-md">
            See It In Action
          </h2>
          <p className="text-white/95 text-lg max-w-2xl mx-auto">
            Experience all features with our interactive demo presentation
          </p>
          <Button
            onClick={() => navigate("/demo")}
            size="lg"
            className="bg-white text-secondary hover:bg-white/90 shadow-lg text-lg px-8 py-6 rounded-xl font-semibold mt-4"
          >
            <Beaker className="w-5 h-5 mr-2" />
            Launch Demo Mode
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
