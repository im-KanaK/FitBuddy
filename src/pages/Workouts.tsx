import { useState } from "react";
import { CategoryButton } from "@/components/ui/category-button";
import { ExerciseCard } from "@/components/ui/workout-card";
import { WeeklySchedule } from "@/components/ui/weekly-schedule";
import { Calendar, List } from "lucide-react";
import { Button } from "@/components/ui/button";

const Workouts = () => {
  const [activeCategory, setActiveCategory] = useState("Full Body");
  const [completedExercises, setCompletedExercises] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"weekly" | "exercises">("weekly");

  const categories = ["Full Body", "Cardio", "Yoga"];
  
  const fullBodyExercises = [
    "Pushups",
    "Squats", 
    "Plank",
    "Burpees",
    "Mountain Climbers",
    "Lunges"
  ];

  const cardioExercises = [
    "Jumping Jacks",
    "High Knees",
    "Burpees",
    "Jump Rope",
    "Running in Place"
  ];

  const yogaExercises = [
    "Sun Salutation",
    "Warrior Pose",
    "Tree Pose",
    "Child's Pose",
    "Downward Dog"
  ];

  const getCurrentExercises = () => {
    switch (activeCategory) {
      case "Cardio": return cardioExercises;
      case "Yoga": return yogaExercises;
      default: return fullBodyExercises;
    }
  };

  const toggleExercise = (exercise: string) => {
    setCompletedExercises(prev => 
      prev.includes(exercise) 
        ? prev.filter(e => e !== exercise)
        : [...prev, exercise]
    );
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="p-6 pt-12">
        <h1 className="text-2xl font-bold text-foreground mb-2">Workouts</h1>
        <p className="text-muted-foreground">Choose your fitness journey</p>
      </div>

      {/* Categories */}
      <div className="px-6 mb-8">
        <h2 className="text-lg font-semibold text-foreground mb-4">Categories:</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map((category) => (
            <CategoryButton
              key={category}
              isActive={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </CategoryButton>
          ))}
        </div>
      </div>

      {/* View Mode Toggle */}
      <div className="px-6 mb-6">
        <div className="flex gap-2 bg-muted p-1 rounded-lg w-fit">
          <Button
            variant={viewMode === "weekly" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("weekly")}
            className="flex items-center gap-2 rounded-md"
          >
            <Calendar size={16} />
            Weekly Plan
          </Button>
          <Button
            variant={viewMode === "exercises" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("exercises")}
            className="flex items-center gap-2 rounded-md"
          >
            <List size={16} />
            Exercise List
          </Button>
        </div>
      </div>

      {/* Content based on view mode */}
      <div className="px-6">
        {viewMode === "weekly" ? (
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4">
              {activeCategory} - Weekly Schedule
            </h2>
            <WeeklySchedule category={activeCategory} />
          </div>
        ) : (
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4">
              {activeCategory} Workout
            </h2>
            <div className="space-y-3">
              {getCurrentExercises().map((exercise) => (
                <ExerciseCard
                  key={exercise}
                  name={exercise}
                  isCompleted={completedExercises.includes(exercise)}
                  onToggle={() => toggleExercise(exercise)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Workouts;