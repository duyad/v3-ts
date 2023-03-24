/*
 * @Date: 2023-03-24 08:40:46
 * @LastEditors: duyad
 * @LastEditTime: 2023-03-24 09:02:49
 * @FilePath: \manager\src\utils\myConfirm.ts
 */
import { ElMessageBox } from 'element-plus';
/**
 * @Date: 2023-03-24 08:43:05
 * @author: duyad
 * @description:
 * text:提示内容
 */
export default function myConfirm(text: string) {
  return new Promise((resolve, reject) => {
    ElMessageBox.confirm(text, '系统提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    })
      .then(() => {
        resolve(true);
      })
      .catch(() => {
        reject(false);
      });
  }).catch(() => {
    return false;
  });
}
