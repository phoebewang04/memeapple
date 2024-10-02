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
      showTaipeiThemes: false, // 控制台北館主題的顯示
      showTaichungThemes: false, // 控制台中館主題的顯示
      showALLThemes: true,
    };
  },
  methods: {
    handleScroll() {
      // console.log('滾動事件觸發');
      // console.log('visible_active:', this.visible_active);
    },
    showMenuBar() {
      this.visible_active = !this.visible_active; // 不使用寬度條件，直接切換狀態
      console.log(this.visible_active)
      console.log('showMenuBar triggered');
      console.log(window.innerWidth);
      // this.visible_active = true;
      console.log(this.visible_active); // 檢查是否變為 true
      // if (window.innerWidth <= 700) {
      //   this.visible_active = !this.visible_active;
      // }
      // if (this.showPopup) {
      //   this.visible_active = false;
      // }
    },
    handleResize() {
      if (window.innerWidth > 700) {
        this.visible_active = true;
      } else {
        this.visible_active = false;
      }
    },
    handleClickOutside(event) {    // 用於檢查點擊是否在選單外
      // 判斷點擊是否在主題專區選單內
      const menu = this.$refs.themeMenu; // 使用ref指向主題專區選單的容器
      const hamburger = this.$refs.HambergerAwasome; // 使用 ref 獲取漢堡菜單圖標
      // if (menu && !menu.contains(event.target) && !hamburger.contains(event.target)) {
      //   this.closeMenu();
      // }
      // 確保 hamburger 存在並且正確引用根元素
      if (menu && !menu.contains(event.target) && hamburger && !hamburger.$el.contains(event.target)) {
        this.closeMenu();
      }
    },
    closeMenu() {
      this.visible_active = false;
      this.showALLThemes = false;
      this.showTaipeiThemes = false;
      this.showTaichungThemes = false;
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
      this.showALLThemes = !this.showALLThemes;
      this.showTaipeiThemes = false;
      this.showTaichungThemes = false;
    },
    toggleTaipeiThemes(event) {
      event.stopPropagation();
      this.showTaipeiThemes = !this.showTaipeiThemes;
      this.showTaichungThemes = false;
    },
    toggleTaichungThemes(event) {
      event.stopPropagation();
      this.showTaichungThemes = !this.showTaichungThemes;
      this.showTaipeiThemes = false;

    },
  },
  created() {
    this.checkLoginStatus();
    this.handleResize();
  },
  mounted() {
    this.showALLThemes = false;
    console.log(this.$refs); // 檢查 refs 是否正確
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('click', this.handleClickOutside);
    // console.log('mounted: visible_active:', this.visible_active);

    // 檢查螢幕寬度
    if (window.innerWidth > 700) {
      // this.showThemes = true;
      this.showTaipeiThemes = true;
      this.showTaichungThemes = true;
    } else {
      this.showTaipeiThemes = false;
      this.showTaichungThemes = false;
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('click', this.handleClickOutside);
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<template>
  <LoginRegisterPopup v-if="showPopup" @close="showPopup = false" @login="handleLogin" />

  <header class="top">
    <router-link to="/index/"><img src="../assets/img/memelogo.svg" alt=""></router-link>
    <font-awesome-icon class="fa HambergerAwasome" icon="bars" @click.stop="showMenuBar"
      ref="HambergerAwasome"></font-awesome-icon>
    <ul id="menuBar" :class="{ visible: visible_active }">
      <div class="memberstate" v-if="isLoggedIn">
        <label class="mamberName">HELLO，{{ user.name }}</label>
        <a @click="logout">
          <li><span>登出<!-- 只顯示登出按鈕 --></span></li>
        </a>
      </div>
      <div v-else>
        <a @click="showPopup = true">
          <li><span>會員登入</span></li>
        </a>
      </div>

      <router-link to="/Membermanage/" active-class="active-link">
        <li><span>會員專區</span></li>
      </router-link>
      <router-link to="/Minigame/" active-class="active-link">
        <li><span>線上體驗</span></li>
      </router-link>
      <router-link to="/Branch/" active-class="active-link">
        <li><span>分館介紹</span></li>
      </router-link>
      <li class="themeArea" @click="toggleThemes" ref="themeMenu">
        <a @click.stop="toggleThemes" active-class="active-link">主題專區</a>
        <ul v-if="showALLThemes">
          <li @click="toggleTaipeiThemes">台北館
            <ul v-if="showTaipeiThemes" id="ThemeUL">
              <router-link to="/Theme/1" class="dropDown" @click="closeMenu">
                <li>成都醫院</li>
              </router-link>
              <router-link to="/Theme/2" class="dropDown" @click="closeMenu">
                <li>時光迷宮</li>
              </router-link>
              <router-link to="/Theme/3" class="dropDown" @click="closeMenu">
                <li>末日庇護所</li>
              </router-link>
              <router-link to="/Theme/4" class="dropDown" @click="closeMenu">
                <li>代碼深淵</li>
              </router-link>
            </ul>
          </li>
          <li @click="toggleTaichungThemes">台中館
            <ul v-if="showTaichungThemes" id="ThemeUL">
              <router-link to="/Theme/5" class="dropDown" @click="closeMenu">
                <li>逃離武石監</li>
              </router-link>
              <router-link to="/Theme/6" class="dropDown" @click="closeMenu">
                <li>恐怖密室</li>
              </router-link>
              <router-link to="/Theme/7" class="dropDown" @click="closeMenu">
                <li>逃出虛空</li>
              </router-link>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </header>
</template>