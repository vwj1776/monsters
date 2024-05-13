import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// vite.config.js
import federation from "@originjs/vite-plugin-federation";
export default defineConfig({
  plugins: [
    federation({
      name: 'dragon-app',
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {
        './WelcomeToDragons': './src/WelcomeToDragons',
      },
      shared: ['react', 'react-dom', 'react-router-dom']
    }),
      react()
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
