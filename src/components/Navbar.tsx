import logo from "../assets/logo2.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-md">
      {/* Top Navbar */}
     <div className="border-b border-black w-full">
      {/* Mobile View */}
      <div className="flex md:hidden justify-center p-2 bg-gray-700 text-white text-sm w-full">
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-phone text-sm text-green-400"></i>
          <a href="tel:+2349046827127" className="text-sm">Call Us</a>
          <span>|</span>
          <i className="fa-solid fa-envelope text-green-400 text-sm"></i>
          <a href="mailto:skspowertech@gmail.com" className="text-sm">Email Us</a>
        </div>
      </div>
      
      {/* Desktop View */}
      <div className="hidden md:flex justify-end px-10 gap-2 p-2 bg-gray-700 text-white w-full">
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-phone text-sm text-green-400"></i>
          <a href="tel:+2349046827127" className="text-sm">+234 9046827127</a>
          <span>|</span>
          <i className="fa-solid fa-envelope text-green-400 text-sm"></i>
          <a href="mailto:skspowertech@gmail.com" className="text-sm">skspowertech@gmail.com</a>
        </div>
      </div>
    </div>
      {/* Main Navbar */}
      <div className="flex items-center justify-between px-6 py-3 md:px-10 border-b">
        {/* Logo */}
        <img
          className="h-16 md:h-20 transition-transform duration-300 hover:scale-110"
          src={logo}
          alt="logo"
        />

        {/* Menu Toggle for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm font-semibold">
          <Link to="/" className="hover:text-green-600">
            Home
          </Link>
          <Link to="/why-choose-sks" className="hover:text-green-600">
            Why Choose SKS
          </Link>
          <Link to="/our-mission" className="hover:text-green-600">
            Our Mission
          </Link>
          
          <Link
            to="/enquiry"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
          >
            Business Enquiry
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 p-4 bg-gray-800 text-white">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/why-choose-sks" onClick={() => setIsOpen(false)}>
            Why Choose SKS
          </Link>
          <Link to="/our-mission" onClick={() => setIsOpen(false)}>
            Our Mission
          </Link>
          <Link
            to="/enquiry"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            Business Enquiry
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
