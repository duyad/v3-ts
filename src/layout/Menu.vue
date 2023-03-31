<!--
 * @Date: 2023-03-22 14:43:47
 * @LastEditors: duyad
 * @LastEditTime: 2023-03-31 13:10:23
 * @FilePath: \manager\src\layout\Menu.vue
-->
<template>
  <div>
    <div class="logo">
      <!-- <img src="images/logo.png" width="122.5" alt="" /> -->
      <img src="./../assets/login/login-logo.png" alt="" style="width: 117px; height: 32px" />
    </div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      router
      background-color="#343744"
      text-color="#bfcbd9"
      active-text-color="#f4f4f5"
      style="border: 0"
    >
      <el-menu-item index="/">
        <el-icon><Menu /></el-icon>
        <template #title>首页</template>
      </el-menu-item>
      <el-menu-item index="/user">
        <el-icon><Menu /></el-icon>
        <template #title>用户管理</template>
      </el-menu-item>
      <el-menu-item index="/category">
        <el-icon><Menu /></el-icon>
        <template #title>菜品分类</template>
      </el-menu-item>
      <el-menu-item index="/goods">
        <el-icon><Memo /></el-icon>
        <template #title>菜品管理</template>
      </el-menu-item>
      <el-menu-item index="/order">
        <el-icon><Monitor /></el-icon>
        <template #title>订单管理</template>
      </el-menu-item>
      <el-menu-item index="/banner">
        <el-icon><Calendar /></el-icon>
        <template #title>广告管理</template>
      </el-menu-item>
      <el-menu-item index="/comment">
        <el-icon><Edit /></el-icon>
        <template #title>评论管理</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import router from '../router';
const route = useRoute();
const activeIndex = computed(() => {
  const { path } = route;
  return path;
});
</script>

<style scoped>
.logo {
  text-align: center;
  background-color: rgb(52, 55, 68);
  /* height: 100px;
  line-height: 100px;
  padding: 12px 5px; */
  padding: 46px 37px 67px 36px;
}
</style>
