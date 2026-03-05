import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  // පේජ් එක load වෙද්දී කලින් තිබ්බ theme එක මතක තබා ගැනීමට
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // darkMode state එක වෙනස් වන විට මුළු පිටුවේම class එක වෙනස් කරයි
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <Router>
      {/* bg-white dark:bg-[#0f172a] -> Light mode එකේ සුදු, Dark mode එකේ තද නිල්/කළු.
        text-black dark:text-white -> Light mode එකේ කළු අකුරු, Dark mode එකේ සුදු අකුරු.
      */}
      <div className="min-h-screen bg-white dark:bg-[#0f172a] text-black dark:text-white transition-colors duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <Routes>
          {/* Home Route - Single Page Layout */}
          <Route path="/" element={
            <main className="scroll-smooth">
              <section id="home"><Home /></section>
              <section id="about" className="py-10 border-t border-gray-100 dark:border-gray-800"><About /></section>
              <section id="projects" className="py-10 border-t border-gray-100 dark:border-gray-800"><Projects /></section>
              <section id="contact" className="py-10 border-t border-gray-100 dark:border-gray-800"><Contact /></section>
            </main>
          } />

          {/* Multi-page Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;