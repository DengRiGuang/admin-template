/*
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-02-19 09:57:14
 * @lastTime: 2021-03-01 14:41:50
 * @LastAuthor: Do not edit
 * @文件相对于项目的路径: \admin-template\src\main.ts
 * @Description: 
 */
import { createApp } from 'vue';
import App from './App.vue';
import './styles/index.less';
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';

import store from './store';
import router from './router';
import './permission';
const app = createApp(App);
import { registerComp } from './plugins'
registerComp(app)
app.use(router).use(store).mount('#app');