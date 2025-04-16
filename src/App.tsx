
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Research from "./pages/Research";
import Teaching from "./pages/Teaching";
import SkillDevelopment from "./pages/SkillDevelopment";
import Consulting from "./pages/Consulting";
import IndustryAcademia from "./pages/IndustryAcademia";
import GovernmentNGO from "./pages/GovernmentNGO";
import ResearchCollaborations from "./pages/ResearchCollaborations";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/skill-development" element={<SkillDevelopment />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/industry-academia" element={<IndustryAcademia />} />
          <Route path="/government-ngo" element={<GovernmentNGO />} />
          <Route path="/research-collaborations" element={<ResearchCollaborations />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
