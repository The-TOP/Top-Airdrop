import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import rollupNodePolyFill from "rollup-plugin-node-polyfills";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        sans: ["Exo", "cursive"], // custom font
      },
    },
  },
  plugins: [tailwindcss(), react()],

  define: {
    global: "globalThis", // Required for buffer, process to work
    "process.env": {}, // Prevent build-time failures due to undefined env
  },
  resolve: {
    alias: {
      buffer: path.resolve(__dirname, "node_modules/buffer/"),
      process: path.resolve(__dirname, "node_modules/process/"),
    },
  },
  optimizeDeps: {
    include: ["buffer", "process"],
  },
  build: {
    rollupOptions: {
      plugins: [rollupNodePolyFill()],
    },
  },
});
