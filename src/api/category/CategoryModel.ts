export type ListCategoryParm = {
  currentPage: number;
  pageSize: number;
  categoryName: string;
  total: number;
};

export type CategoryModel = {
  type: string;
  categoryName: string;
  categoryId: string;
  orderNum: number | string;
};
