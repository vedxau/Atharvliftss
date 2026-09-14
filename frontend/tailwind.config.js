/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#121212",
        "charcoal-card": "#1A1A1A",
        cyan: "#00D2FF",
        volt: "#CCFF00",
        steel: "#8B8D98",
        offwhite: "#F4F4F6",
      },
      fontFamily: {
        bebas: ["'Bebas Neue'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
