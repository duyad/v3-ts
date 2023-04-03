<!--
 * @Date: 2023-03-22 15:04:31
 * @LastEditors: duyad
 * @LastEditTime: 2023-04-03 13:49:24
 * @FilePath: \manager\src\view\category1\index.vue
-->
<template>
  <div>
    <el-main>
      <el-form :model="ListCategoryParm" inline size="default">
        <el-form-item>
          <el-input v-model="ListCategoryParm.categoryName" placeholder="请输入分类名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="searchBtn" type="primary" icon="Search">搜索</el-button>
          <el-button @click="resetBtn" type="danger" plain icon="RefreshLeft">重置</el-button>
          <el-button @click="addBtn" type="success" icon="Plus" plain>新增</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="tableList" :height="tableHeight" border stripe style="margin-bottom: 10px">
        <el-table-column prop="orderNum" label="分类序号"></el-table-column>
        <el-table-column prop="categoryName" label="分类名称"></el-table-column>
        <el-table-column fixed="right" label="操作" align="center">
          <template #default="scope">
            <el-button type="primary" icon="Edit" size="small" plain @click="editBtn(scope.row)">编辑</el-button>
            <el-button type="danger" icon="Delete" size="small" plain @click="deleteBtn(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @current-change="currentChange"
        :current-page.sync="ListCategoryParm.currentPage"
        :page-size="ListCategoryParm.pageSize"
        layout="total,  prev, pager, next, jumper"
        :total="ListCategoryParm.total"
        background
      ></el-pagination>
    </el-main>
    <AddCategory ref="addRef" @updata-table="getList"></AddCategory>
  </div>
</template>

<script setup lang="ts">
import category from './index';
import AddCategory from './AddCategory.vue';
const {
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
} = category();
</script>

<style scoped></style>
