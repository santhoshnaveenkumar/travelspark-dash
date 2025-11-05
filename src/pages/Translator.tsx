import { useState } from "react";
import { Mic, MicOff, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Translator = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("fr");
  const [responseTime, setResponseTime] = useState(0);

  const toggleRecording = () => {
    if (!isRecording) {
      toast.success("🎤 Recording started");
      setIsRecording(true);
      // Simulate speech recognition
      setTimeout(() => {
        setInputText("Hello, where is the nearest restaurant?");
        setIsRecording(false);
        toast.info("Recording complete");
      }, 2000);
    } else {
      setIsRecording(false);
      toast.info("Recording stopped");
    }
  };

  const translateText = async () => {
    const startTime = Date.now();
    toast.loading("Translating...");
    
    // Simulate API call
    setTimeout(() => {
      const endTime = Date.now();
      setResponseTime((endTime - startTime) / 1000);
      setTranslatedText("Bonjour, où est le restaurant le plus proche?");
      toast.dismiss();
      toast.success("✅ Translation complete");
    }, 1500);
  };

  const playAudio = () => {
    toast.info("🔊 Playing translation");
    // Text-to-speech would be implemented here
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-translator bg-clip-text text-transparent">
          🎤 Speech Translator
        </h1>
        <p className="text-lg text-muted-foreground">
          Break language barriers with real-time translation and audio playback
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-8 space-y-6 bg-gradient-card-overlay shadow-colorful hover:shadow-glow-blue transition-all duration-300">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-2xl bg-gradient-translator bg-clip-text text-transparent">Input</h3>
            <Button
              variant={isRecording ? "destructive" : "default"}
              size="lg"
              onClick={toggleRecording}
              className={`rounded-full w-14 h-14 shadow-lg ${isRecording ? 'animate-pulse' : 'hover:scale-110'} transition-all duration-300`}
            >
              {isRecording ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
            </Button>
          </div>
          <Textarea
            placeholder="Speak or type here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="min-h-[200px]"
          />
          <div className="flex gap-4">
            <Select value={targetLanguage} onValueChange={setTargetLanguage}>
              <SelectTrigger className="flex-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="de">German</SelectItem>
                <SelectItem value="ja">Japanese</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={translateText} className="flex-1">
              Translate
            </Button>
          </div>
        </Card>

        <Card className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">Translation</h3>
            <Button variant="outline" size="icon" onClick={playAudio}>
              <Volume2 className="w-5 h-5" />
            </Button>
          </div>
          <div className="min-h-[200px] p-4 bg-secondary/50 rounded-lg">
            <p className="text-foreground">{translatedText || "Translation will appear here..."}</p>
          </div>
          {responseTime > 0 && (
            <p className="text-sm text-muted-foreground">
              Responded in {responseTime.toFixed(2)} seconds
            </p>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Translator;
