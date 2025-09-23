import { ArrowRight, Play, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WorkoutCard } from "@/components/ui/workout-card";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="p-6 pt-12">
        <div className="flex items-center gap-2 mb-2">
          <img src="/fitbuddy-logo.png" alt="FitBuddy Logo" className="w-8 h-8" />
          <h1 className="text-2xl font-bold text-foreground">FitBuddy</h1>
        </div>
        <p className="text-muted-foreground">Your daily fitness companion</p>
      </div>

      {/* Today's Workout */}
      <div className="px-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-foreground">Today's Workout</h2>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate("/workouts")}
            className="text-primary hover:text-primary hover:bg-primary/10"
          >
            <ArrowRight size={16} />
          </Button>
        </div>
        
        <WorkoutCard
          title="Quick 20-min routine"
          duration="20 min"
          exercises={8}
          variant="featured"
          onClick={() => navigate("/workouts")}
        />
      </div>

      {/* Nutrition Tips Preview */}
      <div className="px-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-foreground">Nutrition Tips</h2>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate("/nutrition")}
            className="text-primary hover:text-primary hover:bg-primary/10"
          >
            <ArrowRight size={16} />
          </Button>
        </div>
        
        <Card className="p-4 bg-gradient-to-r from-secondary/10 to-primary/10 border-secondary/20">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Daily Hydration</h3>
              <p className="text-sm text-muted-foreground">Drink 3L of water today</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center">
              <span className="text-2xl">💧</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;