import { motion } from 'framer-motion'
import SkillRadar from './SkillRadar'

const skills = {
  Languages: ['JavaScript', 'Python', 'Java'],
  Frameworks: ['React', 'Node.js', 'Express', 'Flask'],
  Tools: ['Git', 'VSCode', 'MongoDB', 'TailwindCSS'],
}

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <p className="text-slate-300 mt-2">What I’ve been using to ship fast and learn faster.</p>

      <div className="grid lg:grid-cols-2 gap-8 mt-6">
        <div className="space-y-5">
          {Object.entries(skills).map(([group, items]) => (
            <motion.div key={group} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="text-sm uppercase tracking-wide text-slate-400">{group}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm hover:border-neon-blue/40 hover:shadow-glow transition">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <SkillRadar />
        </div>
      </div>
    </section>
  )
}
