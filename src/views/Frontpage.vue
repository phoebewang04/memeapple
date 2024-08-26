<script setup>
import '../assets/css/style.css';
import TopNavbar from '../components/TopNavbar.vue';
import Footerbar from '../components/Footerbar.vue';
</script>

<template>
  <TopNavbar />

  <main class="main-frontpage">
    <section class="wrapper-frontpage">
      <div class="overlay-2"></div>

      <!-- Logo圖片 -->
      <img src="../assets/img/memelogo.svg" alt="" class="logo">
      <section class="content">
        <!-- 前端按鈕 -->
        <section class="content-btn-L">
          <img src="../assets/img/BTN-yellow.png" alt="">
          <router-link to="/index/"><a href="">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            進入前端
          </a></router-link>
        </section>
        <!-- 中央內容 -->
        <section class="content-text">
          
          <div class="content-text-topic">
            <h1>命運的骰子已經骰下</h1>
            <p>歡迎來到 Meme謎因的迷宮</p>
            <p>迷途的羔羊</p>
          </div>

          <div class="content-text-slogran">
            <span>選擇你的</span>
            <span class="content-text-slogran-red">下一步...</span>
          </div>
        </section>
        <!-- 右側按鈕 -->
        <section class="content-btn-R">
          <img src="../assets//img/BTN-blue.png" alt="">
          <router-link to="/BackstageIndex/"><a href="">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            進入後端
          </a></router-link>
        </section>
      </section>
    </section>
  </main>

  <Footerbar />

</template>
<style></style>

<script>
export default {
  components: {
    TopNavbar
  },

  computed: {},
  
  mounted() {
  },
  
  data() {
    return {
    };
  },
};
</script>