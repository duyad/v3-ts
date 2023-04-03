/*
 * @Date: 2023-03-31 15:37:16
 * @LastEditors: duyad
 * @LastEditTime: 2023-04-03 15:56:58
 * @FilePath: \manager\src\api\member\member.ts
 */
export type ListMemberParams = {
  page: number;
  pageSize: number;
  name: string;
  total: number;
};

export type AddMemberForm = {
  type: string;
  id: string;
  username: string;
  name: string;
  password: string;
  sex: string;
  phone: number | null;
  idNumber: number | null;
  status: string;
  createTime: string;
  updateTime: string;
  createUser: string;
  updateUser: string;
};
