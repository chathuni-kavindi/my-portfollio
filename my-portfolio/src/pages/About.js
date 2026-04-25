import React from "react";
import { Download, GraduationCap, Award, Trophy, Newspaper, ExternalLink } from "lucide-react";

const educationData = [
  { year: "2024 - Present", title: "BSc(Hons) in ICT", institute: "University of Sri Jayewardenepura", details: "Specializing in Software Engineering | GPA: 3.20", iconBg: "rgba(99,102,241,0.15)", iconColor: "#818cf8" },
  { year: "2022 (2023)", title: "GCE Advanced Level", institute: "Art Stream", details: "Results: 2A, 1B", iconBg: "rgba(236,72,153,0.15)", iconColor: "#f472b6" },
  { year: "2019", title: "GCE Ordinary Level", institute: "Secondary Education", details: "8A, 1B (IT, Maths, English: A)", iconBg: "rgba(34,197,94,0.15)", iconColor: "#4ade80" },
];

const certificationData = [
  { title: "Dip. in English", provider: "ESOFT Metro College", year: "2019", id: "EBM/A-004436" },
  { title: "Industry Preparation Training", provider: "NSBM Green University", year: "2025" },
  { title: "Artificial Intelligence Foundations", provider: "LinkedIn Learning", year: "2025" },
];

const About = () => {
  return (
    <>
      <style>{`
        @keyframes ctPulse {
          0%,100%{opacity:1;transform:scale(1)}
          50%{opacity:.3;transform:scale(.55)}
        }
      `}</style>

      <section className="min-h-screen transition-colors duration-300 bg-white text-black dark:bg-[#0d1117] dark:text-white px-[5%] py-[100px]">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section - Matched with Contact Page */}
          <div className="flex flex-col items-center mb-20 text-center">
            <div className="inline-flex items-center gap-2.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 dark:text-indigo-300 text-sm font-semibold tracking-widest uppercase px-5 py-2.5 rounded-full mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-[ctPulse_2s_infinite]" />
              My Professional Journey
            </div>
            <h1 className="text-5xl font-bold uppercase tracking-wider mb-6">
              About <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-xl leading-relaxed max-w-3xl mx-auto">
              A passionate full-stack software engineer with expertise in crafting innovative digital solutions. 
              Specialized in modern web technologies, UI/UX design, and scalable applications.
            </p>
            <button className="mt-10 flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:scale-105">
              <Download size={22} /> Download Resume
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Left: Educational Journey (Timeline) */}
            <div>
              <h2 className="text-3xl font-extrabold mb-10 flex items-center gap-4 text-gray-900 dark:text-gray-100">
                <GraduationCap className="text-indigo-500" size={32} /> Educational Journey
              </h2>
              <div className="space-y-10 border-l-2 border-indigo-500/30 ml-4 pl-10 relative">
                {educationData.map((edu, index) => (
                  <div key={index} className="relative group">
                    {/* Timeline dot */}
                    <div className="absolute -left-[49px] top-1 w-6 h-6 bg-[#0d1117] rounded-full border-4 border-indigo-500 transition-transform group-hover:scale-125"></div>
                    
                    <div className="bg-gray-50 dark:bg-slate-900/40 p-6 rounded-2xl border border-gray-200 dark:border-white/5 hover:border-indigo-500/40 transition-all duration-300">
                      <span className="text-indigo-500 font-mono text-sm font-bold tracking-widest">{edu.year}</span>
                      <h3 className="text-2xl font-bold mt-2 text-gray-900 dark:text-white">{edu.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold mt-1">{edu.institute}</p>
                      <p className="text-gray-500 dark:text-gray-400 mt-2 italic">{edu.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Certifications */}
            <div>
              <h2 className="text-3xl font-extrabold mb-10 flex items-center gap-4 text-gray-900 dark:text-gray-100">
                <Award className="text-pink-500" size={32} /> Certifications
              </h2>
              <div className="space-y-5">
                {certificationData.map((cert, index) => (
                  <div key={index} className="group flex items-center gap-6 bg-gray-50 dark:bg-slate-900/60 p-6 rounded-[20px] border border-gray-200 dark:border-white/5 hover:border-pink-500/40 transition-all duration-300 hover:translate-x-2">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-pink-500/10 text-pink-500">
                      <Award size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-gray-900 dark:text-white group-hover:text-pink-500 transition">{cert.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">{cert.provider} • {cert.year}</p>
                      {cert.id && <p className="text-xs text-indigo-400 mt-1 font-mono uppercase tracking-wider">ID: {cert.id}</p>}
                    </div>
                    <ExternalLink size={20} className="text-gray-400 opacity-0 group-hover:opacity-100 transition" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements Section - Glassmorphism style */}
          <div className="mt-24">
            <h2 className="text-3xl font-extrabold mb-10 flex items-center gap-4 text-gray-900 dark:text-gray-100">
              <Trophy className="text-yellow-500" size={32} /> Key Achievements
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-indigo-500/5 to-transparent dark:bg-slate-900/40 p-8 rounded-[30px] border border-gray-200 dark:border-white/5 hover:border-yellow-500/30 transition shadow-sm">
                 <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">2025</span>
                 <h3 className="text-2xl font-bold mt-5 text-gray-900 dark:text-white">Research Paper: GoWay</h3>
                 <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                   Published at KDU-IRC '25. A revolutionary smartphone-based public transport service solution designed for modern urban mobility.
                 </p>
              </div>
              <div className="bg-gradient-to-br from-pink-500/5 to-transparent dark:bg-slate-900/40 p-8 rounded-[30px] border border-gray-200 dark:border-white/5 hover:border-yellow-500/30 transition shadow-sm">
                 <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">2024</span>
                 <h3 className="text-2xl font-bold mt-5 text-gray-900 dark:text-white">DynaLab MATLAB Workshop</h3>
                 <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                   Successfully completed hands-on session organized by the Mathematics & Statistics Circle at USJ.
                 </p>
              </div>
            </div>
          </div>

          {/* News Section */}
          <div className="mt-24">
            <h2 className="text-3xl font-extrabold mb-10 flex items-center gap-4 text-gray-900 dark:text-gray-100">
              <Newspaper className="text-emerald-500" size={32} /> Latest Highlights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[1,2,3,4].map((i) => (
                 <div key={i} className="group bg-gray-50 dark:bg-slate-900/40 rounded-3xl overflow-hidden border border-gray-200 dark:border-white/5 hover:border-emerald-500/40 transition-all duration-300 shadow-sm">
                    <div className="h-40 bg-gray-200 dark:bg-slate-800 flex items-center justify-center text-gray-400 dark:text-gray-600 text-xs italic group-hover:scale-105 transition-transform">
                      Image Placeholder
                    </div>
                    <div className="p-5">
                      <p className="text-[11px] text-indigo-500 font-black uppercase tracking-tighter mb-2">Jan 2025 • Insight</p>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 line-clamp-2 leading-snug group-hover:text-emerald-500 transition">
                        Wrapping up my AI/ML engineering journey with a new perspective...
                      </h4>
                    </div>
                 </div>
                ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;