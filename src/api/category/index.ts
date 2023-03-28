/*
 * @Date: 2023-03-28 11:03:00
 * @LastEditors: duyad
 * @LastEditTime: 2023-03-28 11:44:38
 * @FilePath: \manager\src\api\category\index.ts
 */
import http from '@/http';
import { ListCategoryParm, CategoryModel } from './CategoryModel';

export const addCategoryApi = (parm: CategoryModel) => {
  return http.post('/api/category', parm);
};
export const editCategoryApi = (parm: CategoryModel) => {
  return http.put('/api/category', parm);
};
export const getListApi = (parm: ListCategoryParm) => {
  return http.get('/api/category/list', parm);
};
export const deleteCategoryApi = (userId: string) => {
  return http.delete('/api/category/' + userId);
};
