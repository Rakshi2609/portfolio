/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#ff2bd1',
          blue: '#2bd9fe',
          purple: '#7a5cff',
          green: '#20e3b2',
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(123, 97, 255, 0.35)',
        'glow-strong': '0 0 80px rgba(123, 97, 255, 0.5)',
      },
      backgroundImage: {
        'grid-neon': "radial-gradient( rgba(255,255,255,.1) 1px, transparent 1px ), radial-gradient( rgba(255,255,255,.06) 1px, transparent 1px )",
      },
      backgroundSize: {
        'grid-neon': '20px 20px, 40px 40px',
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        body: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
