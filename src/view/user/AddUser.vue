<!--
 * @Date: 2023-03-23 12:00:15
 * @LastEditors: duyad
 * @LastEditTime: 2023-03-23 13:59:26
 * @FilePath: \manager\src\view\user\AddUser.vue
-->
<template>
  <SysDialog
    :title="dialog.title"
    :width="dialog.width"
    :height="dialog.height"
    :visible="dialog.visible"
    @onClose="onClose"
    @onConfirm="commit"
  >
    <template v-slot:content>
      <el-form :model="addModel" ref="addFormRef" :rules="rules" label-width="80px" :inline="false" size="default">
        <el-row :gutter="20">
          <el-col :span="12" :offset="0">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="addModel.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" :offset="0">
            <el-form-item prop="sex">
              <el-radio-group v-model="addModel.sex">
                <el-radio label="1">男</el-radio>
                <el-radio label="2">女</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12" :offset="0">
            <el-form-item label="电话" prop="phone">
              <el-input v-model="addModel.phone"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" :offset="0">
            <el-form-item label="邮箱">
              <el-input v-model="addModel.email"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12" :offset="0">
            <el-form-item label="登录账号" prop="username">
              <el-input v-model="addModel.username"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12" :offset="0">
            <el-form-item label="密码" prop="password">
              <el-input v-model="addModel.password"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </template>
  </SysDialog>
</template>

<script setup lang="ts">
import SysDialog from '@/components/SysDialog.vue';
import useDialog from '@/hooks/useDialog';
import { reactive, ref } from 'vue';
import { UserModel } from '@/api/user/UserModel';
import { FormInstance } from 'element-plus';
import { addUserApi } from '@/api/user/index';
const { dialog, onClose, onConfirm, onShow } = useDialog();
const show = () => {
  dialog.visible = true;
  dialog.height = 160;

  addFormRef.value?.resetFields();
  addModel.email = '';
};
//暴露出去，给父组件调用
defineExpose({
  //把子组件的方法暴露出去
  show,
});
const addFormRef = ref<FormInstance>();
const addModel = reactive<UserModel>({
  userId: '',
  username: '',
  password: '',
  phone: '',
  email: '',
  sex: '1',
  name: '',
});
const rules = reactive({
  name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
  sex: [{ required: true, message: '请选择性别', trigger: 'blur' }],
  phone: [{ required: true, message: '请输入电话', trigger: 'blur' }],
  username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
});

const commit = () => {
  addFormRef.value?.validate(async valid => {
    if (valid) {
      let res = await addUserApi(addModel);
      if (res && res.code == 200) {
        onClose();
      }
    }
  });
};
</script>

<style scoped></style>
