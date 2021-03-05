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
        <el-form
          ref="editForm"
          label-width="100px"
          :model="editForm"
          label-suffix=":"
        >
          <el-row :gutter="10">
            <el-col :span="23">
              <el-form-item
                label="主题名称"
                prop="title"
                :error="errorForm.title"
                :rules="[
                  { required: true, message: '请填写主题名称', trigger: 'blur' },
                ]"
              >
                <el-input v-model="editForm.title" placeholder="请填写主题名称" />
              </el-form-item>
            </el-col>

            <el-col :span="23">
              <el-form-item
                label="主题备注"
                prop="remark"
                :error="errorForm.remark"
                :rules="[
                  { required: true, message: '请填写主题备注', trigger: 'blur' },
                ]"
              >
                <el-input
                  v-model="editForm.remark"
                  placeholder="请填写主题备注"
                />
              </el-form-item>
            </el-col>

          </el-row>
        </el-form>

        <div class="footer-container">
          <el-button
            type="info"
            @click="dialogVisible = false"
          >取 消</el-button>
          <el-button
            :loading="submitLoading"
            type="primary"
            @click="$confirmData"
          >确 认</el-button>
        </div>
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
