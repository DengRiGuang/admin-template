<!--
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-02-26 13:29:25
 * @lastTime: 2021-02-26 14:14:28
 * @LastAuthor: Do not edit
 * @文件相对于项目的路径: \admin-template\src\components\SelectLang\index.vue
 * @Description: 
-->
<template>
  <div class="select-lang">
    <a-dropdown>
      <GlobalOutlined class="global-lang" />
      <template #overlay>
        <a-menu selectable>
          <template v-for="(value, key, index) in languageIcons" :key="index">
            <a-menu-item>
              <a href="javascript:;">{{ value }}{{ languagelabels[key] }}</a>
            </a-menu-item>
          </template>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { GlobalOutlined } from '@ant-design/icons-vue'
export default defineComponent({
  name: 'SelectLang',
  components: {
    GlobalOutlined
  },
  setup() {
    const languageIcons = reactive({
      'zh-CN': 'cn',
      'en-US': 'us'
    });
    const languagelabels = reactive({
      'zh-CN': '简体中文',
      'en-US': 'English',
    });
    return {
      languageIcons,
      languagelabels,
    }
  },
});
</script>
<style lang="less">
.global-lang{
  padding: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  vertical-align: middle;
}
</style>