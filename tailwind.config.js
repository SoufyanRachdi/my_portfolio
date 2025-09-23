/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comic: ['"Comic Sans MS"', 'cursive', 'sans-serif'],
      },
      colors: {
        navy: '#0a192f',
        lightNavy: '#112240',
        lightestNavy: '#233554',
        greenAccent: '#64ffda',
        slate: '#8892b0',
        lightSlate: '#a8b2d1',
        lightestSlate: '#ccd6f6',
        // Custom palette
        background: '#F8FAFC', // light gray / almost white
        big: '#0F172A', // big titles & sidebar (dark navy)
        accent: '#38BDF8', // accent (bright cyan/blue)
        smallText: '#475569', // small text (cool gray)
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(100,255,218,0.2), 0 8px 24px rgba(2,12,27,0.7)',
      },
    },
  },
  plugins: [],
}
  