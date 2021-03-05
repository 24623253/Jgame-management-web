import TablePageMixin from 'mixins/tablePageMixin'
import ModalDialog from './components/dialog/index.vue'

export default {
  name: 'SystemOrganizationList',

  mixins: [TablePageMixin],

  components: { ModalDialog },

  data() {
    return {
      pageKey: 'systemOrganization',
      columns: [
        {
          label: '机构编号',
          prop: 'code',
          align: 'center'
        },
        {
          label: '所在城市',
          prop: 'cityText',
          align: 'center'
        },
        {
          label: '机构名称',
          prop: 'name',
          align: 'center'
        },
        {
          label: '机构代码',
          prop: 'insCode',
          align: 'center'
        },
        {
          label: '联系人',
          prop: 'contactId',
          align: 'center'
        },
        {
          label: '联系方式',
          prop: 'contactPhone',
          align: 'center'
        },
        {
          label: '机构性质',
          prop: 'instPropertyText',
          align: 'center'
        },
        {
          label: '地址',
          align: 'center',
          scopedSlots: { customRender: 'address' }
        },
        {
          label: '操作',
          align: 'center',
          scopedSlots: { customRender: 'action' },
          width: 160
        }
      ],
      cityList: []
    }
  },

  mounted() {
    this.getCityList()
    this.$getData()
  },

  methods: {
    // 获取城市列表
    getCityList() {
      this.$api.commonData.cityList().then(res => this.cityList = res.data)
    }
  }
}
