import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Calendar, PlusCircle } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Use the sidebar layout
import Index from "./pages/Index.jsx";
import Events from "./pages/Events.jsx";
import CreateEditEvent from "./pages/CreateEditEvent.jsx";
import EventDetails from "./pages/EventDetails.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Events",
    to: "/events",
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    title: "Create Event",
    to: "/create-event",
    icon: <PlusCircle className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="events" element={<Events />} />
              <Route path="create-event" element={<CreateEditEvent />} />
              <Route path="event/:id" element={<EventDetails />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;