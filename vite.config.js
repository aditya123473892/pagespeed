import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['your-module-name'], // replace with the actual module name
    },
  },
  plugins: [react()],
})
