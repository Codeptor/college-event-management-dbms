import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-6 mb-8 h-full hover:scale-125 transition-all duration-300 ease-in">
      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
        {title}
      </h3>
      <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default Card;
