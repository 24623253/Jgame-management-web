import TablePageMixin from 'mixins/tablePageMixin'
import ModalDrawer from './components/drawer/index.vue'

export default {
  name: 'SystemClientList',

  mixins: [TablePageMixin],

  components: { ModalDrawer },

  data() {
    return {
      pageKey: 'systemClient',
      columns: [
        {
          prop: 'clientName',
          label: '客户端名称',
          align: 'center'
        },
        {
          prop: 'clientId',
          label: '客户端代码',
          align: 'center'
        },
        {
          prop: 'resourceIds',
          label: '可访问的资源',
          align: 'center'
        },
        {
          prop: 'scope',
          label: '访问范围',
          align: 'center'
        },
        {
          prop: 'authorizedGrantTypes',
          label: '可使用的认证类型',
          align: 'center'
        },
        {
          prop: 'webServerRedirectUri',
          label: '认证成功跳转URL',
          align: 'center'
        },
        {
          label: '是否自动授权',
          align: 'center',
          scopedSlots: { customRender: 'autoFlag' },
          width: 110
        },
        {
          label: '操作',
          align: 'center',
          scopedSlots: { customRender: 'action' },
          width: 150
        }
      ]
    }
  },

  mounted() {
    this.$getData()
  },

  watch: {
    'pageData.page'() {
      this.pageData.current = this.pageData.page
    }
  }
}
