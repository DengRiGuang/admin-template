
/*
* @Author: dengriguang@hnpmct.com
* @since: 2021-02-26 11:52:36
 * @lastTime: 2021-02-26 11:59:18
 * @LastAuthor: Do not edit
 * @文件相对于项目的路径: \admin-template\src\utils\icons.ts
* @Description: 
*/
import type { App } from 'vue';
import * as Icons from '@ant-design/icons-vue';

const filterIcons = ['default', 'createFromIconfontCN', 'getTwoToneColor', 'setTwoToneColor'];

export default (app: App): void => {
  Object.keys(Icons)
    .filter(k  => !filterIcons.includes(k))
    .forEach(k => {
      app.component(Icons[k].displayName, Icons[k]);
    });
};