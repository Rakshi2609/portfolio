import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const linksRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const links = linksRef.current;
    const form = formRef.current;

    // Animate heading
    gsap.fromTo(
      heading,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate social links
    gsap.fromTo(
      links,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate form
    gsap.fromTo(
      form,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-black py-20 px-10 text-white flex flex-col items-center justify-center"
    >
      {/* Heading */}
      <div ref={headingRef} className="text-center mb-16">
        <h2 className="text-6xl font-extrabold mb-4">
          Let's <span className="text-[#4DB8FF]">Connect</span>
        </h2>
        <p className="text-gray-400 text-xl">
          Feel free to reach out for collaborations or just a friendly chat
        </p>
      </div>

      <div className="flex gap-20 w-full max-w-7xl">
        {/* Left - Social Links */}
        <div ref={linksRef} className="w-[40%] flex flex-col gap-8">
          <h3 className="text-4xl font-bold mb-4">Find me on</h3>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/rakshith-ganjimut/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-6 rounded-xl border border-white/10 hover:border-[#4DB8FF] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_#4DB8FF]"
          >
            <div className="w-16 h-16 bg-[#0077B5] rounded-lg flex items-center justify-center text-3xl">
              <i className="fab fa-linkedin-in"></i>
            </div>
            <div>
              <h4 className="text-2xl font-bold">LinkedIn</h4>
              <p className="text-gray-400">rakshith-ganjimut</p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Rakshi2609"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-6 rounded-xl border border-white/10 hover:border-[#4DB8FF] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_#4DB8FF]"
          >
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-3xl text-black">
              <i className="fab fa-github"></i>
            </div>
            <div>
              <h4 className="text-2xl font-bold">GitHub</h4>
              <p className="text-gray-400">@Rakshi2609</p>
            </div>
          </a>

          {/* Email */}
          <div className="flex items-center gap-4 p-6 rounded-xl border border-white/10">
            <div className="w-16 h-16 bg-[#4DB8FF] rounded-lg flex items-center justify-center text-3xl">
              <i className="fas fa-envelope"></i>
            </div>
            <div>
              <h4 className="text-2xl font-bold">Email</h4>
              <p className="text-gray-400">rakshith@example.com</p>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div ref={formRef} className="w-[55%]">
          <div className="bg-black/40 backdrop-blur-2xl border border-white/10 shadow-xl p-10 rounded-3xl">
            <h3 className="text-4xl font-bold mb-8">Send a Message</h3>

            <form className="flex flex-col gap-6">
              {/* Name */}
              <div>
                <label className="text-gray-400 text-lg mb-2 block">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white text-lg focus:border-[#4DB8FF] focus:outline-none transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-gray-400 text-lg mb-2 block">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white text-lg focus:border-[#4DB8FF] focus:outline-none transition-all"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="text-gray-400 text-lg mb-2 block">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Let's collaborate!"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white text-lg focus:border-[#4DB8FF] focus:outline-none transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-gray-400 text-lg mb-2 block">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Your message here..."
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white text-lg focus:border-[#4DB8FF] focus:outline-none transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                className="bg-[#4DB8FF] text-black font-bold text-xl py-4 rounded-lg hover:bg-[#3DA8EF] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_#4DB8FF]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
