/*
 * @Date: 2023-03-31 15:35:14
 * @LastEditors: duyad
 * @LastEditTime: 2023-04-03 16:05:44
 * @FilePath: \manager\src\api\member\index.ts
 */
import http from '@/http';
import { AddForm, ListMemberParams } from '@/api/member/member';
import { pa } from 'element-plus/es/locale';

export const employeeSave = (parm: AddMemberForm) => {
  return http.post('/employee', parm);
};
export const employeeEdit = (parm: AddMemberForm) => {
  return http.put('/employee', parm);
};
export const employeeGet = (parm: ListMemberParams) => {
  return http.get('/employee/list', parm);
};
// export const deleteCategoryApi = (userId: string) => {
//   return http.delete('/api/category/' + userId);
// };
