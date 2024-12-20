/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html','./modals.html',
    './src/**/*.{js,jsx,ts,tsx,html}', // Ensure all JS and HTML files are included
  ],
  theme: {
    extend: {
      colors : {
        primary : "#8837E9",
        coin : "#F59E0B"
      }
    },
  },
  plugins: [],
}
