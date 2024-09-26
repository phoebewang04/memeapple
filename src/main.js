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
// 這是路由器(按照教學另外自建)
// import createRouter from './router/routes'
// 這是整合後的路由器(使用專案預設)
import createRouter from './router/index'
// 這是日曆
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
// 基礎
import App from './App.vue'
// AOS Import
import AOS from 'aos';
import 'aos/dist/aos.css';
// 動態引入 Google 字體
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@200..900&display=swap';
document.head.appendChild(link);


// 添加Font Awesome圖標到庫中
library.add(faBars, faLock, faUserGroup, faClock);

// 以下是路由器 vue-router 相關設置
const router = createRouter();

// const router = createRouter(createWebHistory())

// 以下是預設設置
const app = createApp(App)
// 下面這行必須要加，由於要使用fontawesome
app.component('font-awesome-icon', FontAwesomeIcon);
// 以下是路由器  vue-router 相關設置
app.use(router)
// AOS 初始化
// 初始化 AOS
AOS.init({
    duration: 1200,
    once: false,
  });
app.use(createPinia())
app.use(VCalendar, {})
app.mount('#app')
