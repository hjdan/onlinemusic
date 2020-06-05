### 改动说明

### 跨域说明

- 后端CORS设置所有地址都可以访问（后期修改）
- 前端暂时不用设置跨域

### 添加文件夹说明

- 添加utils文件夹
  - 放置axios请求封装代码

- 添加API文件夹
  - 放置所有请求代码请求代码
- 添加store文件夹
  - 放置所有与vuex相关代码
  - store中实现modules模块划分

### 修改文件说明

- main.js
  - 将与vuex相关的代码封装store中modules的music文件中

- adminLogin.vue
  - 实现与后台数据交互功能

### 建议

- 将 host 地址移植到 vue 中的 .env 配置文件中（该功能忘记不会）