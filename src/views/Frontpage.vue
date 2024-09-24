<script setup>
import '../assets/css/style.css';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// 使用ref來引用元素
const frontpageLogo = ref(null);
const frontpageBtnR = ref(null);
const frontpageBtnL = ref(null);
const frontpageSlogran = ref(null);

onMounted(() => {
  // 當組件掛載時觸發動畫
  triggerAnimations();
});

router.beforeEach((to, from, next) => {
  // 當導航到'/'路徑且不是從'/'路徑來時觸發動畫
  if (to.path === '/' && from.path !== '/') {
    triggerAnimations();
  }
  // 繼續導航
  next();
});

function triggerAnimations() {

  setTimeout(function () {
    if (frontpageLogo.value) {
      frontpageLogo.value.classList.add('show');
    }
  }, 500);
  // 延遲 500 毫秒後顯示

  setTimeout(function () {
    if (frontpageBtnR.value) {
      frontpageBtnR.value.classList.add('show');
    }
  }, 800);


  setTimeout(function () {
    document.querySelector('.frontpage-btnL').classList.add('show');
  }, 800);


  setTimeout(function () {
    if (frontpageBtnL.value) {
      frontpageBtnL.value.classList.add('show');
    }
  }, 1000);
  // 延遲 1000 毫秒後顯示
};

</script>

<template>
  <main class="main-frontpage">
    <section class="wrapper-frontpage">
      <!-- Logo圖片 -->
      <img src="@/assets/img/memelogo.svg" alt="" class="frontpage-logo" ref="frontpageLogo">
      <!-- 內容部分 -->
      <section class="content-frontpage">

        <!-- 前端按鈕 -->
        <router-link to="/index/">
          <section class="frontpage-btnL" ref="frontpageBtnL">
            <img src="@/assets/img/BTN-yellow.png" alt="" class="glow-effect-L">
            <a href="">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              進入前台
            </a>
          </section>
        </router-link>

        <!-- 右側按鈕 -->
        <router-link to="/BackstageLogin/">
          <section class="frontpage-btnR" ref="frontpageBtnR">
            <img src="@/assets/img/BTN-blue.png" alt="" class="glow-effect-R">
            <a href="">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              進入後台
            </a>
          </section>
        </router-link>
      </section>
    </section>
  </main>
</template>
