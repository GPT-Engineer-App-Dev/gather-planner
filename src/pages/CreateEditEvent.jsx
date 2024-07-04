import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate, useParams } from "react-router-dom";

const CreateEditEvent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [event, setEvent] = useState({
    name: "",
    date: "",
    time: "",
    location: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prevEvent) => ({ ...prevEvent, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    navigate("/events");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{id ? "Edit Event" : "Create Event"}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Event Name</label>
          <Input name="name" value={event.name} onChange={handleChange} required />
        </div>
        <div>
          <label className="block text-sm font-medium">Date</label>
          <Input type="date" name="date" value={event.date} onChange={handleChange} required />
        </div>
        <div>
          <label className="block text-sm font-medium">Time</label>
          <Input type="time" name="time" value={event.time} onChange={handleChange} required />
        </div>
        <div>
          <label className="block text-sm font-medium">Location</label>
          <Input name="location" value={event.location} onChange={handleChange} required />
        </div>
        <div>
          <label className="block text-sm font-medium">Category</label>
          <Input name="category" value={event.category} onChange={handleChange} required />
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <Input name="description" value={event.description} onChange={handleChange} required />
        </div>
        <div className="space-x-2">
          <Button type="submit">{id ? "Save Changes" : "Create Event"}</Button>
          <Button variant="outline" onClick={() => navigate("/events")}>Cancel</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateEditEvent;