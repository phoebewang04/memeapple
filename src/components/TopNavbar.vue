<script>
import { ref } from 'vue';
import '../assets/css/style.css'

export default {
    setup() {
    const menuBarVisible = ref(false);

    const showMenuBar = () => {
      console.log('Menu bar icon clicked');
      menuBarVisible.value = !menuBarVisible.value;
    };

    return {
      menuBarVisible,
      showMenuBar
    };
  }
};
</script>

<template>
    <header class="top">
        <!-- 這是logo，點了之後回到index.html -->
        <router-link to="/"><img src="../assets/img/memelogo.svg" alt=""></router-link>
        <!-- <i class="fa fa-bars" aria-hidden="true" @click="showMenuBar()"></i> -->
        <font-awesome-icon class="fa" icon="bars" @click="showMenuBar"></font-awesome-icon>
        <!-- 這是列表，透過router連結到其他 .vue 頁面 -->
        <ul id="menuBar" :class="{ 'visible': menuBarVisible }">
            <!-- <li><router-link to="/index/">首頁</router-link></li> -->
            <!-- <li><router-link to="/Membermanage/">會員專區</router-link></li> -->
            <li><router-link to="/Minigame/">線上體驗</router-link></li>
            <li><router-link to="/Branch/">分館介紹</router-link></li>
            <!-- <li><router-link to="/Announcement/">最新消息</router-link></li> -->
            <!-- <li><router-link to="/Popupcard/">彈跳甲魚</router-link></li> -->
            <!-- <li><router-link to="/Theme_Time/">快樂地城</router-link></li>  -->
            <!-- <li><router-link to="/Theme_Lock/">武石監</router-link></li> -->
            <!-- <li><router-link to="/ThemeAlien/">逃出虛空</router-link></li> -->
            <!-- <li><router-link to="/preorder/">預定資料</router-link></li> -->
            <!-- <li><router-link to="/orderinform/">資料確認</router-link></li> -->
            <li><router-link to="/Theme/">主題介紹</router-link></li>
            <!-- <li><router-link to="/pay/">結帳</router-link></li> -->
            <li><router-link to="/Theme_test/">測</router-link></li>
<<<<<<< HEAD
=======
<<<<<<< HEAD
            <!-- <li><router-link to="/pay/">結帳</router-link></li> -->
=======
          
>>>>>>> 1917a06727d75a9b1cc1cd9e591e80cddcbd1703
>>>>>>> 7a6f5db29befc7277a8c3708624b74a3019952e9
        </ul>
    </header>
</template>