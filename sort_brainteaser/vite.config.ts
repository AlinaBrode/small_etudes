import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/small_etudes/sort_brainteaser/',
  plugins: [react()],
})
