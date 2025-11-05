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
    <div className="space-y-6 animate-fade-in">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Smart Guide</h1>
        <p className="text-muted-foreground">
          Discover contextual travel tips and local recommendations
        </p>
      </div>

      <Card className="p-6">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Find nearby restaurants, attractions, alerts..."
              className="pl-10"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && searchGuide()}
            />
          </div>
          <Button onClick={searchGuide}>Search</Button>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((result, index) => (
          <Card key={index} className="p-6 space-y-3 hover:shadow-hover transition-shadow">
            <div className="flex items-start justify-between">
              <h3 className="font-semibold text-lg text-foreground">{result.name}</h3>
              <div className="flex items-center gap-1 text-primary">
                <DollarSign className="w-4 h-4" />
                <span className="text-sm font-medium">{result.cost}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{result.type}</span>
            </div>
            
            <p className="text-sm text-muted-foreground">{result.description}</p>
            
            <Button variant="outline" className="w-full">
              View Details
            </Button>
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
