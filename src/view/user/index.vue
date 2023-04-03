<!--
 * @Date: 2023-03-22 15:04:35
 * @LastEditors: duyad
 * @LastEditTime: 2023-04-03 13:49:16
 * @FilePath: \manager\src\view\user\index.vue
-->
<template>
  <div>
    <el-main>
      <el-form :model="listParm" ref="form" label-width="80px" :inline="true" size="default">
        <el-form-item>
          <el-input v-model="listParm.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="listParm.phone" placeholder="请输入电话"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="searchBtn" type="primary" icon="Search">搜索</el-button>
          <el-button @click="resetBtn" type="danger" plain icon="RefreshLeft">重置</el-button>
          <el-button @click="addBtn" type="success" icon="Plus" plain>新增</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="tableList" border stripe :height="tableHeight" style="margin-bottom: 10px">
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="sex" label="性别">
          <template #default="scope">
            <el-tag v-if="scope.row.sex == 1" size="default">男</el-tag>
            <el-tag v-if="scope.row.sex == 2" type="danger" size="default">女</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="phone" label="电话"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="username" label="登录账号"></el-table-column>
        <el-table-column fixed="right" label="操作" align="center">
          <template #default="scope">
            <el-button type="primary" icon="Edit" size="small" plain @click="editBtn(scope.row)">编辑</el-button>
            <el-button type="danger" icon="Delete" size="small" plain @click="deleteBtn(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @current-change="currentChange"
        :current-page.sync="listParm.currentPage"
        :page-size="listParm.pageSize"
        layout="total,  prev, pager, next, jumper"
        :total="listParm.total"
        background
      ></el-pagination>
    </el-main>
    <AddUser ref="addRef" @onFresh="getList"></AddUser>
  </div>
</template>

<script setup lang="ts">
import AddUser from './AddUser.vue';
import useUserTable from '@/composables/user/useUserTable';
import useUser from '@/composables/user/useUser';
const { listParm, getList, searchBtn, resetBtn, tableList, currentChange, tableHeight } = useUserTable();
const { addBtn, editBtn, deleteBtn, addRef } = useUser(getList); //getList：传递的参数
</script>

<style scoped></style>
