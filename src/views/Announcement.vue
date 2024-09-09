<script setup>
// import { useRouter,useRoute } from 'vue-router';
// const router = useRouter()
// const route = useRoute()
// console.log(router);
// console.log(route.query);

// ajax


import '../assets/css/style.css';
import { onMounted } from 'vue';
import TopNavbar from '../components/TopNavbar.vue';
import Footerbar from '../components/Footerbar.vue';

onMounted(() => {
  triggerAnimations();
});

function triggerAnimations() {

  setTimeout(function () {
    document.querySelector('.announcement-bread').classList.add('show');
  }, 700);
  // 延遲 500 毫秒後顯示

  setTimeout(function () {
    document.querySelector('.announcement-img').classList.add('show');
  }, 800);
  // 延遲 500 毫秒後顯示

  setTimeout(function () {
    document.querySelector('.announcement-text').classList.add('show');
  }, 900);
  // 延遲 500 毫秒後顯示

  setTimeout(function () {
    document.querySelector('.NewsBack').classList.add('show');
  }, 900);
  // 延遲 500 毫秒後顯示

};


</script>


<template>
  <TopNavbar />
  <main class="main-announcement">
    <section class="wrapper-announcement">
      <!-- 中央內容 -->
      <section class="content-announcement-new">
        <!-- 左邊圖像內容 -->
        <section class="announcement-img"><img src="../assets/img/AnnouncementPic01.jpg" alt="" class="announcementPic">
        </section>

        <!-- 右邊文字內容 -->
        <section class="announcement-text">
          <h1>謎因工作室盛大開幕！</h1>
          <p>預約我們的謎因密室逃脫，體驗刺激解謎挑戰！謎因工作室將於2024年10月1日盛大開幕，邀請您一起探索神秘世界！</p>
          <p>現在就邀請你的親朋好友們！一起體驗我們提供的優良密室逃脫服務，不管是。</p>
          <p>「看我帶回醫院裡面的消防斧頭，這樣我就可以證明我有來過這邊!」你一臉不屑的擊破被封鎖的窗戶，再次進入月光無法觸及的漆黑深淵，無數的眼睛凝視著你，期待下一隻迷路的羔羊成為祭品。</p>
        </section>
      </section>

      <!-- 按鈕 -->
      <section class="NewsBack"><router-link to="/index/"><button class="btn btnano">回到首頁</button></router-link>
      </section>

    </section>
  </main>
  <Footerbar />
</template>