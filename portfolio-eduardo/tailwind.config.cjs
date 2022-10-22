/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
