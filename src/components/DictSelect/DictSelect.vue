<template>
  <el-select
    v-model="selectVal"
    filterable
    v-bind="$attrs"
    style="width:100%"
    v-on="$listeners"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.text"
      :value="item.value"
    />
  </el-select>
</template>
<script>
import $api from 'api'

export default {
  name: 'DictSelect',
  props: {
    value: {
      type: [Array, String, Number],
      default: null
    },
    dict: {
      type: Array,
      required: true
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
        case 1: {
          promise = $api.dict.dictSelect({
            params: this.dict
          }, this.dict[0])
          break
        }
        case 2: {
          promise = $api.dict.dictSelect({
            params: [this.dict[1]]
          }, this.dict[0])
          break
        }
        case 3: {
          promise = $api.dict.dictSelect({
            params: this.dict
          }, this.dict[0])
          break
        }
        case 4: {
          promise = $api.dict.dictSelect({
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
