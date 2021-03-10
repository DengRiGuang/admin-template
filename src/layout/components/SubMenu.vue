<!--
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-03-09 13:56:55
 * @lastTime: 2021-03-09 16:02:58
 * @LastAuthor: Do not edit
 * @文件相对于项目的路径: \admin-template\src\layout\components\SubMenu.vue
 * @Description: 
-->
<template>
  <a-sub-menu :key="menu.path" v-bind="$attrs">
    <template #title>
      <router-link :to="menu.path" class="router-link-exact-active">
        <icon :name="menu.meta.icon" />
        <span>{{ menu.name }}</span>
      </router-link>
    </template>
    <template v-for="item in menu.children">
      <a-menu-item v-if="!item.children || item.children.length ===0" :key="item.path">
        <router-link :to="item.path" class="router-link-exact-active">
          <icon :name="item.meta.icon" />
          <span>{{ item.name }}</span>
        </router-link>
      </a-menu-item>
      <custom-menu-item v-else :key="item.path" :menu="item"></custom-menu-item>
    </template>
  </a-sub-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Icon from './Icon.vue';
export default defineComponent ({
  name: 'CustomMenuItem',
  components: {
    Icon,
  },
  props: {
    menu: {
      type: Object,
      default: () => ({}),
    },
  },
});
</script>

<style>

</style>