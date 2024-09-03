// import './assets/main.css'
import "@/assets/css/reset.css"

import { createApp } from 'vue'
// 以下是路由器 vue-router
import { createWebHistory } from 'vue-router'
// 以下是必要的步驟
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// 引入的icon
import { faBars, faLock, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
// 這是狀態器 pinia
import { createPinia } from 'pinia'
// 這是路由器
import createRouter from './router/routes'
// 這是日曆
import VCalendar from 'v-calendar';
// 基礎
import App from './App.vue'


// 添加Font Awesome圖標到庫中
library.add(faBars, faLock, faUserGroup, faClock);

// 以下是路由器 vue-router 相關設置
const router = createRouter(createWebHistory())
// 以下是預設設置
const app = createApp(App)
// 下面這行必須要加，由於要使用fontawesome
app.component('font-awesome-icon', FontAwesomeIcon);
// 以下是路由器  vue-router 相關設置
app.use(router).mount('#app')
app.use(createPinia())
app.use(VCalendar, {})
