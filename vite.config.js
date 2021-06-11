import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { join } from "path"
import ViteComponents from 'vite-plugin-components'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
     ViteComponents()
     ],
  resolve: {
    alias: {
      "~":path.resolve(__dirname,"/src/components"),
      "µ":path.resolve(__dirname,"/src/views"),
    },
  },
  server: {
    host: "localhost",
    port: 4000,
    open: './index.html',
    fsServe: {strict:true},
  },
  build:{
    sourcemap:true
    },
  json: {
    namedExports: true,
    stringify: true
  },
});
