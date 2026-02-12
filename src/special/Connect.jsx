import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import SectionParticles from "@/components/ui/section-particles";

const Connect = () => {
  return (
    <section id="connect" className="min-h-fit lg:min-h-screen bg-black text-white py-10 lg:py-16 px-8 flex flex-col items-center relative overflow-hidden noise-overlay">

      {/* Subtle particle background */}
      <SectionParticles color="#4DB8FF" particleCount={100} speed={0.35} />

      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-[2]" />

      <div className="relative z-10 flex flex-col items-center w-full">

        {/* Page Title */}
        <div className="text-center mb-10 lg:mb-14">
          <p
            className="text-xs sm:text-sm tracking-[0.4em] uppercase mb-3"
            style={{ fontFamily: "var(--font-body)", color: "rgba(77, 184, 255, 0.5)" }}
          >
            Let's work together
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Connect <span className="text-[#4DB8FF] glow-text">With Me</span>
          </h1>
        </div>

        {/* Social Cards */}
        <div className="flex flex-col sm:flex-row gap-5 mb-14">

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rakshith-ganjimut/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[280px] p-6 glass-panel glass-panel-hover
                       flex items-center gap-5 hover:scale-[1.03] transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#4DB8FF]/10 flex items-center justify-center group-hover:bg-[#4DB8FF]/20 transition-colors duration-300">
              <FiLinkedin className="text-2xl text-[#4DB8FF]" />
            </div>
            <div>
              <p
                className="text-lg sm:text-xl font-semibold text-white/90"
                style={{ fontFamily: "var(--font-display)" }}
              >
                LinkedIn
              </p>
              <p
                className="text-white/25 text-sm sm:text-base font-light"
                style={{ fontFamily: "var(--font-body)" }}
              >
                /rakshith-ganjimut
              </p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Rakshi2609"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[280px] p-6 glass-panel glass-panel-hover
                       flex items-center gap-5 hover:scale-[1.03] transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#4DB8FF]/10 flex items-center justify-center group-hover:bg-[#4DB8FF]/20 transition-colors duration-300">
              <FiGithub className="text-2xl text-[#4DB8FF]" />
            </div>
            <div>
              <p
                className="text-lg sm:text-xl font-semibold text-white/90"
                style={{ fontFamily: "var(--font-display)" }}
              >
                GitHub
              </p>
              <p
                className="text-white/25 text-sm sm:text-base font-light"
                style={{ fontFamily: "var(--font-body)" }}
              >
                /Rakshi2609
              </p>
            </div>
          </a>

        </div>

        {/* Contact Form */}
        <div className="w-full max-w-2xl glass-panel p-8 md:p-10 relative overflow-hidden">

          {/* Decorative glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#4DB8FF]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#4DB8FF]/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            {/* Active indicator line */}
            <div className="w-12 h-[2px] bg-gradient-to-r from-[#4DB8FF] to-transparent mb-5" />

            <h2
              className="text-2xl sm:text-3xl font-bold text-[#4DB8FF] mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Contact Me
            </h2>

            <form className="flex flex-col gap-6">

              {/* Name */}
              <div className="flex flex-col">
                <label
                  className="text-sm mb-2 text-white/40 tracking-wide uppercase"
                  style={{ fontFamily: "var(--font-display)", fontSize: "0.75rem", letterSpacing: "0.15em" }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 text-base text-white/90 placeholder-white/15 focus:border-[#4DB8FF]/50 outline-none transition-all duration-300"
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label
                  className="text-sm mb-2 text-white/40 tracking-wide uppercase"
                  style={{ fontFamily: "var(--font-display)", fontSize: "0.75rem", letterSpacing: "0.15em" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 text-base text-white/90 placeholder-white/15 focus:border-[#4DB8FF]/50 outline-none transition-all duration-300"
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label
                  className="text-sm mb-2 text-white/40 tracking-wide uppercase"
                  style={{ fontFamily: "var(--font-display)", fontSize: "0.75rem", letterSpacing: "0.15em" }}
                >
                  Message
                </label>
                <textarea
                  placeholder="Write your message..."
                  rows="4"
                  className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 text-base text-white/90 placeholder-white/15 focus:border-[#4DB8FF]/50 outline-none transition-all duration-300 resize-none"
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>

              {/* Button */}
              <button
                type="button"
                className="mt-2 w-full py-4 bg-gradient-to-r from-[#4DB8FF] to-[#AEE6FF] text-black font-semibold text-base rounded-xl 
                           hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(77,184,255,0.3)] transition-all duration-300 active:scale-[0.98]"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "0.05em" }}
              >
                Send Message ↗
              </button>

            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="section-divider w-48 mx-auto mb-6" />
          <p
            className="text-white/15 text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            © 2025 Rakshith Ganjimut
          </p>
        </div>
      </div>

    </section>
  );
};

export default Connect;
