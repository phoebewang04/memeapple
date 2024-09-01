
<script setup>
import '../assets/css/style.css';

document.addEventListener('DOMContentLoaded', function() {

  setTimeout(function(){
    document.querySelector('.frontpage-logo').classList.add('show');
  },500);
  // 延遲 500 毫秒後顯示

  setTimeout(function(){
    document.querySelector('.frontpage-btnR').classList.add('show');
  },800);
  

  setTimeout(function(){
    document.querySelector('.frontpage-btnL').classList.add('show');
  },800);
 

  setTimeout(function() 
  {
    document.querySelector('.frontpage-slogran').classList.add('show');
  }, 1000); 
  // 延遲 1000 毫秒後顯示
});

</script>

<template>
  <main class="main-frontpage">
    <section class="wrapper-frontpage">
      <!-- Logo圖片 -->
      <img src="../assets/img/memelogo.svg" alt="" class="frontpage-logo">
      <!-- 內容部分 -->
      <section class="content-frontpage">

        <!-- 前端按鈕 -->
        <section class="frontpage-btnL">
          <img src="../assets/img/BTN-yellow.png" alt="" class="glow-effect-L">
          <router-link to="/index/"><a href="">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            進入前台
          </a></router-link>
        </section>

        <!-- 右側按鈕 -->
        <section class="frontpage-btnR">
          <img src="../assets//img/BTN-blue.png" alt="" class="glow-effect-R">
          <router-link to="/BackstageIndex/"><a href="">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            進入後台
          </a></router-link>
        </section>
      </section>

        <!-- 中央內容 -->
        <section class="frontpage-text">
          <!-- <div class="frontpage-topic">
            <h1>命運的骰子已經骰下</h1>
            <p>歡迎來到 Meme謎因的迷宮</p>
          </div> -->
          <!-- 中央內容標語 -->
          <div class="frontpage-slogran">
            <span>選擇你的</span>
            <span class="frontpage-slogranred">下一步...</span>
          </div>
        </section>
    </section>
  </main>
</template>

