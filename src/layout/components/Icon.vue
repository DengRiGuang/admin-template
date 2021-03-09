<!--
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-03-09 14:44:37
 * @lastTime: 2021-03-09 14:50:58
 * @LastAuthor: Do not edit
 * @文件相对于项目的路径: \admin-template\src\layout\components\Icon.vue
 * @Description: 菜单栏ICON
-->
<template>
  <component :is="name" :style="style" :class="className"></component>
</template>

<script>
import { defineComponent } from "vue";
import {
  AntDesignOutlined
} from '@ant-design/icons-vue'
export default defineComponent ({
  name: 'DynamicIcon',
  components: {
    AntDesignOutlined
  },
  props: {
    name: {
      type: String,
      default: 'AntDesignOutlined'
    },
    className: {
      type: String,
      default: ''
    },
    style: {
      type: Object,
      default: () => {}
    }
  }
})
</script>