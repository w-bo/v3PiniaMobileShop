import { createApp } from 'vue'
import './style.css'
// 字体图标
import './assets/font/iconfont.css'
import App from './App.vue'
// 引入路由 node.js 模块查找机制
import router from './router'

createApp(App).use(router).mount('#app')
