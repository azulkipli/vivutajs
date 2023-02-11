import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import Pages from "vite-plugin-pages"
import Layouts from "vite-plugin-vue-layouts"
import timeReporter from "vite-plugin-time-reporter"
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"
import Components from "unplugin-vue-components/vite"
// import AutoImport from "unplugin-auto-import/vite"
import Inspector from "unplugin-vue-inspector/vite" // OR vite-plugin-vue-inspector

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    port: 5151,
  },
  preview: {
    port: 6161,
  },
  // other configuration
  esbuild: {
    pure: mode === "production" ? ["console.log", "console.info", "debug"] : [],
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
    Layouts(),
    Components({
      resolvers: [IconsResolver()],
    }),
    Icons({
      // experimental
      autoInstall: true,
    }),
    timeReporter(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
}))
