import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-16">
      <motion.h2 className="text-2xl font-semibold" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>About Me</motion.h2>
      <motion.p className="mt-4 text-slate-300 leading-relaxed" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        I’m <strong>Rakshith Ganjimut</strong>, a student at <strong>Vellore Institute of Technology (VIT)</strong> who loves building things at the intersection of <strong>web</strong> and <strong>AI</strong>.
        I enjoy hackathons, solving real-world problems, and learning by shipping.
      </motion.p>
      <motion.p className="mt-3 text-slate-300" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        Passionate about <em>AI-powered innovation</em> — from smarter task managers to healthcare tools like early tumor detection. 
        Fun fact: I feel happiest when my hair looks good 😄
      </motion.p>
    </section>
  )
}
