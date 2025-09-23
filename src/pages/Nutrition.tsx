import { useState } from "react";
import { Check, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MealPlanModal } from "@/components/ui/meal-plan-modal";
import { cn } from "@/lib/utils";

const Nutrition = () => {
  const [completedTips, setCompletedTips] = useState<string[]>([]);
  const [showMealPlan, setShowMealPlan] = useState(false);

  const nutritionTips = [
    "Drink 3L Water",
    "Eat Protein with Every Meal", 
    "Avoid Sugary Drinks",
    "Include 5 Servings of Fruits & Vegetables",
    "Choose Whole Grains Over Refined",
    "Limit Processed Foods"
  ];

  const toggleTip = (tip: string) => {
    setCompletedTips(prev => 
      prev.includes(tip) 
        ? prev.filter(t => t !== tip)
        : [...prev, tip]
    );
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="p-6 pt-12">
        <h1 className="text-2xl font-bold text-foreground mb-2">Nutrition Tips</h1>
        <p className="text-muted-foreground">Fuel your fitness journey</p>
      </div>

      {/* Daily Nutrition Tips */}
      <div className="px-6 mb-8">
        <h2 className="text-lg font-semibold text-foreground mb-4">Daily Nutrition Tips</h2>
        <div className="space-y-3">
          {nutritionTips.map((tip) => {
            const isCompleted = completedTips.includes(tip);
            return (
              <Card 
                key={tip}
                className={cn(
                  "p-4 cursor-pointer transition-all duration-200 hover:bg-card/80",
                  isCompleted && "bg-primary/5 border-primary/20"
                )}
                onClick={() => toggleTip(tip)}
              >
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200",
                    isCompleted 
                      ? "bg-primary border-primary text-primary-foreground" 
                      : "border-muted-foreground hover:border-primary"
                  )}>
                    {isCompleted && <Check size={14} />}
                  </div>
                  <span className={cn(
                    "font-medium flex-1",
                    isCompleted ? "text-primary" : "text-foreground"
                  )}>
                    {tip}
                  </span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Sample Meal Plan */}
      <div className="px-6">
        <Card 
          className="p-4 bg-gradient-to-r from-secondary/10 to-primary/10 border-secondary/20 cursor-pointer hover:bg-gradient-to-r hover:from-secondary/15 hover:to-primary/15 transition-all duration-200"
          onClick={() => setShowMealPlan(true)}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Sample Meal Plan</h3>
              <p className="text-sm text-muted-foreground">Discover healthy meal ideas</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-secondary hover:text-secondary hover:bg-secondary/10"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </Card>
      </div>

      {/* Meal Plan Modal */}
      <MealPlanModal 
        open={showMealPlan} 
        onOpenChange={setShowMealPlan} 
      />
    </div>
  );
};

export default Nutrition;