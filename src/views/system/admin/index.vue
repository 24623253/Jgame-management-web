<template>
  <div class="common-style-table">
    <el-row class="search-bar" :gutter="20">

      <el-col :span="4">
        <el-input v-model="paramsForm.name" placeholder="用户姓名" clearable />
      </el-col>

      <el-col :span="20">
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

      <template slot="status" slot-scope="{ index,record }">
        <el-link
          :type="!record.status?'success':'danger'"
          @click="$handleStatus(record.id,record.status,'用户')"
        >
          {{ record.statusText }}
        </el-link>
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

        <el-button type="info" size="mini" disabled @click="$handleData(record,'roleDrawer')">角色配置</el-button>

        <el-button type="info" size="mini" disabled @click="$handleData(record,'clientDrawer')">客户端权限</el-button>

        <el-button type="warning" size="mini" @click="$handleConfirm(record.id,'此操作将重置该账户密码，是否继续？','resetPassword')">重置密码</el-button>

        <el-button type="danger" size="mini" @click="$handleConfirm(record.id,'此操作将删除该用户，是否继续？')">删除</el-button>
      </template>

    </table-list>

    <modal-drawer ref="modalDrawer" @submitOk="$getData" />

    <client-drawer ref="clientDrawer" @submitOk="$getData" />

    <role-drawer ref="roleDrawer" @submitOk="$getData" />
  </div>
</template>

<script>
import Index from './'

export default Index
</script>
