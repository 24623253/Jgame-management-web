import TablePageMixin from 'mixins/tablePageMixin'
import ModalDialog from './components/dialog/index.vue'

export default {
  name: 'SystemStaffList',

  mixins: [TablePageMixin],

  components: { ModalDialog },

  data() {
    return {
      pageKey: 'systemStaff',
      columns: [
        {
          label: '员工编号',
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
          label: '所属部门',
          prop: 'deptIdText',
          align: 'center'
        },
        {
          label: '员工姓名',
          prop: 'name',
          align: 'center'
        },
        {
          label: '性别',
          prop: 'genderText',
          align: 'center'
        },
        {
          label: '联系方式',
          prop: 'phone',
          align: 'center'
        },
        {
          label: '职位',
          prop: 'occupation',
          align: 'center'
        },
        {
          label: '状态',
          scopedSlots: { customRender: 'status' },
          align: 'center'
        },
        {
          label: '创建时间',
          prop: 'gmtCreate',
          align: 'center'
        },
        {
          label: '操作',
          align: 'center',
          scopedSlots: { customRender: 'action' },
          width: 80
        }
      ],
      cityList: [],
      organList: [],
      deptList: []
    }
  },

  mounted() {
    this.getCityList()
    this._handleEditCity('')
    this._handleEditOrgan('')
    this.$getData()
  },

  methods: {
    // 获取城市列表
    getCityList() {
      this.$api.commonData.cityList().then(res => this.cityList = res.data)
    },

    // 修改所在城市 / 获取城市下机构列表
    _handleEditCity(value) {
      this.organList = this.deptList = []
      if (this.paramsForm.organId) this.paramsForm.organId = ''
      if (this.paramsForm.deptId) this.paramsForm.deptId = ''
      this.$api.commonData.cityToSearchOrgan(value).then(res => {
        this.organList = res.data
      })
    },

    // 修改所属机构 / 获取机构下部门列表
    _handleEditOrgan(value) {
      this.deptList = []
      if (this.paramsForm.deptId) this.paramsForm.deptId = ''
      this.$api.systemOrganization.organToSearchDept(value).then(res => {
        this.deptList = res.data
      })
    }
  }
}
