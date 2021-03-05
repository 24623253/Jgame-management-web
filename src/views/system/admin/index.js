import TablePageMixin from 'mixins/tablePageMixin'
import ModalDrawer from './components/drawer/index.vue'
import ClientDrawer from './components/client/index.vue'
import RoleDrawer from './components/role/index.vue'

export default {
  name: 'SystemAdminList',

  mixins: [TablePageMixin],

  components: { ModalDrawer, RoleDrawer, ClientDrawer },

  data() {
    return {
      pageKey: 'systemAdmin',
      columns: [
        {
          label: '姓名',
          prop: 'name',
          align: 'center'
        },
        {
          prop: 'username',
          label: '用户名',
          align: 'center'
        },
        {
          prop: 'name',
          label: '账户类型',
          align: 'center'
        },
        {
          label: '是否管理员',
          align: 'center',
          scopedSlots: { customRender: 'adminFlag' },
          width: 100
        },
        // {
        //   label: '状态',
        //   align: 'center',
        //   scopedSlots: { customRender: 'status' },
        //   width: 100
        // },
        {
          label: '操作',
          align: 'center',
          scopedSlots: { customRender: 'action' },
          width: 430
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
