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

const FeatureCard = ({ icon: Icon, title, description, route, gradient }: FeatureCardProps) => {
  const navigate = useNavigate();

  return (
    <Card
      className={`group cursor-pointer transition-all duration-300 hover:shadow-hover hover:scale-105 p-6 ${
        gradient ? "bg-gradient-card" : ""
      }`}
      onClick={() => navigate(route)}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-primary-foreground" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        <Button variant="outline" className="mt-2">
          Get Started
        </Button>
      </div>
    </Card>
  );
};

export default FeatureCard;
