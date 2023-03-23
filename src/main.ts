/*
 * @Date: 2023-03-22 13:17:02
 * @LastEditors: duyad
 * @LastEditTime: 2023-03-22 14:15:21
 * @FilePath: \manager\src\main.ts
 */
import { createApp } from 'vue';
// import './style.css'
import router from './router';
import App from './App.vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

// createApp(App).mount('#app');
const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(ElementPlus);
app.use(router).mount('#app');

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
