/*
 * @Date: 2023-03-23 11:48:27
 * @LastEditors: duyad
 * @LastEditTime: 2023-03-24 11:50:41
 * @FilePath: \manager\src\composables\user\useUser.ts
 */

import { UserModel } from '@/api/user/UserModel';
import { EditType, FuncList } from '@/type/BaseType';
import { ref } from 'vue';
import { deleteUserApi } from '@/api/user/index';
import { ElMessage } from 'element-plus';
import useInstance from '@/hooks/useInstance';
//增删改
/**
 * @Date: 2023-03-24 11:50:26
 * @author: duyad
 * @description:
 * @param {FuncList} getList 接收参数的形参
 */
export default function useUser(getList: FuncList) {
  const { global } = useInstance();
  const addRef = ref<{ show: (type: string, row?: UserModel) => void }>();
  const addBtn = () => {
    addRef.value?.show(EditType.ADD);
  };
  const editBtn = (row: UserModel) => {
    addRef.value?.show(EditType.EDIT, row);
  };
  const deleteBtn = async (row: UserModel) => {
    let confirm = await global.$myconfirm('确定删除该项吗？');
    if (confirm) {
      let res = await deleteUserApi(row.userId);
      if (res && res.code == 200) {
        ElMessage.success(res.msg);
        getList();
      }
    }
  };
  return {
    addBtn,
    editBtn,
    deleteBtn,
    addRef,
  };
}
