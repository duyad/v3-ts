import http from '@/http';
import { AddForm, ListParams } from '@/api/member/member';

export const employeeSave = (parm: AddMemberForm) => {
  return http.post('/employee', parm);
};
// export const logoutApi = () => {
//   return http.post('/employee/logout');
// };
export const employeeApi = (parm: ListMemberParams) => {
  return http.get('/employee/list', parm);
};
// export const deleteCategoryApi = (userId: string) => {
//   return http.delete('/api/category/' + userId);
// };
