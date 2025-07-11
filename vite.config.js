import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import nodePolyfills from "rollup-plugin-node-polyfills";
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
    global: "globalThis",
  },
  resolve: {
    alias: {
      buffer: "buffer",
    },
  },
  optimizeDeps: {
    include: ["buffer"],
  },
  build: {
    rollupOptions: {
      plugins: [nodePolyfills()],
    },
  },
});
