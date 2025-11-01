import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="text-slate-300 mt-2">Let’s collaborate — I’m open to internships, projects, and hackathons.</p>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <a href="https://github.com/Rakshi2609" target="_blank" rel="noreferrer" className="block p-3 rounded-lg border border-white/10 hover:border-neon-blue/40 transition">GitHub → @Rakshi2609</a>
          <a href="https://www.linkedin.com/in/rakshith-ganjimut/" target="_blank" rel="noreferrer" className="block p-3 rounded-lg border border-white/10 hover:border-neon-blue/40 transition">LinkedIn → rakshith-ganjimut</a>
        </div>
        <form action="https://formspree.io/f/moqglvdk" method="POST" className="space-y-3">
          <input required name="name" placeholder="Name" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2" />
          <input required type="email" name="email" placeholder="Email" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2" />
          <textarea required name="message" rows="4" placeholder="Message" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2" />
          <button className="px-4 py-2 rounded-lg bg-neon-purple/20 border border-neon-purple text-white shadow-glow">Send</button>
        </form>
      </div>
    </section>
  )
}
