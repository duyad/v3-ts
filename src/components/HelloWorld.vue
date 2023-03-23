<!--
 * @Date: 2023-03-22 13:17:02
 * @LastEditors: duyad
 * @LastEditTime: 2023-03-22 14:32:07
 * @FilePath: \manager\src\components\HelloWorld.vue
-->
<script setup lang="ts">
import { testStore } from '@/store/test/index';
import { computed } from 'vue';
const store = testStore();
const add = () => {
  // store.count++;
  // store.setCount(++store.count);
  // store.$patch({
  //   count: ++store.count,
  // });
  store.$patch((state: { count: number }) => {
    state.count++;
  });
};
const count = computed(() => {
  return store.count;
});
</script>

<template>
  <div>
    <el-row class="mb-4">
      <el-button @click="add" type="primary">Primary</el-button>
    </el-row>
    <div>{{ count }}</div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
