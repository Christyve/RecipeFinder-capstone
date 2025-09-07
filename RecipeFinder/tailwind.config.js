/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#DCE8D8",
        primary: "#2C9B1A",
        dark: "#476920",
        white: "#FFFFFF",
        danger: "#E53935",
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "sans-serif"],
      },
      borderRadius: {
        xl: "12px",     // for cards
        "2xl": "20px",  // for search bar
        full: "9999px", // for buttons
      },
      boxShadow: {
        default: "0 2px 4px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
}
