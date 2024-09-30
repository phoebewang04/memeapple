<template>
  <!-- <TopNavbar :isLoggedIn="isLoggedIn"
    @login="handleLogin"
    @logout="handleLogout" /> -->
  <!-- <LoginRegisterPopup v-if="showLoginPopup" @login="handleLogin" @close="showLoginPopup = false" /> -->
  <router-view></router-view>
</template>

<script>

//import LoginRegisterPopup from './components/login.vue';
export default {
  // components: {
  //   LoginRegisterPopup,
  // },
  data() {
    return {
      isLoggedIn: false,
      showLoginPopup: false,
    };
  },
  methods: {
    handleLogin(user) {
      this.isLoggedIn = true;
      this.user = user;
      console.log("Logged in user:", user);
      localStorage.setItem('user', JSON.stringify(user)); // 儲存用戶信息
    },
    handleLogout() {
      this.isLoggedIn = false;
      this.user = null;
      localStorage.removeItem('user'); // 移除用戶信息
    },
    checkLoginStatus() {
      const user = localStorage.getItem('user');
      if (user) {
        this.isLoggedIn = true;
        this.user = JSON.parse(user);
      } else {
        this.isLoggedIn = false; // 確保設置為 false
        this.user = null; // 清空用戶資料
      }
    },
  },
  watch: {
    $route(to) {
      document.title = to.meta.title || '主題頁';
    }
  },
  created() {
    document.title = this.$route.meta.title || '主題頁';
    this.checkLoginStatus(); // 檢查登入狀態
  },

  //網頁某些狀態後會重新清除localstorage的全部紀錄
  mounted (){
     setTimeout(() => {
         // localStorage.clear();
        // localStorage.removeItem(orderData); //訂單的基本資訊
         localStorage.removeItem(discountPrice); //會員優惠卷折扣數
      console.log("LocalStorage 該項目已被自動清空");
     }, 180000); //3分鐘後清除

      // 當頁面重開之後會去檢查sessionStorage是否存在 如果是第一次載入網頁會先清除第一次紀錄確保有無異漏之前的數據
    if (!sessionStorage.getItem('hasVisited')) {
        localStorage.clear();  // 清除 localStorage
        console.log("LocalStorage has been cleared on first visit after reopening.");

        // 記錄 sessionStorage，標記這次會話已經進入
        sessionStorage.setItem('hasVisited', 'true');
    }

    //不管如何半小時後全部清除一次 保障用戶個資安全
    setTimeout(() => {
         localStorage.clear();
        console.log("LocalStorage 該項目已被自動清空");
    }, 3600000 ); 


  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
