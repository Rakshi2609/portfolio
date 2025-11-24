import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Connect = () => {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-10 flex flex-col items-center">

      {/* Page Title */}
      <h1 className="text-6xl font-extrabold mb-16">
        Connect <span className="text-[#4DB8FF]">With Me</span>
      </h1>

      {/* Social Cards */}
      <div className="flex flex-col md:flex-row gap-10 mb-20">

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/rakshith-ganjimut/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[320px] p-8 bg-black/40 border border-white/10 rounded-2xl backdrop-blur-xl shadow-xl
                     flex items-center gap-6 hover:scale-105 hover:shadow-[0_0_25px_#4DB8FF] transition-all duration-300"
        >
          <FiLinkedin className="text-5xl text-[#4DB8FF]" />
          <div>
            <p className="text-2xl font-semibold">LinkedIn</p>
            <p className="text-gray-400 text-sm">/rakshith-ganjimut</p>
          </div>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Rakshi2609"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[320px] p-8 bg-black/40 border border-white/10 rounded-2xl backdrop-blur-xl shadow-xl
                     flex items-center gap-6 hover:scale-105 hover:shadow-[0_0_25px_#4DB8FF] transition-all duration-300"
        >
          <FiGithub className="text-5xl text-[#4DB8FF]" />
          <div>
            <p className="text-2xl font-semibold">GitHub</p>
            <p className="text-gray-400 text-sm">/Rakshi2609</p>
          </div>
        </a>

      </div>

      {/* Contact Form */}
      <div className="w-full max-w-3xl bg-black/40 border border-white/10 rounded-3xl p-12 backdrop-blur-xl shadow-xl">
        
        <h2 className="text-4xl font-bold text-[#4DB8FF] mb-10">Contact Me</h2>

        <form className="flex flex-col gap-6">

          <div className="flex flex-col">
            <label className="text-lg mb-2">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="bg-black/30 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:border-[#4DB8FF] outline-none transition-all"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black/30 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:border-[#4DB8FF] outline-none transition-all"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg mb-2">Message</label>
            <textarea
              placeholder="Write your message..."
              rows="5"
              className="bg-black/30 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:border-[#4DB8FF] outline-none transition-all resize-none"
            />
          </div>

          {/* Static Button */}
          <button
            type="button"
            className="mt-4 w-full py-4 bg-gradient-to-r from-[#4DB8FF] to-[#AEE6FF] text-black font-bold text-lg rounded-xl 
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
