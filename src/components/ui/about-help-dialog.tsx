import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface AboutHelpDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AboutHelpDialog({ open, onOpenChange }: AboutHelpDialogProps) {
  const handleContactClick = () => {
    window.location.href = "mailto:support@fitbuddy.com?subject=FitBuddy Feedback";
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">About & Help</DialogTitle>
          <DialogDescription className="sr-only">
            Information about FitBuddy app and frequently asked questions
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* About the App */}
          <div>
            <h3 className="text-lg font-semibold mb-3">About the App</h3>
            <p className="text-muted-foreground leading-relaxed">
              FitBuddy is your simple gym companion with easy workouts and nutrition tips. 
              No signup needed, just start training!
            </p>
          </div>

          <Separator />

          {/* Help / FAQ */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help / FAQ</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-1">How do I start a workout?</h4>
                <p className="text-sm text-muted-foreground">
                  Tap Workouts and select a routine.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-1">Can I track my progress?</h4>
                <p className="text-sm text-muted-foreground">
                  This version is focused on workouts & tips, progress tracking isn't included.
                </p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Contact / Feedback */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact / Feedback</h3>
            <Button 
              onClick={handleContactClick}
              className="w-full flex items-center gap-2"
              variant="outline"
            >
              <Mail size={16} />
              Contact / Feedback
            </Button>
          </div>

          <Separator />

          {/* Privacy / Terms */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Privacy / Terms</h3>
            <Link
              to="/privacy"
              className="w-full justify-start p-0 h-auto text-sm text-muted-foreground hover:text-foreground inline-flex items-center"
            >
              <ExternalLink size={14} className="mr-1" />
              View Privacy & Terms
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}