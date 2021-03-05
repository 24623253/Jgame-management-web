<template>
  <el-drawer
    v-if="dialogVisible"
    :visible.sync="dialogVisible"
    :title="dialogTitle"
    :wrapper-closable="false"
    size="800px"
  >
    <div class="drawer-container">

      <div class="content-container">
        <table-list
          ref="tableRoleList"
          style="height: 100%;"
          :data="roleList"
          stripe
          border
          :columns="columns"
          :is-selection="true"
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
