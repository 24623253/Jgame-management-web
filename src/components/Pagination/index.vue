<template>
  <div v-if="pageData.total" class="page-style">
    <el-pagination
      :current-page.sync="pageData.page"
      :page-size="pageData.size"
      :page-sizes="pageSizes"
      :layout="layout"
      :pager-count="pagerCount"
      :total="pageData.total"
      @current-change="changePage"
      @size-change="changeSize"
    />
  </div>
</template>

<script>
export default {
  name: 'Pagination',

  props: {
    pageData: {
      type: Object,
      required: true
    },
    layout: {
      type: String,
      default: 'total,sizes, prev, pager, next, jumper'
    },
    pagerCount: {
      type: Number,
      default: 7
    },
    pageSizes:{
      type:Array,
      default:()=>[5, 10, 20, 50]
    }
  },

  methods: {
    changePage(page) {
      this.$emit('pageChange', { ...this.pageData, page })
    },

    changeSize(size) {
      this.$emit('pageChange', { ...this.pageData, size })
    }
  }
}
</script>
<style lang="scss">
.page-style {
  margin-top: 15px;
}

.el-pagination {
  text-align: right;

  .el-pagination__total {
    float: left;
  }
}
</style>
