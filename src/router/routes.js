import { createRouter } from 'vue-router'
// 前台相關路由
import Fontpage from '../views/Frontpage.vue';
import Home from '../views/HomeView.vue';
import Minigame from '../views/Minigame.vue';
import Login from '../views/Login.vue';
import Branch from '../views/Branch.vue';
import Theme from '../views/Theme.vue';


// 後台相關路由
import Backstage_index from '../views/Backstage_index.vue';
import Backstage_member from '../views/Backstage_member.vue';
import Backstage_order from '../views/Backstage_order.vue';
import Backstage_news from '../views/Backstage_news.vue';
import Backstage_newsedit from '../views/Backstage_news_edit.vue';

const routes = [
  {
    path: '/',
    component: Fontpage
  }, {
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
    component: Backstage_index
  },
  {
    path: '/OrderMemage/',
    component: Backstage_order
  },
  {
    path: '/MemberMenage/',
    component: Backstage_member
  },
  {
    path: '/NewsMenage/',
    component: Backstage_news
  },
  {
    path: '/NewsEdit/',
    component: Backstage_newsedit
  },
  {
    path: '/Theme/',
    component: Theme
  },
]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}