/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: '#16A34A',
        pagebg: '#f8fafc',
        cardbg: '#ffffff',
        text: '#111827',
        muted: '#6b7280'
      },
      maxWidth: {
        container: '1200px',
        card: '368px'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
