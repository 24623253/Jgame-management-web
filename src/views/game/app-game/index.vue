<template>
  <div class="common-style-table">
    <el-row class="search-bar" :gutter="20">

      <el-col :span="4">
        <el-input v-model="paramsForm.name" placeholder="游戏名称" clearable />
      </el-col>

      <el-col :span="6">
        <el-select v-model="paramsForm.titleId" placeholder="请选择主题" clearable="" style="width:100%">
          <el-option v-for="item in appTitleList" :key="item.id" :label="item.title" :value="item.id" />
        </el-select>
      </el-col>

      <el-col :span="6">
        <el-select v-model="paramsForm.typeId" placeholder="请选择类型" clearable="" style="width:100%">
          <el-option v-for="item in appTypeList" :key="item.id" :label="item.name" :value="item.id" />
        </el-select>
      </el-col>

      <el-col :span="8">
        <el-button
          type="primary"
          icon="el-icon-search"
          :loading="isLoading"
          @click="$getData('search')"
        >查询
        </el-button>

        <el-button
          type="primary"
          :loading="isLoading"
          icon="el-icon-edit"
          @click="$handleData('','modalDialog')"
        >添加
        </el-button>
      </el-col>
    </el-row>

    <table-list
      stripe
      :is-loading="isLoading"
      :data="tableData"
      :columns="columns"
      :page-data="pageData"
      @handlePageData="$changePage"
    >
      <template slot="img" slot-scope="{ record }">
        <img height="100" width="100" :src="baseApi+record.img" alt="">

      </template>

      <template slot="tag" slot-scope="{ record }">
        <el-tag type="success">
          {{ record.tag }}
        </el-tag>
      </template>

      <template slot="action" slot-scope="{ record }">
        <el-button type="primary" size="mini" @click="$handleData(record,'modalDialog')">修改</el-button>

        <el-button type="danger" size="mini" @click="$handleConfirm(record.id,'此操作将删除该条数据，是否继续？')">删除</el-button>
      </template>

    </table-list>

    <modal-dialog ref="modalDialog" :app-title-list="appTitleList" :app-type-list="appTypeList" @submitOk="$getData" />

  </div>
</template>

<script>
import Index from './'

export default Index
</script>
