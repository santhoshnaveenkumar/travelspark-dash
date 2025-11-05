import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const Budget = () => {
  const [location, setLocation] = useState("");
  const [duration, setDuration] = useState("5");
  const [preferences, setPreferences] = useState("medium");
  const [budgetData, setBudgetData] = useState<any>(null);

  const calculateBudget = () => {
    toast.loading("Calculating budget...");
    
    // Simulate API call
    setTimeout(() => {
      const budget = {
        food: preferences === "low" ? 150 : preferences === "medium" ? 300 : 500,
        transport: preferences === "low" ? 100 : preferences === "medium" ? 200 : 400,
        stay: preferences === "low" ? 250 : preferences === "medium" ? 500 : 900,
      };
      
      setBudgetData({
        ...budget,
        total: budget.food + budget.transport + budget.stay,
      });
      
      toast.dismiss();
      toast.success("💸 Budget calculated successfully");
    }, 1500);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-budget bg-clip-text text-transparent">
          💸 Budget Planner
        </h1>
        <p className="text-lg text-muted-foreground">
          Smart AI-powered cost estimation for your perfect vacation
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-8 space-y-6 bg-gradient-card-overlay shadow-colorful hover:shadow-glow-green transition-all duration-300">
          <h3 className="font-bold text-2xl bg-gradient-budget bg-clip-text text-transparent">Trip Details</h3>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="location">Destination</Label>
              <Input
                id="location"
                placeholder="e.g., Paris, Tokyo, New York"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Duration (days)</Label>
              <Input
                id="duration"
                type="number"
                min="1"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Budget Preferences</Label>
              <Select value={preferences} onValueChange={setPreferences}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Budget Travel</SelectItem>
                  <SelectItem value="medium">Moderate</SelectItem>
                  <SelectItem value="high">Luxury</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={calculateBudget}
              className="w-full bg-gradient-budget text-white shadow-glow-green hover:shadow-glow-blue transition-all duration-300 text-lg py-6"
              disabled={!location || !duration}
            >
              Calculate My Budget 💰
            </Button>
          </div>
        </Card>

        <Card className="p-6 space-y-4">
          <h3 className="font-semibold text-lg">Cost Breakdown</h3>
          
          {budgetData ? (
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                  <span className="font-medium">Food & Dining</span>
                  <span className="text-primary font-semibold">${budgetData.food}</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                  <span className="font-medium">Transportation</span>
                  <span className="text-primary font-semibold">${budgetData.transport}</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                  <span className="font-medium">Accommodation</span>
                  <span className="text-primary font-semibold">${budgetData.stay}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex justify-between items-center p-4 bg-gradient-primary rounded-lg">
                  <span className="text-primary-foreground font-semibold text-lg">
                    Total Estimate
                  </span>
                  <span className="text-primary-foreground font-bold text-2xl">
                    ${budgetData.total}
                  </span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground text-center">
                *Estimates based on {duration} days in {location}
              </p>
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 text-muted-foreground">
              Enter trip details to see cost breakdown
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Budget;
