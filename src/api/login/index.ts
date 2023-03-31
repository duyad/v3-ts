import http from '@/http';
import { LoginForm } from './login';

export const loginApi = (parm: LoginForm) => {
  return http.post('/employee/login', parm);
};
export const logoutApi = () => {
  return http.post('/employee/logout');
};
// export const getListApi = (parm: ListCategoryParm) => {
//   return http.get('/api/category/list', parm);
// };
// export const deleteCategoryApi = (userId: string) => {
//   return http.delete('/api/category/' + userId);
// };
