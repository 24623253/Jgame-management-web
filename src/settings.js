module.exports = {
  /**
   * @description 项目名称
   */
  title: '后台管理系统',

  /**
   * @type {boolean} true | false
   * @description 是否显示设置右面板
   */
  showSettings: true,

  /**
   * @type {boolean} true | false
   * @description 是否显示历史导航栏
   */
  tagsView: true,

  /**
   * @type {boolean} true | false
   * @description 是否固定标题栏
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description 是否在侧栏中显示logo
   */
  sidebarLogo: false,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description 是否展示错误日志
   * 默认仅在生产环境中使用
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: 'production'
}
