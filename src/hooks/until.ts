/*
 * @Date: 2023-03-28 12:07:21
 * @LastEditors: duyad
 * @LastEditTime: 2023-03-28 12:10:29
 * @FilePath: \manager\src\hooks\until.ts
 */
/**
 * @Date: 2023-03-28 12:09:52
 * @author: duyad
 * @description: 获取表格自适应高度
 * @param {*} height 当前页面需要减去的高度
 */
export function getTableHeight(height: number) {
  let tableHeight = 0;
  if (height) {
    tableHeight = window.innerHeight - height;
  } else {
    tableHeight = window.innerHeight - 250;
  }
  return tableHeight;
}
