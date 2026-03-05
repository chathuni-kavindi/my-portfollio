import React from "react";
import { Download, GraduationCap, Award, Trophy, Newspaper, ExternalLink } from "lucide-react";

const educationData = [
    { year: "2024-present", title: "BSC(Hons).ICT", institute: "University of Sri Jayewardhanapure", details: "Pearson Assured" },
  { year: "2019", title: "GCE Ordinary Level", institute: "Completed", details: "A8, B1| IT: A, Maths: A, English: A" },

  { year: "2022(2023)", title: "GCE Advanced Level", institute: "Art", details: "Result: A2, B1" },
  
];

const certificationData = [
  { title: "Dip. in English", provider: "ESOFT Metro College", year: "2019", id: "EBM/A-004436" },
  { title: "Industry Preparation Training", provider: "NSBM Green University", year: "2025" },
  { title: "Artificial Intelligence Foundations", provider: "LinkedIn Learning", year: "2025" },
];

const About = () => {
  return (
    // bg-white (light mode) | dark:bg-[#0f172a] (dark mode)
    // text-black (light mode) | dark:text-white (dark mode)
    <section className="min-h-screen bg-white dark:bg-[#0f172a] text-black dark:text-white px-6 py-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">About <span className="text-blue-500">Me</span></h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            A passionate full-stack software engineer with expertise in crafting innovative digital solutions. 
            Specialized in cloud-native architecture, AI/ML integration, and scalable web applications.
          </p>
          <button className="mt-8 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition mx-auto shadow-lg">
            <ModernDownloadIcon /> Download Resume
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Left: Educational Journey (Timeline) */}
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="text-blue-500" /> Educational Journey
            </h2>
            <div className="space-y-8 border-l-2 border-gray-300 dark:border-gray-700 ml-3 pl-8 relative">
              {educationData.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[41px] top-1 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-[#0f172a]"></div>
                  <span className="text-blue-600 dark:text-blue-400 font-mono text-sm font-bold">{edu.year}</span>
                  <h3 className="text-xl font-bold mt-1">{edu.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{edu.institute}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Certifications */}
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Award className="text-blue-500" /> Certifications
            </h2>
            <div className="space-y-4">
              {certificationData.map((cert, index) => (
                <div key={index} className="bg-gray-100 dark:bg-[#1e293b] p-5 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-500 transition group shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">{cert.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{cert.provider} • {cert.year}</p>
                      {cert.id && <p className="text-xs text-gray-500 mt-1 uppercase">ID: {cert.id}</p>}
                    </div>
                    <ExternalLink size={18} className="text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Achievements Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Trophy className="text-yellow-500" /> Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-100 dark:bg-[#1e293b] p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
               <span className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full font-bold">2025</span>
               <h3 className="text-xl font-bold mt-3">Research Paper: GoWay</h3>
               <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                 Published at KDU-IRC '25. A smartphone-based public transport service solution.
               </p>
            </div>
            <div className="bg-gray-100 dark:bg-[#1e293b] p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
               <span className="text-xs bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-400 px-3 py-1 rounded-full font-bold">2024</span>
               <h3 className="text-xl font-bold mt-3">DynaLab MATLAB Workshop</h3>
               <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                 Successfully completed hands-on session organized by Mathematics & Statistics Circle.
               </p>
            </div>
          </div>
        </div>

        {/* Latest News / Blog Preview */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Newspaper className="text-green-500" /> Latest News
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
             {[1,2,3,4].map((i) => (
               <div key={i} className="bg-gray-100 dark:bg-[#1e293b] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm">
                  <div className="h-32 bg-gray-200 dark:bg-gray-700 italic flex items-center justify-center text-gray-400 dark:text-gray-500 text-xs">Image Placeholder</div>
                  <div className="p-4">
                    <p className="text-[10px] text-blue-600 dark:text-blue-400 mb-1 font-bold">2025 • Read More</p>
                    <h4 className="text-sm font-bold line-clamp-2">Wrapping up AI/ML Journey at NSBM...</h4>
                  </div>
               </div>
             ))}
          </div>
        </div>

      </div>
    </section>
  );
};

// කුඩා icon එකක් සකස් කිරීම
const ModernDownloadIcon = () => <Download size={20} />;

export default About;