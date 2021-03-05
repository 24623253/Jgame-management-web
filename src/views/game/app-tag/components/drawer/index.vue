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
                label="姓名"
                prop="name"
                :error="errorForm.name"
                :rules="[
                  { required: true, message: '请填写姓名', trigger: 'blur' },
                ]"
              >
                <el-input v-model="editForm.name" placeholder="请填写姓名" />
              </el-form-item>
            </el-col>

            <el-col :span="23">
              <el-form-item
                label="用户名"
                prop="username"
                :error="errorForm.username"
                :rules="[
                  { required: true, message: '请填写用户名', trigger: 'blur' },
                ]"
              >
                <el-input
                  v-model="editForm.username"
                  :disabled="!isAdd"
                  placeholder="请填写用户名"
                />
              </el-form-item>
            </el-col>

            <el-col :span="23">
              <el-form-item
                label="密码"
                prop="password"
                :error="errorForm.password"
                :rules="[
                  { required: true, message: '请填写密码', trigger: 'blur' },
                ]"
              >
                <el-input
                  v-model="editForm.password"
                  type="password"
                  :disabled="!isAdd"
                  placeholder="请填写密码"
                />
              </el-form-item>
            </el-col>

            <!-- <el-col :span="23">
              <el-form-item
                label="账户类型"
                prop="type"
                :error="errorForm.type"
                :rules="[
                  {
                    required: true,
                    message: '请选择账户类型',
                    trigger: 'change',
                  },
                ]"
              >
                <dict-select
                  v-model="editForm.type"
                  placeholder="请选择账户类型"
                  :clearable="false"
                  :dict="['VUE_APP_AUTH_API', 'account_type']"
                />
              </el-form-item>
            </el-col> -->

            <!-- <el-col :span="23">
              <el-form-item
                label="绑定部门"
                prop="deptId"
                :rules="[
                  {
                    required: true,
                    message: '请选择绑定部门',
                    trigger: 'change',
                  },
                ]"
              >
                <el-select v-model="editForm.deptId" style="width: 100%" placeholder="请选择绑定部门">
                  <el-option
                    v-for="item in departmentList"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  />
                </el-select>
              </el-form-item>
            </el-col> -->
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
