/*
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-02-19 09:57:14
 * @lastTime: 2021-03-11 10:25:07
 * @LastAuthor: Do not edit
 * @文件相对于项目的路径: \admin-template\src\shims-vue.d.ts
 * @Description: 
 */
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}