import { createRouter } from 'vue-router';
// 前台分流頁相關組件
import Fontpage from '../views/Frontpage.vue';
// 前台首頁相關組件
import Home from '../views/HomeView.vue';
import Privacy from '../views/PrivacyPolicy.vue';
import Terms from '../views/TermsService.vue';
import Announcement from '../views/Announcement.vue';
// 前台會員相關組件
import Login from '../components/login.vue';
import Join from '../components/join.vue';
import Membermanage from '../views/Membermanage.vue';
import Popupcard from '../views/Popupcard.vue';
// 前台預定相關組件
import Branch from '../views/Branch.vue';
import Theme from '../views/Theme.vue';
import pay from '../views/pay.vue';
import preorder from '../views/preorder.vue';
import orderinform from '../views/orderinform.vue';
// 前台線上體驗相關組件
import Minigame from '../views/Minigame.vue';
import dead1A2Bgame from '../views/dead1A2Bgame.vue';
import minigameL from '../components/minigameLtest.vue';
import Escaperoom from '../views/Escaperoom.vue';

// ======================================================= //
// ======================================================= //

// 後台相關組件
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
    path: '/Privacy/',
    component: Privacy
  },
  {
    path: '/Terms/',
    component: Terms
  },
  {
    path: '/Announcement/',
    component: Announcement
  },
  {
    path: '/Login/',
    component: Login
  },
  {
    path: '/Join/',
    component: Join
  },
  {
    path: '/Membermanage/',
    component: Membermanage
  },
  {
    path: '/Popupcard/',
    component: Popupcard
  },
  {
    path: '/Branch/',
    component: Branch
  },
  {
    path: '/Theme/:id',
    component: Theme
  },
  {
    path: '/Theme/:id/preorder/orderinform/pay',
    component: pay
  },
  {
    path: '/Theme/:id/preorder',
    component: preorder
  },
  {
    path: '/Theme/:id/preorder/orderinform',
    component: orderinform
  },
  {
    path: '/Minigame/',
    component: Minigame
  },
  {
    path: '/dead1A2Bgame/',
    component: dead1A2Bgame
  },
  {
    path: '/minigameL/',
    component: minigameL
  },
  {
    path: '/Escaperoom/',
    component: Escaperoom 
  },
  {
    path: '/BackstageIndex/',
    component: Backstage_index
  },
  {
    path: '/MemberMenage/',
    component: Backstage_member
  },
  {
    path: '/OrderMemage/',
    component: Backstage_order
  },
  {
    path: '/NewsMenage/',
    component: Backstage_news
  },
  {
    path: '/NewsEdit/',
    component: Backstage_newsedit
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