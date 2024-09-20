<script>
import '../assets/css/style.css';
import LoginRegisterPopup from './login.vue';

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
      showPopup: false
    };
  },
  methods: {
    showMenuBar() {
      if (window.innerWidth <= 700) {
        this.visible_active = !this.visible_active;
      }
    },
    handleResize() {
      if (window.innerWidth > 700) {
        this.visible_active = true;
      } else {
        this.visible_active = false;
      }
    },
    logout() {
      this.isLoggedIn = false;
      this.$emit('logout'); // 發出登出事件
    },
  },
  created() {
    this.handleResize();
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<template>
  <header class="top">
    <router-link to="/index/"><img src="../assets/img/memelogo.svg" alt=""></router-link>
    <font-awesome-icon class="fa" icon="bars" @click="showMenuBar"></font-awesome-icon>
    <ul id="menuBar" :class="{ visible: visible_active }">
      <div v-if="isLoggedIn">
      <li><a @click="logout">登出</a> <!-- 只顯示登出按鈕 --></li>
      </div>
      <div v-else>
        <li><a @click="showPopup = true">會員登入</a></li>
      </div>
      <!-- <li><a @click="showPopup = true">會員登入</a></li> -->
      <LoginRegisterPopup v-if="showPopup" @close="showPopup = false" />
      <li><router-link to="/Membermanage/">會員專區</router-link></li>
      <li><router-link to="/Minigame/">線上體驗</router-link></li>
      <li><router-link to="/Branch/">分館介紹</router-link></li>
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
      <!-- <li><router-link to="/minigameL/">華容道</router-link></li> -->
      <li>主題專區
        <ul>
          <li>台北館
            <ul>
              <li><router-link to="/Theme/1" class="dropDown">成都醫院</router-link></li>
              <li><router-link to="/Theme/2" class="dropDown">時光迷宮</router-link></li>
              <li><router-link to="/Theme/3" class="dropDown">末日庇護所</router-link></li>
              <li><router-link to="/Theme/4" class="dropDown">代碼深淵</router-link></li>
            </ul>
          </li>
          <li>台中館
            <ul>
              <li><router-link to="/Theme/5" class="dropDown">逃離武石監</router-link></li>
              <li><router-link to="/Theme/6" class="dropDown">恐怖密室</router-link></li>
              <li><router-link to="/Theme/7" class="dropDown">逃出虛空</router-link></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </header>
</template>