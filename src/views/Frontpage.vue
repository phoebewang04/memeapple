
<script setup>
import '../assets/css/style.css';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  triggerAnimations();
});

router.beforeEach((to, from, next) => {
  if (to.path === '/' && from.path !== '/') {
    triggerAnimations();
  }
  next();
});

function triggerAnimations() {

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
};

</script>

<template>
  <main class="main-frontpage">
    <section class="wrapper-frontpage">
      <!-- Logo圖片 -->
      <img src="../assets/img/memelogo.svg" alt="" class="frontpage-logo">
      <!-- 內容部分 -->
      <section class="content-frontpage">

        <!-- 前端按鈕 -->
        <router-link to="/index/"><section class="frontpage-btnL">
          <img src="../assets/img/BTN-yellow.png" alt="" class="glow-effect-L">
          <a href="">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            進入前台
          </a>
        </section></router-link>

        <!-- 右側按鈕 -->
        <router-link to="/BackstageIndex/"><section class="frontpage-btnR">
          <img src="../assets//img/BTN-blue.png" alt="" class="glow-effect-R">
          <a href="">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            進入後台
          </a>
        </section></router-link>
      </section>

        <!-- 中央內容 -->
        <section class="frontpage-text">
          <!-- 中央內容標語 -->
          <div class="frontpage-slogran">
            <span>選擇你的</span>
            <span class="frontpage-slogranred">下一步...</span>
          </div>
        </section>
    </section>
  </main>
</template>

