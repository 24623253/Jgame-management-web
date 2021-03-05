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
            label="游戏名称"
            prop="name"
            :error="errorForm.name"
            :rules="[
              { required: true, message: '请填写游戏名称', trigger: 'blur' },
            ]"
          >
            <el-input
              v-model="editForm.name"
              placeholder="请填写客户名称"
              maxlength="10"
            />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item
            label="游戏热度"
            prop="heat"
            :error="errorForm.heat"
            :rules="[
              { required: true, message: '请填写游戏热度', trigger: 'blur' },
            ]"
          >
            <el-input
              v-model="editForm.heat"
              type="number"
              placeholder="请填写游戏热度"
              maxlength="10"
            />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item
            label="游戏主题"
            prop="titleId"
            :error="errorForm.titleId"
            :rules="[
              { required: true, message: '请选择游戏主题', trigger: 'blur' },
            ]"
          >
            <!-- <el-input
              v-model="editForm.title"
              placeholder="请填写游戏主题"
              maxlength="10"
            /> -->
            <el-select v-model="editForm.titleId" placeholder="请选择类型" clearable="" style="width:100%">
              <el-option v-for="item in appTitleList" :key="item.id" :label="item.title" :value="item.id" />
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item
            label="游戏类型"
            prop="typeId"
            :error="errorForm.typeId"
            :rules="[
              { required: true, message: '请填写游戏类型', trigger: 'blur' },
            ]"
          >
            <!-- <el-input
              v-model="editForm.type"
              placeholder="请填写游戏类型"
              maxlength="10"
            /> -->
            <el-select v-model="editForm.typeId" placeholder="请选择类型" clearable="" style="width:100%">
              <el-option v-for="item in appTypeList" :key="item.id" :label="item.name" :value="item.id" />
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item
            label="游戏标签"
            prop="tag"
            :error="errorForm.tag"
            :rules="[
              { required: true, message: '请填写游戏标签', trigger: 'blur' },
            ]"
          >
            <el-input
              v-model="editForm.tag"
              placeholder="请填写游戏标签"
              maxlength="10"
            />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item
            label="排行选择"
            prop="ranking"
          >
            <el-select v-model="editForm.ranking" placeholder="请选择类型" clearable="" style="width:100%">
              <el-option :key="0" label="周排行" value="周排行" />
              <el-option :key="1" label="月排行" value="月排行" />
              <el-option :key="2" label="好评榜" value="好评榜" />
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item
            label="网游"
            prop="online"
            :error="errorForm.online"
            :rules="[
              { required: true, message: '是否网游', trigger: 'blur' },
            ]"
          >
            <el-select v-model="editForm.online" placeholder="请选择类型" clearable="" style="width:100%">
              <el-option :key="0" label="否" :value="0" />
              <el-option :key="1" label="是" :value="1" />
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item
            label="游戏大小"
            prop="size"
            :error="errorForm.size"
            :rules="[
              { required: true, message: '请填写游戏大小', trigger: 'blur' },
            ]"
          >
            <el-input
              v-model="editForm.size"
              placeholder="请填写游戏大小"
              maxlength="10"
            />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item
            label="游戏支持"
            prop="support"
            :error="errorForm.support"
            :rules="[
              { required: true, message: '请填写游戏支持', trigger: 'blur' },
            ]"
          >
            <el-select v-model="editForm.support" placeholder="请选择游戏支持" clearable="" style="width:100%">
              <el-option :key="0" label="ANDROID" value="ANDROID" />
              <el-option :key="1" label="IOS" value="IOS" />
              <el-option :key="2" label="ANDROID&IOS" value="ANDROID&IOS" />
              <el-option :key="3" label="PC" value="PC" />
              <el-option :key="4" label="nes" value="nes" />
              <el-option :key="5" label="MAME模拟器" value="MAME模拟器" />
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item
            label="游戏语言"
            prop="language"
            :error="errorForm.language"
            :rules="[
              { required: true, message: '请填写游戏语言', trigger: 'blur' },
            ]"
          >
            <!-- <el-input
              v-model="editForm.language"
              placeholder="请填写游戏支持"
              maxlength="10"
            /> -->
            <el-select v-model="editForm.language" placeholder="请选择游戏语言" clearable="" style="width:100%">
              <el-option :key="0" label="简体中文" value="简体中文" />
              <el-option :key="1" label="英文" value="英文" />
              <el-option :key="2" label="其它" value="其它" />
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item
            label="更新时间"
            prop="updateTime"
            :error="errorForm.updateTime"
            :rules="[
              { required: true, message: '请填写更新时间', trigger: 'blur' },
            ]"
          >
            <!-- <el-input
              v-model="editForm.updateTime"
              placeholder="请填写更新时间"
              maxlength="30"
            /> -->
            <el-date-picker
              v-model="editForm.updateTime"
              type="date"
              format="yyyy-MM-dd"
              value-format="yyyy-MM-dd"
              placeholder="请填写更新时间"
            />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item
            label="当前版本"
            prop="versions"
            :error="errorForm.versions"
            :rules="[
              { required: true, message: '请填写当前版本', trigger: 'blur' },
            ]"
          >
            <el-input
              v-model="editForm.versions"
              placeholder="请填写当前版本"
              maxlength="10"
            />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item
            label="包名"
            prop="pname"
            :error="errorForm.pname"
            :rules="[
              { required: false, message: '请填写包名', trigger: 'blur' },
            ]"
          >
            <el-input
              v-model="editForm.pname"
              placeholder="请填写包名"
              maxlength="50"
            />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item
            label="下载链接"
            prop="href"
            :error="errorForm.href"
            :rules="[
              { required: true, message: '请填写下载链接', trigger: 'blur' },
            ]"
          >
            <el-input
              v-model="editForm.href"
              placeholder="请填写下载链接"
            />
          </el-form-item>
        </el-col>

        <el-col :span="24">
          <el-form-item
            label="游戏介绍"
            prop="introduce"
            :error="errorForm.introduce"
            :rules="[
              { required: true, message: '请填写游戏介绍', trigger: 'blur' },
            ]"
          >
            <el-input
              v-model="editForm.introduce"
              autosize
              type="textarea"
              placeholder="请填写游戏介绍"
              maxlength="200"
            />
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="上传app图标">
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

        <el-col :span="12">
          <el-form-item label="上传轮播图">
            <el-upload
              action=""
              :before-upload="beforeUpload"
              :on-change="getFileSwiperList"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>

            <!-- <el-dialog :visible.sync="dialogVisibleImg">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog> -->

            <div class="image-wrapper">
              <el-col v-for="(item, index) in swiperList" :key="index" class="image-container" :span="7">
                <!-- TODO:放大待优化 -->
                <!-- <i class="el-icon-zoom-in magnify-icon" @click="handlemagnify(index)" /> -->
                <i class="el-icon-error close-icon" @click="handleRemove(index,'swiperList')" />
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
