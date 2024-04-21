import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import axios from "axios"; // Assuming you're using axios for API requests
import { toast } from "react-toastify";

const VenueForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [capacity, setCapacity] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/venue/`, {
        name,
        address,
        capacity,
        description,
      });
      console.log("Venue added successfully:", response.data);
      setName("");
      setAddress("");
      setCapacity("");
      setDescription("");
      toast.success("Venue added successfully!");
    } catch (error) {
      toast.error("Error adding venue!", error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto shadow-xl p-8 rounded-lg mt-40 shadow-lg text-black">
      <h2 className="text-3xl font-bold mb-6 text-center">Add New Venue</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="venueName" className="block text-gray-700">
            Venue Name
          </label>
          <Input
            type="text"
            id="venueName"
            placeholder="Enter venue name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-2"
          />
        </div>
        <div>
          <label htmlFor="venueAddress" className="block text-gray-700">
            Address
          </label>
          <Input
            type="text"
            id="venueAddress"
            placeholder="Enter venue address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mb-2"
          />
        </div>
        <div>
          <label htmlFor="venueCapacity" className="block text-gray-700">
            Capacity
          </label>
          <Input
            type="number"
            id="venueCapacity"
            placeholder="Enter venue capacity"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            className="mb-2"
          />
        </div>
        <div>
          <label htmlFor="venueDescription" className="block text-gray-700">
            Description
          </label>
          <Input
            type="text"
            id="venueDescription"
            placeholder="Enter venue description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mb-2"
          />
        </div>
        <a href="#_" className="relative inline-block text-lg group">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">Add Venue</span>
          </span>
          <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
        </a>
      </form>
    </div>
  );
};

export default VenueForm;
