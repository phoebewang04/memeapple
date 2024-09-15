// 從'vue-router'模組中導入createRouter和createWebHistory函數
import { createRouter, createWebHistory } from 'vue-router'

// 組件匯入區域： 使用懶加載導入組件，請將新的組件放置在此處。
// ======================================================= //
// ======================================================= //

// 前台分流頁相關組件
const Fontpage = () => import('../views/Frontpage.vue');

// 前台首頁相關組件
const Home = () => import('../views/HomeView.vue');
const Privacy = () => import('../views/PrivacyPolicy.vue');
const Terms = () => import('../views/TermsService.vue');
const Announcement = () => import('../views/Announcement.vue');

// 前台會員相關組件
const Login = () => import('../components/login.vue');
const Join = () => import('../components/join.vue');
const Membermanage = () => import('../views/Membermanage.vue');
const Popupcard = () => import('../views/Popupcard.vue');

// 前台線上體驗相關組件
const Minigame = () => import('../views/Minigame.vue');
const Dead1A2Bgame = () => import('../views/dead1A2Bgame.vue');
const MinigameL = () => import('../components/minigameLtest.vue');
const Escaperoom = () => import('../views/Escaperoom.vue');

// ======================================================= //
// ======================================================= //
// 後台相關組件
const Backstage_index = () => import('../views/Backstage_index.vue');
const Backstage_member = () => import('../views/Backstage_member.vue');
const Backstage_order = () => import('../views/Backstage_order.vue');
const Backstage_news = () => import('../views/Backstage_news.vue');
const Backstage_newsedit = () => import('../views/Backstage_news_edit.vue');

// 前台預定相關組件
const Branch = () => import('../views/Branch.vue');
const Theme = () => import('../views/Theme.vue');
const Pay = () => import('../views/pay.vue');
const Preorder = () => import('../views/preorder.vue');
const Orderinform = () => import('../views/orderinform.vue');



// 創建router實例區域： 有關路由相關配置在此處。
// ======================================================= //
// ======================================================= //

const routes = [
  { path: '/', name: 'fontpage', component: () => import('../views/Frontpage.vue') },
  { path: '/index/', name: 'index', component: () => import('../views/HomeView.vue') },
  { path: '/Privacy/', name: 'Privacy', component: () => import('../views/PrivacyPolicy.vue') },
  { path: '/Terms/', name: 'Terms', component: () => import('../views/TermsService.vue') },
  { path: '/Announcement/', name: 'Announcement', component: () => import('../views/Announcement.vue') },
  { path: '/Login/', name: 'Login', component: () => import('../components/login.vue') },
  { path: '/Join/', name: 'Join', component: () => import('../components/join.vue') },
  { path: '/Membermanage/', name: 'Membermanage', component: () => import('../views/Membermanage.vue') },
  { path: '/Popupcard/', name: 'Popupcard', component: () => import('../views/Popupcard.vue') },
  { path: '/Branch/', name: 'Branch', component: () => import('../views/Branch.vue') },
  { path: '/Minigame/', name: 'Minigame', component: () => import('../views/Minigame.vue') },
  { path: '/dead1A2Bgame/', name: 'dead1A2Bgame', component: () => import('../views/dead1A2Bgame.vue') },
  { path: '/minigameL/', name: 'minigameL', component: () => import('../components/minigameLtest.vue') },
  { path: '/Escaperoom/', name: 'Escaperoom', component: () => import('../views/Escaperoom.vue') },
  { path: '/BackstageIndex/', name: 'BackstageIndex', component: () => import('../views/Backstage_index.vue') },
  { path: '/MemberMenage/', name: 'MemberMenage', component: () => import('../views/Backstage_member.vue') },
  { path: '/OrderMemage/', name: 'OrderMemage', component: () => import('../views/Backstage_order.vue') },
  { path: '/NewsMenage/', name: 'NewsMenage', component: () => import('../views/Backstage_news.vue') },
  { path: '/NewsEdit/', name: 'NewsEdit', component: () => import('../views/Backstage_news_edit.vue') },
  { path: '/Theme/:id', component: Theme },
  { path: '/Theme/:id/preorder/orderinform/pay', component: Pay },
  { path: '/Theme/:id/preorder', component: Preorder },
  { path: '/Theme/:id/preorder/orderinform', component: Orderinform },
];


const router = createRouter({
  // 使用HTML5歷史模式，並設置基礎URL
  history: createWebHistory(import.meta.env.BASE_URL),
  // 定義路由規則
  routes,
  // 滾動行為
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  }
});


// 將router實例導出，以便在其他地方使用。
// ======================================================= //
// ======================================================= //
// export default router

export default function () {
  return createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  });
}

// 其他備註。
// ======================================================= //
// ======================================================= //

// ## 何謂代碼分割? ##
// component: () => import('../views/AboutView.vue')
// 這段代碼使用了動態導入（dynamic import）語法 import()，這會告訴Webpack（或其他打包工具）將這個路由的組件打包成一個單獨的JavaScript文件（chunk）。
// 當用戶訪問這個路由時，這個chunk才會被加載。這樣可以減少初始加載時間，因為不需要一次性加載所有的組件。

// ## 何謂懶加載? ##
// 懶加載（lazy loading）是指在需要時才加載資源，而不是在應用啟動時就加載所有資源。
// 在這個例子中，AboutView組件只有在用戶導航到/about路由時才會被加載，這樣可以提高應用的性能和響應速度。

// ## 總結 ##
// 總結來說，這段代碼有助於優化應用的加載性能，特別是在應用包含大量組件或頁面的情況下。這樣可以讓用戶在初次訪問網站時獲得更快的加載體驗。
// 這會為該路由生成一個單獨的chunk (About.[hash].js)