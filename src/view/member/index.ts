import { ListMemberParams, AddMemberForm } from '@/api/member/member';
import { onMounted, reactive, ref } from 'vue';
import { EditType } from '@/type/BaseType';
import { employeeGet, employeeEdit, employeeGetDelete } from '@/api/member/index';
import useInstance from '@/hooks/useInstance';
import { ElMessage } from 'element-plus';
export default function category() {
  //获取全局挂载
  const { global } = useInstance();
  //定义表格自适应高度
  const tableHeight = global.$tableHeight();
  //查询参数
  const ListMemberParams = reactive<ListMemberParams>({
    page: 1,
    pageSize: 10,
    name: '',
    // total: 0,
  });
  //获取userInfo
  const userInfo = ref(JSON.parse(localStorage.getItem('userInfo')));
  //定义弹框实例
  const addRef = ref<{ show: (type: string, row?: AddMemberForm) => void }>();
  //搜索
  const searchBtn = () => {
    getList();
  };
  //重置
  const resetBtn = () => {
    ListMemberParams.page = 1;
    ListMemberParams.name = '';
    getList();
  };
  //新增
  const addBtn = () => {
    addRef.value?.show(EditType.ADD);
  };
  //改变状态
  const statusChange = async (row: AddMemberForm) => {
    let res = await employeeEdit({
      id: row.id,
      status: row.statusFlag ? 1 : 0,
    });
    if (res && res.code == 200) {
      ElMessage.success('删除成功');
      getList();
    }
  };
  //表格编辑
  const editBtn = (row: AddMemberForm) => {
    addRef.value?.show(EditType.EDIT, row);
  };
  //表格删除
  const deleteBtn = async (row: AddMemberForm) => {
    const confirm = await global.$myconfirm('确定删除该项吗？');
    if (confirm) {
      let res = await employeeGetDelete(row.id);
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
    let res = await employeeGet(ListMemberParams);
    if (res && res.code == 200) {
      res.data.records.map(v => {
        v.statusFlag = v.status == 1 ? true : false;
      });
      tableList.value = res.data.records;
      ListMemberParams.total = res.data.total;
    }
  };
  //分页
  const currentChange = (pageSize: number) => {
    ListMemberParams.pageSize = pageSize;
    getList();
  };
  //mounted
  onMounted(() => {
    getList();
  });
  return {
    ListMemberParams,
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
    userInfo,
    statusChange,
  };
}
