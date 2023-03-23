/*
 * @Date: 2023-03-22 14:15:57
 * @LastEditors: duyad
 * @LastEditTime: 2023-03-22 14:21:56
 * @FilePath: \manager\src\store\test\index.ts
 */
import { defineStore } from 'pinia';
/**
 * @Date: 2023-03-22 14:17:40
 * @author: duyad
 * @description: defintStore 第一个参数id,唯一
 */
export const testStore = defineStore('testStore', {
  state: () => {
    return {
      count: 0,
    };
  },
  getters: {
    gerCount(state) {
      return state.count;
    },
  },
  actions: {
    setCount(count: number) {
      this.count = count;
    },
  },
});
