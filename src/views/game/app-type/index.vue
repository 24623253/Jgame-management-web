<template>
  <div class="common-style-table">
    <el-row class="search-bar" :gutter="20">

      <el-col :span="4">
        <el-input v-model="paramsForm.name" placeholder="类型名称" clearable />
      </el-col>

      <el-col :span="6">
        <el-select v-model="paramsForm.typeId" placeholder="请选择类型" clearable="" style="width:100%">
          <el-option v-for="item in appTitleList" :key="item.id" :label="item.name" :value="item.id" />
        </el-select>
      </el-col>

      <el-col :span="10">
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
      :page-data="pageData"
      @handlePageData="$changePage"
    >
      <template slot="img" slot-scope="{ index,record }">
        <img height="120" width="180" :src="baseApi+record.img" alt="">

      </template>

      <template slot="adminFlag" slot-scope="{ index,record }">
        <!-- <el-tag :type="!record.adminFlag? 'danger':'success'">
          {{ record.adminFlag ? '是' : '否' }}
        </el-tag> -->
        <el-tag :type="!record.name? 'danger':'success'">
          {{ record.name ? '是' : '否' }}
        </el-tag>
      </template>

      <template slot="action" slot-scope="{ index,record }">
        <el-button type="primary" size="mini" @click="$handleData(record,'modalDrawer')">修改</el-button>

        <el-button type="danger" size="mini" @click="$handleConfirm(record.id,'此操作将删除该条数据，是否继续？')">删除</el-button>
      </template>

    </table-list>

    <modal-drawer ref="modalDrawer" @submitOk="$getData" />

  </div>
</template>

<script>
import Index from './'

export default Index
</script>
