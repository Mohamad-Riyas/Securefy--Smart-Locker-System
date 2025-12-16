import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    include: /\.(jsx|js|tsx|ts)$/,
  })],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'build'
  },
  publicDir: 'public',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  }
})

