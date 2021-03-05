import TablePageMixin from 'mixins/tablePageMixin'
import ModalDialog from './components/dialog/index.vue'

export default {
  name: 'swiperList',

  mixins: [TablePageMixin],

  components: { ModalDialog },

  data() {
    return {
      pageKey: 'swiper',
      baseApi: process.env.VUE_APP_BASE_API,
      columns: [
        {
          label: '名称',
          prop: 'name',
          align: 'center'
        },
        {
          label: '图片',
          align: 'center',
          scopedSlots: { customRender: 'img' },
          width: 200
        },
        {
          prop: 'id',
          label: '游戏编号',
          align: 'center'
        },
        {
          label: '操作',
          align: 'center',
          scopedSlots: { customRender: 'action' },
          width: 200
        }
      ]
    }
  },

  mounted() {
    this.$getData()
    console.log(this.baseApi)
  },

  watch: {
    'pageData.page'() {
      this.pageData.current = this.pageData.page
    }
  }
}
