<script setup>
import '../assets/css/style.css';
import TopNavbar from '../components/TopNavbar.vue';
import Footerbar from '../components/Footerbar.vue';
import { createProgressBars, createOverviewContent } from '../assets/js/themn_test.js'; // 引入外部 JS 文件
</script>

<template>
  <TopNavbar />
  <main class="theme_container">
    <section class="overview"></section>
  </main>
  <Footerbar />
</template>

<script>
export default {
  name: 'MyComponent',
  mounted() {
    const overviewSection = document.querySelector('.overview');

    if (overviewSection) {
      const overviewText = createOverviewContent();
      overviewSection.appendChild(overviewText);

      const progressBars = createProgressBars();
      overviewSection.appendChild(progressBars);
    } else {
      console.error("未找到 '.overview' 元素");
    }
  }
};
</script>

<style scoped>
.theme_container {
  padding: 20px;
}
.overview_text {
    width: 50%;
    text-align: justify;
}
.progress_bar.hospital {
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    height: 30px;
    margin: 12px 0;
}
.progress.hospital {
    text-align: center;
    line-height: 30px;
    white-space: nowrap;
    border-radius: 16px 0 0 16px;
}
.theme_number {
    }
</style>
