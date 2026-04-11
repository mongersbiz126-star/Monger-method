/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'monger-black': '#0D0D0D',
        'monger-charcoal': '#1C1C1A',
        'monger-orange': '#C8722A',
        'monger-cream': '#E8E4DC',
        'monger-gold': '#B8965A',
        'monger-dim': '#6B6860',
      },
      fontFamily: {
        'display': "'Bebas Neue', sans-serif",
        'body': "'DM Sans', sans-serif",
      },
    },
  },
  plugins: [],
}
