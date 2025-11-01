import { useEffect, useState } from 'react'
import { fetchRepo } from '../utils/github'
import ProjectCard from './ProjectCard'

const FALLBACK = {
  JurisAI: {
    name: 'JurisAI',
    description: 'AI-driven legal assistant for document summarization and case prediction.',
    url: 'https://github.com/Rakshi2609/JurisAI',
    language: 'Python',
    tech: ['Python', 'NLP', 'Transformers']
  },
  'Task-Tapper': {
    name: 'Task Tapper',
    description: 'Smart productivity manager with recurring tasks and analytics.',
    url: 'https://github.com/Rakshi2609/Task-Tapper',
    language: 'JavaScript',
    tech: ['React', 'Node', 'MongoDB']
  },
  Mira: {
    name: 'Mira',
    description: 'Healthcare ML project for early brain tumor detection and AI accuracy.',
    url: 'https://github.com/Rakshi2609/Mira',
    language: 'Python',
    tech: ['Flask', 'scikit-learn', 'Pandas']
  }
}

export default function Projects() {
  const [projects, setProjects] = useState(null)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      const repos = [
        ['JurisAI', 'JurisAI'],
        ['Task-Tapper', 'Task Tapper'],
        ['Mira', 'Mira'],
      ]
      const results = await Promise.all(
        repos.map(async ([slug, label]) => {
          const data = await fetchRepo('Rakshi2609', slug)
          return data ? data : FALLBACK[slug]
        })
      )
      if (mounted) setProjects(results)
    })()
    return () => { mounted = false }
  }, [])

  return (
    <section id="projects" className="py-16">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <p className="text-slate-300 mt-2">A few things I’ve been hacking on recently.</p>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {(projects || Object.values(FALLBACK)).map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  )
}
