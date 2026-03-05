import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent! (Success)");
    setFormData({ name: "", email: "", contact: "", message: "" });
  };

  return (
    // bg-white (Light) | dark:bg-[#0f172a] (Dark)
    // text-black (Light) | dark:text-white (Dark)
    <section className="min-h-screen px-6 py-16 max-w-7xl mx-auto transition-colors duration-300">
      
      <h1 className="text-5xl font-extrabold text-center mb-6 text-black dark:text-white tracking-wide">
        Get in <span className="text-blue-500">Touch</span>
      </h1>

      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        Ready to turn your ideas into reality? Let’s collaborate and create something amazing together.
      </p>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Info Panel */}
        <div className="flex-1 flex flex-col gap-6">
          
          {/* Email Card */}
          <div className="bg-gray-100 dark:bg-slate-800 rounded-xl p-6 flex items-center gap-4 hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer group">
            <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-500">
              <FaEnvelope size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-black dark:text-white">Email</h3>
              <a href="mailto:Miyurudilakshan@gmail.com" className="text-blue-500 break-all">
                kavindichathuni2003@gmail.com
              </a>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Drop me a line anytime</p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-gray-100 dark:bg-slate-800 rounded-xl p-6 flex items-center gap-4 hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer group">
            <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-full text-green-500">
              <FaPhone size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-black dark:text-white">Phone</h3>
              <a href="tel:+94787517274" className="text-green-500 font-medium">+94 766511469</a>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Let's talk directly</p>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-gray-100 dark:bg-slate-800 rounded-xl p-6 flex items-center gap-4 hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer group">
            <div className="p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-full text-emerald-500">
              <FaWhatsapp size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-black dark:text-white">WhatsApp</h3>
              <a href="https://wa.me/94787517274" className="text-emerald-500 font-medium">Chat on WhatsApp</a>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Quick message</p>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-gray-100 dark:bg-slate-800 rounded-xl p-6 flex items-center gap-4 hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer group">
            <div className="p-4 bg-pink-100 dark:bg-pink-900/30 rounded-full text-pink-500">
              <FaMapMarkerAlt size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-black dark:text-white">Location</h3>
              <p className="text-gray-500 dark:text-gray-400">Colombo, Sri Lanka</p>
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-gray-50 dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-3 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="p-3 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Contact (Optional)</label>
              <input
                type="text"
                name="contact"
                placeholder="Contact Number"
                value={formData.contact}
                onChange={handleChange}
                className="p-3 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Message</label>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="p-3 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-2 flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg transition-all transform active:scale-95"
            >
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;