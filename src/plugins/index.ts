/*
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-02-19 10:37:35
 * @lastTime: 2021-02-26 18:17:53
 * @LastAuthor: Do not edit
 * @文件相对于项目的路径: \admin-template\src\plugins\index.ts
 * @Description: 
 */
import {
  Button,
  Form,
  Input,
  InputNumber,
  Menu,
  Tooltip,
  Tabs,
  Layout,
  Dropdown,
  Breadcrumb,
  Avatar
} from 'ant-design-vue';
import { App } from 'vue';

const components = [
  Button,
  Form,
  Input,
  InputNumber,
  Menu,
  Tooltip,
  Tabs,
  Layout,
  Dropdown,
  Breadcrumb,
  Avatar
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
      app.component(component.Divider.name, component.Divider);
    }
    if (component === Input) {
      app.component(component.Password.name, component.Password)
    }
    if (component === Form) {
      app.component(component.Item.name, component.Item)
    }
    if (component === Tabs) {
      app.component(component.TabPane.name, component.TabPane)
    }
    if (component === Layout) {
      app.component(component.Content.name, component.Content)
      app.component(component.Sider.name, component.Sider)
      app.component(component.Header.name, component.Header)
      app.component(component.Footer.name, component.Footer)
    }
    if (component === Breadcrumb) {
      app.component(component.Item.name, component.Item)
      app.component(component.Separator.name, component.Separator)
    }
  });
  
  // plugins.forEach(plugin => {
  //   app.use(plugin)
  // })
}