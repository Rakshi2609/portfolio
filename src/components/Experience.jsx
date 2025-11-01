import { motion } from 'framer-motion'

const items = [
  {
    title: "V-Mediathon Hackathon",
    subtitle: "Smart Doctors to patients",
    period: "2025",
    detail: "Developed an AI-powered telemedicine platform connecting doctors and patients efficiently by tracing the nearest healthcare providers, and our web apps stores the digital medical records of patients.",
    achievement: "Top 20 among 120 teams.",
  },
  {
    title: "CodeZilla",
    subtitle: "Vaccine tracker web app",
    period: "2025",
    detail: "Created a web application to track vaccination centers using React for the frontend and Node.js for the backend, integrating with public APIs to provide real-time updates on vaccine availability and real notifications through Email.",
    achievement: "18th rank among 100+ teams.",
  },
  {
    title: "Academic Projects at VIT",
    subtitle: "Coursework & Labs",
    period: "2023 — 2025",
    detail: "Projects spanning full‑stack dev, Network Security, and systems design.",
    achievement: "Demo is displayed in the labs of VIT.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <h2 className="text-2xl font-semibold">Experience & Achievements</h2>
      
  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {items.map((i) => (
          <motion.div
            key={i.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.995 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            viewport={{ once: true }}
            className="rounded-xl border border-white/10 bg-white/5 p-4 shadow-lg transition duration-300 transform-gpu will-change-transform hover:shadow-2xl hover:bg-white/10 hover:border-white/20"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{i.title}</h3>
              <span className="text-xs text-slate-400">{i.period}</span>
            </div>
            <p className="text-sm text-slate-300">{i.subtitle}</p>
            <p className="text-sm text-slate-300 mt-2">{i.detail}</p>
            <p className="text-sm text-slate-300 mt-2 font-bold">{i.achievement}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
