import vue from '@vitejs/plugin-vue'
import path from "path"
import { defineConfig } from 'vite'
import ViteComponents from 'vite-plugin-components'
import ViteIcons from 'vite-plugin-icons'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),ViteComponents(),ViteIcons()],
  resolve: {
    alias: {
      "@":path.resolve(__dirname,"/src")
    }
  },
  server: {
    host: "localhost",
    port: 4000,
    open: './index.html',
    fsServe: {strict:true}
  },
  build:{
    sourcemap:true
    },
  json: {
    namedExports: true,
    stringify: true
  }
})
