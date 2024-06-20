import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4 px-4 text-white gap-4">
          <Link to="/" className="hidden md:block">Home</Link>
          <Link to="/tasks" className="hidden md:block">Tasks</Link>
          <Link to="/about" className="hidden md:block">About</Link>
          <Link to="/contact" className="hidden md:block">Contact</Link>
        </div>

        {/* Responsive Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Responsive Menu Links */}
      {isOpen && (
        <div className="md:hidden ">
          <ul className="flex flex-col items-center mt-4">
            <li><Link to="/" className="text-white py-2">Home</Link></li>
            <li><Link to="/tasks" className="text-white py-2">Tasks</Link></li>
            <li><Link to="/about" className="text-white py-2">About</Link></li>
            <li><Link to="/contact" className="text-white py-2">Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
