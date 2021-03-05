<template>
  <div class="common-style-table">
    <el-row class="search-bar" :gutter="20">

      <el-col :span="4">
        <el-input v-model="paramsForm.name" placeholder="角色名称" clearable />
      </el-col>

      <el-col :span="4">
        <el-input v-model="paramsForm.code" placeholder="角色编码" clearable />
      </el-col>

      <el-col :span="16">
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
      row-key="id"
      :page-data="pageData"
      @handlePageData="$changePage"
    >

      <template slot="action" slot-scope="{ index,record }">
        <el-button type="primary" size="mini" @click="$handleData(record,'modalDrawer')">修改</el-button>

        <el-button type="info" size="mini" @click="$handleData(record,'powerDrawer')">权限配置</el-button>

        <el-button type="danger" size="mini" @click="$handleConfirm(record.id,'此操作将删除该角色，是否继续？')">删除</el-button>
      </template>

    </table-list>

    <modal-drawer ref="modalDrawer" @submitOk="$getData" />

    <power-drawer ref="powerDrawer" @submitOk="$getData" />
  </div>
</template>

<script>
import Index from './'

export default Index
</script>
