import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 text-white text-center">
      <div className="container mx-auto">
        <p className="text-lg mb-4">&copy; {new Date().getFullYear()} CollegeConnect. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-300">About Us</a>
          <a href="#" className="hover:text-gray-300">Contact Us</a>
          <a href="#" className="hover:text-gray-300">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
