/*
 * 确认操作弹窗
 */
import { MessageBox, Message, Notification } from 'element-ui'
import $api from 'api'

export default ({ msg, title, confirmButtonText, cancelButtonText, type, pageKey, apiKey, params }) => {
  return new Promise((resolve, reject) => {
    MessageBox.confirm(msg || "正在执行'确认'操作, 是否继续?", title || '提示', {
      confirmButtonText: confirmButtonText || '确定',
      cancelButtonText: cancelButtonText || '取消',
      type: type || 'warning'
    }).then(() => {
      $api[pageKey][apiKey](params).then(() => {
        Notification({ title: '提示', type: 'success', message: '操作成功' })
        resolve()
      }).catch(e => reject(e))
    }).catch(() => Message('已取消操作'))
  })
}
