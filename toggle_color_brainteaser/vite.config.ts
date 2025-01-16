import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/small_etudes/toggle_color_brainteaser/',
  plugins: [react()],
})
