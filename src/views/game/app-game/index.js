import TablePageMixin from 'mixins/tablePageMixin'
import ModalDialog from './components/dialog/index.vue'

export default {
  name: 'appGame',

  mixins: [TablePageMixin],

  components: { ModalDialog },

  data() {
    return {
      pageKey: 'appGame',
      baseApi: process.env.VUE_APP_BASE_API,
      appTitleList: [],
      appTypeList: [],
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
          prop: 'title',
          label: '主题',
          align: 'center'
        },
        {
          prop: 'type',
          label: '类型',
          align: 'center'
        },
        {
          scopedSlots: { customRender: 'tag' },
          label: '标签',
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
    this.init()
  },

  watch: {
    'pageData.page'() {
      this.pageData.current = this.pageData.page
    }
  },

  methods: {
    init() {
      this.$getData()
      this.getAppTitleList()
      this.getAppTypeList()
    },

    getAppTitleList() {
      this.$api['appTitle'].allList().then(res => {
        this.appTitleList = res.data.records
      })
    },

    getAppTypeList() {
      this.$api['appType'].allList().then(res => {
        this.appTypeList = res.data.records
      })
    }

  }

}
