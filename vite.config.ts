/*
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-02-19 09:57:14
 * @lastTime: 2021-02-25 17:28:27
 * @LastAuthor: Do not edit
 * @文件相对于项目的路径: \admin-template\vite.config.ts
 * @Description: 
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'comps': resolve(__dirname, 'src/components'),
    },
  },
  server: {
    https: false,
  },
});
