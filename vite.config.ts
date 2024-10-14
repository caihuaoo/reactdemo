import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cesium from 'vite-plugin-cesium';
import { resolve } from "path";
const pathSrc = resolve(__dirname, "src");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
    ,cesium()
  ],
  resolve: {
    alias: {
      "@/":  `${__dirname}/src/`,
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
})
