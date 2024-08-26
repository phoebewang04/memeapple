<script>
import { ref } from 'vue';
import '../assets/css/style.css'

export default {
    data() {
    return {
      menuBarVisible: false
    };
  },
  methods: {
    showMenuBar() {
      console.log('Menu bar icon clicked');
      this.menuBarVisible = !this.menuBarVisible;
    }
  },
  mounted() {
    window.addEventListener('resize', this.checkScreenWidth);
    this.checkScreenWidth();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenWidth);
  },
  methods: {
    checkScreenWidth() {
      if (window.innerWidth <= 650) {
        this.menuBarVisible = true;
      } else {
        this.menuBarVisible = false;
      }
    },
    showMenuBar() {
      console.log('Menu bar icon clicked');
      this.menuBarVisible = !this.menuBarVisible;
    }
  }
};
</script>


<template>

    <header class="top backstage_header">
        <router-link to="/BackstageIndex/"><h2 class="backstage_topic">謎因工作室後台管理系統</h2></router-link>
        <i class="fa fa-bars" aria-hidden="true" onclick="showMenuBar()"></i>
        <ul id="menuBar">
            <li><router-link to="/NewsMenage/">最新消息管理</router-link></li>
            <li><router-link to="/MemberMenage/">會員資料管理</router-link></li>
            <li><router-link to="/OrderMemage/">訂單資料管理</router-link></li>
        </ul>
    </header>
    
</template>


<style lang="scss" scoped>

</style>