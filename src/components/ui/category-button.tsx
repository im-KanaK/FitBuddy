import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CategoryButtonProps {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export const CategoryButton = ({ 
  children, 
  isActive, 
  onClick, 
  className 
}: CategoryButtonProps) => {
  return (
    <Button
      variant={isActive ? "default" : "outline"}
      onClick={onClick}
      className={cn(
        "rounded-2xl px-6 py-2 font-medium transition-all duration-200",
        isActive 
          ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)_/_0.3)] border-primary" 
          : "border-border hover:border-primary/50 hover:text-primary",
        className
      )}
    >
      {children}
    </Button>
  );
};