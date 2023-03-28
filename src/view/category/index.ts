import { CategoryModel, ListCategoryParm } from '@/api/category/CategoryModel';
import { onMounted, reactive, ref } from 'vue';
import { EditType } from '@/type/BaseType';
import { deleteCategoryApi, getListApi } from '@/api/category/index';
import useInstance from '@/hooks/useInstance';
import { ElMessage } from 'element-plus';
export default function category() {
  //获取全局挂载
  const { global } = useInstance();
  //定义表格自适应高度
  const tableHeight = global.$tableHeight();
  //查询参数
  const ListCategoryParm = reactive<ListCategoryParm>({
    currentPage: 1,
    pageSize: 10,
    categoryName: '',
    total: 0,
  });
  //定义弹框实例
  const addRef = ref<{ show: (type: string, row?: CategoryModel) => void }>();
  //搜索
  const searchBtn = () => {
    getList();
  };
  //重置
  const resetBtn = () => {
    ListCategoryParm.currentPage = 1;
    ListCategoryParm.categoryName = '';
    getList();
  };
  //新增
  const addBtn = () => {
    addRef.value?.show(EditType.ADD);
  };
  //表格编辑
  const editBtn = (row: CategoryModel) => {
    addRef.value?.show(EditType.EDIT, row);
  };
  //表格删除
  const deleteBtn = async (row: CategoryModel) => {
    const confirm = await global.$myconfirm('确定删除该项吗？');
    if (confirm) {
      let res = await deleteCategoryApi(row.categoryId);
      if (res && res.code == 200) {
        ElMessage.success('删除成功');
        getList();
      }
    }
  };
  //表格数据
  const tableList = ref([]);
  //获取表格数据方法
  const getList = async () => {
    let res = await getListApi(ListCategoryParm);
    if (res && res.code == 200) {
      tableList.value = res.data.records;
      ListCategoryParm.total = res.data.total;
    }
  };
  //分页
  const currentChange = (pageSize: number) => {
    ListCategoryParm.pageSize = pageSize;
    getList();
  };
  //mounted
  onMounted(() => {
    getList();
  });
  return {
    ListCategoryParm,
    searchBtn,
    resetBtn,
    addBtn,
    addRef,
    tableList,
    currentChange,
    editBtn,
    deleteBtn,
    getList,
    tableHeight,
  };
}
