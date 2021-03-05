<template>
  <el-cascader
    v-model="selectVal"
    v-loading="isLoading"
    clearable
    style="width:100%"
    :options="options"
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>
<script>
export default {
  name: 'DictCascaderArea',

  props: {
    value: {
      type: [Array, String],
      default: () => ['41000', '410800', '410811']
    }
  },

  data() {
    return {
      options: null,
      isLoading: false
    }
  },

  computed: {
    selectVal: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },

  created() {
    this.getList()
  },

  methods: {
    // 获取省市区列表
    getList() {
      const list = this.$store.state.area.areas
      if (list.length) {
        this.options = list
        return
      }
      this.isLoading = true
      this.$store.dispatch('area/getProvincesTreeList').then(res => {
        this.options = res.data
      }).finally(() => this.isLoading = false)
    }
  }
}
</script>
