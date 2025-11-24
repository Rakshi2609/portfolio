import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Connect = () => {
  return (
    <section className="min-h-screen bg-black text-white py-14 px-8 flex flex-col items-center">

      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Connect <span className="text-[#4DB8FF]">With Me</span>
      </h1>

      {/* Social Cards */}
      <div className="flex flex-col md:flex-row gap-8 mb-14">

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/rakshith-ganjimut/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[280px] p-6 bg-black/40 border border-white/10 rounded-2xl backdrop-blur-xl shadow-xl
                     flex items-center gap-5 hover:scale-105 hover:shadow-[0_0_20px_#4DB8FF] transition-all duration-300"
        >
          <FiLinkedin className="text-4xl text-[#4DB8FF]" />
          <div>
            <p className="text-xl font-semibold">LinkedIn</p>
            <p className="text-gray-400 text-xs">/rakshith-ganjimut</p>
          </div>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Rakshi2609"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[280px] p-6 bg-black/40 border border-white/10 rounded-2xl backdrop-blur-xl shadow-xl
                     flex items-center gap-5 hover:scale-105 hover:shadow-[0_0_20px_#4DB8FF] transition-all duration-300"
        >
          <FiGithub className="text-4xl text-[#4DB8FF]" />
          <div>
            <p className="text-xl font-semibold">GitHub</p>
            <p className="text-gray-400 text-xs">/Rakshi2609</p>
          </div>
        </a>

      </div>

      {/* Contact Form */}
      <div className="w-full max-w-2xl bg-black/40 border border-white/10 rounded-3xl p-10 backdrop-blur-xl shadow-xl">
        
        <h2 className="text-2xl font-bold text-[#4DB8FF] mb-6">Contact Me</h2>

        <form className="flex flex-col gap-5">

          {/* Name */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="bg-black/30 border border-white/10 rounded-xl p-3 text-sm text-white placeholder-gray-500 focus:border-[#4DB8FF] outline-none transition-all"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black/30 border border-white/10 rounded-xl p-3 text-sm text-white placeholder-gray-500 focus:border-[#4DB8FF] outline-none transition-all"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Message</label>
            <textarea
              placeholder="Write your message..."
              rows="4"
              className="bg-black/30 border border-white/10 rounded-xl p-3 text-sm text-white placeholder-gray-500 focus:border-[#4DB8FF] outline-none transition-all resize-none"
            />
          </div>

          {/* Button */}
          <button
            type="button"
            className="mt-2 w-full py-3 bg-gradient-to-r from-[#4DB8FF] to-[#AEE6FF] text-black font-semibold text-sm rounded-xl 
                       hover:scale-105 transition-transform duration-300"
          >
            Send Message
          </button>

        </form>
      </div>

    </section>
  );
};

export default Connect;
