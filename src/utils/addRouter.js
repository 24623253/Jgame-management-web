export function generateChildRouters(data) {
  const routers = []
  for (const item of data) {
    let component = ''
    if (item.component.indexOf('layout') >= 0) {
      component = item.component
    } else {
      component = 'views/' + item.component
    }

    const { path, name, hidden, redirect, alwaysShow, meta } = item

    const menu = {
      meta,
      path,
      name,
      hidden,
      redirect,
      alwaysShow,
      component: resolve => require(['@/' + component + '.vue'], resolve)
    }
    if (item.children && item.children.length) {
      menu.children = [...generateChildRouters(item.children)]
    }
    routers.push(menu)
  }
  return routers
}
