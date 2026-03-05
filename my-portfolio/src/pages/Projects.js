import React, { useState } from "react";

// 🌟 STEP 1 — Project Data
const projectData = [
  {
    title: "Hotel Reservation System",
    category: "fullstack",
    description:
      "A desktop application developed using C# and MySQL to manage rooms, bookings, customers, and invoices.",
    tech: "C#, MySQL, WinForms",
    github: "https://github.com/YOURUSERNAME/hotel-system",
  },
  {
    title: "Portfolio Website",
    category: "web",
    description:
      "Personal portfolio built using React and Tailwind CSS with dark mode and responsive design.",
    tech: "React, Tailwind CSS",
    github: "https://github.com/YOURUSERNAME/portfolio",
  },
  {
    title: "Food Delivery Mobile App",
    category: "mobile",
    description:
      "Mobile application UI design for food delivery system.",
    tech: "Flutter",
    github: "https://github.com/YOURUSERNAME/mobile-app",
  },
  {
    title: "Smart IoT System",
    category: "iot",
    description:
      "IoT smart home monitoring system with Arduino and sensors.",
    tech: "Arduino, IoT",
    github: "https://github.com/YOURUSERNAME/iot-system",
  },
  {
    title: "Network Design Project",
    category: "fullstack",
    description:
      "Designed a secure network using Cisco Packet Tracer with VLAN configuration and IP addressing.",
    tech: "Networking, Cisco Packet Tracer",
    github: "https://github.com/YOURUSERNAME/network-project",
  },
];

// 🌟 STEP 2 — Button Style
const btn =
  "px-5 py-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 hover:text-white transition";

// 🌟 STEP 3 — Projects Component
const Projects = () => {
  const [filter, setFilter] = useState("all");

  // Filter Projects based on category
  const filteredProjects =
    filter === "all"
      ? projectData
      : projectData.filter((p) => p.category === filter);

  return (
    <section className="min-h-screen px-6 py-16 max-w-7xl mx-auto">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-4">
        Featured Projects
      </h1>
      <p className="text-center text-gray-500 mb-12">
        Showcasing my software engineering and development work
      </p>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button onClick={() => setFilter("all")} className={btn}>
          All
        </button>
        <button onClick={() => setFilter("web")} className={btn}>
          Web
        </button>
        <button onClick={() => setFilter("fullstack")} className={btn}>
          Fullstack
        </button>
        <button onClick={() => setFilter("mobile")} className={btn}>
          Mobile
        </button>
        <button onClick={() => setFilter("iot")} className={btn}>
          IoT
        </button>
      </div>

      {/* Project Cards */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-3 text-blue-600">
              {project.title}
            </h2>

            <p className="text-sm mb-4">{project.description}</p>

            <p className="text-xs mb-4 text-gray-500">
              <strong>Tech:</strong> {project.tech}
            </p>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
