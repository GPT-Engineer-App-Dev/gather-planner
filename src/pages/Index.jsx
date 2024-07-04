import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to Event Manager</h1>
      <p className="mb-6">Manage your events efficiently and effortlessly.</p>
      <Button onClick={() => navigate("/create-event")}>Create New Event</Button>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
        <div className="space-y-4">
          {/* Placeholder for upcoming events */}
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-bold">Event Name</h3>
            <p className="text-gray-600">Date: 2023-10-01</p>
            <p className="text-gray-600">Description: This is a sample event description.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-xl font-bold">Event Name</h3>
            <p className="text-gray-600">Date: 2023-10-15</p>
            <p className="text-gray-600">Description: This is another sample event description.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
