/*
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-02-22 10:44:32
 * @lastTime: 2021-03-15 14:03:07
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
    const moduleName = modulePath.match(/([a-z_]+)\.ts$/i)![1]; // !在这个对象后面加一个感叹号 ！ ==> 是not null 的断言操作符，不执行运行时检查，告诉编译器只需要知道这个东西
    modules[moduleName] = modulesFiles[modulePath].default;
  }
}
const store = createStore({
  modules,
  getters,
});
export default store;