import vue from '@vitejs/plugin-vue'
import path from "path"
import { defineConfig } from 'vite'
import ViteComponents from 'vite-plugin-components'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  resolve: {
    alias: {
      '~/*': `${path.resolve(__dirname, 'src')}/*`,
    }
  },
  plugins: [
    vue({include: [/\.vue$/]}),
    Pages({
      extensions: ['vue'],
      pagesDir: [
        { dir: "src/pages", baseRoute: "" },
        { dir: "src/vets/pages", baseRoute: "vets" },
        { dir: "src/admin/pages", baseRoute: "admin" },
      ],
      exclude: ["**/components/*.vue"],
      importMode(path) {
        return path.includes("home") ? "sync" : "async"
      },
      routeBlockLang: ['yaml'], //<route>name: default</route>
    }),
    Layouts(),
    WindiCSS({
      scan: {
        dirs: ['.'], // all files in the cwd
        fileExtensions: ['vue', 'js', 'ts'], // also enabled scanning for js/ts
      },
    }),
    ViteComponents({
      extensions: ['vue'],
      customComponentResolvers: [
        ViteIconsResolver({
          componentPrefix: '',
        }),
      ],
    }),
    ViteIcons()
  ]
})
