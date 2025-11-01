import { motion } from 'framer-motion'

const items = [
  {
    title: "Tutedude Web Development Hackathon 1.0",
    subtitle: "Street vendor supply chain",
    period: "2024",
    detail: "Built a solution exploring inventory tracking and demand prediction to support local vendors.",
  },
  {
    title: "Sustainable Hackathon",
    subtitle: "Digital Carbon Footprint",
    period: "2024",
    detail: "Ideated a platform to measure and reduce carbon impact across digital workflows.",
  },
  {
    title: "Academic Projects at VIT",
    subtitle: "Coursework & Labs",
    period: "2023 — 2025",
    detail: "Projects spanning full‑stack dev, ML models, and systems design.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <h2 className="text-2xl font-semibold">Experience & Achievements</h2>
      <div className="mt-6 space-y-6">
        {items.map((i) => (
          <motion.div key={i.title} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{i.title}</h3>
              <span className="text-xs text-slate-400">{i.period}</span>
            </div>
            <p className="text-sm text-slate-300">{i.subtitle}</p>
            <p className="text-sm text-slate-300 mt-2">{i.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
