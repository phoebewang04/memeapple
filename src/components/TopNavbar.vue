<script>
import '../assets/css/style.css'

export default {
  data(){
    return{
      visible_active:false
    };
  },
  methods: {
    showMenuBar(){
      if(window.innerWidth <= 650){
        this.visible_active = !this.visible_active;
      }
    }
  },
  created(){
      if(window.innerWidth > 650){
        this.visible_active = true;
      }
  }
};
</script>

<template>
    <header class="top">
        <router-link to="/index/"><img src="../assets/img/memelogo.svg" alt=""></router-link>
        <font-awesome-icon class="fa" icon="bars" @click="showMenuBar"></font-awesome-icon>
        <ul id="menuBar" :class="{ visible: visible_active }">
            <li><router-link to="/">前後台分流頁</router-link></li>
            <li><router-link to="/Membermanage/">會員專區</router-link></li>
            <li><router-link to="/Minigame/">線上體驗</router-link></li>
            <li><router-link to="/Branch/">分館介紹</router-link></li>
             <li><router-link to="/Announcement/">最新消息</router-link></li>
            <li><router-link to="/Popupcard/">彈跳甲魚</router-link></li>
            <!-- <li><router-link to="/Theme_Time/">快樂地城</router-link></li> -->
            <!-- <li><router-link to="/Theme_Lock/">武石監</router-link></li> -->
            <!-- <li><router-link to="/ThemeAlien/">逃出虛空</router-link></li> -->
            <li><router-link to="/preorder/">預定資料</router-link></li>
             <li><router-link to="/orderinform/">資料確認</router-link></li>
            <li><router-link to="/Theme/">主題介紹</router-link></li>
            <li><router-link to="/Theme_test/">測</router-link></li>
           <li><router-link to="/pay/">結帳</router-link></li>
            <li><router-link to="/dead1A2Bgame/">1A2B</router-link></li>
        </ul>
    </header>
</template>