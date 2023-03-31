<!--
 * @Date: 2023-03-22 14:34:07
 * @LastEditors: duyad
 * @LastEditTime: 2023-03-31 13:45:39
 * @FilePath: \manager\src\layout\index.vue
-->
<template>
  <el-container class="layout">
    <el-aside width="auto" style="background-color: #343744">
      <Menu></Menu>
    </el-aside>
    <el-container>
      <el-header style="border-bottom: 1px solid #ddd">
        <div class="right-menu">
          <div class="avatar-wrapper">{{ userInfo.name }}</div>
          <img src="./../assets/icons/btn_close@2x.png" class="outLogin" alt="退出" @click="logout" />
        </div>
      </el-header>
      <el-main style="background-color: #f6f3ff">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { logoutApi } from '@/api/login';
import router from '@/router';
import { ElMessage } from 'element-plus';
import { reactive, ref } from 'vue';
import Menu from './Menu.vue';

const userInfo = reactive({
  name: '',
});
Object.assign(userInfo, JSON.parse(localStorage.getItem('userInfo') || '{}'));

const logout = async () => {
  let res = await logoutApi();
  if (res && res.code == 200) {
    ElMessage.success(res.msg);
    localStorage.removeItem('userInfo');
    router.push({ path: '/login' });
  }
};
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  .right-menu {
    float: right;
    display: flex;
    .avatar-wrapper {
      line-height: 60px;
      font-size: 14px;
      cursor: pointer;
    }
    .outLogin {
      width: 30px;
      margin: 15px;
      cursor: pointer;
    }
  }
}
.index-container {
  height: 100% !important;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
}
</style>
