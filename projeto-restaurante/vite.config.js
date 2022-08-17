import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@componentes': path.resolve(__dirname, './src/componentes'),
      '@services': path.resolve(__dirname, './src/services'),
    },
  },
  plugins: [react()]
})

