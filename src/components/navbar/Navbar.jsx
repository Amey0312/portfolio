import React, { useState } from 'react';
import { Link } from 'react-router-dom';


// Icons
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Icons for hamburger menu

import SocialMenu from '../social_media /SocialMenu';


export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    // logo
    <div className="flex justify-between items-center w-auto sm:w-auto m-4 px-4 md:px-8 lg:px-16 ">
    {/* Logo */}
    {/* <div className="text-2xl font-bold">Logo</div> */}
    
    {/* Hamburger Menu Icon for Mobile */}
    <div className="md:hidden">
      <button onClick={toggleMenu}>
        {isMenuOpen ? (
          <HiX size="32" className="text-white" /> // Close icon
        ) : (
          <HiMenuAlt3 size="32" className="text-white" /> // Hamburger icon
        )}
      </button>
    </div>

    {/* Navigation Links for Desktop */}
    <nav className="hidden md:flex space-x-6" data-aos="fade-right">
      <Link to="/resume" className="text-2xl font-Concert">Resume</Link>
      <a href="#about" className="text-2xl font-Concert">About</a>
      <a href="#contact" className="text-2xl font-Concert">Contact</a>
    </nav>

    {/* Social Media Icons with Expandable Effect */}
    
    < SocialMenu />

    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="absolute top-16 left-0 w-full h-screen bg-black bg-opacity-90 z-50 flex flex-col items-center space-y-6 py-4 md:hidden">
        <Link to="/resume"  className="text-2xl font-Concert text-white" onClick={toggleMenu}>Resume</Link>
        <a href="#about" className="text-2xl font-Concert text-white" onClick={toggleMenu}>About</a>
        <a href="#contact" className="text-2xl font-Concert text-white" onClick={toggleMenu}>Contact</a>
        < SocialMenu />
      </div>
    )}
  </div>

  )
}
