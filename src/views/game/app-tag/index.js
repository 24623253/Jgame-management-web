import TablePageMixin from 'mixins/tablePageMixin'
import ModalDrawer from './components/drawer/index.vue'

export default {
  name: 'app-title',

  mixins: [TablePageMixin],

  components: { ModalDrawer },

  data() {
    return {
      pageKey: 'appTitle',
      baseApi: process.env.VUE_APP_BASE_API,
      appTitleList: [],
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
          prop: 'typeText',
          label: '类型',
          align: 'center'
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
    this.init()
    console.log(this.baseApi)
  },

  watch: {
    'pageData.page'() {
      this.pageData.current = this.pageData.page
    }
  },
  methods: {
    init() {
      this.$api['appTitle'].list().then(res => {
        this.appTitleList = res.data.records
      })
    }
  }
}
