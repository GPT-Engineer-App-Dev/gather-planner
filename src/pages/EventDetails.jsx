import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";

const EventDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const event = {
    name: "Sample Event",
    date: "2023-10-01",
    time: "10:00 AM",
    location: "Sample Location",
    category: "Sample Category",
    description: "This is a detailed description of the sample event.",
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Event Details</h1>
      <div className="p-4 border rounded-lg">
        <h2 className="text-2xl font-semibold mb-2">{event.name}</h2>
        <p className="text-gray-600">Date: {event.date}</p>
        <p className="text-gray-600">Time: {event.time}</p>
        <p className="text-gray-600">Location: {event.location}</p>
        <p className="text-gray-600">Category: {event.category}</p>
        <p className="text-gray-600">Description: {event.description}</p>
        <div className="mt-4 space-x-2">
          <Button onClick={() => navigate(`/edit-event/${id}`)}>Edit</Button>
          <Button variant="destructive" onClick={() => navigate("/events")}>Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;