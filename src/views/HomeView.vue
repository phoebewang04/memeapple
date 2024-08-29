<script setup>
import '../assets/css/style.css';
import TopNavbar from '../components/TopNavbar.vue';
import Footerbar from '../components/Footerbar.vue';
</script>



<template>
  <TopNavbar />

  <main class="main-homepage">
    <section class="wrapper-homepage">
      <section class="content-p-homedesign">
        <h1>Meme謎因</h1>
        <h2>Unknow Story</h2>
      </section>
      <!-- 首頁第二部分  品牌故事-->
      <section class="content-p-brandstory"></section>
      <!-- 首頁第三部分 限時主題 -->
      <section class="content-p-limitlevel"></section>
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
