<template>
  <el-cascader
    v-model="selectVal"
    clearable
    style="width:100%"
    :options="options"
    :props="propsMix"
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>
<script>
import $api from 'api'

export default {
  name: 'DictCascader',
  props: {
    value: {
      type: [Array, String],
      default: () => []
    },
    dict: {
      type: Array,
      required: true
    },
    props: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      options: []
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
    },
    propsMix() {
      return { ...{ label: 'text', checkStrictly: true }, ...this.props }
    }
  },
  created() {
    this.search()
  },
  methods: {
    search() {
      let promise
      if (!this.dict) {
        this.options = []
      }
      switch (this.dict.length) {
        case 4: {
          promise = $api.dict.dictCascader({
            params: this.dict
          }, this.dict[0])
          break
        }
        case 5: {
          promise = $api.dict.dictCascader({
            params: this.dict.slice(1)
          }, this.dict[0])
          break
        }
        default:
          break
      }
      if (!promise) {
        this.options = []
      }
      promise.then(res => {
        this.options = res.data
      })
    }
  }
}
</script>
