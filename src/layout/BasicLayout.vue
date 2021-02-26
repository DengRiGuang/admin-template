<!--
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-02-25 17:17:02
 * @lastTime: 2021-02-26 15:53:03
 * @LastAuthor: Do not edit
 * @文件相对于项目的路径: \admin-template\src\layout\BasicLayout.vue
 * @Description: 
-->
<template>
  <div class="basic-layout">
    <a-layout style="min-height: 100vh">
      <a-layout-sider v-model:collapsed="collapsed" collapsible>
        <div class="logo" />
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
          <a-menu-item key="1">
            <pie-chart-outlined />
            <span>Option 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <desktop-outlined />
            <span>Option 2</span>
          </a-menu-item>
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                <user-outlined />
                <span>User</span>
              </span>
            </template>
            <a-menu-item key="3">Tom</a-menu-item>
            <a-menu-item key="4">Bill</a-menu-item>
            <a-menu-item key="5">Alex</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span>
                <team-outlined />
                <span>Team</span>
              </span>
            </template>
            <a-menu-item key="6">Team 1</a-menu-item>
            <a-menu-item key="8">Team 2</a-menu-item>
          </a-sub-menu>
          <a-menu-item key="9">
            <file-outlined />
            <span>File</span>
          </a-menu-item>
        </a-menu>
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
            Bill is a cat.
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
import { defineComponent, ref } from 'vue';
import HeaderContainer from '../components/GlobalHeader/index.vue';
import FooterContainter from '../components/GlobalFooter/index.vue';
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
    FooterContainter
  },
  data() {
    return {
      collapsed: ref<boolean>(false),
      selectedKeys: ref<string[]>(['1']),
    };
  },
});
</script>
<style lang="less">
.basic-layout .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}
.basic-layout .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
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
  .global-header-right{
    margin-right: 16px;
  }
}
</style>