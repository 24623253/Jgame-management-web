import TablePageMixin from 'mixins/tablePageMixin'
import ModalDialog from './components/dialog/index.vue'

export default {
  name: 'SystemDepartmentList',

  mixins: [TablePageMixin],

  components: { ModalDialog },

  data() {
    return {
      pageKey: 'systemDepartment',
      columns: [
        {
          label: '部门编号',
          prop: 'code',
          align: 'center'
        },
        {
          label: '所在城市',
          prop: 'cityText',
          align: 'center'
        },
        {
          label: '所属机构',
          prop: 'organIdText',
          align: 'center'
        },
        {
          label: '部门名称',
          prop: 'name',
          align: 'center'
        },
        {
          label: '负责人',
          prop: 'charge',
          align: 'center'
        },
        {
          label: '联系方式',
          prop: 'phone',
          align: 'center'
        },
        {
          label: '操作',
          align: 'center',
          scopedSlots: { customRender: 'action' },
          width: 160
        }
      ],
      cityList: [],
      organList: [],
      paramsForm: {
        city: null,
        organId: null
      }
    }
  },

  mounted() {
    this.getCityList()
    this._handleEditCity('')
    this.$getData()
  },

  methods: {
    // 获取城市列表
    getCityList() {
      this.$api.commonData.cityList().then(res => this.cityList = res.data)
    },

    // 修改所在城市 / 获取城市下机构列表
    _handleEditCity(value) {
      this.organList = []
      if (this.paramsForm.organId) this.paramsForm.organId = ''
      this.$api.commonData.cityToSearchOrgan(value).then(res => {
        this.organList = res.data
      })
    }
  }
}
