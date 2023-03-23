/*
 * @Date: 2023-03-23 11:14:23
 * @LastEditors: duyad
 * @LastEditTime: 2023-03-23 11:47:19
 * @FilePath: \manager\src\composables\user\useUserTable.ts
 */
import { ListUserParm } from '@/api/user/UserModel';
import { reactive } from 'vue';

export default function useUserTable() {
  const listParm = reactive<ListUserParm>({
    currentPage: 1,
    pageSize: 10,
    name: '',
    phone: '',
  });
  const getList = () => {};
  const searchBtn = () => {};
  const resetBtn = () => {};
  return {
    listParm,
    getList,
    searchBtn,
    resetBtn,
  };
}
