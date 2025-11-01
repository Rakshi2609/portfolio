import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
  const { name, description, url, language, topics = [], tech = [] } = project
  const badges = topics.length ? topics : tech

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-5 h-full"
      whileHover={{ y: -4 }}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">
          {name}
        </h3>
        <span className="text-xs text-slate-400">{language}</span>
      </div>
      <p className="mt-2 text-sm text-slate-300">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {badges.map((b) => (
          <span key={b} className="text-[10px] uppercase tracking-wide px-2 py-1 rounded-full bg-neon-blue/20 text-neon-blue border border-neon-blue">
            {b}
          </span>
        ))}
      </div>
    </motion.a>
  )
}
