/*
 * @Date: 2023-03-22 13:35:16
 * @LastEditors: duyad
 * @LastEditTime: 2023-03-31 08:37:18
 * @FilePath: \manager\src\router\index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/view/login/index.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: Layout,
    children: [
      {
        path: '/',
        name: '/',
        component: () => import('@/view/home/index.vue'),
      },
      {
        path: '/banner',
        name: 'banner',
        component: () => import('@/view/banner/index.vue'),
      },
      {
        path: '/category',
        name: 'category',
        component: () => import('@/view/category/index.vue'),
      },
      {
        path: '/comment',
        name: 'comment',
        component: () => import('@/view/comment/index.vue'),
      },
      {
        path: '/goods',
        name: 'goods',
        component: () => import('@/view/goods/index.vue'),
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('@/view/order/index.vue'),
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/view/user/index.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
