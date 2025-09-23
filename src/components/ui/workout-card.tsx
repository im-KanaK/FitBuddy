import { Play, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface WorkoutCardProps {
  title: string;
  duration?: string;
  exercises?: number;
  className?: string;
  variant?: "default" | "featured";
  onClick?: () => void;
}

export const WorkoutCard = ({ 
  title, 
  duration, 
  exercises, 
  className,
  variant = "default",
  onClick 
}: WorkoutCardProps) => {
  return (
    <Card 
      className={cn(
        "p-4 cursor-pointer transition-all duration-200 hover:bg-card/80",
        variant === "featured" && "bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20",
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="font-semibold text-foreground mb-1">{title}</h3>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            {duration && <span>{duration}</span>}
            {exercises && <span>{exercises} exercises</span>}
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="ml-3 h-8 w-8 rounded-full bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary"
        >
          <Play size={14} className="ml-0.5" />
        </Button>
      </div>
    </Card>
  );
};

interface ExerciseCardProps {
  name: string;
  isCompleted?: boolean;
  onToggle?: () => void;
}

export const ExerciseCard = ({ name, isCompleted, onToggle }: ExerciseCardProps) => {
  return (
    <Card 
      className={cn(
        "p-3 cursor-pointer transition-all duration-200 hover:bg-card/80",
        isCompleted && "bg-primary/5 border-primary/20"
      )}
      onClick={onToggle}
    >
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 rounded-full bg-muted hover:bg-primary/20 text-muted-foreground hover:text-primary p-0"
        >
          {isCompleted ? (
            <CheckCircle size={16} className="text-primary" />
          ) : (
            <Play size={14} className="ml-0.5" />
          )}
        </Button>
        <span className={cn(
          "font-medium",
          isCompleted ? "text-primary line-through" : "text-foreground"
        )}>
          {name}
        </span>
      </div>
    </Card>
  );
};