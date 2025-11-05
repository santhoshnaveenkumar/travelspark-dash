import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2, Play } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Demo = () => {
  const [showChecklist, setShowChecklist] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);

  const checklist = [
    "Internet Connected",
    "Microphone Permission Enabled",
    "Screen Recording Ready",
  ];

  const startDemo = async () => {
    setShowChecklist(false);
    setIsRunning(true);
    
    // Step 1: Translation
    toast.info("🎤 Starting translation demo...");
    await new Promise(resolve => setTimeout(resolve, 2000));
    setCompletedSteps(prev => [...prev, "translation"]);
    toast.success("✅ Translation: 'Where is the nearest restaurant?' → 'Où est le restaurant le plus proche?'");
    
    // Step 2: Guide search
    await new Promise(resolve => setTimeout(resolve, 2000));
    toast.info("📍 Fetching local guide data...");
    await new Promise(resolve => setTimeout(resolve, 2000));
    setCompletedSteps(prev => [...prev, "guide"]);
    toast.success("✅ Found 3 nearby restaurants");
    
    // Step 3: Complete
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsRunning(false);
    setCompletedSteps(prev => [...prev, "complete"]);
    toast.success("🎉 Demo completed successfully!");
  };

  return (
    <div className="space-y-6 animate-fade-in max-w-3xl mx-auto">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Demo Mode</h1>
        <p className="text-muted-foreground">
          Experience all features with an automated demonstration
        </p>
      </div>

      <Dialog open={showChecklist} onOpenChange={setShowChecklist}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Pre-Demo Checklist</DialogTitle>
            <DialogDescription>
              Please ensure the following before starting
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-3 py-4">
            {checklist.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <Button onClick={startDemo} className="w-full">
            <Play className="w-5 h-5 mr-2" />
            Start Demo
          </Button>
        </DialogContent>
      </Dialog>

      {!showChecklist && (
        <Card className="p-8 space-y-6">
          <div className="text-center space-y-4">
            {isRunning ? (
              <>
                <Loader2 className="w-16 h-16 text-primary mx-auto animate-spin" />
                <h2 className="text-2xl font-semibold">Demo in Progress...</h2>
                <p className="text-muted-foreground">
                  Please wait while we demonstrate the features
                </p>
              </>
            ) : completedSteps.includes("complete") ? (
              <>
                <CheckCircle2 className="w-16 h-16 text-primary mx-auto" />
                <h2 className="text-2xl font-semibold">Demo Completed! 🎉</h2>
                <p className="text-muted-foreground">
                  All features have been demonstrated successfully
                </p>
                <Button onClick={() => {
                  setCompletedSteps([]);
                  setShowChecklist(true);
                }}>
                  Restart Demo
                </Button>
              </>
            ) : null}
          </div>

          <div className="space-y-3">
            <div className={`p-4 rounded-lg border-2 ${
              completedSteps.includes("translation")
                ? "border-primary bg-primary/5"
                : "border-border"
            }`}>
              <div className="flex items-center justify-between">
                <span className="font-medium">Translation Demo</span>
                {completedSteps.includes("translation") && (
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                )}
              </div>
            </div>

            <div className={`p-4 rounded-lg border-2 ${
              completedSteps.includes("guide")
                ? "border-primary bg-primary/5"
                : "border-border"
            }`}>
              <div className="flex items-center justify-between">
                <span className="font-medium">Guide Search Demo</span>
                {completedSteps.includes("guide") && (
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                )}
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default Demo;
