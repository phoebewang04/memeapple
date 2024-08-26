import {createRouter} from 'vue-router'
import Fontpage from '../views/Frontpage.vue';
import Login from '../components/login.vue';
// import Homepage from '../views/homepage/home.vue';
// 左邊是你宣告的名稱，可以跟你的 .vue檔案名稱相同。
// 右邊是你的 .vue 檔案路徑。

const routes = [
  {
    path: '/',
    component: Fontpage
  },
  {
    path: '/login/',
    component: Login
  },
//   這邊放置需要增加的頁面以及設置她可能的網址
// path:'/後面的內容是網址'
//  component: 這邊要帶入你在最上方宣告的元件
]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}