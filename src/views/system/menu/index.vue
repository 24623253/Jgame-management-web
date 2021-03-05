<template>
  <div class="common-style-table">
    <el-row class="search-bar" :gutter="20">
      <el-col>
        <el-button
          type="primary"
          :loading="isLoading"
          icon="el-icon-edit"
          @click="$handleData('','modalDrawer')"
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
      row-key="id"
      :is-numerical="false"
      :is-lazy="true"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      @handlePageData="$changePage"
    >

      <template slot="type" slot-scope="{ index,record }">
        <el-tag :type="record.authType === 0?'success':'warning'">
          {{ record.authTypeText }}
        </el-tag>
      </template>
      <template slot="action" slot-scope="{ index,record }">
        <el-button type="primary" size="mini" @click="$handleData(record,'modalDrawer')">修改</el-button>

        <el-button type="danger" size="mini" @click="$handleConfirm(record.id,'此操作将删除该菜单，是否继续？')">删除</el-button>
      </template>

    </table-list>

    <modal-drawer ref="modalDrawer" @submitOk="submitOK" />
  </div>
</template>

<script>
import Index from './'

export default Index
</script>
