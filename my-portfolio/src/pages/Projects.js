import React, { useState } from "react";
import { FaGithub, FaCode, FaLaptopCode, FaMobileAlt, FaMicrochip, FaDatabase } from "react-icons/fa";

// 🌟 STEP 1 — Project Data
const projectData = [
  {
    title: "Hotel Reservation System",
    category: "fullstack",
    description: "A desktop application developed using C# and MySQL to manage rooms, bookings, customers, and invoices.",
    tech: ["C#", "MySQL", "WinForms"],
    icon: <FaDatabase />,
    github: "https://github.com/YOURUSERNAME/hotel-system",
  },
  {
    title: "Portfolio Website",
    category: "web",
    description: "Personal portfolio built using React and Tailwind CSS with dark mode and responsive design.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    icon: <FaLaptopCode />,
    github: "https://github.com/YOURUSERNAME/portfolio",
  },
  {
    title: "Food Delivery Mobile App",
    category: "mobile",
    description: "Mobile application UI design for food delivery system focusing on user experience.",
    tech: ["Flutter", "Dart", "Firebase"],
    icon: <FaMobileAlt />,
    github: "https://github.com/YOURUSERNAME/mobile-app",
  },
  {
    title: "Smart IoT System",
    category: "iot",
    description: "IoT smart home monitoring system with Arduino and sensors for real-time data tracking.",
    tech: ["Arduino", "IoT", "Sensors"],
    icon: <FaMicrochip />,
    github: "https://github.com/YOURUSERNAME/iot-system",
  },
  {
    title: "Network Design Project",
    category: "fullstack",
    description: "Designed a secure network using Cisco Packet Tracer with VLAN configuration and IP addressing.",
    tech: ["Networking", "Cisco", "Security"],
    icon: <FaCode />,
    github: "https://github.com/YOURUSERNAME/network-project",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projectData
      : projectData.filter((p) => p.category === filter);

  return (
    <>
      <style>{`
        @keyframes ctPulse {
          0%,100%{opacity:1;transform:scale(1)}
          50%{opacity:.3;transform:scale(.55)}
        }
      `}</style>

      <section className="min-h-screen transition-colors duration-300 bg-white text-black dark:bg-[#0d1117] dark:text-white px-[5%] py-[100px]">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="inline-flex items-center gap-2.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 dark:text-indigo-300 text-sm font-semibold tracking-widest uppercase px-5 py-2.5 rounded-full mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-[ctPulse_2s_infinite]" />
              Portfolio Showcase
            </div>
            <h1 className="text-5xl font-bold uppercase tracking-wider mb-6">
              Featured <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-xl leading-relaxed max-w-2xl mx-auto">
              A collection of my work spanning web development, mobile apps, and systems engineering.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {["all", "web", "fullstack", "mobile", "iot"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-xl font-bold text-sm uppercase tracking-widest transition-all duration-300 border
                  ${filter === cat 
                    ? "bg-gradient-to-r from-indigo-500 to-pink-500 text-white border-transparent shadow-lg shadow-indigo-500/20 scale-105" 
                    : "bg-gray-100 dark:bg-slate-900/40 border-gray-200 dark:border-white/5 text-gray-600 dark:text-gray-400 hover:border-indigo-500/50"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Cards Grid */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gray-50 dark:bg-slate-900/60 p-8 rounded-[30px] border border-gray-200 dark:border-white/5 hover:border-indigo-500/40 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                {/* Icon & Category */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 bg-gray-200 dark:bg-white/5 rounded-lg text-gray-500">
                    {project.category}
                  </span>
                </div>

                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                  {project.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 h-12 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[11px] font-bold text-blue-600 dark:text-blue-400 bg-blue-500/5 px-3 py-1 rounded-md border border-blue-500/10">
                      {t}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-gray-900 dark:bg-white/5 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-500 text-white rounded-xl font-bold transition-all duration-300"
                >
                  <FaGithub size={18} /> View Source Code
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;