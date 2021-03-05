import TablePageMixin from 'mixins/tablePageMixin'
import ModalDrawer from './components/drawer/index.vue'

export default {
  name: 'app-type',

  mixins: [TablePageMixin],

  components: { ModalDrawer },

  data() {
    return {
      pageKey: 'appType',
      baseApi: process.env.VUE_APP_BASE_API,
      appTitleList: [],
      columns: [
        {
          label: '类型名称',
          prop: 'name',
          align: 'center'
        },
        {
          prop: 'remark',
          label: '备注',
          align: 'center'
        },
        {
          prop: 'id',
          label: '主题编号',
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
      this.getAppTypeList()
      this.$getData()
    },

    getAppTypeList() {
      this.$api['appType'].list().then(res => {
        this.appTitleList = res.data.records
      })
    }
  }
}
