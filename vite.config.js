// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  base: "/", // keep it '/' if deploying at root domain (e.g., paxtostopwatch.netlify.app)
});
