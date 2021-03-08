# Jgame后台管理
====

## J游戏的后台管理页面

+ 项目内版本号：1.0.0
+ 线上地址： http://101.133.171.109/
+ 环境： node.js v10.8.0   vue-cli v4.3.1
+ 后端接口： [Jgame-server](https://github.com/24623253/Jgame-server) 
+ uniapp（Android端&小程序端）： [Jgame-uniapp](https://github.com/24623253/Jgame-uniapp) 

```注意：
本地环境接口为线上地址，如需更改，请查找.env.development进行更改 
```

## Build Setup

项目下载和运行
----

- 拉取项目代码
```bash
git clone https://github.com/24623253/Jgame-management-web.git
```

- 环境
```
node.js v10.8.0   
vue-cli v4.3.1
```

- 安装依赖
```
npm install
cnpm install
```

- 开发模式运行
```
npm run dev
```

- 打包
```
npm run build
```

- 账号密码
```
admin  /  123456
```



### 前台技术
#####  UI框架 [element-ui](http://element.eleme.io/#/zh-CN/component/installation) 
#####  JavaScript [vue2.0](https://cn.vuejs.org/)   
#####  其它 [vue-admin-admin](https://panjiachen.gitee.io/vue-element-admin-site/zh/)  
#####  等等。。。  

## 项目结构梳理

```
_ 
├── public/··················<- 公共初始模板
├── node_modules/············<- 依赖的node工具包目录
├── src/·····················<- 
│   ├── api/·················<- 接口地址整合目录
│   ├── assets/·················<- 静态资源
│   ├── components/·············<- 自定义组件目录
│       ├── index.js ··············<- 配置全局组件
│   ├── filters/·················<- 全局过滤器方法
│   ├── icons/·················<- icon
│   ├── layout/·················<- 布局
│   ├── mixins/·················<- 混入 
│   ├── router/·················<- 路由配置
│   ├── store/··················<- vuex
│   ├── styles/··················<- 全局样式
│   ├── utils/··················<- 
│       ├── addRouter.js/···············<- 路由方法封装
│       ├── auth.js/···············<- token处理封装
│       ├── error-log.js/··············<- 异常处理
│       ├── get-page-title.js/··············<- 标签页 title 设置
│       ├── request.js/···········<- axios接口封装
│       ├── validate.js/··············<- 校验封装
│       ├── index.js/··············<- 全局方法
│   ├── src/·················<- 页面文件
│       ├── dashboard/················<- 首页
│       ├── login/·················<- 登录页面
│       ├── game/·················<- 游戏信息操作页面
│       ├── game-swiper/·················<- 游戏信息轮播页面
│       ├── system/·················<- 系统设置
│       ├── redirect/·············<- 重定向处理
│       ├── error.vue················<- 错误页面
│   ├── App.vue·················<- 入口页面
│   ├── main.js·················<- 页面入口js文件
│   ├── permission.js·················<- 授权
│   ├── settings.js·················<- settings
├── .env.development
├── .env.production
├── .eslintrc.js
├── .gitignore
├── babel.config.js
├── gulpfile.js
├── package-lock.json
├── package.json
├── README.md
├── vue.config.js

```

## 时间线

### 2021-3-5 项目初始化

+ 项目内版本号：1.0.0
+ 线上地址 http://101.133.171.109/
