import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote_a_app",
      filename: "remoteEntry.js",
      remotes: {
        remote_c_app : "http://localhost:7071/assets/remoteEntry.js"
      },
      exposes: {
        "./remoteARouts" : "./src/routes.jsx"
      },
      shared: ["react", "react-dom", "react-redux", "react-router-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
