import {createRouter} from 'vue-router'
// 前台相關路由
import Fontpage from '../views/Frontpage.vue';
import Home from '../views/HomeView.vue';
import Minigame from '../views/Minigame.vue';
import Login from '../views/Login.vue';
import Branch from '../views/Branch.vue';


// 後台相關路由
import Backstage_index from '../views/Backstage_index.vue';
import Backstage_member from '../views/Backstage_member.vue';
import Backstage_order from '../views/Backstage_order.vue';
import Backstage_news from '../views/Backstage_news.vue';
import Backstage_newsedit from '../views/Backstage_news_edit.vue';
import Login from "@/components/login.vue";
// import Homepage from '../views/homepage/home.vue';
// 左邊是你宣告的名稱，可以跟你的 .vue檔案名稱相同。
// 右邊是你的 .vue 檔案路徑。

const routes = [
  {
    path: '/',
    component: Fontpage
  },{
    path: '/index/',
    component: Home
  },
  {
    path: '/Minigame/',
    component: Minigame
  },
  {
    path: '/Branch/',
    component: Branch
  },
  {
    path: '/Login/',
    component: Login
  },
  {
    path: '/BackstageIndex/',
    component:Backstage_index
  },
  {
    path: '/OrderMemage/',
    component:Backstage_order
  },
  {
    path: '/MemberMenage/',
    component:Backstage_member
  },
  {
    path: '/NewsMenage/',
    component:Backstage_news
  },
  {
    path: '/NewsEdit/',
    component:Backstage_newsedit
  },
]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}