import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Typewriter from 'typewriter-effect';

// HeroButtons Component
const HeroButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-8">
      {/* Scroll to Contact Section */}
      <Link 
        smooth
        to="/#contact" 
        className="px-6 sm:px-10 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition text-center font-semibold shadow-md"
      >
        Let's Connect
      </Link>

      {/* Scroll to Projects Section */}
      <Link 
        smooth
        to="/#projects" 
        className="px-6 sm:px-10 py-3 sm:py-4 border-2 border-blue-500 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition text-center font-semibold"
      >
        View Work
      </Link>

      {/* Resume Link */}
      <a 
        href="/cv.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-6 sm:px-10 py-3 sm:py-4 border-2 border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition text-center font-semibold"
      >
        Resume
      </a>
    </div>
  );
};

const Home = () => {
  return (
    // bg-white (Light Mode) | dark:bg-[#0f172a] (Dark Mode)
    // text-black (Light Mode) | dark:text-white (Dark Mode)
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[90vh] p-6 sm:p-10 bg-white dark:bg-[#0f172a] transition-colors duration-300">
      
      {/* Left Text Section */}
      <div className="flex-1 text-center md:text-left md:pl-10 lg:pl-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
          <span className="text-gray-900 dark:text-white">Hii, I'm </span>
          <span className="text-blue-500">Chathuni</span><br/>
          <span className="text-gray-600 dark:text-gray-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Kavindi</span>
        </h1>

        <div className="h-16 sm:h-20"> {/* Fixed height to prevent layout shift */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
            <Typewriter
              options={{
                strings: [
                  'Software Engineer',
                  'Full-Stack Developer',
                  'UI/UX Designer',
                  'AI/ML Enthusiast'
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </h2>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-lg mt-6 mb-8 leading-relaxed">
          ICT Undergraduate & Aspiring Software Engineer. I build modern web applications, mobile applications, and innovative digital solutions.
        </p>

        {/* Buttons */}
        <HeroButtons />
      </div>

      {/* Right Image Section */}
      <div className="flex-1 flex justify-center md:justify-center mt-12 md:mt-0">
        <div className="relative">
          {/* Decorative background circle */}
          <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 dark:opacity-30 rounded-full"></div>
          
          <img 
            src="/profile.png" 
            alt="Chathuni Kavindi" 
            className="relative z-10 rounded-full w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] border-4 border-blue-500 shadow-2xl object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;