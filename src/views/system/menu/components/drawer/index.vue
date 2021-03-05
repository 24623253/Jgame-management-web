<template>
  <el-drawer
    v-if="dialogVisible"
    :visible.sync="dialogVisible"
    :title="dialogTitle"
    :wrapper-closable="false"
    size="600px"
  >
    <div class="drawer-container">
      <div class="content-container">
        <el-form ref="editForm" label-width="130px" :model="editForm" label-suffix=":">
          <el-row :gutter="10">

            <el-col :span="23">
              <el-form-item
                label="菜单类型"
                prop="authType"
                required
                :error="errorForm.authType"
              >
                <el-radio-group
                  v-model="editForm.authType"
                  :disabled="!isAdd"
                >
                  <el-radio :label="0">菜单</el-radio>
                  <el-radio :label="1">功能 / 按钮</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>

            <template v-if="editForm.authType === 1">
              <el-col :span="23">
                <el-form-item
                  label="功能名称"
                  prop="name"
                  :error="errorForm.name"
                  :rules="[{required: true, message: '请填写功能名称', trigger: 'blur'}]"
                >
                  <el-input v-model="editForm.name" placeholder="请填写功能名称" />
                </el-form-item>
              </el-col>

              <el-col :span="23">
                <el-form-item
                  label="功能权限代码"
                  prop="authCode"
                  :error="errorForm.authCode"
                >
                  <el-input v-model="editForm.authCode" placeholder="请填写功能权限代码" />
                </el-form-item>
              </el-col>

              <el-col :span="23">
                <el-form-item
                  label="所属菜单"
                  prop="menuId"
                  :error="errorForm.menuId"
                  :rules="[{required: true, message: '请选择所属菜单', trigger: 'change'}]"
                >
                  <dict-cascader
                    v-model="editForm.menuId"
                    :prop="{checkStrictly:true}"
                    placeholder="请选择所属菜单"
                    :dict="['VUE_APP_AUTH_API','sys_menu','title','id','parent_id']"
                  />
                </el-form-item>
              </el-col>
            </template>

            <template v-if="editForm.authType === 0">
              <el-col :span="23">
                <el-form-item
                  label="功能类型"
                  prop="type"
                  required
                  :error="errorForm.type"
                >
                  <el-radio-group
                    v-model="editForm.type"
                    required
                    :disabled="!isAdd"
                  >
                    <el-radio :label="1">一级菜单</el-radio>
                    <el-radio :label="2">子菜单</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>

              <el-col :span="23">
                <el-form-item
                  label="菜单名称"
                  prop="title"
                  :error="errorForm.title"
                  :rules="[{required: true, message: '请填写菜单名称', trigger: 'blur'}]"
                >
                  <el-input v-model="editForm.title" placeholder="请填写菜单名称" />
                </el-form-item>
              </el-col>

              <el-col :span="23">
                <el-form-item
                  label="路由名称"
                  prop="name"
                  :error="errorForm.name"
                  :rules="[{required: true, message: '请填写路由名称', trigger: 'blur'}]"
                >
                  <el-input v-model="editForm.name" placeholder="请填写路由名称" />
                </el-form-item>
              </el-col>

              <el-col :span="23">
                <el-form-item
                  label="菜单路径"
                  prop="path"
                  :error="errorForm.path"
                  :rules="[{required: true, message: '请填写菜单路径', trigger: 'blur'}]"
                >
                  <el-input v-model="editForm.path" placeholder="请填写菜单路径" />
                </el-form-item>
              </el-col>

              <el-col :span="23">
                <el-form-item
                  label="菜单组件"
                  prop="component"
                  :error="errorForm.component"
                  :rules="[{required: true, message: '请填写菜单组件', trigger: 'blur'}]"
                >
                  <el-input v-model="editForm.component" placeholder="请填写菜单组件" />
                </el-form-item>
              </el-col>

              <el-col :span="23">
                <el-form-item
                  label="高亮路由"
                  prop="activeMenu"
                  :error="errorForm.activeMenu"
                >
                  <el-input v-model="editForm.activeMenu" placeholder="请填写高亮路由" />
                </el-form-item>
              </el-col>

              <template v-if="editForm.type === 1">
                <el-col :span="23">
                  <el-form-item
                    label="图标代码"
                    prop="icon"
                    :error="errorForm.icon"
                  >
                    <el-input v-model="editForm.icon" placeholder="请填写图标代码" />
                  </el-form-item>
                </el-col>

                <el-col :span="23">
                  <el-form-item
                    label="默认跳转路径"
                    prop="redirect"
                    :error="errorForm.redirect"
                  >
                    <el-input v-model="editForm.redirect" placeholder="请填写默认跳转路径" />
                  </el-form-item>
                </el-col>

                <el-col :span="23">
                  <el-tooltip
                    content="当菜单下面的子菜单大于1个时，自动会变成嵌套的模式,只有一个时，会将那个子菜单当做根菜单显示在侧边栏,若你想不管路由下面的子菜单声明的个数都显示你的根路由,你可以设置总是显示根路由，这样它就会忽略之前定义的规则，一直显示根路由"
                    placement="bottom"
                    effect="light"
                  >
                    <el-form-item label="总是显示根路由" prop="alwaysShow">
                      <el-switch
                        v-model="editForm.alwaysShow"
                        active-text="是"
                        inactive-text="否"
                        :active-value="true"
                        :inactive-value="false"
                      />
                    </el-form-item>
                  </el-tooltip>
                </el-col>
              </template>

              <template v-if="editForm.type === 2">
                <el-col :span="23">
                  <el-form-item
                    label="上级菜单"
                    prop="parentId"
                    :error="errorForm.parentId"
                    :rules="[{required: true, message: '请选择上级菜单', trigger: 'change'}]"
                  >
                    <dict-cascader
                      v-model="editForm.parentId"
                      :props="{ emitPath:false }"
                      placeholder="请选择上级菜单"
                      :dict="['VUE_APP_AUTH_API','sys_menu','title','id','parent_id']"
                    />
                  </el-form-item>
                </el-col>
              </template>

              <el-col :span="23">
                <el-form-item label="是否隐藏" prop="hidden">
                  <el-switch
                    v-model="editForm.hidden"
                    active-text="是"
                    inactive-text="否"
                    :active-value="true"
                    :inactive-value="false"
                  />
                </el-form-item>
              </el-col>

              <el-col :span="23">
                <el-form-item label="是否缓存" prop="noCache">
                  <el-switch
                    v-model="editForm.noCache"
                    active-text="是"
                    inactive-text="否"
                    :active-value="false"
                    :inactive-value="true"
                  />
                </el-form-item>
              </el-col>

              <el-col :span="23">
                <el-form-item label="固定tags-view" prop="affix">
                  <el-switch
                    v-model="editForm.affix"
                    active-text="是"
                    inactive-text="否"
                    :active-value="true"
                    :inactive-value="false"
                  />
                </el-form-item>
              </el-col>

              <el-col :span="23">
                <el-form-item label="是否隐藏面包导航" prop="breadcrumb">
                  <el-switch
                    v-model="editForm.breadcrumb"
                    active-text="是"
                    inactive-text="否"
                    :active-value="false"
                    :inactive-value="true"
                  />
                </el-form-item>
              </el-col>

              <el-col :span="23">
                <el-form-item label="排序" prop="sortNum">
                  <el-input-number v-model="editForm.sortNum" step-strictly />
                </el-form-item>
              </el-col>
            </template>

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
