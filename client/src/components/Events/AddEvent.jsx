import React, { useState, useEffect } from "react";
import { Input, Option, Select } from "@material-tailwind/react";
import axios from "axios";
import { toast } from "react-toastify";

const AddEventPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [venueOptions, setVenueOptions] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState("");
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetchVenues();
    fetchCategories();
  }, []);

  const fetchVenues = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/venue`);
      setVenueOptions(response.data);
      console.log("Venues:", response.data);
    } catch (error) {
      console.error("Error fetching venues:", error.message);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/category`);
      setCategoryOptions(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/event`, {
        title,
        description,
        startDate,
        endDate,
        venueId: selectedVenue,
        categoryId: selectedCategory,
        organizerId: "6622d9d6d5e3e55602886166",
      });
      console.log("Event added successfully:", response.data);
      setTitle("");
      setDescription("");
      setStartDate("");
      setEndDate("");
      setSelectedVenue("");
      setSelectedCategory("");
      toast.success("Event added successfully!");
    } catch (error) {
      toast.error("Error adding event!", error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto shadow-[5px_5px_rgba(0,0,0,_0.4),_10px_10px_rgba(0,0,0,_0.3),_15px_15px_rgba(0,0,0,0.2),_20px_20px_rgba(0,0,0,0.1),_25px_25px_rgba(0,0,0,0.05)] p-8 rounded-lg mt-40 shadow-lg text-black">
      <h2 className="text-3xl font-bold mb-6 text-center">Add New Event</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
        <Input
          type="text"
          label="Event Title"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          required
          className="mb-2"
          color="light"
        />
        <Input
          type="text"
          label="Event Description"
          placeholder="Event Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          required
          className="mb-2"
          color="light"
        />
        <Input
          type="datetime-local"
          label="Start Date"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          fullWidth
          required
          className="mb-2"
          color="light"
        />
        <Input
          type="datetime-local"
          label="End Date"
          placeholder="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          fullWidth
          required
          className="mb-2"
          color="light"
        />
        <Select
          size="md"
          label="Select Venue"
          value={selectedVenue}
          onChange={(value) => setSelectedVenue(value)}
          fullWidth
          className="mb-2"
          color="light"
        >
          {venueOptions.map((venue) => (
            <Option key={venue._id} value={venue._id}>
              {venue.name}
            </Option>
          ))}
        </Select>
        <Select
          size="md"
          label="Select Category"
          value={selectedCategory}
          onChange={(value) => setSelectedCategory(value)}
          fullWidth
          className="mb-2"
          color="light"
        >
          {categoryOptions.map((category) => (
            <Option key={category._id} value={category._id}>
              {category.name}
            </Option>
          ))}
        </Select>
        <a href="#_" className="relative inline-block text-lg group">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">Add Event</span>
          </span>
          <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
        </a>
      </form>
    </div>
  );
}

export default AddEventPage;
   
