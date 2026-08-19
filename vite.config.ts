import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Relative paths allow the same static build to run from a GitHub Pages project URL.
  base: "./",
  plugins: [react()],
});
