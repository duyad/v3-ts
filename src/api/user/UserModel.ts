/*
 * @Date: 2023-03-23 11:15:35
 * @LastEditors: duyad
 * @LastEditTime: 2023-03-23 12:59:32
 * @FilePath: \manager\src\api\user\userModel.ts
 */
//type 通常用于定义数据的类型
export type ListUserParm = {
  currentPage: number;
  pageSize: number;
  name: string;
  phone: string;
};

export type UserModel = {
  userId: string;
  username: string;
  password: string;
  phone: string;
  email: string;
  sex: string;
  name: string;
};
