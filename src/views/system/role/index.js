import TablePageMixin from 'mixins/tablePageMixin'
import ModalDrawer from './components/drawer/index.vue'
import PowerDrawer from './components/power/index.vue'

export default {
  name: 'SystemRoleList',

  mixins: [TablePageMixin],

  components: { ModalDrawer, PowerDrawer },

  data() {
    return {
      pageKey: 'systemRole',
      isNoPage: true,
      columns: [
        {
          label: '角色名称',
          prop: 'name',
          align: 'center'
        },
        {
          prop: 'roleCode',
          label: '角色编码',
          align: 'center'
        },
        {
          prop: 'gmtCreate',
          label: '创建时间',
          align: 'center'
        },
        {
          prop: 'userCreateText',
          label: '创建用户',
          align: 'center'
        },
        {
          label: '操作',
          align: 'center',
          scopedSlots: { customRender: 'action' },
          width: 250
        }
      ]
    }
  },

  mounted() {
    this.$getData()
  }
}
