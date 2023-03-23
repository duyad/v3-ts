<!--
 * @Date: 2023-03-22 14:43:47
 * @LastEditors: duyad
 * @LastEditTime: 2023-03-22 15:15:55
 * @FilePath: \manager\src\layout\Menu.vue
-->
<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" router>
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
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
