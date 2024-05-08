import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.jpg"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="container mx-auto bg-white">
      <div className="navbar flex justify-between items-center p-2">
        {/* Logo */}
        <div className="logo flex align-baseline">
          <img src={Logo} alt="Logo" className="w-20 h-20 -mt-3" />
          <div className="md:hidden lg:block">
            <h1 className="text-blue-400 -mx-2 mt-2 tracking-widest font-semibold">
              Empower<span className="text-blue-800">I</span> <br />
              Tech
            </h1>
          </div>
        </div>

        {/* Hamburger Menu for small screens */}
        <div className="hamburger md:hidden ml-auto p-4 cursor-pointer" onClick={handleToggleMenu}>
          <div className="line h-0.5 w-6 my-1 bg-black"></div>
          <div className="line h-0.5 w-6 my-1 bg-black"></div>
          <div className="line h-0.5 w-6 my-1 bg-black"></div>
        </div>

        {/* Menu Overlay with Close Button */}
        {showMenu && (
          <div className="fixed top-0 left-0 right-0 z-10 bg-white p-4 md:hidden overflow-auto" style={{ maxHeight: "100vh" }}>
            <div className="flex justify-end">
              {/* Close Button */}
              <button onClick={handleToggleMenu} className="p-2">
                <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center space-y-4">
              {/* Navigation links for small screens */}
              <a href="/" className="hover:underline hover:underline-offset-8 hover:text-pink-500 cursor-pointer font-semibold">Home</a>
              <a href="/Team" className="hover:underline hover:underline-offset-8 hover:text-pink-500 cursor-pointer font-semibold">Team</a>
              <a href="/Gallery" className="hover:underline hover:underline-offset-8 hover:text-pink-500 cursor-pointer font-semibold">Gallery</a>
              <a href="/Services" className="hover:underline hover:underline-offset-8 hover:text-pink-500 cursor-pointer font-semibold">Services</a>
              {/* <a href="/Volanteer" className="hover:underline hover:underline-offset-8 hover:text-pink-500 cursor-pointer font-semibold">Become Volunteer</a> */}
              <a href="/Help" className="hover:underline hover:underline-offset-8 hover:text-pink-500 cursor-pointer font-semibold">About Us</a>
              <a href="/Contact" className="hover:underline hover:underline-offset-8 hover:text-pink-500 cursor-pointer font-semibold">Contact Us</a>
            </div>
          </div>
        )}

        

        {/* Navigation links for larger screenss */}
        <div className="hidden md:flex space-x-9 justify-items-center mr-80">
          {/* Links */}
          <a href="/" className="hover:underline hover:underline-offset-8 active:bg-pink-600 hover:text-pink-500 cursor-pointer font-normal">Home</a>
            <Link to ="/Team" className="hover:underline hover:underline-offset-8 hover:text-pink-500 cursor-pointer font-normal">Team</Link>
            <Link to ="/Gallery" className="hover:underline hover:underline-offset-8 hover:text-pink-500 cursor-pointer font-normal">Gallery</Link>
            <Link to ="/Services" className="hover:underline hover:underline-offset-8 hover:text-pink-500 cursor-pointer font-normal">Services</Link>
            {/* <Link to ="/Volanteer" className="hover:underline hover:underline-offset-8 hover:text-pink-500 cursor-pointer font-normal">Become Volunteer</Link> */}
            <Link  to="/Help" className="hover:underline hover:underline-offset-8 hover:text-pink-500 cursor-pointer font-normal">About Us</Link>
            <Link to="/Contact" className="hover:underline hover:underline-offset-8 hover:text-pink-500 cursor-pointer font-normal">Contact Us</Link>
        </div>
      </div>
    </div>
    
  );
};

export default Navbar;