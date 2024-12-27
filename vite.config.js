import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        transactions: '/transactions.html',
        modals : "/modals.html",
      },
    },
  },
})