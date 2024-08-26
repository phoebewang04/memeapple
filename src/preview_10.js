import login from "@/components/login.vue";

// 添加Font Awesome圖標到庫中
library.add(faBars);

// 以下是路由器 vue-router 相關設置
const router = createRouter(createWebHistory());
// 以下是預設設置
const app = createApp(login);
// 下面這行必須要加，由於要使用fontawesome
app.component('font-awesome-icon', FontAwesomeIcon);
// 以下是路由器  vue-router 相關設置
app.use(router).mount('#c');