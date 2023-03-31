<!--
 * @Date: 2023-03-22 14:43:47
 * @LastEditors: duyad
 * @LastEditTime: 2023-03-31 14:27:19
 * @FilePath: \manager\src\layout\Menu.vue
-->
<template>
  <div>
    <div class="logo">
      <!-- <img src="images/logo.png" width="122.5" alt="" /> -->
      <img src="./../assets/login/login-logo.png" alt="" style="width: 117px; height: 32px" />
    </div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeIndex"
        :unique-opened="false"
        :collapse-transition="false"
        background-color="#343744"
        text-color="#bfcbd9"
        active-text-color="#f4f4f5"
        router
      >
        <div v-for="item in menuList" :key="item.id">
          <el-sub-menu v-if="item.children" :index="item.url">
            <template #title>
              <el-icon><component :is="item.icon"></component></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item v-for="sub in item.children" :index="sub.url" :key="sub.id">
              <el-icon>
                <component :is="sub.icon"></component>
              </el-icon>
              <span slot="title">{{ sub.name }}</span>
            </el-menu-item>
          </el-sub-menu>

          <el-menu-item v-else :index="item.url" @click="menuHandle(item, false)">
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </div>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed, ref } from 'vue';
import router from '../router';
const route = useRoute();
const activeIndex = computed(() => {
  const { path } = route;
  return path;
});
const menuHandle = (item: Object, type: boolean) => {};
const menuList = ref([
  {
    id: '1',
    name: '首页',
    url: '/',
    icon: 'House',
    children: null,
  },
  {
    id: '2',
    name: '员工管理',
    url: '/member',
    icon: 'User',
    children: null,
  },
  {
    id: '3',
    name: '分类管理',
    url: '/category',
    icon: 'PieChart',
    children: null,
  },
  {
    id: '4',
    name: '菜品管理',
    url: '/food',
    icon: 'Grid',
    children: null,
  },
  {
    id: '5',
    name: '套餐管理',
    url: '/combo',
    icon: 'Connection',
    children: null,
  },
  {
    id: '6',
    name: '订单明细',
    url: '/order',
    icon: 'Tickets',
    children: null,
  },
]);
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
