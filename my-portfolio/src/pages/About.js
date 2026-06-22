import React, { useState } from "react";
import { Download, GraduationCap, Award, Trophy, Newspaper, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const educationData = [
  { year: "2024 - Present", title: "BSc(Hons) in ICT", institute: "University of Sri Jayewardenepura", details: "Specializing in Software Engineering | GPA: 3.20", iconBg: "rgba(99,102,241,0.15)", iconColor: "#818cf8" },
  { year: "2022 (2023)", title: "GCE Advanced Level", institute: "Art Stream", details: "Results: 2A, 1B", iconBg: "rgba(236,72,153,0.15)", iconColor: "#f472b6" },
  { year: "2019", title: "GCE Ordinary Level", institute: "Secondary Education", details: "8A, 1B (IT, Maths, English: A)", iconBg: "rgba(34,197,94,0.15)", iconColor: "#4ade80" },
];

const certificationData = [
  { title: "Introduction to Cybersecurity", provider: "Cisco Networking Academy", year: "2026" },
  { title: "Introduction to Data Science", provider: "Cisco Networking Academy", year: "2026" },
];

const highlightsData = [
  {
    date: "2026",
    tag: "Event Management",
    title: "Proud Moment: Marketing Crew – Camellia 2026 ",
    description: [
      "Grateful to have been part of the Marketing Crew for Camellia 2026, organized by the Entre Club of the University of Sri Jayewardenepura.",
      "Held on 18th March 2026 at the university premises, this event was more than just a celebration—it was a true reflection of teamwork, creativity, and shared vision.",
      "“More than a team, a family.” Bound by a shared vision and strengthened through every challenge, we came together to create an unforgettable experience filled with music, energy, and lasting memories.",
      "Melodies that touch the hearts… Special thanks to everyone who supported and contributed to the success of this event."
    ],
    image: "/camellia2026.jpg", 
    linkedinUrl: "https://www.linkedin.com", 
    theme: {
      border: "border-pink-300 dark:border-pink-500/30",
      bgLight: "bg-pink-50/30",
      hoverBg: "hover:bg-pink-100/70 dark:hover:bg-pink-950/20",
      hoverBorder: "hover:border-pink-500",
      badgeBg: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
      btnBg: "bg-pink-500 hover:bg-pink-600"
    }
  },
  {
    date: "2025",
    tag: "Insight",
    title: "Wrapping Up Our AI/ML Journey! ",
    description: [
      "Today marked the final day of our Artificial Intelligence and Machine Learning module at NSBM Green University, conducted by Dr. Neamah AL-Naffakh from the University of Plymouth, UK.",
      "It was a truly inspiring learning experience – blending global insights with hands-on AI/ML applications. As final-year Software Engineering students, this gave us a powerful technological foundation."
    ],
    image: null,
    linkedinUrl: "https://www.linkedin.com",
    theme: {
      border: "border-blue-300 dark:border-blue-500/30",
      bgLight: "bg-blue-50/30",
      hoverBg: "hover:bg-blue-100/70 dark:hover:bg-blue-950/20",
      hoverBorder: "hover:border-blue-500",
      badgeBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
      btnBg: "bg-blue-500 hover:bg-blue-600"
    }
  },
  {
    date: "2025",
    tag: "Academic",
    title: "Grateful to have completed DynaLab 📊",
    description: [
      "I'm excited to share that I've successfully completed DynaLab, a hands-on MATLAB workshop series organized by the Mathematics & Statistics Circle of NSBM Green University.",
      "This engaging program provided key foundational concepts in computational mathematics and advanced data matrix handling."
    ],
    image: null,
    linkedinUrl: "https://www.linkedin.com",
    theme: {
      border: "border-green-300 dark:border-green-500/30",
      bgLight: "bg-green-50/30",
      hoverBg: "hover:bg-green-100/70 dark:hover:bg-green-950/20",
      hoverBorder: "hover:border-green-500",
      badgeBg: "bg-green-500/10 text-green-600 dark:text-green-400",
      btnBg: "bg-green-500 hover:bg-green-600"
    }
  },
  {
    date: "2025",
    tag: "Training",
    title: "Industry Preparation Training (IPT) 🚀",
    description: [
      "I had the incredible opportunity to learn from top industry experts from Virtusa, IFS, Mitra AI, Dialog Axiata, 99x, and more!",
      "This comprehensive program was a true career transformation, shedding light on corporate requirements and standard operational procedures."
    ],
    image: null,
    linkedinUrl: "https://www.linkedin.com",
    theme: {
      border: "border-purple-300 dark:border-purple-500/30",
      bgLight: "bg-purple-50/30",
      hoverBg: "hover:bg-purple-100/70 dark:hover:bg-purple-950/20",
      hoverBorder: "hover:border-purple-500",
      badgeBg: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
      btnBg: "bg-purple-500 hover:bg-purple-600"
    }
  }
];


const HighlightCard = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`${item.theme.bgLight} dark:bg-[#161b22] rounded-[32px] border-2 ${item.theme.border} ${item.theme.hoverBg} ${item.theme.hoverBorder} p-6 sm:p-7 transition-all duration-300 shadow-md flex flex-col justify-between h-full min-h-[540px] w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] shrink-0`}
    >
      <div className="flex flex-col h-full">
        
        <div className="flex items-center justify-between mb-6">
          <span className={`px-4 py-1.5 rounded-full text-xs font-black tracking-wider ${item.theme.badgeBg}`}>
            {item.date} • {item.tag}
          </span>
          <a 
            href={item.linkedinUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-white text-xs font-black tracking-wider transition-all duration-200 shadow-sm ${item.theme.btnBg} hover:scale-105`}
          >
            Read More <ExternalLink size={12} />
          </a>
        </div>

        
        <h4 className="text-xl font-extrabold text-gray-900 dark:text-white mb-4 leading-snug tracking-tight">
          {item.title}
        </h4>

        
        <div className="text-[15px] text-gray-700 dark:text-gray-300 space-y-3.5 leading-relaxed font-normal flex-1">
          {isExpanded ? (
            item.description.map((paragraph, pIndex) => (
              <p key={pIndex}>{paragraph}</p>
            ))
          ) : (
            
            <p className="line-clamp-3 sm:line-clamp-4">{item.description[0]}</p>
          )}
          
          
          {item.description.length > 1 || item.description[0].length > 120 ? (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-indigo-600 dark:text-indigo-400 font-bold text-sm hover:underline block mt-2 transition-all"
            >
              {isExpanded ? "See Less ▲" : "See More ▼"}
            </button>
          ) : null}
        </div>
      </div>

      
      {item.image && (
        <div className="mt-6 w-full h-44 sm:h-52 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700 shadow-inner shrink-0">
          <img 
            src={item.image} 
            alt="Highlight Asset" 
            className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
            onError={(e) => {
              e.target.src = "image_58929f.jpg";
            }}
          />
        </div>
      )}
    </div>
  );
};

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < highlightsData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <>
      <style>{`
        @keyframes ctPulse {
          0%,100%{opacity:1;transform:scale(1)}
          50%{opacity:.3;transform:scale(.55)}
        }
        /* CSS variables to handle accurate slide translations across different device screen widths */
        .slider-track {
          display: flex;
          transition: transform 500ms ease-out;
          gap: 2rem;
        }
        @media (max-width: 767px) {
          .slider-track { transform: translateX(calc(-${currentIndex} * (100% + 2rem))); }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .slider-track { transform: translateX(calc(-${currentIndex} * (50% + 1rem))); }
        }
        @media (min-width: 1024px) {
          .slider-track { transform: translateX(calc(-${currentIndex} * (33.333% + 0.666rem))); }
        }
      `}</style>

      <section className="min-h-screen transition-colors duration-300 bg-white text-black dark:bg-[#0d1117] dark:text-white px-[5%] py-[100px]">
        <div className="max-w-6xl mx-auto">
          
         
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
            
            <div>
              <h2 className="text-3xl font-extrabold mb-10 flex items-center gap-4 text-gray-900 dark:text-gray-100">
                <GraduationCap className="text-indigo-500" size={32} /> Educational Journey
              </h2>
              <div className="space-y-10 border-l-2 border-indigo-500/30 ml-4 pl-10 relative">
                {educationData.map((edu, index) => (
                  <div key={index} className="relative group">
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
                    </div>
                    <ExternalLink size={20} className="text-gray-400 opacity-0 group-hover:opacity-100 transition" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          
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

         
          <div className="mt-24 relative px-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
              <h2 className="text-3xl font-extrabold flex items-center gap-4 text-gray-900 dark:text-gray-100">
                <Newspaper className="text-emerald-500" size={32} /> Latest News & Highlights
              </h2>
              
              
              <div className="flex items-center gap-3">
                <button 
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className={`w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center transition-all shadow-sm ${
                    currentIndex === 0 
                      ? "opacity-40 cursor-not-allowed" 
                      : "hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 active:scale-95"
                  }`}
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextSlide}
                  disabled={currentIndex >= highlightsData.length - 1}
                  className={`w-12 h-12 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center transition-all shadow-sm ${
                    currentIndex >= highlightsData.length - 1 
                      ? "opacity-40 cursor-not-allowed" 
                      : "hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 active:scale-95"
                  }`}
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            
            <div className="overflow-hidden w-full rounded-[32px] p-2">
             
              <div className="slider-track items-stretch">
                {highlightsData.map((item, index) => (
                  <HighlightCard key={index} item={item} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;