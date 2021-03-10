<!--
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-02-26 14:15:09
 * @lastTime: 2021-02-26 14:51:06
 * @LastAuthor: Do not edit
 * @文件相对于项目的路径: \admin-template\src\components\GlobalHeader\AvatarDropdown.vue
 * @Description: 
-->
<template>
  <div class="avatar-dropdown">
    <a-dropdown overlay-class-name="avatar-dropdown" placement="bottomCenter">
      <span class="account-avatar">
        <a-avatar size="small" src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" class="antd-pro-global-header-index-avatar" />
        <span class="avatar-name">{{ currentUser.name }}</span>
      </span>
      <template #overlay>
        <a-menu>
          <a-menu-item><UserOutlined />个人中心</a-menu-item>
          <a-menu-item><SettingOutlined />个人设置</a-menu-item>
          <a-menu-divider />
          <a-menu-item><LogoutOutlined />退出登录</a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { 
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue';
export default defineComponent({
  name: 'AvatarDropdown',
  components: {
    UserOutlined,
    LogoutOutlined,
    SettingOutlined,
  },
  setup() {
    const currentUser = reactive({
      name: 'Serati Ma',
    });
    return {
      currentUser,
    };
  },
});
</script>

<style lang="less">
.avatar-dropdown{
  padding: 0 12px;
  cursor: pointer;
  .avatar-name{
    margin-left: 8px;
  }
  .account-avatar{
    display: inline-block;
    height: 100%;
  }
}
</style>