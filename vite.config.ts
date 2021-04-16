/*
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-02-19 09:57:14
 * @lastTime: 2021-04-14 18:01:33
 * @LastAuthor: Do not edit
 * @文件相对于项目的路径: \admin-template\vite.config.ts
 * @Description: 
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
// import vitePluginImp from 'vite-plugin-imp';
import styleImport from 'vite-plugin-style-import';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [{
        libraryName: 'element-plus',
        esModule: true,
        ensureStyleFile: true,
        resolveStyle: (name) => {
          name = name.slice(3);
          return `element-plus/packages/theme-chalk/src/${name}.scss`;
        },
        resolveComponent: (name) => {
          return `element-plus/lib/${name}`;
        },
      }],
    }),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      'comps': resolve(__dirname, './src/components'),
    },
  },
  optimizeDeps: {
    include: [
      'vue',
    ],
  },
  server: {
    https: false,
  },
});
