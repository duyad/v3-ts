<!--
 * @Date: 2023-03-28 10:23:10
 * @LastEditors: duyad
 * @LastEditTime: 2023-03-31 16:51:11
 * @FilePath: \manager\src\view\member\Add.vue
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
          <el-row :gutter="20">
            <el-col :span="12" :offset="0">
              <el-form-item label="姓名" prop="name">
                <el-input v-model="addModel.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12" :offset="0">
              <el-form-item label="性别" prop="sex">
                <el-radio-group v-model="addModel.sex">
                  <el-radio label="1">男</el-radio>
                  <el-radio label="2">女</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12" :offset="0">
              <el-form-item label="账号" prop="username">
                <el-input v-model="addModel.username"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12" :offset="0">
              <el-form-item label="电话" prop="phone">
                <el-input type="number" v-model="addModel.phone"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24" :offset="0">
              <el-form-item label="身份证号">
                <el-input type="number" v-model="addModel.idNumber"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </template>
    </SysDialog>
  </div>
</template>

<script setup lang="ts">
import SysDialog from '@/components/SysDialog.vue';
import useDialog from '@/hooks/useDialog';
import { EditType, Title } from '@/type/BaseType';
import { reactive, ref, nextTick } from 'vue';
import { ElMessage, FormInstance } from 'element-plus';
import { AddMemberForm } from '@/api/member/member';
import { employeeSave } from '@/api/member';
const { dialog, onClose, onConfirm, onShow } = useDialog();

//定义新增数据
const addModel = reactive<AddMemberForm>({
  type: '1',
  username: '',
  name: '',
  sex: '1',
  phone: null,
  idNumber: null,
});
//定义验证规则
const rules = reactive({
  name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
  sex: [{ required: true, message: '请选择性别', trigger: 'blur' }],
  phone: [{ required: true, message: '请输入电话', trigger: 'blur' }],
  username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
});
//定义弹框显示的方法
const show = (type: string, row?: AddMemberForm) => {
  dialog.height = 150;
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
        res = await employeeSave(addModel);
      } else {
        res = await employeeSave(addModel);
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
