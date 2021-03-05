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
        <el-form ref="editForm" label-width="100px" :model="editForm" label-suffix=":">
          <el-row :gutter="10">

            <el-col :span="23">
              <el-form-item
                label="客户端名称"
                prop="clientName"
                :error="errorForm.clientName"
                :rules="[{required:true,message:'请填写客户端名称',trigger:'blur'}]"
              >
                <el-input v-model="editForm.clientName" placeholder="请填写客户端名称" />
              </el-form-item>
            </el-col>

            <el-col :span="23">
              <el-form-item
                label="客户端编码"
                prop="clientId"
                :error="errorForm.clientId"
                :rules="[{required:true,message:'请填写客户端编码',trigger:'blur'}]"
              >
                <el-input
                  v-model="editForm.clientId"
                  :disabled="!isAdd"
                  placeholder="请填写客户端编码"
                />
              </el-form-item>
            </el-col>

            <el-col :span="23">
              <el-form-item
                label="客户端密码"
                prop="clientSecret"
                :rules="[{required:true,message:'请填写客户端密码',trigger:'blur'},{ min: 10, max: 20, message: '客户端名称长度在 10 到 20 个字符', trigger: 'blur' }]"
                :error="errorForm.clientSecret"
              >
                <el-col :span="20">
                  <el-input
                    v-model="editForm.clientSecret"
                    placeholder="请填写客户端密码"
                  />
                </el-col>
                <el-col :span="4">
                  <el-button
                    icon="el-icon-refresh"
                    @click="generatePassword"
                  />
                </el-col>
              </el-form-item>
            </el-col>

            <el-col :span="23">
              <el-form-item
                label="可访问资源"
                prop="resourceIds"
                :error="errorForm.resourceIds"
              >
                <dict-select
                  v-model="editForm.resourceIds"
                  placeholder="请选择可访问的资源"
                  clearable
                  :dict="['VUE_APP_AUTH_API','sys_resource','name','id']"
                  multiple
                />
              </el-form-item>
            </el-col>

            <el-col :span="23">
              <el-form-item
                label="访问范围"
                prop="scope"
                :error="errorForm.scope"
                :rules="[{required: true,message: '请填写访问范围',trigger: 'change'}]"
              >
                <el-select
                  v-model="editForm.scope"
                  placeholder="请填写访问范围"
                  multiple
                  allow-create
                  filterable
                  default-first-option
                  style="width: 100%"
                />
              </el-form-item>
            </el-col>

            <el-col :span="23">
              <el-form-item
                label="授权类型"
                prop="authorizedGrantTypes"
                :error="errorForm.authorizedGrantTypes"
                :rules="[{required: true,message: '请选择可使用的授权类型',trigger: 'change'}]"
              >
                <dict-select
                  v-model="editForm.authorizedGrantTypes"
                  multiple
                  placeholder="请选择可使用的授权类型"
                  :dict="['VUE_APP_AUTH_API','grant_type']"
                />
              </el-form-item>
            </el-col>

            <el-col :span="23">
              <el-form-item
                label="跳转URL"
                prop="webServerRedirectUri"
                :error="errorForm.webServerRedirectUri"
              >
                <el-input
                  v-model="editForm.webServerRedirectUri"
                  placeholder="请填写认证成功跳转的URL"
                  clearable
                />
              </el-form-item>
            </el-col>

            <el-col :span="23">
              <el-form-item
                label="自动授权"
                prop="autoapprove"
                required
                :error="errorForm.autoapprove"
              >
                <el-select
                  v-model="editForm.autoapprove"
                  placeholder="请选择是否自动确认授权"
                  style="width: 100%"
                >
                  <el-option label="自动授权" value="true" />
                  <el-option label="手动授权" value="false" />
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="footer-container">
        <el-button type="info" @click="dialogVisible=false">取 消</el-button>
        <el-button :loading="submitLoading" type="primary" @click="$confirmData">确 认</el-button>
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
