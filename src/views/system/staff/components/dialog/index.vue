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
              @change="_handleEditOrgan"
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
            label="所属部门"
            prop="deptId"
            :error="errorForm.deptId"
            :rules="[{required:true,message:'请选择所属部门',trigger:'change'}]"
          >
            <el-select
              v-model="editForm.deptId"
              placeholder="请选择所属部门"
              style="width: 100%"
            >
              <el-option
                v-for="item in deptList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="22">
          <el-form-item
            label="员工姓名"
            prop="name"
            :error="errorForm.name"
            :rules="[{required:true,message:'请填写员工名称',trigger:'blur'}]"
          >
            <el-input v-model="editForm.name" placeholder="请填写员工名称" maxlength="10" />
          </el-form-item>
        </el-col>

        <el-col :span="22">
          <el-form-item
            label="性别"
            prop="gender"
            :error="errorForm.gender"
            :rules="[{required:true,message:'请选择性别',trigger:'change'}]"
          >
            <dict-select
              v-model="editForm.gender"
              placeholder="请选择性别"
              :dict="['VUE_APP_AUTH_API','user_gender']"
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

        <el-col :span="22">
          <el-form-item
            label="身份证号"
            prop="cardId"
            :error="errorForm.cardId"
            :rules="[{required:true,message:'请填写身份证号', trigger:'blur'},
                     {pattern:/^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,message:'请填写正确的身份证号', trigger:'blur'}]"
          >
            <el-input v-model="editForm.cardId" placeholder="请填写身份证号" maxlength="18" />
          </el-form-item>
        </el-col>

        <el-col :span="22">
          <el-form-item
            label="民族"
            prop="folk"
            :error="errorForm.folk"
            :rules="[{required:true,message:'请选择民族',trigger:'change'}]"
          >
            <dict-select
              v-model="editForm.folk"
              placeholder="请选择民族"
              :dict="['VUE_APP_AUTH_API','mz_type']"
            />
          </el-form-item>
        </el-col>

        <el-col :span="22">
          <el-form-item
            label="入职时间"
            prop="enrollment"
            :error="errorForm.enrollment"
            :rules="[{required:true,message:'请选择入职时间',trigger:'change'}]"
          >
            <el-date-picker
              v-model="editForm.enrollment"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="请选择入职时间"
              style="width: 100%"
              :clearable="false"
            />
          </el-form-item>
        </el-col>

        <el-col :span="22">
          <el-form-item
            label="职务"
            prop="occupation"
            :error="errorForm.occupation"
            :rules="[{required:true,message:'请填写职务',trigger:'blur'}]"
          >
            <el-input v-model="editForm.occupation" placeholder="请填写职务" maxlength="20" />
          </el-form-item>
        </el-col>

        <el-col :span="22">
          <el-form-item
            label="家庭住址"
            prop="livingAddress"
            :error="errorForm.livingAddress"
          >
            <el-input v-model="editForm.livingAddress" placeholder="请填写家庭住址" maxlength="50" />
          </el-form-item>
        </el-col>

        <el-col :span="22">
          <el-form-item
            label="汇报部门"
            prop="reportDeptId"
            :error="errorForm.reportDeptId"
          >
            <el-select
              v-model="editForm.reportDeptId"
              placeholder="请选择汇报部门"
              style="width: 100%"
              clearable
              @change="_handleEditDept"
            >
              <el-option
                v-for="item in deptList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="22">
          <el-form-item
            label="汇报对象"
            prop="reportPersonId"
            :error="errorForm.reportPersonId"
          >
            <el-select
              v-model="editForm.reportPersonId"
              placeholder="请填写汇报对象"
              style="width: 100%"
              clearable
            >
              <el-option
                v-for="item in staffList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="22">
          <el-form-item
            label="员工状态"
            prop="onPost"
            :error="errorForm.onPost"
            :rules="[{required:true,message:'请选择员工状态',trigger:'change'}]"
          >
            <el-select
              v-model="editForm.onPost"
              style="width: 100%"
              placeholder="请选择员工状态"
            >
              <el-option label="在职" :value="true" />
              <el-option label="离职" :value="false" />
            </el-select>
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
