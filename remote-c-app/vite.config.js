import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote_c_app",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: { 
        "./remoteCRouters" : "./src/routes.jsx"
       },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],

  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});