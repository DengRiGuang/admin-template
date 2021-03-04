/*
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-02-19 09:57:14
 * @lastTime: 2021-03-04 15:06:36
 * @LastAuthor: Do not edit
 * @文件相对于项目的路径: \admin-template\vite.config.ts
 * @Description: 
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import vitePluginImp from 'vite-plugin-imp'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vitePluginImp({
      libList: [
        {
          libName: 'ant-design-vue',
          style(name) {
            return `ant-design-vue/es/${name}/style/index.css`
          }
        }
      ]
    })
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
      'moment',
      '@ant-design/icons-vue'
    ]
  },
  server: {
    https: false,
  },
});
