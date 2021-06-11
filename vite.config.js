import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { join } from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
"@":path.resolve(__dirname,"/src/components"),
"µ":path.resolve(__dirname,"/src/views"),
    },
  },
});
