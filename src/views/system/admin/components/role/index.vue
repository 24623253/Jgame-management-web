<template>
  <el-drawer
    v-if="dialogVisible"
    :visible.sync="dialogVisible"
    :title="dialogTitle"
    :wrapper-closable="false"
    size="500px"
  >
    <div class="drawer-container">
      <div class="content-container">
        <el-tree
          ref="tree"
          :data="treeList"
          show-checkbox
          node-key="id"
          check-strictly
          default-expand-all
          :default-checked-keys="checkedList"
          :props="{label: 'name'}"
        />
      </div>
      <div class="footer-container">
        <el-button type="info" @click="dialogVisible=false">取 消</el-button>
        <el-button :loading="submitLoading" type="primary" @click="$confirmNoForm">确 认</el-button>
      </div>
    </div>
  </el-drawer>
</template>

<script>
import Index from './index'

export default Index
</script>
<style scoped lang="scss">
  @import "~@/styles/drawer";
</style>
