/*
 * @Date: 2023-03-23 12:34:15
 * @LastEditors: duyad
 * @LastEditTime: 2023-03-23 12:52:18
 * @FilePath: \manager\src\hooks\useDialog.ts
 */

import { reactive } from 'vue'; //定义负责类型的响应式数据 ref：定义简单、基础数据类型的响应式数据
export default function useDialog() {
  //定义弹框属性
  const dialog = reactive({
    title: '标题',
    visible: false,
    width: 600,
    height: 300,
  });
  //关闭
  const onClose = () => {
    dialog.visible = false;
  };
  //确定
  const onConfirm = () => {
    dialog.visible = false;
  };
  //显示
  const onShow = () => {
    dialog.visible = true;
  };

  return {
    dialog,
    onClose,
    onConfirm,
    onShow,
  };
}
