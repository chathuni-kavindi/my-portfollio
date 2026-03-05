import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FaBars, FaTimes } from 'react-icons/fa'; // Hamburger icons සඳහා

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu එක open/close කිරීමට

  const toggleMenu = () => setIsOpen(!isOpen);

  // Link එකක් click කළාම mobile menu එක auto close වෙන්න
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`p-5 sticky top-0 z-[100] shadow-lg transition-colors duration-300 ${
      darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-red-500">MyPortfolio</h1>

        {/* Desktop Navigation Links (Large screen වලදී පමණක් පෙනේ) */}
        <div className="hidden md:flex space-x-8 items-center font-medium">
          <Link smooth to="/#home" className="hover:text-red-500 transition">Home</Link>
          <Link smooth to="/#about" className="hover:text-red-500 transition">About</Link>
          <Link smooth to="/#projects" className="hover:text-red-500 transition">Projects</Link>
          <Link smooth to="/#contact" className="hover:text-red-500 transition">Contact</Link>

          {/* Dark Mode Toggle - Desktop */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition ${
              darkMode ? 'bg-yellow-400 text-black' : 'bg-gray-200'
            }`}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Mobile Buttons (Hamburger + Dark Mode - Mobile වලදී පමණක් පෙනේ) */}
        <div className="flex md:hidden items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full ${darkMode ? 'bg-yellow-400 text-black' : 'bg-gray-200'}`}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (isOpen true වූ විට පමණක් පෙනේ) */}
      <div className={`md:hidden absolute left-0 w-full transition-all duration-300 ease-in-out ${
        isOpen ? 'top-[70px] opacity-100' : 'top-[-400px] opacity-0'
      } ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
        <div className="flex flex-col items-center py-6 space-y-4 font-semibold">
          <Link smooth to="/#home" onClick={closeMenu} className="hover:text-red-500">Home</Link>
          <Link smooth to="/#about" onClick={closeMenu} className="hover:text-red-500">About</Link>
          <Link smooth to="/#projects" onClick={closeMenu} className="hover:text-red-500">Projects</Link>
          <Link smooth to="/#contact" onClick={closeMenu} className="hover:text-red-500">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;