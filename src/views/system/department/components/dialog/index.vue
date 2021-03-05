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
            label="所在城市"
            prop="city"
            :error="errorForm.city"
            :rules="[{required:true,message:'请选择所在城市',trigger:'change'}]"
          >
            <el-select
              v-model="editForm.city"
              placeholder="请选择所在城市"
              style="width: 100%"
              @change="_handleEditCity"
            >
              <el-option
                v-for="item in cityList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="22">
          <el-form-item
            label="所属机构"
            prop="organId"
            :error="errorForm.organId"
            :rules="[{required:true,message:'请选择所属机构',trigger:'change'}]"
          >
            <el-select
              v-model="editForm.organId"
              placeholder="请选择所属机构"
              style="width: 100%"
            >
              <el-option
                v-for="item in organList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="22">
          <el-form-item
            label="部门名称"
            prop="name"
            :error="errorForm.name"
            :rules="[{required:true,message:'请填写部门名称',trigger:'blur'}]"
          >
            <el-input v-model="editForm.name" placeholder="请填写部门名称" maxlength="50" />
          </el-form-item>
        </el-col>

        <el-col :span="22">
          <el-form-item
            label="联系人"
            prop="charge"
            :error="errorForm.charge"
            :rules="[{required:true,message:'请填写联系人姓名',trigger:'blur'}]"
          >
            <el-input
              v-model="editForm.charge"
              placeholder="请填写联系人姓名"
              maxlength="10"
            />
          </el-form-item>
        </el-col>

        <el-col :span="22">
          <el-form-item
            label="联系方式"
            prop="phone"
            :error="errorForm.phone"
            :rules="[{required:true,message:'请填写联系方式',trigger:'blur'},{pattern:/^1(3|4|5|6|7|8|9)\d{9}$/,message: '请填写正确的手机号',trigger:'blur'}]"
          >
            <el-input
              v-model="editForm.phone"
              placeholder="请填写联系方式"
              maxlength="11"
            />
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
