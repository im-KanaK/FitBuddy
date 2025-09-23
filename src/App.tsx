import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import { NotificationProvider } from "@/hooks/useNotifications";
import BottomNavigation from "@/components/layout/BottomNavigation";
import Home from "./pages/Home";
import Workouts from "./pages/Workouts";
import Nutrition from "./pages/Nutrition";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark">
      <NotificationProvider>
        <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="relative">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/workouts" element={<Workouts />} />
              <Route path="/nutrition" element={<Nutrition />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <BottomNavigation />
          </div>
        </BrowserRouter>
        </TooltipProvider>
      </NotificationProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
