import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        transactions: '/transactions.html',
        modals : "/modals.html",
        transactionVolume : "/transaction-volume.html",
        revenueAnalysis : "/revenue-analysis.html",
        channelEffectiveness : "/channel-effectiveness.html",
        visitorFlow : "/visitor-flow.html",
        cards : "cards.html",
        manageAccounts : "manage-accounts.html"
      },
    },
  },
})