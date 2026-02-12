import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const APPSCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzrqLRQkKXU5_TR1mVWEa4FdhnqhrsazeHNmn382t2zENpRQY38tG6tCKh34z0rovT8/exec";

const Contact = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const linksRef = useRef(null);
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // ---------------- GSAP Animations ----------------
  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    gsap.fromTo(
      linksRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1 }
    );

    gsap.fromTo(
      formRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1 }
    );
  }, []);

  // ---------------- Input Handler ----------------
  const handleChange = (e) => {
    console.log("✏️ Input changed:", e.target.name, e.target.value);

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // ---------------- Email Validation ----------------
  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // ---------------- Submit Handler ----------------
  const handleSubmit = async () => {
    console.log("🔥 Form submit triggered");
    console.log("📦 Data:", formData);

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all required fields");
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error("Enter valid email");
      return;
    }

    try {
      setLoading(true);

      console.log("📤 Sending request...");

      const response = await axios.post(
        APPSCRIPT_URL,
        JSON.stringify(formData),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("✅ Response:", response.data);

      if (response.data.success) {
        toast.success("Message sent successfully 🚀");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong");
      }

    } catch (error) {
      console.error("🚨 Error:", error);
      toast.error("Failed to send message 😢");
    } finally {
      setLoading(false);
    }
  };

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
          Feel free to reach out for collaborations or opportunities
        </p>
      </div>

      <div className="flex gap-20 w-full max-w-7xl">

        {/* Social Links */}
        <div ref={linksRef} className="w-[40%] flex flex-col gap-8">

          <h3 className="text-4xl font-bold mb-4">Find me on</h3>

          <a
            href="https://linkedin.com/in/rakshith-ganjimut/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 p-6 rounded-xl border border-white/10 hover:border-[#4DB8FF] transition"
          >
            <div className="w-16 h-16 bg-[#0077B5] rounded-lg flex items-center justify-center text-3xl">
              <i className="fab fa-linkedin-in"></i>
            </div>

            <div>
              <h4 className="text-2xl font-bold">LinkedIn</h4>
              <p className="text-gray-400">rakshith-ganjimut</p>
            </div>
          </a>

          <a
            href="https://github.com/Rakshi2609"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 p-6 rounded-xl border border-white/10 hover:border-[#4DB8FF] transition"
          >
            <div className="w-16 h-16 bg-white text-black rounded-lg flex items-center justify-center text-3xl">
              <i className="fab fa-github"></i>
            </div>

            <div>
              <h4 className="text-2xl font-bold">GitHub</h4>
              <p className="text-gray-400">@Rakshi2609</p>
            </div>
          </a>
        </div>

        {/* Contact Form */}
        <div ref={formRef} className="w-[55%]">
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 shadow-xl p-10 rounded-3xl">

            <h3 className="text-4xl font-bold mb-8">
              Send a Message
            </h3>

            {/* ✅ FORM FIX */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="flex flex-col gap-6"
            >

              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="input-style"
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="input-style"
              />

              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="input-style"
              />

              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                data-gramm="false"
                className="input-style resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-[#4DB8FF] text-black font-bold text-xl py-4 rounded-lg hover:bg-[#3DA8EF] transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
