const CODE_LENGTH = 4 // 验证码的长度
const RANDOM_ARRAY = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'A', 'b', 'B', 'c', 'C',
  'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I',
  'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O',
  'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U',
  'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z'] // 随机数

export default {
  data() {
    return {
      isLoading: false,
      loginForm: {
        username: '',
        password: '',
        verifyCode: ''
      },
      checkCode: '',
      rules: {
        verifyCode: [
          { required: true, validator: this._checkPicAndPass }
        ]
      }
    }
  },

  mounted() {
    this._initVerifyCode()
  },

  methods: {
    // 初始化图片验证码
    _initVerifyCode() {
      let code = ''
      for (let i = 0; i < CODE_LENGTH; i++) {
        const codeIndex = Math.floor(Math.random() * 36) // 取得随机数的索引
        code += RANDOM_ARRAY[codeIndex] // 根据索引取得随机数加到code上
      }
      this.checkCode = code
    },

    // 校验验证码
    _checkPicAndPass(rule, value, callback) {
      if (!value) {
        callback(new Error('请填写验证码'))
        return
      } else if (value.toLowerCase() !== this.checkCode.toLowerCase()) {
        callback(new Error('验证码不正确'))
        this._initVerifyCode()// 刷新验证码
        this.loginForm.verifyCode = ''
        return
      }
      callback()
    },

    // 登录
    login() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.isLoading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push({ path: this.$route.query.redirect || '/' })
          }).catch(() => {
            this.loginForm.verifyCode = ''
            this._initVerifyCode()
          }).finally(() => this.isLoading = false)
        } else {
          this.$message.info('验证码填写有误，请重新填写')
          return false
        }
      })
    }
  }
}

