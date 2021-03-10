<!--
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-02-19 09:57:14
 * @lastTime: 2021-03-10 17:10:18
 * @LastAuthor: Do not edit
 * @文件相对于项目的路径: \admin-template\src\App.vue
 * @Description: 
-->
<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>
#app {
  height: 100%;
}
body,
html {
  width: 100%;
  height: 100%;
}
body {
  margin: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC,
    Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  font-variant: tabular-nums;
  line-height: 1.5;
  background-color: #fff;
  -webkit-font-feature-settings: 'tnum';
  font-feature-settings: 'tnum';
}
</style>
