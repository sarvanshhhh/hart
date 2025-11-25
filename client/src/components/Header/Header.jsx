import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, User, Briefcase, Mail, NotebookPen, Film } from "lucide-react";
import { motion } from "framer-motion";
import { textVariant } from '../Motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOfferingOpen, setIsOfferingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // MODIFIED HANDLER: Now accepts the event (e) to read the target URL.
  const handleLinkClick = (e) => {
    // 1. Close the menus first
    setIsOpen(false);
    setIsOfferingOpen(false);

    // Only proceed with hash-scroll logic if an event object exists (i.e., a sub-link was clicked)
    if (e && e.currentTarget && e.currentTarget.href) {
        const targetHref = e.currentTarget.href; 
        
        // 2. Special handling for navigation when already on the Offering page
        if (window.location.pathname === '/offering' && targetHref.includes('#')) {
            // Prevent Link's default action when we handle the scroll manually
            e.preventDefault(); 

            // Find the hash part of the target link (e.g., #suv)
            const hash = targetHref.substring(targetHref.indexOf('#'));
            
            // Use a timeout to ensure menu closing transition starts before scrolling
            setTimeout(() => {
                // Force scroll to the top first (resets scroll position), then set the new hash
                window.scrollTo(0, 0); 
                window.location.hash = hash;
            }, 100); 
        }
    }
    // Note: For simple links without a hash (Home, About, Contact), 
    // we don't pass 'e' and React Router handles the navigation as normal.
  };

  return (
    <motion.header
      variants={textVariant(0.3)}
      className={`fixed top-0 left-0 z-50 w-full px-6 py-4 transition-all duration-500 ${
        scrolled ? "bg-black/90 backdrop-blur-2xl shadow-lg h-16" : "bg-transparent h-20"
      }`}
    >
      <div className="w-[80%] flex items-center justify-between mx-auto transition-all duration-500">
        
        {/* Logo */}
        <div className={`transition-all duration-500 ${scrolled ? "w-[120px] h-[70px]" : "w-[160px] h-[100px]"}`}>
          <img src="/images/Logo.png" alt="Hartalkar" className="w-full h-full object-contain" />
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden bg-black text-white p-2 rounded-md" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation */}
        <nav className={`absolute top-0 right-0 z-50 h-full w-64 bg-black lg:bg-transparent lg:relative lg:w-auto lg:flex items-center transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"} lg:translate-x-0`}>
          
          {/* Mobile close button for convenience */}
          <div className="lg:hidden pt-4 pb-2 px-4 flex justify-end">
            <button onClick={() => setIsOpen(false)} className="text-white p-2">
              <X size={24} />
            </button>
          </div>
          
          <ul className="flex flex-col lg:flex-row lg:space-x-8 text-white text-sm relative">
            
            <li>
              {/* Simple links don't need to pass 'e' */}
              <Link to="/" onClick={handleLinkClick} className="flex items-center px-4 py-2 transition hover:text-customBlue">
                <Home size={18} className="mr-2" /> Home
              </Link>
            </li>

            <li>
              {/* Simple links don't need to pass 'e' */}
              <Link to="/about" onClick={handleLinkClick} className="flex items-center px-4 py-2 transition hover:text-customBlue">
                <User size={18} className="mr-2" /> About
              </Link>
            </li>

            {/* Offering Dropdown */}
            <li className="relative group" 
                onClick={() => {
                    if (window.innerWidth < 1024) {
                        setIsOfferingOpen(p => !p);
                    }
                }}
                onMouseEnter={() => window.innerWidth >= 1024 && setIsOfferingOpen(true)}
                onMouseLeave={() => window.innerWidth >= 1024 && setIsOfferingOpen(false)}>
              
              {/* Top-level link to Offering page */}
              <Link 
                  to="/offering" 
                  onClick={handleLinkClick} // No 'e' needed here, navigation handled by Router
                  className="flex items-center px-4 py-2 transition hover:text-customBlue">
                <Briefcase size={18} className="mr-2" /> Offering
              </Link>

              {/* Dropdown Menu */}
              <div className={`lg:absolute left-0 mt-2 w-full lg:w-44 bg-black/90 backdrop-blur-md border lg:border-black/10 rounded-md lg:shadow-xl overflow-hidden transform transition-all duration-300 origin-top ${isOfferingOpen ? "opacity-100 scale-100 visible h-auto" : "opacity-0 scale-95 invisible h-0 lg:h-auto"}`}>
                
                {/* Hash links MUST pass 'e' to trigger custom scroll logic */}
                <Link to="/offering#suv" onClick={(e) => handleLinkClick(e)} className="block px-5 py-3 text-white hover:bg-white/20 transition">E-SUV</Link>
                <Link to="/offering#temp" onClick={(e) => handleLinkClick(e)} className="block px-5 py-3 text-white hover:bg-white/20 transition">Operating System</Link>
                <Link to="/offering#rendev" onClick={(e) => handleLinkClick(e)} className="block px-5 py-3 text-white hover:bg-white/20 transition">Research & Development</Link>
              </div>
            </li>

            <li>
              {/* Simple links don't need to pass 'e' */}
              <Link to="/contact" onClick={handleLinkClick} className="flex items-center px-4 py-2 transition hover:text-customBlue">
                <Mail size={18} className="mr-2" /> Contact
              </Link>
            </li>

            <li>
              {/* Simple links don't need to pass 'e' */}
              <Link to="/career" onClick={handleLinkClick} className="flex items-center px-4 py-2 transition hover:text-customBlue">
                <NotebookPen size={18} className="mr-2" /> Career
              </Link>
            </li>

            <li>
              {/* Simple links don't need to pass 'e' */}
              <Link to="/media" onClick={handleLinkClick} className="flex items-center px-4 py-2 transition hover:text-customBlue">
                <Film size={18} className="mr-2" /> Media
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;