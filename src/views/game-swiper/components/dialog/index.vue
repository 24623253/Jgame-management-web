<template>
  <el-dialog
    v-if="dialogVisible"
    :visible.sync="dialogVisible"
    :title="dialogTitle"
    :close-on-click-modal="false"
    width="1100px"
  >
    <el-form
      ref="editForm"
      label-width="100px"
      :model="editForm"
      label-suffix=":"
    >
      <el-row :gutter="10">

        <el-col :span="12">
          <el-form-item
            label="轮播图名称"
            prop="name"
            :error="errorForm.name"
            :rules="[
              { required: true, message: '请填写轮播图名称', trigger: 'blur' },
            ]"
          >
            <el-input
              v-model="editForm.name"
              placeholder="请填写轮播图名称"
              maxlength="10"
            />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item
            label="游戏名称"
            prop="gameName"
            :error="errorForm.gameName"
            :rules="[
              { required: true, message: '请填写游戏名称', trigger: 'change' },
            ]"
          >
            <el-autocomplete
              ref="searchIpt"
              v-model="editForm.gameName"
              value-key="name"
              clearable
              :fetch-suggestions="querySearchAsync"
              placeholder="绑定游戏名称"
              @select="gameNameSelect"
            />
          </el-form-item>

        </el-col>

        <el-col :span="12">
          <el-form-item label="上传轮播图">
            <el-upload
              action=""
              :before-upload="beforeUpload"
              :on-change="getFile"
            >
              <el-button size="small" type="primary" :disabled="fileList.length>0">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传一个jpg/png文件，且不超过500kb</div>
            </el-upload>

            <el-dialog :visible.sync="dialogVisibleImg">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>

            <div class="image-wrapper">
              <el-col v-for="(item, index) in fileList" :key="index" class="image-container" :span="7">
                <!-- TODO:放大待优化 -->
                <!-- <i class="el-icon-zoom-in magnify-icon" @click="handlemagnify(index)" /> -->
                <i class="el-icon-error close-icon" @click="handleRemove(index, 'fileList')" />
                <img :src="item.url" class="img" alt="">
              </el-col>
            </div>
          </el-form-item>
        </el-col>

      </el-row>
    </el-form>

    <el-row slot="footer" class="dialog-footer">
      <el-button type="info" @click="dialogVisible = false">取 消</el-button>
      <el-button
        :loading="submitLoading"
        type="primary"
        @click="$confirmData"
      >确 认</el-button>
    </el-row>
  </el-dialog>
</template>

<script>
import Index from './'

export default Index
</script>
<style scoped lang="scss">
.el-card__body {
  padding: 0;
}

.choose-container-title {
  font-size: 18px;
  font-weight: bold;
}
.image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;

  .image-container {
    position: relative;

    .img {
      width: 100%;
      height: 100%;
    }

    .magnify-icon{
      position: absolute;
      top: -5px;
      right: -5px;
      font-size: 16px;
      color: black;
    }

    .close-icon {
      position: absolute;
      top: -5px;
      right: -5px;
      font-size: 16px;
      color: black;
    }
  }

}

</style>
