import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 bg-white shadow-md flex items-center justify-between relative">
      <h1 className="text-2xl font-bold text-blue-600">RadioPlayer</h1>

      {/* Iconiță meniu - vizibilă mereu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="focus:outline-none"
        aria-label="Open Menu"
      >
        <svg
          className="w-6 h-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Meniu dropdown */}
      {isOpen && (
        <div className="absolute right-6 top-16 bg-white border border-gray-200 rounded-md shadow-lg p-4 z-50">
          <ul className="space-y-2 text-blue-600 font-semibold">
            <li>
              <a href="#about" onClick={() => setIsOpen(false)}>About Us</a>
            </li>
            <li>
              <a href="#radios" onClick={() => setIsOpen(false)}>Radios</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
