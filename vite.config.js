import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Layouts from 'vite-plugin-vue-layouts';

// import AutoImport from "unplugin-auto-import/vite"
import Inspector from 'unplugin-vue-inspector/vite' // OR vite-plugin-vue-inspector

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5151,
  },
  plugins: [
    vue(), 
    // AutoImport({ 
    //   include: [
    //     /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
    //     /\.vue$/, /\.vue\?vue/, // .vue
    //     /\.md$/, // .md
    //   ],
    //   eslintrc: {
    //     enabled: true, // <-- this
    //   }, 
    // }),
    Inspector(),
    Pages(),
    Layouts()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
