/*
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-02-19 10:37:35
 * @lastTime: 2021-02-24 18:28:57
 * @LastAuthor: Do not edit
 * @文件相对于项目的路径: \admin-template\src\plugins\index.ts
 * @Description: 
 */
import {
  Button,
  Input,
  Menu,
  Icon,
} from 'ant-design-vue';
import { App } from 'vue';

const components = [
  Button,
  Input,
  Menu,
  Icon,
];



// const plugins = [
// ]



export function registerComp(app: App): void {
  components.forEach(component => {
    app.component(component.name, component);
    if (component === Menu) {
      app.component(component.Item.name, component.Item);
      app.component(component.SubMenu.name, component.SubMenu);
      app.component(component.ItemGroup.name, component.ItemGroup);
    }
  });
  
  // plugins.forEach(plugin => {
  //   app.use(plugin)
  // })
}