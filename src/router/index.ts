/*
 * @Date: 2023-03-22 13:35:16
 * @LastEditors: duyad
 * @LastEditTime: 2023-03-31 14:26:30
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
        path: '/member',
        name: 'member',
        component: () => import('@/view/member/index.vue'),
      },
      {
        path: '/category',
        name: 'category',
        component: () => import('@/view/category/index.vue'),
      },
      {
        path: '/food',
        name: 'food',
        component: () => import('@/view/food/index.vue'),
      },
      {
        path: '/combo',
        name: 'combo',
        component: () => import('@/view/combo/index.vue'),
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('@/view/order/index.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
