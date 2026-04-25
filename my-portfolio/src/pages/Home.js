import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Typewriter from 'typewriter-effect';
import { FaRocket, FaEye, FaDownload } from 'react-icons/fa';

const HeroButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center md:justify-start">
      <Link 
        smooth
        to="/#contact" 
        className="group relative px-8 py-4 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-2xl transition-all duration-300 text-center font-bold shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center gap-2 overflow-hidden"
      >
        <span className="relative z-10">Let's Connect</span>
        <FaRocket className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
      </Link>

      <Link 
        smooth
        to="/#projects" 
        className="px-8 py-4 border-2 border-indigo-500/50 text-indigo-600 dark:text-indigo-400 rounded-2xl hover:bg-indigo-500 hover:text-white transition-all duration-300 text-center font-bold flex items-center justify-center gap-2 backdrop-blur-sm"
      >
        <FaEye size={18} /> View Work
      </Link>

      <a 
        href="/cv.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-8 py-4 border-2 border-gray-300 dark:border-white/10 text-gray-700 dark:text-gray-300 rounded-2xl hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-300 text-center font-bold flex items-center justify-center gap-2"
      >
        <FaDownload size={16} /> Resume
      </a>
    </div>
  );
};

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#0d1117] transition-colors duration-300">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-500/10 blur-[120px] rounded-full animate-pulse"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-6 sm:px-12 lg:px-20 py-20">
        
        {/* Left Text Section */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1 mt-12 md:mt-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-300 text-xs font-black uppercase tracking-[0.2em] mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping"></span>
            Welcome to my world
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 leading-[1.1] tracking-tight">
            <span className="text-gray-900 dark:text-white">Hii, I'm</span><br/>
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Chathuni
            </span>
          </h1>

          <div className="h-12 sm:h-16 mb-6"> 
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 dark:text-indigo-400/80">
              <Typewriter
                options={{
                  strings: [
                    'Software Engineer',
                    'Full-Stack Developer',
                    'UI/UX Designer',
                    'AI/ML Enthusiast',
                    'Project Manager'
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 30,
                  delay: 70,
                }}
              />
            </h2>
          </div>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-xl mt-4 leading-relaxed font-medium">
            ICT Undergraduate at <span className="text-indigo-500">USJ</span>. 
            I craft high-performance digital experiences and innovative solutions for the future.
          </p>

          <HeroButtons />
        </div>

        {/* Right Image Section */}
        <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative">
            {/* Animated Rotating Ring */}
            <div className="absolute -inset-4 border-2 border-dashed border-indigo-500/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute -inset-8 border border-pink-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            
            {/* Main Image Container */}
            <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] rounded-3xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
                <img 
                  src="/profile.png" 
                  alt="Chathuni Kavindi" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            {/* Floating Badge (Optional) */}
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 z-30 animate-bounce">
                <p className="text-xs font-black dark:text-white uppercase tracking-widest text-center">3rd Year<br/><span className="text-indigo-500">ICT Undergrad</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;