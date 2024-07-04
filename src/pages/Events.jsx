import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Sample Event 1",
      date: "2023-10-01",
      location: "Location 1",
      category: "Category 1",
      description: "This is a sample event description.",
    },
    {
      id: 2,
      name: "Sample Event 2",
      date: "2023-10-15",
      location: "Location 2",
      category: "Category 2",
      description: "This is another sample event description.",
    },
  ]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Events</h1>
      <div className="mb-4">
        <Button onClick={() => navigate("/create-event")}>Create New Event</Button>
      </div>
      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="p-4 border rounded-lg">
            <h3 className="text-xl font-bold">{event.name}</h3>
            <p className="text-gray-600">Date: {event.date}</p>
            <p className="text-gray-600">Location: {event.location}</p>
            <p className="text-gray-600">Category: {event.category}</p>
            <p className="text-gray-600">Description: {event.description}</p>
            <div className="mt-4 space-x-2">
              <Button onClick={() => navigate(`/event/${event.id}`)}>View Details</Button>
              <Button variant="outline" onClick={() => navigate(`/edit-event/${event.id}`)}>Edit</Button>
              <Button variant="destructive" onClick={() => setEvents(events.filter(e => e.id !== event.id))}>Delete</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;