<template>
  <div v-loading="isLoading" class="table-list">
    <el-table
      ref="tableList"
      :height="tableHeight"
      :data="data"
      :stripe="stripe"
      :border="border"
      style="width: 100%"
      :style="tableStyle"
      :row-key="rowKey"
      :default-expand-all="isDefaultExpandAll"
      :tree-props="treeProps"
      :lazy="isLazy"
      :load="load"
      @selection-change="_handleSelectionChange"
      @current-change="_handleCurrentChange"
    >
      <el-table-column v-if="isSelection" type="selection" width="55" align="center" />

      <el-table-column v-if="isNumerical" label="序号" width="80" align="center">
        <template slot-scope="scope">
          <span>{{ scope.$index + pageData.start }}</span>
        </template>
      </el-table-column>

      <el-table-column
        v-for="(item, index) in columns"
        :key="index"
        :label="item.label"
        :prop="item.prop"
        :align="item.align"
        :header-align="item.headerAlign"
        :width="item.width"
        :fixed="item.fixed"
        :show-overflow-tooltip="item.showOverflowTooltip"
      >
        <template slot-scope="scope">
          <slot
            v-if="item.scopedSlots && item.scopedSlots.customRender"
            :name="item.scopedSlots.customRender"
            :index="scope.$index"
            :record="scope.row"
            :scope="scope"
          />
          <span v-else>{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      :page-data="pageData"
      :layout="paginationLayout"
      :pager-count="paginationPagerCount"
      @pageChange="changePage"
    />
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'TableList',
  props: {
    isLoading: {
      type: Boolean,
      default: false
    },
    pageData: {
      type: Object,
      default: () => ({
        page: 1,
        size: 10,
        total: 0,
        start: 1
      })
    },
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    stripe: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    rowKey: {
      type: String,
      default: ''
    },
    tableStyle: {
      type: String,
      default: ''
    },
    isNumerical: { // 是否显示序号
      type: Boolean,
      default: true
    },
    isSelection: { // 是否显示选择框
      type: Boolean,
      default: false
    },
    isDefaultExpandAll: { // 是否默认展开
      type: Boolean,
      default: false
    },
    isLazy: { // 是否懒加载
      type: Boolean,
      default: false
    },
    treeProps: {
      type: Object,
      default: () => ({})
    },
    tableHeight: { // 纵向高度
      type: [Number, String],
      default: null
    },
    paginationLayout: {
      type: String,
      default: 'total,sizes, prev, pager, next, jumper'
    },
    paginationPagerCount: { // 大于等于 5 且小于等于 21 的奇数
      type: Number,
      default: 7
    }
  },

  methods: {
    // 分页
    changePage(pageData) {
      this.$emit('handlePageData', pageData)
    },

    // 选择项改变
    _handleSelectionChange(rows) {
      this.$emit('handleSelectionChange', rows)
    },

    // 选择当前项
    _handleCurrentChange(rows) {
      this.$emit('handleCurrentChange', rows)
    },

    // 选取子节点
    _toggleSelection(rows, selected) {
      rows.forEach(row => this.$refs.tableList.toggleRowSelection(row, selected))
    },

    // 获取选中子节点
    _getSelection() {
      return this.$refs.tableList.selection
    },

    // 懒加载数据
    load(tree, treeNode, resolve) {
      this.$parent.loadFun(tree, treeNode).then(cb => resolve(cb))
    }
  }
}
</script>
