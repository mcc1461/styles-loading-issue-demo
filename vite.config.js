import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // Plugins should be in an array
  css: {
    postcss: "./postcss.config.js",
  },
});
