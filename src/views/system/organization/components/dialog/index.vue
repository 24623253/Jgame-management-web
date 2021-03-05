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
              style="width: 100%"
              placeholder="请选择所在城市"
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
            label="机构名称"
            prop="name"
            :error="errorForm.name"
            :rules="[{required:true,message:'请填写机构名称',trigger:'blur'}]"
          >
            <el-input
              v-model="editForm.name"
              placeholder="请填写机构名称"
              maxlength="30"
            />
          </el-form-item>
        </el-col>

        <el-col :span="22">
          <el-form-item
            label="机构性质"
            prop="instProperty"
            :error="errorForm.instProperty"
            :rules="[{required:true,message:'请选择机构性质',trigger:'change'}]"
          >
            <dict-select
              v-model="editForm.instProperty"
              placeholder="请选择机构性质"
              :dict="['VUE_APP_BASE_API','organ_type']"
            />
          </el-form-item>
        </el-col>

        <el-col :span="22">
          <el-form-item
            label="机构代码"
            prop="insCode"
            :error="errorForm.insCode"
            :rules="[{required:true,message:'请填写机构代码',trigger:'blur'}]"
          >
            <el-input
              v-model="editForm.insCode"
              placeholder="请填写机构代码"
              maxlength="30"
            />
          </el-form-item>
        </el-col>

        <el-col :span="22">
          <el-form-item
            label="联系人"
            prop="contactId"
            :error="errorForm.contactId"
            :rules="[{required:true,message:'请填写联系人姓名',trigger:'blur'}]"
          >
            <el-input
              v-model="editForm.contactId"
              placeholder="请填写联系人姓名"
              maxlength="10"
            />
          </el-form-item>
        </el-col>

        <el-col :span="22">
          <el-form-item
            label="联系方式"
            prop="contactPhone"
            :error="errorForm.contactPhone"
            :rules="[{required:true,message:'请填写联系方式',trigger:'blur'},{pattern:/^1(3|4|5|6|7|8|9)\d{9}$/,message: '请填写正确的手机号',trigger:'blur'}]"
          >
            <el-input
              v-model="editForm.contactPhone"
              placeholder="请填写联系方式"
              maxlength="11"
            />
          </el-form-item>
        </el-col>

        <el-col :span="22">
          <el-form-item
            label="省/市/区"
            prop="areaArr"
            :error="errorForm.areaArr"
            :rules="[{required:true,message:'请选择省/市/区',trigger:'change'}]"
          >
            <dict-cascader-area
              v-model="editForm.areaArr"
              placeholder="请选择省/市/区"
              @change="_handleEditAddress"
            />
          </el-form-item>
        </el-col>

        <el-col :span="22">
          <el-form-item
            label="详细地址"
            prop="addrDetail"
            :error="errorForm.addrDetail"
            :rules="[{required:true,message:'请填写详细地址',trigger:'blur'}]"
          >
            <el-input v-model="editForm.addrDetail" placeholder="请填写详细地址" maxlength="50" />
          </el-form-item>
        </el-col>

        <el-col :span="22">
          <el-form-item
            label="备注"
            prop="remark"
            :error="errorForm.remark"
          >
            <el-input
              v-model="editForm.remark"
              type="textarea"
              :rows="5"
              placeholder="备注"
              maxlength="150"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <el-row slot="footer" class="dialog-footer">
      <el-button type="info" @click="dialogVisible=false">取 消</el-button>
      <el-button :loading="submitLoading" type="primary" @click="$confirmData">确 认</el-button>
    </el-row>
  </el-dialog>
</template>

<script>
import Index from './'

export default Index
</script>
