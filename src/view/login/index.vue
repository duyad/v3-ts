<!--
 * @Date: 2023-03-30 16:53:33
 * @LastEditors: duyad
 * @LastEditTime: 2023-03-31 13:22:07
 * @FilePath: \manager\src\view\login\index.vue
-->
<template>
  <div class="login" id="login-app">
    <div class="login-box">
      <img src="../../assets/login/login-l.png" alt="" />
      <div class="login-form">
        <el-form ref="FormRef" :model="loginForm" :rules="loginRules">
          <div class="login-form-title">
            <img src="../../assets/login/logo.png" style="width: 139px; height: 42px" alt="" />
          </div>
          <el-form-item prop="username">
            <el-input
              v-model="loginForm.username"
              type="text"
              auto-complete="off"
              placeholder="账号"
              maxlength="20"
              prefix-icon="User"
              @keyup.enter.native="handleLogin"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              type="password"
              placeholder="密码"
              prefix-icon="Lock"
              maxlength="20"
              @keyup.enter.native="handleLogin"
            />
          </el-form-item>
          <el-form-item style="width: 100%">
            <el-button
              :loading="loading"
              class="login-btn"
              type="primary"
              style="width: 100%"
              @click.native.prevent="handleLogin"
            >
              <span v-if="!loading">登录</span>
              <span v-else>登录中...</span>
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LoginForm } from '@/api/login/login';
import { ElMessage, FormInstance } from 'element-plus';
import { computed, reactive, ref } from 'vue';
import { loginApi } from '@/api/login/index';
import router from '@/router';
const loginForm = reactive<LoginForm>({
  username: '',
  password: '',
});
const loading = ref(false);
const FormRef = ref<FormInstance>();
const handleLogin = () => {
  FormRef.value?.validate(async valid => {
    if (valid) {
      try {
        loading.value = true;
        let res = await loginApi(loginForm);
        if (res.code == 200) {
          loading.value = false;
          localStorage.setItem('userInfo', JSON.stringify(res.data));
          router.push({ path: '/' });
        } else {
          ElMessage.success(res.msg);
        }
      } finally {
        loading.value = false;
      }
    }
  });
};
let loginRules = computed(() => {
  const validateUsername = (rule: Object, value: string, callback: any) => {
    if (value.length < 1) {
      callback(new Error('请输入用户名'));
    } else {
      callback();
    }
  };
  const validatePassword = (rule: any, value: any, callback: any) => {
    if (value.length < 6) {
      callback(new Error('密码必须在6位以上'));
    } else {
      callback();
    }
  };
  return {
    username: [{ validator: validateUsername, trigger: 'blur' }],
    password: [{ validator: validatePassword, trigger: 'blur' }],
  };
});
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #333;
}
.login-box {
  width: 1000px;
  height: 474.38px;
  border-radius: 8px;
  display: flex;
}

.login-box img {
  width: 60%;
  height: auto;
}

.title {
  margin: 0px auto 30px auto;
  text-align: center;
  color: #707070;
}
.login-form {
  background: #ffffff;
  width: 40%;
  border-radius: 0px 8px 8px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form .el-form {
  width: 214px;
  height: 307px;
}
.login-form .el-form-item {
  margin-bottom: 30px;
}
.login-form .el-form-item.is-error .el-input__inner {
  border: 0 !important;
  border-bottom: 1px solid #fd7065 !important;
  background: #fff !important;
}
.login-form .input-icon {
  height: 32px;
  width: 18px;
  margin-left: -2px;
}
.login-form .el-input__inner {
  border: 0;
  border-bottom: 1px solid #e9e9e8;
  border-radius: 0;
  font-size: 14px;
  font-weight: 400;
  color: #333333;
  height: 32px;
  line-height: 32px;
}
.login-form .el-input__prefix {
  left: 0;
}
.login-form .el-input--prefix .el-input__inner {
  padding-left: 26px;
}
.login-form .el-input__inner::placeholder {
  color: #aeb5c4;
}
.login-form .el-form-item--medium .el-form-item__content {
  line-height: 32px;
}
.login-form .el-input--medium .el-input__icon {
  line-height: 32px;
}
.login-btn {
  border-radius: 17px;
  padding: 11px 20px !important;
  margin-top: 10px;
  font-weight: 500;
  font-size: 14px;
  border: 0;
  background-color: #ffc200;
}
.login-btn:hover,
.login-btn:focus {
  /* background: #FFC200; */
  /* color: #ffffff; */
}
.login-form-title {
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}
.login-form-title .title-label {
  font-weight: 500;
  font-size: 20px;
  color: #333333;
  margin-left: 10px;
}
</style>
