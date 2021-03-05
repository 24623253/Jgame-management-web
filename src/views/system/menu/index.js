import TablePageMixin from 'mixins/tablePageMixin'
import ModalDrawer from './components/drawer/index.vue'

export default {
  name: 'SystemMenuList',

  components: { ModalDrawer },

  mixins: [TablePageMixin],

  data() {
    return {
      pageKey: 'systemMenu',
      isNoPage: true,
      columns: [
        {
          label: '排序',
          prop: 'sortNum',
          align: 'center',
          width: 80
        },
        {
          label: '菜单名称',
          prop: 'name',
          align: 'center'
        },
        {
          label: '菜单类型',
          align: 'center',
          scopedSlots: { customRender: 'type' }
        },
        {
          label: '创建用户',
          prop: 'userCreateText',
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
  },

  methods: {
    // 获取列表的子数据
    loadFun(tree) {
      return new Promise(resolve => {
        this.$api[this.pageKey].list({ menuId: tree.id }).then(res => resolve(res.data))
      })
    },

    submitOK() {
      this.tableData = []
      this.$getData()
    }
  }
}

