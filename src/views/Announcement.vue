<template>
  <TopNavbar />
  <ScrollToTop />
  <main class="main-announcement">
    <section class="wrapper-announcement">
      <!-- 中央內容 -->
      <!-- 使用 v-if 指令來檢查 announcement 是否存在，只有在 announcement 存在時才渲染內容 -->
      <!-- 如果 announcement 不存在 則整個announcement.vue不會渲染，你會看到空的-->
      <section v-if="announcement">
        <div class="content-announcement-new">
          <!-- 左邊圖像內容 -->
          <section class="announcement-img" data-aos="fade-up" data-aos-delay="80">
            <!-- 動態綁定圖片的 src 屬性，顯示公告的圖片 -->
            <!-- IMG 是 NEWS表格的 圖片欄位名稱 -->
            <!-- <img :src="`/${announcement.IMG}`" alt="" class="announcementPic"> -->
            <img :src="getImageUrl(announcement.IMG)" alt="" class="announcementPic">
          </section>

          <!-- 右邊文字內容 -->
          <section class="announcement-text" data-aos="fade-up" data-aos-delay="100">
            <!-- 顯示公告的主題 ， TOPIC 是 NEWS 表格的欄位，代表標題 -->
            <h1>{{ announcement.TOPIC }}</h1>
            <!-- 顯示公告的發布日期  ， PUBLISH_DATE 是 NEWS 表格的欄位，代表發布日期-->
            <p>{{ announcement.PUBLISH_DATE }}</p>
            <!-- 顯示公告的內容 ， ARTICLE 是 NEWS 表格的欄位，代表文章內容 -->
            <!-- 你看到文章內容會斷行是因為我在 NEWS 表格裡面塞資料的時候用到 \n\n -->
            <!-- 其實只要有一個\n就可以，但是\n\n 斷的比較漂亮 -->
            <!-- scss我還有添加 white-space: pre-line; 這樣可以避免使用v-html被攻擊的危險   -->
            <p>{{ announcement.ARTICLE }}</p>
          </section>
        </div>
      </section>

      <!-- 按鈕 -->
      <section class="NewsBack">
        <router-link to="/index/">
          <button class="btn btnano" data-aos="fade-up" data-aos-delay="120">回到首頁</button>
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
import ScrollToTop from '../components/ScollToTop.vue'; // 引入返回頂部組件
import AOS from 'aos'; // 引入AOS動畫庫
import 'aos/dist/aos.css'; // 引入AOS動畫庫的樣式

export default {
  components: {
    TopNavbar,
    Footerbar,
    ScrollToTop,
  },
  data() {
    return {
      baseUrl: import.meta.env.BASE_URL,
      // 初始化 announcement 變數為 null
      announcement: null
    };
  },
  mounted() {
    // 組件掛載後調用 fetchAnnouncement(這個是我們自己定義的) 方法，根據路由參數 ID 獲取公告資料
    // 這邊路由參數設定請參考  位於router資料夾裡面的index.js
    // 搜尋這一段 { path: '/Announcement/:id', name: 'Announcement', meta: { title: '最新消息' }, component: () => import('../views/Announcement.vue') } 
    this.fetchAnnouncement(this.$route.params.id);

    // 組件掛載後初始化AOS動畫
    AOS.init({
      duration: 1200,
      once: false,
      easing: 'ease',
    });

    // 延時刷新AOS動畫
    this.$nextTick(() => {
      setTimeout(() => {
        AOS.refresh(); // 延时刷新 AOS
      }, 100); // 100ms 延时
    });
  },
  methods: {
    getImageUrl(imgPath) {
      return `${this.baseUrl}${imgPath}`;
    },
    // 定義 fetchAnnouncement 方法，用於根據 ID 獲取公告資料
    fetchAnnouncement(id) {
      // 你的php需要連結到announcement.php，且你的網址要?id = ${你的id}
      // fetch(`http://localhost/sweethome/meme/public/php/api/announcement.php?id=${id}`)
      fetch(import.meta.env.VITE_API_BASE + `/api/announcement.php?id=${id}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data); // 檢查回應資料
          // 將獲取到的資料賦值給 announcement 變數
          this.announcement = data.length ? data[0] : null;
        })
        .catch(error => {
          console.error('Error fetching announcement:', error);
        });
    }
  },
  watch: {
    // 監聽路由參數 ID 的變化，當 ID 變化時重新調用 fetchAnnouncement 方法
    '$route.params.id': function (newId) {
      this.fetchAnnouncement(newId);
    }
  }
  ,
  updated() {
    // 組件更新後手動刷新AOS動畫
    this.$nextTick(() => {
      AOS.refresh();
    });
  },
}
</script>