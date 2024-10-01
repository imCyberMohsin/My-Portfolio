/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED', 
        primaryDark: '#6D28D9', 
        accent: '#8B5CF6'
      },
    },
    fontFamily: {
      signature: ["Great Vibes"]
    }
  },
  plugins: [],
}