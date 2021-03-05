/*
* 标签页 title 设置
*/
import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Vue Element Admin'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${ pageTitle } - ${ title }`
  }
  return `${ title }`
}
