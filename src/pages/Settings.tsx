import { useState } from "react";
import { Bell, Moon, HelpCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { useNotifications } from "@/hooks/useNotifications";
import { AboutHelpDialog } from "@/components/ui/about-help-dialog";

const Settings = () => {
  const { notificationsEnabled, setNotificationsEnabled } = useNotifications();
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";
  const [showAboutDialog, setShowAboutDialog] = useState(false);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="p-6 pt-12">
        <h1 className="text-2xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground">Customize your FitBuddy experience</p>
      </div>

      <div className="px-6 space-y-4">
        {/* Notifications */}
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Bell size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Notifications</h3>
                <p className="text-sm text-muted-foreground">Get workout reminders</p>
              </div>
            </div>
            <Switch
              checked={notificationsEnabled}
              onCheckedChange={setNotificationsEnabled}
            />
          </div>
        </Card>

        {/* Dark Mode */}
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                <Moon size={20} className="text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Dark Mode</h3>
                <p className="text-sm text-muted-foreground">Toggle between light and dark theme</p>
              </div>
            </div>
            <Switch
              checked={isDarkMode}
              onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
            />
          </div>
        </Card>

        {/* About / Help */}
        <Card 
          className="p-4 cursor-pointer hover:bg-card/80 transition-colors"
          onClick={() => setShowAboutDialog(true)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <HelpCircle size={20} className="text-muted-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">About / Help</h3>
                <p className="text-sm text-muted-foreground">Get support and info</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground"
            >
              →
            </Button>
          </div>
        </Card>

        {/* App Info */}
        <div className="pt-8 text-center">
          <p className="text-sm text-muted-foreground mb-2">FitBuddy v1.0</p>
          <p className="text-xs text-muted-foreground">Your daily fitness companion</p>
        </div>
      </div>

      <AboutHelpDialog 
        open={showAboutDialog} 
        onOpenChange={setShowAboutDialog} 
      />
    </div>
  );
};

export default Settings;