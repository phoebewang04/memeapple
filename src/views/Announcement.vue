<template>
  <TopNavbar />
  <main class="main-announcement">
    <section class="wrapper-announcement">
      <!-- 中央內容 -->
      <section class="content-announcement-new" v-if="announcements.length">
        <div v-for="announcement in announcements" :key="announcement.ID">
          <!-- 左邊圖像內容 -->
          <section class="announcement-img">
            <img :src="`/${announcement.IMG}`" alt="" class="announcementPic">
          </section>

          <!-- 右邊文字內容 -->
          <section class="announcement-text">
            <h1>{{ announcement.TOPIC }}</h1>
            <p>{{ announcement.ARTICLE }}</p>
            <p>{{ announcement.PUBLISH_DATE }}</p>
          </section>
        </div>
      </section>

      <!-- 按鈕 -->
      <section class="NewsBack">
        <router-link to="/index/">
          <button class="btn btnano">回到首頁</button>
        </router-link>
      </section>
    </section>
  </main>
  <Footerbar />
</template>

<script>
import '../assets/css/style.css';
import TopNavbar from '../components/TopNavbar.vue';
import Footerbar from '../components/Footerbar.vue';

export default {
  components: {
    TopNavbar,
    Footerbar
  },
  data() {
    return {
      announcements: []
    };
  },
  mounted() {
    this.fetchAnnouncements();
  },
  methods: {
    fetchAnnouncements() {
      fetch('http://localhost/meme_apple/public/php/api/announcement.php')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          this.announcements = data;
        })
        .catch(error => {
          console.error('Error fetching announcements:', error);
        });
    }
  }
}
</script>
<!-- 
<template>
  <TopNavbar />
  <main class="main-announcement">
    <section class="wrapper-announcement">

      <section class="content-announcement-new">

        <section class="announcement-img"><img src="@/assets/img/banner_openning.png" alt="" class="announcementPic">
        </section>


        <section class="announcement-text">
          <h1>謎因工作室盛大開幕！</h1>
          <p>謎因工作室已於 2024年6月1日 盛大開幕！誠摯邀請您來體驗我們全新的密室逃脫挑戰，享受刺激與驚喜的冒險之旅！</p>
          <p>您需要依靠智慧和團隊合作來找到出口，這是測試解謎能力並與親朋好友共度難忘時光的絕佳機會。無論您是新手還是老手，我們都能為您提供難忘的體驗！</p>
          <p>為慶祝開幕，我們特別推出限時優惠活動，現在預約，即可享受特別折扣！立即邀請親朋好友，一起來挑戰謎因工作室的密室逃脫吧！</p>
        </section>
      </section>

  
      <section class="NewsBack"><router-link to="/index/"><button class="btn btnano">回到首頁</button></router-link>
      </section>

    </section>
  </main>
  <Footerbar />
</template> -->