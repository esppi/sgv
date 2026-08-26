import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "::",
    port: 5173,
    proxy: {
      "/api/feed": {
        target: "https://socialgraphventures.substack.com",
        changeOrigin: true,
        rewrite: () => "/feed",
      },
    },
  },
});
