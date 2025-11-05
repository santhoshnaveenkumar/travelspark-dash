import { Mic, Wallet, MapPin, Beaker } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Mic,
      title: "Speech Translator",
      description: "Translate speech in real-time with audio playback support",
      route: "/translator",
    },
    {
      icon: Wallet,
      title: "Budget Planner",
      description: "Estimate travel costs with smart AI-powered calculations",
      route: "/budget",
    },
    {
      icon: MapPin,
      title: "Smart Guide",
      description: "Get contextual travel tips and local recommendations",
      route: "/guide",
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Welcome to Your Travel Assistant
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Your intelligent companion for seamless travel experiences. Translate on the go, plan your budget, and discover local insights.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} gradient />
        ))}
      </div>

      <div className="bg-secondary/50 rounded-xl p-6 text-center space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">
          Try Our Interactive Demo
        </h2>
        <p className="text-muted-foreground">
          Experience all features in action with our automated demonstration
        </p>
        <Button
          onClick={() => navigate("/demo")}
          className="bg-gradient-primary hover:opacity-90"
        >
          <Beaker className="w-5 h-5 mr-2" />
          Start Demo Mode
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
