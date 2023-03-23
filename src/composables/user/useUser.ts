/*
 * @Date: 2023-03-23 11:48:27
 * @LastEditors: duyad
 * @LastEditTime: 2023-03-23 12:51:02
 * @FilePath: \manager\src\composables\user\useUser.ts
 */

import { ref } from 'vue';

//增删改
export default function useUser() {
  const addRef = ref<{ show: () => void }>();
  const addBtn = () => {
    addRef.value?.show();
  };
  const editBtn = () => {};
  const deleteBtn = () => {};
  return {
    addBtn,
    editBtn,
    deleteBtn,
    addRef,
  };
}
