<script setup>
import '../assets/css/style.css';
import TopNavbar from '../components/TopNavbar.vue';
import Footerbar from '../components/Footerbar.vue';
</script>

<template>
  <TopNavbar />

  <main class="main-homepage">
    <section class="wrapper-homepage">
      <!-- 首頁第一部分  主視覺-->
      <section class="content-p-homedesign">
        <!-- 浮動文字特效區域 -->
         <div class="content-p-homedesign-effect"></div>
        <!-- 文字區域 -->
        <div class="content-p-homedesign-text">
          <h1>Meme謎因</h1>
          <h2>Unknow Story</h2>
        </div>
        <div class="content-p-homedesign-img">
          <!-- 照片1 -->
          <div class="homedesign-card01">
            <img src="" alt="人像1">
          </div>
          <!-- 照片2 -->
          <div class="homedesign-card02">
            <img src="" alt="人像2">
          </div>
          <!-- 照片3 -->
          <div class="homedesign-card03">
            <img src="" alt="人像3">
          </div>
        </div>
      </section>
 
      <!-- 首頁第四部分 如何遊玩-->
      <section class="content-p-howtoplay"></section>

      <!-- 首頁第五部分 最新消息-->
      <section class="content-p-announcement"></section>

       <!-- 首頁第六部分 FAQ -->
      <section class="content-p-faq"></section>
    </section>
  </main>
  <Footerbar />
</template>
