<template>
  <el-dialog
    v-if="dialogVisible"
    :visible.sync="dialogVisible"
    :title="dialogTitle"
    :close-on-click-modal="false"
    width="800px"
  >

    <el-form ref="editForm" label-width="100px" :model="editForm" label-suffix=":">
      <el-row :gutter="10">

        <el-col :span="22">
          <el-form-item
            label="原密码"
            prop="source"
            :error="errorForm.source"
            :rules="[{required:true,message:'请填写原密码',trigger:'blur'}]"
          >
            <el-input v-model="editForm.source" type="password" placeholder="请填写原密码" maxlength="20" />
          </el-form-item>
        </el-col>

        <el-col :span="22">
          <el-form-item
            label="新密码"
            prop="target"
            :error="errorForm.target"
            :rules="[{required:true,message:'请填写新密码',trigger:'blur'}]"
          >
            <el-input v-model="editForm.target" type="password" placeholder="请填写新密码" maxlength="20" />
          </el-form-item>
        </el-col>

        <el-col :span="22">
          <el-form-item
            label="确认密码"
            prop="confirmPassword"
            :error="errorForm.confirmPassword"
            :rules="[{validator:confirmPassword ,trigger:'blur'}]"
          >
            <el-input v-model="editForm.confirmPassword" type="password" placeholder="请再次填写新密码" maxlength="20" />
          </el-form-item>
        </el-col>

      </el-row>
    </el-form>

    <el-row slot="footer" class="dialog-footer">
      <el-button type="info" @click="dialogVisible = false">取 消</el-button>
      <el-button :loading="submitLoading" type="primary" @click="$confirmData">确 认</el-button>
    </el-row>
  </el-dialog>
</template>

<script>
import Index from './'

export default Index
</script>
