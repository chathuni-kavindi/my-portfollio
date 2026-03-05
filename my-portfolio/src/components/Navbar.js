import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, Mail, Moon, Sun, Menu, X, Sparkles } from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { 
      name: 'Home', to: '/#home', icon: <Home size={24} />, // Icon size increased to 24
      color: 'hover:bg-blue-600',
      animation: { scale: [1, 1.1, 1], transition: { repeat: Infinity, duration: 2 } } 
    },
    { 
      name: 'About', to: '/#about', icon: <User size={24} />, 
      color: 'hover:bg-purple-600',
      animation: { rotate: [0, -10, 10, 0] } 
    },
    { 
      name: 'Projects', to: '/#projects', icon: <Briefcase size={24} />, 
      color: 'hover:bg-emerald-600',
      animation: { y: -5 } 
    },
    { 
      name: 'Contact', to: '/#contact', icon: <Mail size={24} />, 
      color: 'hover:bg-orange-600',
      animation: { scaleX: 1.1, scaleY: 0.9 } 
    },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      scrolled ? 'py-4 bg-white/90 dark:bg-[#030712]/95 backdrop-blur-md shadow-2xl' : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Section (කලින් විදිහටමයි) */}
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-gradient-to-tr from-blue-600 to-purple-600 p-2.5 rounded-xl shadow-lg text-white">
            <Sparkles size={22} />
          </div>
          <h1 className="text-3xl font-black tracking-tighter dark:text-white uppercase">
            CHATHU<span className="text-blue-600">NI</span>
          </h1>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} smooth to={link.to}>
              <motion.div
                whileHover={link.animation}
                whileTap={{ scale: 0.9 }}
                className={`group flex items-center gap-3 px-7 py-3.5 rounded-2xl font-black text-lg transition-all duration-300
                  ${link.color} hover:text-white text-slate-800 dark:text-slate-100
                  bg-white dark:bg-slate-800 shadow-md
                  border-2 border-transparent hover:border-yellow-400 hover:shadow-[0_0_20px_rgba(250,204,21,0.6)]`} // Gold Glow Border
              >
                <span className="group-hover:text-white transition-colors">
                  {link.icon}
                </span>
                {link.name}
              </motion.div>
            </Link>
          ))}

          {/* Dark Mode Toggle (කලින් විදිහටමයි) */}
          <motion.button
            whileTap={{ scale: 0.8, rotate: 90 }}
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 p-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-600 dark:text-yellow-400 border border-slate-300 dark:border-slate-700 shadow-lg"
          >
            {darkMode ? <Sun size={24} fill="currentColor" /> : <Moon size={24} fill="currentColor" />}
          </motion.button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center gap-3">
           <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400"
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          <button 
            onClick={toggleMenu} 
            className="p-3 text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800 rounded-xl"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#030712] shadow-2xl border-t-2 border-yellow-400 p-6"
          >
            <div className="grid grid-cols-1 gap-4">
              {navLinks.map((link) => (
                <Link key={link.name} smooth to={link.to} onClick={closeMenu}>
                  <div className="flex items-center gap-6 p-5 rounded-3xl border-2 border-transparent active:border-yellow-400 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white">
                    <span className="text-blue-600">{link.icon}</span>
                    <span className="font-black text-xl">{link.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;