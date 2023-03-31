<!--
 * @Date: 2023-03-28 10:23:10
 * @LastEditors: duyad
 * @LastEditTime: 2023-03-28 12:37:27
 * @FilePath: \manager\src\view\category\AddCategory.vue
-->
<template>
  <div>
    <SysDialog
      :title="dialog.title"
      :width="dialog.width"
      :height="dialog.height"
      :visible="dialog.visible"
      @on-close="onClose"
      @on-confirm="commit"
    >
      <template v-slot:content>
        <el-form :model="addModel" ref="addFormRef" :rules="rules" label-width="80px" size="default">
          <el-form-item label="分类名称" prop="categoryName">
            <el-input v-model="addModel.categoryName"></el-input>
          </el-form-item>
          <el-form-item label="分类排序" prop="orderNum">
            <el-input type="number" v-model="addModel.orderNum"></el-input>
          </el-form-item>
        </el-form>
      </template>
    </SysDialog>
  </div>
</template>

<script setup lang="ts">
import SysDialog from '@/components/SysDialog.vue';
import useDialog from '@/hooks/useDialog';
import { EditType, Title } from '@/type/BaseType';
import { CategoryModel } from '@/api/category/CategoryModel';
import { reactive, ref, nextTick } from 'vue';
import { ElMessage, FormInstance } from 'element-plus';
import { addCategoryApi, editCategoryApi } from '@/api/category/index';
import { add } from 'lodash';
const { dialog, onClose, onConfirm, onShow } = useDialog();

//定义新增数据
const addModel = reactive<CategoryModel>({
  type: '',
  categoryId: '',
  categoryName: '',
  orderNum: '',
});
//定义验证规则
const rules = reactive({
  categoryName: [{ required: true, message: '请输入分类名称', trigger: 'blur' }],
  orderNum: [{ required: true, message: '请输入分类排序', trigger: 'blur' }],
});
//定义弹框显示的方法
const show = (type: string, row?: CategoryModel) => {
  dialog.height = 100;
  type == EditType.ADD ? (dialog.title = Title.ADD) : (dialog.title = Title.EDIT);
  addFormRef.value?.resetFields();
  if (row) {
    nextTick(() => {
      Object.assign(addModel, row);
    });
  }
  addModel.type = type;
  onShow();
};
//定义弹框实例
const addFormRef = ref<FormInstance>();
//定义父组件方法
const emists = defineEmits(['UpdataTable']);
//定义弹框确定的方法
const commit = () => {
  addFormRef.value?.validate(async valid => {
    if (valid) {
      let res = null;
      if (addModel.type == EditType.ADD) {
        res = await addCategoryApi(addModel);
      } else {
        res = await editCategoryApi(addModel);
      }
      if (res && res.code == 200) {
        ElMessage.success(res.msg);
        //需要更新数据-调用父组件方法
        emists('UpdataTable');
        onClose();
      }
    }
  });
};
//将子组件的方法暴露出去
defineExpose({
  show,
});
</script>

<style scoped></style>
