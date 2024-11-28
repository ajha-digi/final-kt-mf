import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote_b_app",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: { 
        "./remoteBRouters" : "./src/routes.jsx"
       },
      shared: ["react", "react-dom", "react-router-dom", "react-redux"],
    }),
  ],

  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});