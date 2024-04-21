import React from "react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 text-white text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
          Welcome to CollegeConnect
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-12">
          Your all-in-one platform for seamless event planning and management
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <button
            className="bg-transparent border-2 border-white text-white py-3 px-8 mt-6 md:ml-4 rounded-lg hover:bg-white hover:text-black -500 transition duration-300 ease-in-out shadow-lg focus:outline-none"
            onClick={() => {
              window.location.href = "/register";
            }}
          >
            Get Started
          </button>
          <button className="bg-transparent border-2 border-white text-white py-3 px-8 mt-6 md:ml-4 rounded-lg hover:bg-white hover:text-black-500 transition duration-300 ease-in-out shadow-lg focus:outline-none">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
