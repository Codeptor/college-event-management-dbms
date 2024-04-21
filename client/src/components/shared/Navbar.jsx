import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link
            to="/home"
            className="text-white hover:text-blue-500 transition duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/events"
            className="text-white hover:text-blue-500 transition duration-300 ease-in-out"
          >
            Events
          </Link>
          {!localStorage.getItem("userId") && (
            <>
              <Link
                to="/login"
                className="text-white hover:text-blue-500 transition duration-300 ease-in-out"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-white hover:text-blue-500 transition duration-300 ease-in-out"
              >
                Register
              </Link>
            </>
          )}
          {localStorage.getItem("userId") && (
            <>
              <Link
                to="/add-event"
                className="text-white hover:text-blue-500 transition duration-300 ease-in-out"
              >
                Add Event
              </Link>
              <Link
                to="/add-venue"
                className="text-white hover:text-blue-500 transition duration-300 ease-in-out"
              >
                Add Venue
              </Link>
            </>
          )}
        </div>
        <div className="flex flex-grow justify-center"></div>
      </div>
    </nav>
  );
};

export default Navbar;
