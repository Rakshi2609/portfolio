  import { motion } from 'framer-motion'
  import { useEffect, useState } from 'react'
  import ScrambledText from './ScrambledText';

  const Tagline = () => {
    const full = "I build intelligent web apps that makes life simpler."
    const [text, setText] = useState('')

    useEffect(() => {
      let i = 0
      const id = setInterval(() => {
        setText(full.slice(0, i))
        i++
        if (i > full.length) clearInterval(id)
      }, 30)
      return () => clearInterval(id)
    }, [])

    return (
      <p className="text-slate-300 text-lg md:text-xl min-h-[2.5rem]">
        {text}<span className="animate-pulse">▍</span>
      </p>
    )
  }

  export default function Hero() {
    return (
      // <ScrollStackItem>
      <section className="pt-16 md:pt-24 pb-12" id="home">
        <div className="grid md:grid-cols-2 gap-8 z-20 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold leading-tight"
            >
              Hi, I’m       
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue z-[200] mx-[10px]">
                   

  
                
                
                        Rakshith
                
                

                </span>
              
              
            
            </motion.h1>
            <div className="mt-4">
              <Tagline />
            </div>
            <div className="mt-6 flex gap-3">
              <a href="#projects" className="px-4 py-2 rounded-lg bg-neon-purple/20 border border-neon-purple text-white shadow-glow">View Projects</a>
              <a href="#contact" className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white">Let’s Collaborate</a>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: .95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .5, delay: .1 }}
            className=" bg-black relative h-56 md:h-72 rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,43,209,.2),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(43,217,254,.2),transparent_40%)] ai-glow z-50 onhover:scale-[1.02] transition-transform duration-300 bg-color"
          >

            <div className="absolute inset-0 grid place-items-center text-center p-6">
              <p className="text-[20px] text-slate-400"> I'm a student at <strong>Vellore Institute of Technology (VIT)</strong> who loves building things at the intersection of <strong>web</strong> and <strong>AI</strong>.
        I enjoy hackathons, solving real-world problems, and learning by shipping.</p>
              <p className="text-[15px] text-slate-400 mt-2">Passionate about AI-powered innovation — from smarter task managers to healthcare tools like early tumor detection. Fun fact: I feel happiest when my hair looks good.</p>
            </div>
          </motion.div>
        </div>
      </section>
      // </ScrollStackItem>
    )
  }
