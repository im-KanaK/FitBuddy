import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";

interface MealPlanModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const MealPlanModal = ({ open, onOpenChange }: MealPlanModalProps) => {
  const mealPlan = {
    breakfast: [
      "Oatmeal with berries and almonds",
      "Greek yogurt with granola",
      "Whole grain toast with avocado"
    ],
    lunch: [
      "Grilled chicken salad with mixed greens",
      "Quinoa bowl with vegetables",
      "Turkey and hummus wrap"
    ],
    dinner: [
      "Baked salmon with sweet potato",
      "Lean beef stir-fry with brown rice",
      "Grilled tofu with roasted vegetables"
    ],
    snacks: [
      "Apple with peanut butter",
      "Mixed nuts and seeds",
      "Protein smoothie"
    ]
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md mx-auto max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-foreground flex items-center gap-2">
            🍽️ Sample Meal Plan
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            A balanced day of meals to fuel your workouts.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 mt-4">
          {Object.entries(mealPlan).map(([mealType, foods]) => (
            <Card key={mealType} className="p-4">
              <h3 className="font-semibold text-primary capitalize mb-3">
                {mealType}
              </h3>
              <ul className="space-y-2">
                {foods.map((food, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary">•</span>
                    {food}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
          
          <Card className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <h3 className="font-semibold text-foreground mb-2">💡 Pro Tips</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Drink water before each meal</li>
              <li>• Eat slowly and mindfully</li>
              <li>• Include protein with every meal</li>
              <li>• Choose whole foods over processed</li>
            </ul>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};