import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="font-dm px-6 sm:px-8 md:px-16 py-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img className="w-14" src="/logo.png" alt="Logo" />
          <span className="text-xl font-bold text-gray-900">CarbonCrunch</span>
        </div>

        <ul className="hidden md:flex gap-10 text-base text-gray-700 font-medium">
          <li className="hover:text-[#000000] transition-colors duration-200 cursor-pointer">
            Home
          </li>
          <li className="hover:text-[#000000] transition-colors duration-200 cursor-pointer">
            Services
          </li>
          <li className="hover:text-[#000000] transition-colors duration-200 cursor-pointer">
            Blog
          </li>
          <li className="hover:text-[#000000] transition-colors duration-200 cursor-pointer">
            About Us
          </li>
          <li className="hover:text-[#000000] transition-colors duration-200 cursor-pointer">
            Contact
          </li>
        </ul>

        <div className="hidden md:flex gap-3 font-dm text-base font-bold">
          <button className="px-4 py-2 rounded-md text-[#28B30E] bg-[#D6FFD0] hover:bg-[#c6f5c0] transition duration-200">
            Login
          </button>
          <button className="px-4 py-2 rounded-md bg-[#28B30E] hover:bg-[#239e0c] transition duration-200">
            Book Demo
          </button>
        </div>
        {/* Menu button  */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile screens */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <div className="text-gray-700 text-base px-2 py-1 hover:text-[#28B30E] transition-colors duration-200">
            Home
          </div>
          <div className="text-gray-700 text-base px-2 py-1 hover:text-[#28B30E] transition-colors duration-200">
            Services
          </div>
          <div className="text-gray-700 text-base px-2 py-1 hover:text-[#28B30E] transition-colors duration-200">
            Blog
          </div>
          <div className="text-gray-700 text-base px-2 py-1 hover:text-[#28B30E] transition-colors duration-200">
            About Us
          </div>
          <div className="text-gray-700 text-base px-2 py-1 hover:text-[#28B30E] transition-colors duration-200">
            Contact
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <button className="px-4 py-2 rounded-md text-[#28B30E] bg-[#D6FFD0] hover:bg-[#c6f5c0] transition duration-200">
              Login
            </button>
            <button className="px-4 py-2 rounded-md bg-[#28B30E] text-white hover:bg-[#239e0c] transition duration-200">
              Book Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
