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
import browserslistToEsbuild from "browserslist-to-esbuild"
import htmlPurge from "vite-plugin-purgecss"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    port: 5151,
    hmr: { overlay: true },
  },
  preview: {
    port: 6161,
  },
  build: {
    target: browserslistToEsbuild(),
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
    Pages({
      routeStyle: "nuxt",
    }),
    Layouts(),
    Components({
      dirs: ["src/components"],
      deep: true,
      directoryAsNamespace: true,
      resolvers: [IconsResolver()],
      exclude: ["src/lazycomponents"],
    }),
    Icons({
      // experimental
      autoInstall: true,
    }),
    htmlPurge({
      paths: ["src/assets/tailwind.css"],
      safelist: [
        "md:w-[500px]",
        "lg:w-[500px]",
        /^!md:/,
        /^!sm:/,
        /^!lg:/,
        /^!xl:/,
        /^!border-/,
        /^!m-/,
        /^!mb-/,
        /^!ml-/,
        /^!mt-/,
        /^!p-/,
        /^!pl-/,
        /^!py-/,
        /^!text-/,
        /^bg-/,
        /^border-/,
        /^bottom-/,
        /^h-/,
        /^leading-/,
        /^left-/,
        /^list-/,
        /^m-/,
        /^max-h-/,
        /^max-w-/,
        /^mb-/,
        /^min-h-/,
        /^min-w-/,
        /^ml-/,
        /^mr-/,
        /^mt-/,
        /^mx-/,
        /^my-/,
        /^p-/,
        /^pb-/,
        /^pl-/,
        /^pr-/,
        /^pt-/,
        /^px-/,
        /^py-/,
        /^right-/,
        /^text-/,
        /^top-/,
        /^!top-/,
        /^tab-/,
        /^tabs-/,
        /^nav-/,
        /^w-/,
        /^w-\[/,
        /^z-/,
        "src/assets/tailwind.css",
        "vti__flag",
        "vti__dropdown-list",
        "vti__dropdown",
        "vti__input",
        "input-tel__label",
      ],
    }),
    timeReporter(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
}))
