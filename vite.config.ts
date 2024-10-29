import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import cesium from "vite-plugin-cesium";
import { resolve } from "path";
const pathSrc = resolve(__dirname, "src");

export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  const envObject = {};
  for (const key in env) {
    envObject[`import.meta.env.${key.toUpperCase()}`] = JSON.stringify(env[key]);
  }
  
  return {
    plugins: [react(), cesium()],
    resolve: {
      alias: {
        "@/": `${__dirname}/src/`,
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    define: envObject,
  };
});
