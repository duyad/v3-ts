<!--
 * @Date: 2023-03-22 15:04:35
 * @LastEditors: duyad
 * @LastEditTime: 2023-03-23 12:47:50
 * @FilePath: \manager\src\view\user\index.vue
-->
<template>
  <div>
    <el-main>
      <el-form :model="listParm" ref="form" label-width="80px" :inline="true" size="default">
        <el-form-item label="姓名">
          <el-input v-model="listParm.name"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="listParm.phone"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="searchBtn" type="primary" icon="Search">搜索</el-button>
          <el-button @click="resetBtn" icon="RefreshLeft">重置</el-button>
          <el-button @click="addBtn" type="success" icon="Plus" plain>新增</el-button>
        </el-form-item>
      </el-form>
    </el-main>
    <AddUser ref="addRef"></AddUser>
  </div>
</template>

<script setup lang="ts">
import AddUser from './AddUser.vue';
import useUserTable from '@/composables/user/useUserTable';
import useUser from '@/composables/user/useUser';
const { listParm, getList, searchBtn, resetBtn } = useUserTable();
const { addBtn, editBtn, deleteBtn, addRef } = useUser();
</script>

<style scoped></style>
