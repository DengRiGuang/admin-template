/*
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-02-22 10:44:32
 * @lastTime: 2021-03-15 13:50:01
 * @LastAuthor: Do not edit
 * @文件相对于项目的路径: \admin-template\src\store\index.ts
 * @Description: 
 */
import { createStore } from 'vuex';
import getters from './getters';

let modulesFiles = import.meta.globEager('./modules/*.ts');

const modules: any = {};
for (const modulePath in modulesFiles) {
  if (modulePath) {
    const moduleName = modulePath.match(/([a-z_]+)\.ts$/i)![1];
    modules[moduleName] = modulesFiles[modulePath].default;
  }
}
const store = createStore({
  modules,
  getters,
});
export default store;