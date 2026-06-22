import React, { useState } from "react";
import {
  FaEnvelope, FaPhoneAlt, FaWhatsapp,
  FaMapMarkerAlt, FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", contact: "", message: "" });
  const [focused, setFocused] = useState(null);
  const [hovCard, setHovCard] = useState(null);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
  };

  const CARDS = [
    {
      icon: <FaEnvelope size={24} />,
      label: "Email",
      value: "kavindichathuni2003@gmail.com",
      sub: "Drop me a line anytime",
      iconBg: "rgba(59,130,246,0.15)", iconColor: "#60a5fa",
      href: "mailto:kavindichathuni2003@gmail.com",
    },
    {
      icon: <FaPhoneAlt size={24} />,
      label: "Phone",
      value: "+94 76 651 1469",
      sub: "Let's talk directly",
      iconBg: "rgba(34,197,94,0.15)", iconColor: "#4ade80",
      href: "tel:+94766511469",
    },
    {
      icon: <FaWhatsapp size={24} />,
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      sub: "Quick message",
      iconBg: "rgba(16,185,129,0.15)", iconColor: "#34d399",
      href: "https://wa.me/94766511469",
    },
    {
      icon: <FaMapMarkerAlt size={24} />,
      label: "Location",
      value: "Colombo, Sri Lanka",
      sub: "Available remotely",
      iconBg: "rgba(236,72,153,0.15)", iconColor: "#f472b6",
      href: null,
    },
  ];

  return (
    <>
      <style>{`
        @keyframes ctPulse {
          0%,100%{opacity:1;transform:scale(1)}
          50%{opacity:.3;transform:scale(.55)}
        }
        #ct-section input, #ct-section textarea {
          background:transparent; border:none; outline:none;
          width:100%; resize:none; font-size: 16px;
        }
        @media (min-width: 768px) {
          #ct-section input, #ct-section textarea { font-size: 18px; }
        }
      `}</style>

      <section id="ct-section" className="min-h-screen transition-colors duration-300 bg-white text-black dark:bg-[#0f172a] dark:text-white px-[5%] py-20 sm:py-24 md:py-[100px]">
        <div className="flex flex-col items-center mb-16 sm:mb-20 text-center">
          <div className="inline-flex items-center gap-2.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 dark:text-indigo-300 text-xs sm:text-sm font-semibold tracking-widest uppercase px-5 py-2.5 rounded-full mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-[ctPulse_2s_infinite]" />
            Available for work
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-widest mb-5">
            Get In <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">Touch</span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-[700px]">
            Ready to turn your ideas into reality? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[50px] max-w-[1700px] mx-auto">
          <div className="flex flex-col gap-5">
            <p className="font-display text-2xl sm:text-3xl font-extrabold mb-2 sm:mb-5 text-gray-900 dark:text-gray-100">
              Contact Information
            </p>

            {CARDS.map((c, i) => {
              const hov = hovCard === i;
              return (
                <a key={i} href={c.href} target="_blank" rel="noreferrer"
                  className={`flex items-center gap-5 sm:gap-6 rounded-[20px] px-6 sm:px-9 py-5 sm:py-6 transition-all duration-300 no-underline border 
                  ${hov ? 'translate-x-2.5 bg-gray-100 dark:bg-slate-800/80 border-indigo-500/40' : 'bg-gray-50 dark:bg-slate-900/60 border-gray-200 dark:border-white/5'}`}
                  onMouseEnter={() => setHovCard(i)} onMouseLeave={() => setHovCard(null)}>
                  <div style={{ background: c.iconBg, color: c.iconColor }}
                    className="w-14 h-14 sm:w-[60px] sm:h-[60px] rounded-[15px] flex items-center justify-center shrink-0">{c.icon}</div>
                  <div>
                    <div className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-wider text-gray-900 dark:text-white">{c.label}</div>
                    <div className="text-lg sm:text-xl md:text-[22px] font-semibold text-blue-600 dark:text-blue-400 my-1 break-all">{c.value}</div>
                    <div className="text-sm sm:text-base md:text-lg text-indigo-400 dark:text-indigo-200">{c.sub}</div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="bg-gray-50 dark:bg-slate-900/80 border border-gray-200 dark:border-white/5 rounded-[28px] sm:rounded-[30px] p-7 sm:p-10 md:p-[50px] h-fit">
            <p className="font-display text-2xl sm:text-3xl font-extrabold mb-7 sm:mb-9 text-gray-900 dark:text-gray-100">
              Send a Message
            </p>

            <form onSubmit={onSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {[
                  { id: "name", label: "Name", type: "text", ph: "Your name" },
                  { id: "email", label: "Email", type: "email", ph: "email@example.com" },
                ].map((input) => (
                  <div key={input.id}>
                    <label className="block text-base sm:text-lg md:text-xl font-extrabold mb-3 text-gray-900 dark:text-gray-100">{input.label}</label>
                    <div className={`flex items-center gap-4 px-5 sm:px-6 py-4 sm:py-[18px] bg-white dark:bg-slate-800/50 rounded-[15px] border transition-all duration-200 
                      ${focused === input.id ? 'border-indigo-500 ring-2 ring-indigo-500/20' : 'border-gray-200 dark:border-white/10'}`}>
                      <input
                        className="dark:text-white text-black"
                        type={input.type} name={input.id} placeholder={input.ph}
                        onFocus={() => setFocused(input.id)} onBlur={() => setFocused(null)}
                        onChange={onChange} required
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <label className="block text-base sm:text-lg md:text-xl font-extrabold mb-3 text-gray-900 dark:text-gray-100">Contact Number</label>
                <div className={`flex items-center gap-4 px-5 sm:px-6 py-4 sm:py-[18px] bg-white dark:bg-slate-800/50 rounded-[15px] border transition-all duration-200 
                  ${focused === "contact" ? 'border-indigo-500 ring-2 ring-indigo-500/20' : 'border-gray-200 dark:border-white/10'}`}>
                  <input
                    className="dark:text-white text-black"
                    type="text" name="contact" placeholder="+94 7X XXX XXXX"
                    onFocus={() => setFocused("contact")} onBlur={() => setFocused(null)}
                    onChange={onChange}
                  />
                </div>
              </div>

              <div className="mb-8 sm:mb-9">
                <label className="block text-base sm:text-lg md:text-xl font-extrabold mb-3 text-gray-900 dark:text-gray-100">Your Message</label>
                <div className={`px-5 sm:px-6 py-5 bg-white dark:bg-slate-800/50 rounded-[15px] border transition-all duration-200 
                  ${focused === "message" ? 'border-indigo-500 ring-2 ring-indigo-500/20' : 'border-gray-200 dark:border-white/10'}`}>
                  <textarea
                    className="dark:text-white text-black"
                    name="message" placeholder="Tell me about your project..."
                    rows={5}
                    onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                    onChange={onChange} required
                  />
                </div>
              </div>

              <button type="submit" className="w-full py-5 sm:py-[22px] bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 border-none rounded-2xl text-white text-lg sm:text-xl md:text-[20px] font-bold cursor-pointer flex items-center justify-center gap-3 sm:gap-[15px] transition-all duration-300 shadow-lg">
                <FaPaperPlane size={20} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}