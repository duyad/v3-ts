/*
 * @Date: 2023-03-23 11:14:23
 * @LastEditors: duyad
 * @LastEditTime: 2023-03-23 15:17:39
 * @FilePath: \manager\src\composables\user\useUserTable.ts
 */
import { ListUserParm } from '@/api/user/UserModel';
import { onMounted, reactive, ref } from 'vue';
import { getListApi } from '@/api/user';
export default function useUserTable() {
  const listParm = reactive<ListUserParm>({
    currentPage: 1,
    pageSize: 10,
    name: '',
    phone: '',
    total: 0,
  });
  const tableList = ref([]);
  const tableHeight = ref(0);
  const getList = async () => {
    let res = await getListApi(listParm);
    if (res && res.code == 200) {
      tableList.value = res.data.records;
      listParm.total = res.data.total;
    }
  };
  const searchBtn = () => {
    getList();
  };
  const resetBtn = () => {
    listParm.currentPage = 1;
    listParm.name = '';
    listParm.phone = '';
    getList();
  };
  const currentChange = (pageSize: number) => {
    listParm.pageSize = pageSize;
    getList();
  };
  onMounted(() => {
    getList();
    tableHeight.value = window.innerHeight - 250;
  });
  return {
    listParm,
    getList,
    searchBtn,
    resetBtn,
    tableList,
    currentChange,
    tableHeight,
  };
}
