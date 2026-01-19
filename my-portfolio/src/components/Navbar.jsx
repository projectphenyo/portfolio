
import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black shadow-md fixed top-0 w-full z-50">
      <div className="text-white max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="font-semibold hover:text-yellow-300 font-mono">
          🧠MyPortfolio
        </a>

        {/* Nav Links */}
        <ul className="flex space-x-6 justify-end pr-6 text-white">
          <li>
            <Link to="/" className="hover:text-yellow-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-300">
              About
            </Link>
          </li>
           <li>
            <Link to="/skills" className="hover:text-yellow-300">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-yellow-300">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;