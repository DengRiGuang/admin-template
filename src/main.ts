/*
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-02-19 09:57:14
 * @lastTime: 2021-04-14 17:55:00
 * @LastAuthor: Do not edit
 * @文件相对于项目的路径: \admin-template\src\main.ts
 * @Description:
 */
import { createApp } from 'vue';
import App from './App.vue';
import './styles/index.less';
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
import 'element-plus/packages/theme-chalk/src/base.scss';

import store from './store';
import router from './router';
import './permission';
const app = createApp(App);
import { registerComp } from './plugins/index';
registerComp(app);
app.use(router).use(store).mount('#app');
