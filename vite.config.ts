/*
 * @Date: 2023-03-22 13:17:02
 * @LastEditors: duyad
 * @LastEditTime: 2023-03-22 13:29:59
 * @FilePath: \manager\vite.config.ts
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 8080,
    hmr: true, //热更新
    open: true, //自动打开在浏览器
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
