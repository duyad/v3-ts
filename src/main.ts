/*
 * @Date: 2023-03-22 13:17:02
 * @LastEditors: duyad
 * @LastEditTime: 2023-03-24 11:56:45
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
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import myConfirm from './utils/myConfirm';

// createApp(App).mount('#app');
const pinia = createPinia();
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(pinia);
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(router).mount('#app');
app.config.globalProperties.$myconfirm = myConfirm; //挂载在实例上
