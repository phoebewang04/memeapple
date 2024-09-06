import { createRouter } from 'vue-router';
// 前台相關路由
import Fontpage from '../views/Frontpage.vue';
import Home from '../views/HomeView.vue';
import Minigame from '../views/Minigame.vue';
import Login from '../components/login.vue';
import Join from '../components/join.vue';
import Branch from '../views/Branch.vue';
import Announcement from '../views/Announcement.vue';
import Popupcard from '../views/Popupcard.vue';
import Theme from '../views/Theme.vue';
import ThemeAlien from '../views/ThemeAlien.vue';
import Theme_Lock from '../views/Theme_Lock.vue';
import Theme_Time from '../views/Theme_time.vue';
import preorder from '../views/preorder.vue';
import orderinform from '../views/orderinform.vue';
import Membermanage from '../views/Membermanage.vue';
import Escaperoom from '../views/Escaperoom.vue';
import pay from '../views/pay.vue';
import Theme_test from '../views/Theme_test.vue';


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
    path: '/Announcement/',
    component: Announcement
  },
  {
    path: '/Popupcard/',
    component: Popupcard
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
  {
    path: '/preorder/',
    component: preorder
  },
  {
    path: '/orderinform/',
    component: orderinform
  },
  {
    path: '/Join/',
    component: Join
  },
  {
    path: '/ThemeAlien/',
    component: ThemeAlien
  },
  {
    path: '/Theme_Lock/',
    component: Theme_Lock
  },
  {
    path: '/Theme_Time/',
    component: Theme_Time
  },
  {
    path: '/Membermanage/',
    component: Membermanage
  },
  {
    path: '/Escaperoom/', // URL 路徑
    component: Escaperoom //指定要渲染的 Vue 元件
  },
  {
    path: '/pay/',
    component: pay
  },
  {
    path: '/Theme_test/',
    component: Theme_test
  },


]

export default function (history) {
  return createRouter({
    scrollBehavior(to, from, savedPosition) {
      return { top: 0 }
      // ...
    },
    history,
    routes
  })
}