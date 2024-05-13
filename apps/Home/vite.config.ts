import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// vite.config.js
import federation from "@originjs/vite-plugin-federation";
export default defineConfig({
  plugins: [
    federation({
      name: 'host-app',
      remotes: {
        dragon_app: "http://localhost:3110/assets/remoteEntry.js",
        monster_app: "http://localhost:3120/assets/remoteEntry.js",
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
