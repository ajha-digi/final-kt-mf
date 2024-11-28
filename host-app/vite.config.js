import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "demo_host_app",
      filename: "remoteEntry.js",
      remotes: {
        remote_a_app: "http://localhost:5050/assets/remoteEntry.js",
        remote_b_app: "http://localhost:6060/assets/remoteEntry.js"
      },
      exposes: {},
      shared: ["react", "react-dom", "react-redux", "@reduxjs/toolkit", "react-router-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
