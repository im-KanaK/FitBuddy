import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Target } from "lucide-react";
import { cn } from "@/lib/utils";

interface WorkoutDay {
  day: string;
  workout: string;
  duration: string;
  difficulty: "Easy" | "Medium" | "Hard";
  exercises: string[];
}

interface WeeklyScheduleProps {
  category: string;
}

export const WeeklySchedule = ({ category }: WeeklyScheduleProps) => {
  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  };

  const fullBodySchedule: WorkoutDay[] = [
    {
      day: "Monday",
      workout: "Upper Body Strength",
      duration: "45 min",
      difficulty: "Medium",
      exercises: ["Push-ups", "Pull-ups", "Shoulder Press", "Bicep Curls", "Tricep Dips"]
    },
    {
      day: "Tuesday", 
      workout: "Lower Body Power",
      duration: "40 min",
      difficulty: "Hard",
      exercises: ["Squats", "Lunges", "Deadlifts", "Calf Raises", "Glute Bridges"]
    },
    {
      day: "Wednesday",
      workout: "Core & Flexibility",
      duration: "30 min", 
      difficulty: "Easy",
      exercises: ["Plank", "Russian Twists", "Mountain Climbers", "Leg Raises", "Stretching"]
    },
    {
      day: "Thursday",
      workout: "Full Body Circuit",
      duration: "50 min",
      difficulty: "Hard",
      exercises: ["Burpees", "Jump Squats", "Push-up to T", "High Knees", "Bear Crawls"]
    },
    {
      day: "Friday",
      workout: "Strength Training",
      duration: "45 min",
      difficulty: "Medium",
      exercises: ["Deadlifts", "Bench Press", "Rows", "Overhead Press", "Planks"]
    },
    {
      day: "Saturday",
      workout: "HIIT Workout",
      duration: "35 min",
      difficulty: "Hard",
      exercises: ["Sprint Intervals", "Jump Rope", "Box Jumps", "Battle Ropes", "Cool Down"]
    },
    {
      day: "Sunday",
      workout: "Active Recovery",
      duration: "25 min",
      difficulty: "Easy",
      exercises: ["Light Stretching", "Walking", "Yoga Flow", "Foam Rolling", "Meditation"]
    }
  ];

  const cardioSchedule: WorkoutDay[] = [
    {
      day: "Monday",
      workout: "HIIT Cardio",
      duration: "30 min",
      difficulty: "Hard",
      exercises: ["Jumping Jacks", "High Knees", "Burpees", "Sprint Intervals", "Cool Down"]
    },
    {
      day: "Tuesday",
      workout: "Steady State Cardio", 
      duration: "40 min",
      difficulty: "Medium",
      exercises: ["Treadmill Run", "Cycling", "Rowing", "Step-ups", "Walking"]
    },
    {
      day: "Wednesday",
      workout: "Dance Cardio",
      duration: "35 min",
      difficulty: "Easy",
      exercises: ["Zumba", "Dance Moves", "Rhythmic Steps", "Body Movement", "Stretching"]
    },
    {
      day: "Thursday",
      workout: "Circuit Training",
      duration: "45 min", 
      difficulty: "Hard",
      exercises: ["Jump Rope", "Box Jumps", "Running in Place", "Kickboxing", "Plyo Jumps"]
    },
    {
      day: "Friday",
      workout: "Low Impact Cardio",
      duration: "35 min",
      difficulty: "Medium",
      exercises: ["Elliptical", "Swimming Motion", "Arm Circles", "Marching", "Stretching"]
    },
    {
      day: "Saturday",
      workout: "Outdoor Cardio",
      duration: "50 min",
      difficulty: "Medium",
      exercises: ["Running", "Hill Sprints", "Nature Walk", "Cycling", "Fresh Air"]
    },
    {
      day: "Sunday",
      workout: "Recovery Cardio",
      duration: "20 min",
      difficulty: "Easy",
      exercises: ["Light Walking", "Gentle Movement", "Breathing Exercises", "Stretching", "Relaxation"]
    }
  ];

  const yogaSchedule: WorkoutDay[] = [
    {
      day: "Monday",
      workout: "Power Yoga",
      duration: "45 min",
      difficulty: "Hard",
      exercises: ["Sun Salutation", "Warrior Poses", "Chaturanga", "Crow Pose", "Savasana"]
    },
    {
      day: "Tuesday",
      workout: "Hatha Yoga",
      duration: "35 min",
      difficulty: "Easy",
      exercises: ["Mountain Pose", "Tree Pose", "Triangle Pose", "Child's Pose", "Meditation"]
    },
    {
      day: "Wednesday",
      workout: "Vinyasa Flow",
      duration: "40 min",
      difficulty: "Medium",
      exercises: ["Flowing Sequences", "Downward Dog", "Cobra Pose", "Pigeon Pose", "Relaxation"]
    },
    {
      day: "Thursday",
      workout: "Yin Yoga",
      duration: "50 min",
      difficulty: "Easy",
      exercises: ["Long Holds", "Deep Stretches", "Hip Openers", "Spinal Twists", "Deep Breathing"]
    },
    {
      day: "Friday",
      workout: "Ashtanga Yoga",
      duration: "55 min",
      difficulty: "Hard", 
      exercises: ["Primary Series", "Breath Control", "Bandhas", "Advanced Poses", "Meditation"]
    },
    {
      day: "Saturday",
      workout: "Restorative Yoga",
      duration: "30 min",
      difficulty: "Easy",
      exercises: ["Supported Poses", "Bolster Work", "Gentle Twists", "Legs Up Wall", "Deep Rest"]
    },
    {
      day: "Sunday",
      workout: "Morning Flow",
      duration: "25 min",
      difficulty: "Easy",
      exercises: ["Sun Salutation", "Gentle Backbends", "Hip Circles", "Pranayama", "Gratitude"]
    }
  ];

  const getScheduleForCategory = (): WorkoutDay[] => {
    switch (category) {
      case "Cardio": return cardioSchedule;
      case "Yoga": return yogaSchedule;
      default: return fullBodySchedule;
    }
  };

  const currentDay = getCurrentDay();
  const schedule = getScheduleForCategory();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-primary/20 text-primary border-primary/30";
      case "Medium": return "bg-secondary/20 text-secondary border-secondary/30";
      case "Hard": return "bg-destructive/20 text-destructive border-destructive/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-3">
      {schedule.map((dayWorkout) => {
        const isToday = dayWorkout.day === currentDay;
        
        return (
          <Card 
            key={dayWorkout.day}
            className={cn(
              "p-4 transition-all duration-200 hover:bg-card/80",
              isToday && "ring-2 ring-primary/50 bg-gradient-to-r from-primary/5 to-secondary/5"
            )}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className={cn(
                    "font-semibold",
                    isToday ? "text-primary" : "text-foreground"
                  )}>
                    {dayWorkout.day}
                  </h3>
                  {isToday && (
                    <Badge variant="outline" className="text-xs border-primary text-primary">
                      Today
                    </Badge>
                  )}
                </div>
                <h4 className="font-medium text-foreground mb-2">{dayWorkout.workout}</h4>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{dayWorkout.duration}</span>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={cn("text-xs", getDifficultyColor(dayWorkout.difficulty))}
                  >
                    {dayWorkout.difficulty}
                  </Badge>
                </div>
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center gap-1 mb-2">
                <Target size={14} className="text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Exercises:</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {dayWorkout.exercises.map((exercise, index) => (
                  <span 
                    key={index}
                    className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground"
                  >
                    {exercise}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};