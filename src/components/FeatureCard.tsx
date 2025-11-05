import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  route: string;
  gradient?: boolean;
}

const FeatureCard = ({ icon: Icon, title, description, route, gradient, imageSrc, bgGradient }: FeatureCardProps & { imageSrc?: string; bgGradient?: string }) => {
  const navigate = useNavigate();

  return (
    <Card
      className="group cursor-pointer transition-all duration-500 hover:scale-105 hover:-translate-y-2 p-0 overflow-hidden border-0 shadow-colorful hover:shadow-glow-blue"
      onClick={() => navigate(route)}
    >
      {imageSrc && (
        <div className="relative h-48 overflow-hidden">
          <img src={imageSrc} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          <div className={`absolute inset-0 ${bgGradient || 'bg-gradient-translator'} opacity-70`}></div>
        </div>
      )}
      <div className={`relative p-6 ${bgGradient || 'bg-gradient-card-overlay'} backdrop-blur-sm`}>
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-20 h-20 bg-white shadow-lg rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
            <Icon className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
          <Button className="mt-2 bg-gradient-hero text-white shadow-glow-blue hover:shadow-glow-orange transition-all duration-300">
            Get Started ✈️
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default FeatureCard;
