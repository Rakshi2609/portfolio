export default function ThemeToggle({ dark, setDark, aiMode, setAiMode }) {
  return (
    <div className="fixed bottom-6 left-6 flex items-center gap-2 bg-black/30 border border-white/10 backdrop-blur rounded-full px-3 py-2">
      <button
        onClick={() => setDark(!dark)}
        className={`text-xs px-2 py-1 rounded-full border ${dark ? 'bg-white/10 border-white/20' : 'bg-white text-black border-black/10'}`}
        aria-label="Toggle dark mode"
        title="Toggle dark mode"
      >
        {dark ? 'Dark' : 'Light'}
      </button>
      <button
        onClick={() => setAiMode(!aiMode)}
        className={`text-xs px-2 py-1 rounded-full border ${aiMode ? 'bg-neon-purple/20 border-neon-purple text-white shadow-glow' : 'bg-white/10 border-white/20 text-slate-300'}`}
        aria-label="Toggle AI mode"
        title="Toggle AI mode"
      >
        AI Mode
      </button>
    </div>
  )
}
