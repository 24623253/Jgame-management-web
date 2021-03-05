<template>
  <div class="common-style-table">

    <!-- 列表顶部表单 -->
    <el-row class="search-bar" :gutter="20">
      <el-col :span="4">
        <el-select
          v-model="paramsForm.city"
          placeholder="所在城市"
          style="width: 100%"
          clearable
          @change="_handleEditCity"
        >
          <el-option
            v-for="item in cityList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>

      <el-col :span="4">
        <el-select
          v-model="paramsForm.organId"
          placeholder="所属机构"
          style="width: 100%"
          clearable
        >
          <el-option
            v-for="item in organList"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </el-col>

      <el-col :span="4">
        <el-input v-model="paramsForm.name" placeholder="部门名称" clearable />
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
          @click="$handleData()"
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

      <div slot="action" slot-scope="{ index,record }">
        <el-button type="primary" size="mini" @click="$handleData(record)">修改</el-button>
        <el-button type="danger" size="mini" @click="$handleConfirm(record.id,'此操作将删除该部门，是否继续？')">删除</el-button>
      </div>
    </table-list>

    <modal-dialog ref="modalDialog" :city-list="cityList" @submitOk="$getData" />
  </div>
</template>

<script>
import Index from './index.js'

export default Index
</script>
