<!--
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-02-26 13:31:47
 * @lastTime: 2021-02-26 14:26:20
 * @LastAuthor: Do not edit
 * @文件相对于项目的路径: \admin-template\src\components\GlobalHeader\index.vue
 * @Description: 
-->
<template>
  <div class="global-header-right">
    <avatar-dropdown />
    <select-lang />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AvatarDropdown from '../GlobalHeader/AvatarDropdown.vue';
import SelectLang from '../SelectLang/index.vue';
export default defineComponent ({
  name: 'HeaderContainer',
  components: {
    AvatarDropdown,
    SelectLang
  }
})
</script>
<style lang="less">
.global-header-right {
  display: flex;
  float: right;
  height: 64px;
  line-height: 64px;
  margin-left: auto;
  overflow: hidden;
}
</style>