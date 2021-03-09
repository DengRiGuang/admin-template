<!--
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-02-25 17:17:02
 * @lastTime: 2021-03-09 14:30:38
 * @LastAuthor: Do not edit
 * @文件相对于项目的路径: \admin-template\src\layout\BasicLayout.vue
 * @Description: 
-->
<template>
  <div class="basic-layout">
    <a-layout style="min-height: 100vh">
      <div :class="siderFixed"></div>
      <a-layout-sider v-model:collapsed="collapsed" class="sider-fixed" collapsible>
        <div class="logo" />
        <div style="flex: 1 1 0%; overflow: hidden auto;">
          <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
            <template v-for="item in currentMenu">
              <a-menu-item v-if="!item.children || item.children.length ===0" :key="item.path">
                <router-link :to="item.path">
                  <span>{{ item.name }}</span>
                </router-link>
              </a-menu-item>
              <custom-menu-item v-else :key="item.path" :menu="item"></custom-menu-item>
            </template>
          </a-menu>
        </div>
      </a-layout-sider>
      <a-layout>
        <header class="ant-layout-header" style="height: 64px; line-height: 64px; background: transparent;"></header>
        <a-layout-header class="global-header fixed-header" :style="collapsed ? 'width: calc(100% - 80px);': 'width: calc(100% - 200px);'">
          <div style="flex: 1 1 0%;">
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
            </div>
          <header-container />
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>User</a-breadcrumb-item>
            <a-breadcrumb-item>Bill</a-breadcrumb-item>
          </a-breadcrumb>
          <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
            <router-view />
          </div>
        </a-layout-content>
        <a-layout-footer>
          <footer-containter />
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts">
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { computed, defineComponent, reactive, ref } from 'vue';
import HeaderContainer from 'comps/GlobalHeader/index.vue';
import FooterContainter from 'comps/GlobalFooter/index.vue';
import SubMenu from './components/SubMenu.vue';
import { asyncRouter } from '@/router/index';
import { useRoute } from 'vue-router';
export default defineComponent({
  name: 'BasicLayout',
  components: {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    HeaderContainer,
    FooterContainter,
    'custom-menu-item': SubMenu
  },
  setup() {
    const $route = useRoute()
    const collapsed = ref(false)
    let currentMenu = reactive(asyncRouter)
    const siderFixed = computed(() => {
      return collapsed.value ? 'fold' : 'open'
    })
    // 菜单选中状态，需要跟menu菜单key，绑定同一字段
    const selectedKeys = computed(() => {
      const { path } = $route
      return [path]
    })
    return {
      collapsed,
      currentMenu,
      siderFixed,
      selectedKeys
    }
  },
});
</script>
<style lang="less">
.basic-layout .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: padding .3s cubic-bezier(.645,.045,.355,1);
}
.basic-layout .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: all .3s,padding 0s;
}

.basic-layout .trigger:hover {
  color: #1890ff;
}
.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
.basic-layout{
  .global-header{
    position: relative;
    display: flex;
    align-items: center;
    padding: 0;
    background: #fff;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    &.fixed-header{
      position: fixed;
      top: 0;
      right: 0;
    }
  }
  .open{
    width: 208px;
    overflow: hidden;
    flex: 0 0 208px;
    max-width: 208px;
    min-width: 208px;
  }
  .fold{
    width: 80px;
    overflow: hidden;
    flex: 0 0 80px;
    max-width: 80px;
    min-width: 80px;
  }
  .global-header-right{
    margin-right: 16px;
  }
  .sider-fixed{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    height: 100%;
    overflow: auto;
    overflow-x: hidden;
    box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
  }
}
</style>