<template>
  <TopNavbar :isLoggedIn="isLoggedIn"
    @login="handleLogin"
    @logout="handleLogout" />
  <LoginRegisterPopup v-if="showLoginPopup" @login="handleLogin" @close="showLoginPopup = false" />
  <router-view></router-view>
</template>

<script>

import LoginRegisterPopup from './components/login.vue';
export default {
  components: {
        LoginRegisterPopup,
    },
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
