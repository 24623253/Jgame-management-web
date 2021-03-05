# Jgame后台管理
====

+ 项目内版本号：1.0.0
+ 线上地址： http://101.133.171.109/
+ 环境： node.js v10.8.0   vue-cli v4.3.1


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



### 前台技术
#####  UI框架 [element-ui](http://element.eleme.io/#/zh-CN/component/installation) 
#####  JavaScript [vue2.0](https://cn.vuejs.org/)   
#####  其它 [vue-admin-admin](https://panjiachen.gitee.io/vue-element-admin-site/zh/)  
#####  等等。。。  

## 项目结构梳理

```
_ 
├── build/···················<- 构建脚本目录
├── config/··················<- 构建配置目录(配置接口地址)
├── node_modules/············<- 依赖的node工具包目录
├── src/·····················<- 
│   ├── assets/·················<- 资源目录
│   ├── components/·············<- 自定义组件目录
│       ├── index.js ··············<- 配置全局组件
│   ├── router/·················<- 路由配置
│   ├── store/··················<- vuex
│   ├── utils/··················<- 
│       ├── auth.js/···············<- token处理
│       ├── axios.js/··············<- axios封装
│       ├── constant.js/···········<- 全局常量
│       ├── index.js/··············<- 全局方法
│       ├── filter.js/·············<- 配置过滤器
│   ├── views/·················<- 后台页面文件
│       ├── layout/················<- 后台主页面
│       ├── login/·················<- 登录页面
│       ├── dashboard/·············<- 首页
│       ├── 404.vue················<- 错误页面
│   ├── App.vue·················<- 页面级Vue组件
│   ├── main.js·················<- 页面入口js文件
├── static/ <- 静态文件目录
├── .bablerc
├── .editorconfig
├── .gitignore
├── .postcssrc.js
├── .gulpfile.js
├── index.html
├── package.json      
├── README.md

```

## 时间线

### 2021-3-5 项目初始化

+ 项目内版本号：1.0.0
+ 线上地址 http://101.133.171.109/