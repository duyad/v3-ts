<template>
  <el-container class="layout">
    <el-aside width="auto">
      <Menu></Menu>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Menu from './Menu.vue';
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
}
</style>
