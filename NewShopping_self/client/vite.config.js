import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4545  ,
    host: "192.168.56.1"
    // host: "localhost" 
  }
})
