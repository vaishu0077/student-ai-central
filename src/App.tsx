
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import AssistantPage from "./pages/AssistantPage";
import SchedulePage from "./pages/SchedulePage";
import NotesPage from "./pages/NotesPage";
import LoginPage from "./pages/LoginPage";
import DeadlinesPage from "./pages/DeadlinesPage";
import FacultyPage from "./pages/FacultyPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="assistant" element={<AssistantPage />} />
            <Route path="schedule" element={<SchedulePage />} />
            <Route path="notes" element={<NotesPage />} />
            <Route path="deadlines" element={<DeadlinesPage />} />
            <Route path="faculty" element={<FacultyPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
