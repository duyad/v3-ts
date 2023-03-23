import http from '@/http';
import { ListUserParm, UserModel } from './UserModel';

export const addUserApi = (parm: UserModel) => {
  return http.post('/api/user', parm);
};
export const getListApi = (parm: ListUserParm) => {
  return http.get('/api/user/list', parm);
};
