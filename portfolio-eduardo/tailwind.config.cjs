/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 }
        },
      },
      animation: {
        pulseTyping: "typing 1s ease-in-out infinite"
      },
      colors: {
        "green": "#00D5BE",
        "pink": "#665CC0",
        "dark-blue": "#071330",
        "White-50": "#f6f6f6",
        "dark-blue-50": "#0E2660"
      }
    },
  },
  plugins: [],
}
