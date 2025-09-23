import { createContext, useContext, useEffect, useRef, useState } from "react";
import { toast } from "@/hooks/use-toast";

type NotificationContextType = {
  notificationsEnabled: boolean;
  setNotificationsEnabled: (enabled: boolean) => void;
  scheduleNotification: (hour: number, minute: number) => void;
};

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

const motivationalMessages = [
  "Good morning! 💪 Time to crush your workout today.",
  "Rise and shine 🌅 Your 20-min workout is waiting!",
  "Stay strong! 🏋️ Don't skip your fitness routine today.",
  "Just 20 minutes can change your day. Start your workout now!",
  "Fuel your body 🍎 and smash your workout 💪"
];

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(() => {
    const saved = localStorage.getItem('fitbuddy-notifications-enabled');
    return saved !== null ? JSON.parse(saved) : true;
  });

  const [hasPermission, setHasPermission] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    localStorage.setItem('fitbuddy-notifications-enabled', JSON.stringify(notificationsEnabled));
  }, [notificationsEnabled]);

  useEffect(() => {
    if (!notificationsEnabled) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      return;
    }

    if ('Notification' in window) {
      if (Notification.permission === 'granted') {
        setHasPermission(true);
        scheduleDefaultNotification();
      } else if (Notification.permission === 'denied') {
        setHasPermission(false);
        scheduleDefaultNotification();
      } else {
        Notification.requestPermission()
          .then((permission) => {
            setHasPermission(permission === 'granted');
          })
          .finally(() => {
            scheduleDefaultNotification();
          });
      }
    } else {
      setHasPermission(false);
      scheduleDefaultNotification();
    }
  }, [notificationsEnabled]);

  const scheduleDefaultNotification = () => {
    // Clear any existing timer and schedule 7 AM notification
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    scheduleNotification(7, 0);
  };

  const scheduleNotification = (hour: number, minute: number) => {
    if (!notificationsEnabled) return;

    const now = new Date();
    const scheduledTime = new Date();
    scheduledTime.setHours(hour, minute, 0, 0);

    // If the time has already passed today, schedule for tomorrow
    if (scheduledTime <= now) {
      scheduledTime.setDate(scheduledTime.getDate() + 1);
    }

    const timeUntilNotification = scheduledTime.getTime() - now.getTime();

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
      
      // Browser notification if permitted, otherwise toast fallback
      if ('Notification' in window && Notification.permission === 'granted') {
        try {
          new Notification("FitBuddy Reminder", {
            body: randomMessage,
            icon: "/favicon.ico",
          });
        } catch (e) {
          // Fallback to toast below
        }
      }

      // Also show toast notification
      toast({
        title: "Workout Reminder",
        description: randomMessage,
      });

      // Schedule the next day's notification
      if (notificationsEnabled) {
        scheduleNotification(hour, minute);
      }
    }, timeUntilNotification);
  };

  return (
    <NotificationContext.Provider value={{
      notificationsEnabled,
      setNotificationsEnabled,
      scheduleNotification,
    }}>
      {children}
    </NotificationContext.Provider>
  );
}

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};