<!--
 * @Date: 2023-03-22 15:04:31
 * @LastEditors: duyad
 * @LastEditTime: 2023-03-31 17:04:53
 * @FilePath: \manager\src\view\member\index.vue
-->
<template>
  <div>
    <el-main>
      <el-form :model="ListMemberParams" inline size="default">
        <el-form-item>
          <el-input v-model="ListMemberParams.name" placeholder="请输入分类名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="searchBtn" type="primary" icon="Search">搜索</el-button>
          <el-button @click="resetBtn" type="danger" plain icon="RefreshLeft">重置</el-button>
          <el-button @click="addBtn" type="success" icon="Plus" plain>新增</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="tableList" :height="tableHeight" border stripe style="margin-bottom: 10px">
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="sex" label="性别">
          <template #default="scope">
            <el-tag v-if="scope.row.sex == 1" size="default">男</el-tag>
            <el-tag v-if="scope.row.sex == 2" type="danger" size="default">女</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="username" label="登录账号"></el-table-column>
        <el-table-column prop="phone" label="电话"></el-table-column>
        <el-table-column prop="idNumber" label="身份证号"></el-table-column>
        <el-table-column prop="createTime" label="创建时间"></el-table-column>
        <el-table-column prop="createUser" label="创建人"></el-table-column>
        <el-table-column prop="updateTime" label="更新时间"></el-table-column>
        <el-table-column prop="updateUser" label="更新人"></el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="200px">
          <template #default="scope">
            <el-button type="primary" icon="Edit" size="small" plain @click="editBtn(scope.row)">编辑</el-button>
            <el-button type="danger" icon="Delete" size="small" plain @click="deleteBtn(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @current-change="currentChange"
        :current-page.sync="ListMemberParams.page"
        :page-size="ListMemberParams.pageSize"
        layout="total,  prev, pager, next, jumper"
        :total="ListMemberParams.total"
        background
      >
        :pager-count="7">
      </el-pagination>
    </el-main>
    <Add ref="addRef" @updata-table="getList"></Add>
  </div>
</template>

<script setup lang="ts">
import category from './index';
import Add from './Add.vue';
const {
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
} = category();
</script>

<style scoped></style>
