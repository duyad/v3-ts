/*
 * @Date: 2023-03-31 15:37:16
 * @LastEditors: duyad
 * @LastEditTime: 2023-03-31 16:51:16
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
  username: string;
  name: string;
  sex: string;
  phone: number | null;
  idNumber: number | null;
};
