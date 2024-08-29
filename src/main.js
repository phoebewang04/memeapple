// import './assets/main.css'
import "@/assets/css/reset.css"

import { createApp } from 'vue'
// 以下是路由器 vue-router
import { createWebHistory } from 'vue-router'
// 以下是必要的步驟
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// 這是狀態器 pinia
import { createPinia } from 'pinia'

import createRouter from './router/routes'
import App from './App.vue'
import VCalendar from 'v-calendar';



// 添加Font Awesome圖標到庫中
library.add(faBars);

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
