import { useState } from "react";
import { Search, MapPin, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Guide = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);

  const searchGuide = () => {
    if (!query.trim()) {
      toast.error("Please enter a search query");
      return;
    }

    toast.loading("Searching...");
    
    // Simulate API call
    setTimeout(() => {
      const mockResults = [
        {
          name: "Le Petit Bistro",
          type: "Restaurant",
          cost: "$$",
          description: "Authentic French cuisine in the heart of the city",
        },
        {
          name: "City Museum",
          type: "Attraction",
          cost: "$",
          description: "Explore local history and culture",
        },
        {
          name: "Rooftop Bar 360",
          type: "Entertainment",
          cost: "$$$",
          description: "Panoramic views with signature cocktails",
        },
      ];
      
      setResults(mockResults);
      toast.dismiss();
      toast.success("📍 Local info updated successfully");
    }, 1000);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-guide bg-clip-text text-transparent">
          📍 Smart Guide
        </h1>
        <p className="text-lg text-muted-foreground">
          Discover hidden gems and local favorites wherever you travel
        </p>
      </div>

      <Card className="p-8 bg-gradient-card-overlay shadow-colorful">
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground" />
            <Input
              placeholder="Find nearby restaurants, attractions, or alerts..."
              className="pl-12 h-14 text-lg rounded-xl border-2 focus:border-primary"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && searchGuide()}
            />
          </div>
          <Button 
            onClick={searchGuide}
            size="lg"
            className="bg-gradient-guide text-white shadow-glow-orange hover:shadow-glow-green transition-all duration-300 px-8 rounded-xl"
          >
            Search 🔍
          </Button>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((result, index) => (
          <Card key={index} className="overflow-hidden border-0 shadow-colorful hover:shadow-glow-orange hover:scale-105 transition-all duration-500 group">
            <div className="h-40 bg-gradient-guide"></div>
            <div className="p-6 space-y-4 bg-gradient-card-overlay">
              <div className="flex items-start justify-between">
                <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">{result.name}</h3>
                <div className="flex items-center gap-1 px-3 py-1 bg-accent/20 rounded-full">
                  <DollarSign className="w-4 h-4 text-accent" />
                  <span className="text-sm font-bold text-accent">{result.cost}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="font-medium">{result.type}</span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">{result.description}</p>
              
              <Button className="w-full bg-gradient-hero text-white shadow-lg hover:shadow-glow-blue transition-all duration-300">
                View Details ➜
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {results.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          Search for local recommendations to get started
        </div>
      )}
    </div>
  );
};

export default Guide;
