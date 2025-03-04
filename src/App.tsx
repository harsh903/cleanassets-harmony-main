
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Infrastructure from "./pages/dashboard/Infrastructure";
import Assets from "./pages/dashboard/Assets";
import Fleet from "./pages/dashboard/Fleet";
import Reports from "./pages/dashboard/Reports";
import Settings from "./pages/dashboard/Settings";
import Help from "./pages/dashboard/Help";
import Pending from "./pages/dashboard/Pending";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <TooltipProvider>
          <div className="min-h-screen bg-background">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/infrastructure" element={<Infrastructure />} />
              <Route path="/dashboard/assets" element={<Assets />} />
              <Route path="/dashboard/fleet" element={<Fleet />} />
              <Route path="/dashboard/reports" element={<Reports />} />
              <Route path="/dashboard/settings" element={<Settings />} />
              <Route path="/dashboard/help" element={<Help />} />
              <Route path="/dashboard/pending" element={<Pending />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
            <Sonner />
          </div>
        </TooltipProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
