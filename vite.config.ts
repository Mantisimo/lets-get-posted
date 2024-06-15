import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@core": path.resolve(__dirname, "./src/core"),
      "@icons": path.resolve(__dirname, "./src/components/icons"),
      "@config": path.resolve(__dirname, "./src/core/consts/index.ts"),
    },
  },
});
