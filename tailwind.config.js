/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html','./modals.html','./transactions.html','./transaction-volume.html','./revenue-analysis.html','./channel-effectiveness.html','./visitor-flow.html','cards.html','manage-accounts.html',
    './src/**/*.{js,jsx,ts,tsx,html}', // Ensure all JS and HTML files are included
    // 'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors : {
        primary : "#8837E9",
        coin : "#F59E0B"
      },
      
    },
  },
  plugins: [
    // require('preline/plugin')
  ],
}
