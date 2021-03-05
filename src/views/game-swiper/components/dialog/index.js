import DialogPageMixin from 'mixins/dialogPageMixin'

export default {
  mixins: [DialogPageMixin],
  // props: {
  //   appTitleList: {
  //     type: Array,
  //     default: []
  //   },
  //   appTypeList: {
  //     type: Array,
  //     default: []
  //   }
  // },
  data() {
    return {
      pageKey: 'swiper',
      cityList: [],
      organList: [],
      fileList: [],
      dialogImageUrl: '',
      dialogVisible: false,
      dialogVisibleImg: false,
      isChoose: false
    }
  },

  mounted() {
    // this.init()
  },
  methods: {
    // 初始化
    init() {
    },

    // getAppTitleList() {
    //   this.$api['appType'].list().then(res => {
    //     this.appTypeList = res.data.records
    //   })
    // },
    // getAppTypeList() {
    //   this.$api['appTitle'].list().then(res => {
    //     this.appTitleList = res.data.records
    //   })
    // },

    // 游戏名称提示
    querySearchAsync(name, cb) {
      // if (!name) {
      //   cb([])
      //   return
      // }
      this.$api['appGame'].list({ name }).then(res => {
        cb(res.data.records)
      })
    },

    // 选择游戏事件
    gameNameSelect(item) {
      console.log(item)
      this.editForm.gameId = item.id
    },

    // 添加 / 修改
    handleDialogData(item) {
      if (this.isSearching) return
      this.isSearching = true
      this.fileList = []
      this.swiperList = []
      this.errorForm = {}
      this.editForm = {}
      this.dialogTitle = !item ? '添加' : '修改'
      this.isAdd = !item
      if (!item) {
        this.dialogVisible = true
        this.isSearching = false
        return
      }
      this.$api[this.pageKey].detail(item.id).then(res => {
        const { ...data } = res.data
        this.editForm = {
          ...data
        }
        if (data.img) this.fileList.push({ name: data.name + data.img, url: process.env.VUE_APP_BASE_API + data.img })
        // if (data.swipers) {
        //   data.swipers.map((item) => {
        //     this.swiperList.push({ name: data.name + item, url: process.env.VUE_APP_BASE_API + item })
        //   })
        // }
        this.dialogVisible = true
      }).finally(() => this.isSearching = false)
    },

    // handleRemove(file, fileList) {
    //   console.log(file, fileList)
    // },

    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisibleImg = true
    },

    // 放大图片
    handlemagnify(index) {
      this.dialogVisibleImg = true
      this.dialogImageUrl = this.fileList[index].url
    },

    // 上传前
    beforeUpload() {
      return false
    },

    // 获取图片
    getFile(file) {
      const types = 'image/jpeg,image/png'
      const { type } = file.raw
      if (types.indexOf(type) < 0) {
        this.$message.error('上传图片只能是 JPG,PNG 格式!')
        return false
      }
      this.getBase64(file.raw).then(res => {
        this.fileList.push({ name: file.name, url: res, type })
      })
    },

    // 获取图片转base64
    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        let imgResult = ''
        reader.readAsDataURL(file)
        reader.onload = () => imgResult = reader.result
        reader.onerror = error => reject(error)
        reader.onloadend = () => resolve(imgResult)
      })
    },

    // 删除
    handleRemove(index, imgType) {
      this[imgType].splice(index, 1)
    },

    // 提交校验
    $_submitVerify() {
      const fileListArr = []
      this.fileList.map(item => fileListArr.push({ screenshot: item.url, name: item.name, type: item.type }))
      this.editForm.imgBase_64 = fileListArr
      console.log(this.editForm, '<<<<submit')
    }

  }
}

