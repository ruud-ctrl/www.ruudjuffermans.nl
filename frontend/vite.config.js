import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 👈 This makes Vite listen on 0.0.0.0
    port: 5173
  }
})