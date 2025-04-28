// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: process.env.VITE_FRONTEND_IP || 'localhost',
    port: parseInt(process.env.VITE_FRONTEND_PORT) || 3000
  }
})
