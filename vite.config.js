import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/elo-coach/',
  plugins: [react()],
  server: {
    host: true,
  },
})
