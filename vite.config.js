import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://JorgeAntonio.github.io/react-meals-app/',
  plugins: [react()]
})
