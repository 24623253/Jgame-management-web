<template>
  <el-select
    v-model="selectVal"
    filterable
    clearable
    v-bind="$attrs"
    style="width:100%"
    v-on="$listeners"
  >
    <!--    <template slot="prefix">-->
    <!--      <div class="icon-prefix">-->
    <!--        <svg-icon v-if="selectVal" :icon-class="selectVal" />-->
    <!--      </div>-->
    <!--    </template>-->
    <el-option
      v-for="item in icons"
      :key="item"
      :label="item"
      :value="item"
    >
      <span style="float: left">{{ item }}</span>
      <span style="float: right"><svg-icon :icon-class="item" /></span>
    </el-option>
  </el-select>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'IconSelect',
  props: {
    value: {
      type: String,
      default: null
    }
  },
  computed: {
    ...mapGetters([
      'icons'
    ]),
    selectVal: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
<style scoped>
</style>
