import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  content:[
    "./index.html",
    "./src//*.{js,ts,tsx,jsx}",
  ],
  theme:{
    extend:{}
  },
  plugins: [react(),tailwindcss()],
})

