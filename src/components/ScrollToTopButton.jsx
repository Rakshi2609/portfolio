import { useEffect, useState } from 'react'

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 size-10 rounded-full bg-neon-purple/20 hover:bg-neon-purple/30 border border-neon-purple text-white shadow-glow backdrop-blur flex items-center justify-center"
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      ↑
    </button>
  )
}
