import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="bg-black shadow-md fixed w-full z-10">
        <div className="text-white max-w-7xl mx px-6 py-4 flex justify-between items-center">
            <div>
            <a href="#" className="font-semibold hover:text-yellow-300 font-mono">MyPortfolio</a>
          </div>
        <ul className="flex space-x-6 justify-end pr-6 text-white">
            <li><a href="#home" className="hover:text-yellow-300">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-300">About</a></li>
            <li><a href="#Projects" className="hover:text-yellow-300">Projects</a></li>
            <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
        </ul>
        </div>
    </nav>

  )

}

export default Navbar