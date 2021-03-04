<!--
 * @Author: dengriguang@hnpmct.com
 * @since: 2021-02-22 10:55:32
 * @lastTime: 2021-02-26 17:35:38
 * @LastAuthor: Do not edit
 * @文件相对于项目的路径: \admin-template\src\views\login\index.vue
 * @Description: 
-->
<template>
  <div class="login-container">
    <a-form class="user-layout-login">
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="账号密码登录">
          <a-form-item v-bind="validateInfos.username">
            <a-input v-model:value="modelRef.username" size="large" placeholder="账户">
              <template #prefix>
                <UserOutlined />
              </template>
              <template #suffix>
                <a-tooltip title="Extra information">
                  <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
                </a-tooltip>
              </template>
            </a-input>
          </a-form-item>
          <a-form-item v-bind="validateInfos.password">
            <a-input-password v-model:value="modelRef.password" size="large" placeholder="密码">
              <template #prefix>
                <LockOutlined />
              </template>
            </a-input-password>
          </a-form-item>
          <a-form-item></a-form-item>
          <a-form-item style="margin-top:24px">
            <a-button
              size="large"
              type="primary"
              html-type="submit"
              class="login-button"
              :loading="state.loginBtn"
              :disabled="state.loginBtn"
              @click.prevent="onSubmit"
            >
              确定
            </a-button>
          </a-form-item>
        </a-tab-pane>
      </a-tabs>
    </a-form>
  </div>
</template>

<script lang="ts">
import { UserOutlined, InfoCircleOutlined, LockOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive, ref } from 'vue';
import { useForm } from '@ant-design-vue/use';
import { setToken } from '@/utils/auth';
import { ACCESS_TOKEN } from '@/config/mutation-types';
import { useRouter } from 'vue-router';
export default defineComponent ({
  components: {
    UserOutlined,
    InfoCircleOutlined,
    LockOutlined,
  },
  setup() {
    const $router = useRouter();
    const modelRef = reactive({
      username: '',
      password: '',
    });
    const rulesRef = reactive({
      username: [
        { required: true, message: '请输入账户名或邮箱地址' },
      ],
      password: [
        { required: true, message: '请输入密码' },
      ],
    });
    const { validate, validateInfos } = useForm(modelRef, rulesRef);
    const onSubmit = () => {
      validate().then(() => {
        setToken(ACCESS_TOKEN, modelRef.username);
        $router.push({ path: '/' });
      });
    };
    const state = reactive({ loginBtn: false });
    
    // tab活动key
    const activeKey = ref('1');

    return { 
      state, 
      activeKey,
      validateInfos,
      modelRef,
      onSubmit,
    };
  },
});
</script>
<style lang="less" scoped>
.login-container{
  min-width: 260px;
  width: 368px;
  margin: 0 auto;
}
.user-layout-login {
  label {
    font-size: 14px;
  }

  .getCaptcha {
    display: block;
    width: 100%;
    height: 40px;
  }

  .forge-password {
    font-size: 14px;
  }

  button.login-button {
    padding: 0 15px;
    font-size: 16px;
    height: 40px;
    width: 100%;
  }

  .user-login-other {
    text-align: left;
    margin-top: 24px;
    line-height: 22px;

    .item-icon {
      font-size: 24px;
      color: rgba(0, 0, 0, 0.2);
      margin-left: 16px;
      vertical-align: middle;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #1890ff;
      }
    }

    .register {
      float: right;
    }
  }
}
</style>