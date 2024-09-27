<script>
import '../assets/css/style.css';
import LoginRegisterPopup from './login.vue';
import Swal from 'sweetalert2';

export default {
  components: {
    LoginRegisterPopup
  },
  props: {
    isLoggedIn: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isLoggedIn: false,
      visible_active: false,
      showPopup: false,
      showThemes: false, // 控制台北館主題的顯示
    };
  },
  methods: {
    showMenuBar() {
      if (window.innerWidth <= 700) {
        this.visible_active = !this.visible_active;
      }
      if (this.showPopup) {
        this.visible_active = false;
      }
    },
    handleResize() {
      if (window.innerWidth > 700) {
        this.visible_active = true;
      } else {
        this.visible_active = false;
      }
    },
    closeMenu() {
      this.visible_active = false;
    },
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
    logout() {

      localStorage.removeItem('user'); // 移除用戶信息
      this.isLoggedIn = false; // 更新登錄狀態
      this.user = null; // 清空用戶資料
      this.$emit('logout'); // 發出登出事件（如果需要）

      setTimeout(() => {
        Swal.fire({
          title: '登出成功',
          text: '您已成功登出',
          icon: 'success',
          confirmButtonColor: '#FCD15B',
          confirmButtonText: 'OK'
        }).then(() => {
          this.$router.push('/index/'); // 重定向到登入頁面
        });
      }, 100); // 延遲顯示 alert，確保頁面已跳轉
    },
    toggleThemes() {
      this.showThemes = !this.showThemes;
    },
  },
  // watch: {
  //   showPopup(newVal) {
  //     if (newVal) {
  //       this.closeMenu(); // 當 showPopup 為 true 時關閉 header 選單
  //     }
  //   }
  // },
  created() {
    this.checkLoginStatus();
    this.handleResize();
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);

    // 檢查螢幕寬度
    if (window.innerWidth > 700) {
      this.showThemes = true;
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<template>
  <LoginRegisterPopup v-if="showPopup" @close="showPopup = false" @login="handleLogin" />
  <header class="top">
    <router-link to="/index/"><img src="../assets/img/memelogo.svg" alt=""></router-link>
    <font-awesome-icon class="fa HambergerAwasome" icon="bars" @click="showMenuBar"></font-awesome-icon>
    <ul id="menuBar" :class="{ visible: visible_active }">
      <div v-if="isLoggedIn">
        <a @click="logout">
          <li>登出<!-- 只顯示登出按鈕 --></li>
        </a>
      </div>
      <div v-else>
        <a @click="showPopup = true">
          <li>會員登入</li>
        </a>
      </div>

      <router-link to="/Membermanage/">
        <li>會員專區</li>
      </router-link>
      <router-link to="/Minigame/">
        <li>線上體驗</li>
      </router-link>
      <router-link to="/Branch/">
        <li>分館介紹</li>
      </router-link>
      <li class="themeArea" @click="toggleAllThemes">主題專區
        <ul>
          <li @click="toggleThemes">台北館
            <ul v-if="showThemes">
              <router-link to="/Theme/1" class="dropDown" @click="closeMenu"><li>成都醫院</li></router-link>
              <router-link to="/Theme/2" class="dropDown" @click="closeMenu"><li>時光迷宮</li></router-link>
              <router-link to="/Theme/3" class="dropDown" @click="closeMenu"><li>末日庇護所</li></router-link>
              <router-link to="/Theme/4" class="dropDown" @click="closeMenu"><li>代碼深淵</li></router-link>
            </ul>
          </li>
          <li @click="toggleThemes">台中館
            <ul v-if="showThemes">
              <router-link to="/Theme/5" class="dropDown" @click="closeMenu"><li>逃離武石監</li></router-link>
              <router-link to="/Theme/6" class="dropDown" @click="closeMenu"><li>恐怖密室</li></router-link>
              <router-link to="/Theme/7" class="dropDown" @click="closeMenu"><li>逃出虛空</li></router-link>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </header>
</template>

<!--
      <li><router-link to="/">前後台分流頁</router-link></li> 
      <li><router-link to="/Announcement/">最新消息</router-link></li>
      <li><router-link to="/Popupcard/">彈跳甲魚</router-link></li>
      <li><router-link to="/Theme_Time/">快樂地城</router-link></li>
      <li><router-link to="/Theme_Lock/">武石監</router-link></li>
     <li><router-link to="/ThemeAlien/">逃出虛空</router-link></li>
      <li><router-link to="/preorder/">預定資料</router-link></li>
      <li><router-link to="/orderinform/">資料確認</router-link></li>
      <li><router-link to="/Theme/">主題介紹</router-link></li>
      <li><router-link to="/Theme_test/">測</router-link></li>
      <li><router-link to="/pay/">結帳</router-link></li>
      <li><router-link to="/dead1A2Bgame/">1A2B</router-link></li> -->
<!-- <li><router-link to="/pointcard/">集點卡</router-link></li> -->