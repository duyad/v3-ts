/*
 * @Date: 2023-03-22 13:17:02
 * @LastEditors: duyad
 * @LastEditTime: 2023-03-31 10:51:54
 * @FilePath: \manager\vite.config.ts
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path, { resolve } from 'path';
import { tr } from 'element-plus/es/locale';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 8080,
    hmr: true, //热更新
    open: true, //自动打开在浏览器
    proxy: {
      '/api': {
        target: 'http://localhost:3300',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
    ],
  },
});
