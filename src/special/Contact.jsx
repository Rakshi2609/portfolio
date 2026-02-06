import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const APPSCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz9vtfw3hGAYm6PwXuVy7A-BZrf16X4UQKzX9KJYcc58N7vbRKevJY7Q6mDeo8Yw05MZg/exec";

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

  // ---------------- GSAP ----------------
  useEffect(() => {
    gsap.fromTo(headingRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
    gsap.fromTo(linksRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1 });
    gsap.fromTo(formRef.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1 });
  }, []);

  // ---------------- Form Handlers ----------------
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ---------------- Email Sender ----------------
  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      // ✅ Email to YOU
      await axios.post(APPSCRIPT_URL, {
        to: "rakshith@example.com", // replace with your real mail
        subject: `Portfolio Contact from ${formData.name}`,
        html: `
        <h2>📬 New Portfolio Contact</h2>
        <p><b>Name:</b> ${formData.name}</p>
        <p><b>Email:</b> ${formData.email}</p>
        <p><b>Subject:</b> ${formData.subject}</p>
        <p><b>Message:</b> ${formData.message}</p>
        `,
      });

      // ✅ Auto reply to visitor
      await axios.post(APPSCRIPT_URL, {
        to: formData.email,
        subject: "Thank you for contacting Rakshith 🚀",
        html: `
<div style="background:#020617;padding:40px;font-family:Segoe UI;color:white;">
  <h2 style="color:#4DB8FF;">Hey ${formData.name} 👋</h2>

  <p>Thank you for trying to contact <b>Rakshith Ganjimut</b>.</p>

  <p>I have received your message and will reply soon.</p>

  <div style="margin-top:20px;padding:15px;border:1px solid #334155;border-radius:10px;">
    <p><b>Your Message:</b></p>
    <p>${formData.message}</p>
  </div>

  <p style="margin-top:25px;color:#94a3b8;">
    Meanwhile, feel free to explore my projects or connect with me on LinkedIn or GitHub.
  </p>

  <p style="margin-top:25px;color:#4DB8FF;font-weight:bold;">
    — Rakshith Ganjimut
  </p>
</div>
        `,
      });

      alert("Message sent successfully 🚀");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
      alert("Failed to send message 😢");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section ref={sectionRef} className="min-h-screen bg-black py-20 px-10 text-white flex flex-col items-center justify-center">
      <div ref={headingRef} className="text-center mb-16">
        <h2 className="text-6xl font-extrabold mb-4">
          Let's <span className="text-[#4DB8FF]">Connect</span>
        </h2>
      </div>

      <div className="flex gap-20 w-full max-w-7xl">
        {/* Left */}
        <div ref={linksRef} className="w-[40%]">
          <h3 className="text-4xl font-bold mb-4">Find me on</h3>
        </div>

        {/* Form */}
        <div ref={formRef} className="w-[55%]">
          <div className="bg-black/40 p-10 rounded-3xl">

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full mb-4 p-3 bg-black border border-white/10 rounded"
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full mb-4 p-3 bg-black border border-white/10 rounded"
            />

            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full mb-4 p-3 bg-black border border-white/10 rounded"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full mb-4 p-3 bg-black border border-white/10 rounded"
            />

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-[#4DB8FF] px-6 py-3 text-black font-bold rounded"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
