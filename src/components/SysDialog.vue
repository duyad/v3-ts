<!--
 * @Date: 2023-03-23 12:06:43
 * @LastEditors: duyad
 * @LastEditTime: 2023-03-31 15:49:01
 * @FilePath: \manager\src\components\SysDialog.vue
-->
<template>
  <div>
    <el-dialog :model-value="visible" :title="title" :width="width + 'px'" append-to-body :before-close="onClose">
      <div class="contanier" :style="{ height: height + 'px' }">
        <slot name="content"></slot>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="danger" @click="onClose">取消</el-button>
          <el-button type="primary" @click="onConfirm">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
//定义参数的类型
interface DialogProps {
  title?: string;
  visible: boolean;
  width?: number;
  height?: number;
}
/**
 * @Date: 2023-03-23 12:10:29
 * @author: duyad
 * @description:
 * withDefaults:指定默认值
 * defineProps：接收父组件传递的参数
 */
const props = withDefaults(defineProps<DialogProps>(), {
  title: '标题',
  visible: false,
  width: 600,
  height: 300,
});
//注册事件
const emits = defineEmits(['onClose', 'onConfirm']);
const onClose = () => {
  emits('onClose');
};
const onConfirm = () => {
  emits('onConfirm');
};
</script>

<style lang="scss">
.container {
  overflow-x: initial;
  overflow-y: auto;
}
.el-dialog {
  border-top-left-radius: 7px !important;
  border-top-right-radius: 7px !important;
  .el-dialog__header {
    margin-right: 0px;
    border-top-left-radius: 7px !important;
    border-top-right-radius: 7px !important;
    background-color: #343744 !important;
    .el-dialog__title {
      color: #fff !important;
      font-size: 16px;
      font-weight: 600;
    }
  }
  .el-dialog__headerbtn {
    .el-dialog__close {
      color: #fff;
    }
  }
  .el-dialog__body {
    padding: 10px;
  }
  .el-dialog__footer {
    border-top: 1px solid #e8eaec !important;
    padding: 10px;
  }
}
</style>
