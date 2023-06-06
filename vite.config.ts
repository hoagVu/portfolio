import react from '@vitejs/plugin-react'
import path from "path";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import tsconfigPaths from "vite-tsconfig-paths";
console.log(import.meta.url);
export default defineConfig({
  plugins: [react(), eslint(), tsconfigPaths()],
  server: {
    host: "0.0.0.0",
    port: 4000,
    open: true,
    cors: true,
  },
  build: {
    outDir: "dist",
  },
  css: {
    devSourcemap: true,
  },
  resolve: {
    alias: { "@/": `${path.resolve(__dirname, "src")}/` },
  },
});