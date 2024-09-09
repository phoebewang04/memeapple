<script>
import '../assets/css/style.css';
import TopNavbar from '../components/TopNavbar.vue';
import Footerbar from '../components/Footerbar.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default {
  components: {
    TopNavbar,
    Footerbar,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Pagination, Navigation],
      faqs: [
        {
          question: "請問可以在開始前增加人數嗎？",
          answer: "可以喔!只要開始遊戲前補繳多一人產生的費用即可，但唯獨超過當前關卡最大出席人數將無法一同參與，建議最好先與朋友再次確認，讓雙方都有一次美好的密室逃脫體驗!"
        },
        {
          question: "請問有心血管疾病適合遊玩嗎？",
          answer: "由於本館部分主題具有恐怖成分，且可能需要耗費體力，為了您的身體健康建議與醫生諮詢，並主動告知服務人員，服務人員將會安排安全路線給您！"
        },
        {
          question: "請問遊戲過程中可以中途退出嗎？",
          answer: "可以的，如果您感到不適或害怕，可以隨時告知工作人員，我們會協助您安全退出。"
        },
        {
          question: "請問遊戲過程中可以使用手機嗎？",
          answer: "為了確保遊戲的沉浸感和其他玩家的體驗，我們建議在遊戲過程中不要使用手機。"
        },
        {
          question: "請問遊戲主題會定期更新嗎？",
          answer: "為了確保玩家們每次遊玩體驗皆不同，因此同一遊戲主題關卡配置仍會定期更新配置，而主題也會隨季節推出不同主題！"
        },
        {
          question: "請問去年的絕體絕命東京殘響主題是否還會再次推出？",
          answer: "很遺憾該主題已經下架，誠摯推薦您持續關注我們，敬請期待其他主題推出！"
        },
      ],
      news: [
        {
          img: "/src/assets/img/banner_openning.png",
          name: "盛大開幕",
          title: "謎因工作室盛大開幕！",
          newstext: "預約我們的謎因密室逃脫，體驗刺激解謎挑戰！還有……Read More"
        },
        {
          img: "/src/assets/img/banner_teacher.png",
          name: "教師專屬特惠",
          title: "緯育教師專屬特惠！",
          newstext: "教師節快樂！感謝緯育老師們無私的奉獻，現在只要……Read More"
        },
        {
          img: "/src/assets/img/banner_discount.png",
          name: "中秋特惠",
          title: "歡慶中秋！",
          newstext: "謎因工作室隆重推出中秋特惠！四人同行一人免費！還有……Read More"
        },
        {
          img: "/src/assets/img/banner_comingsoon.png",
          name: "全新主題",
          title: "全新主題即將推出！",
          newstext: "謎因工作室神祕新關卡即將於2024年11月推出！敬請期待！我們……Read More"
        }
      ],
      currentIndex: 0,
      itemsPerPage: 3 // 初始化 itemsPerPage
    };

  },
  computed: {
    visibleNews() {
      return this.news.slice(this.currentIndex, this.currentIndex + 3);
    }
  },
  methods: {
    handleScroll() {
      requestAnimationFrame(() => {
        AOS.refresh(); // 刷新 AOS
      });
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    nextSlide() {
      if (this.currentIndex < this.news.length - this.itemsPerPage) {
        this.currentIndex++;
      }
    },
    updateItemsPerPage() {
      if (window.innerWidth < 700) {
        this.itemsPerPage = 1;
      } else {
        this.itemsPerPage = 3;
      }
    }
  },
  mounted() {
    AOS.init({
      duration: 1200,
      once: false,
      easing: 'ease',
    });

    this.$nextTick(() => {
      setTimeout(() => {
        AOS.refresh(); // 延时刷新 AOS
      }, 100); // 100ms 延时
    });

    this.updateItemsPerPage(); // 初始化時更新 itemsPerPage
    window.addEventListener('resize', this.updateItemsPerPage); // 監聽窗口大小變化
    const word = document.querySelectorAll('.homeeffect-word');
    // 隨機顏色
    word.forEach(word => {
      const randomTop = Math.random() * 100;
      const randomLeft = Math.random() * 100;
      const randomRight = Math.random() * 100;
      const randomBottom = Math.random() * 100;
      const randomFontSize = Math.random() * 1.25 + 1;
      const randomOpacity = Math.random();
      const randomScale = Math.random() * 2 + 0.25;

      word.style.top = `${randomTop}%`;
      word.style.left = `${randomLeft}%`;
      word.style.right = `${randomRight}%`;
      word.style.bottom = `${randomBottom}%`;
      word.style.fontSize = `${randomFontSize}em`;
      word.style.opacity = randomOpacity;
      word.style.transform = `translate(-30%, -10%) scale(${randomScale})`;
    });

    // faq縮放
    const questions = document.querySelectorAll('.index-question');

    questions.forEach(question => {
      question.addEventListener('click', function () {
        const answer = this.nextElementSibling;

        if (answer.style.maxHeight) {
          answer.style.maxHeight = null;
          this.querySelector('.indexfaq-icon i').classList.replace('fa-minus', 'fa-plus');
        } else {
          answer.style.maxHeight = answer.scrollHeight + 'px';
          this.querySelector('.indexfaq-icon i').classList.replace('fa-plus', 'fa-minus');
        }
        AOS.refresh();  // 確保 FAQ 展開時動畫正常觸發
      });
    });

    window.addEventListener('scroll', this.handleScroll);
  },
  updated() {
    this.$nextTick(() => {
      AOS.refresh(); // 手動刷新 AOS
    });
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.updateItemsPerPage); // 移除窗口大小變化監聽
  },
};
</script>


<template>
  <TopNavbar />

  <main ref="scrollContainer" class="main-homepage" @scroll="roll_effect">
    <section class="wrapper-homepage">
      <!-- 首頁第一部分  主視覺-->
      <section class="content-homepage">
        <!-- 浮動文字特效區域 -->
        <div class="homepage-effect" data-aos="fade-up" data-aos-delay="50">
          <div class="homeeffect-word"># 代碼深淵</div>
          <div class="homeeffect-word"># 成都醫院</div>
          <div class="homeeffect-word"># 恐怖密室</div>
          <div class="homeeffect-word"># 末日庇護所</div>
          <div class="homeeffect-word"># 時光迷宮</div>
          <div class="homeeffect-word"># 逃離武石監</div>
          <div class="homeeffect-word"># 逃出虛空</div>
          <div class="homeeffect-word">怪談逐漸湧入...!</div>
        </div>
        <!-- 文字區域 -->
        <div class="homepage-text">
          <h1 data-aos="fade-up" data-text="Meme謎因">Meme謎因</h1>
          <p data-aos="fade-up" data-aos-delay="80">謎因工作室邀請勇敢的挑戰者進入神秘世界。</p>
          <p data-aos="fade-up" data-aos-delay="90">解開謎題背後故事，發掘內心深處智慧與勇氣。</p>
          <p data-aos="fade-up" data-aos-delay="100">體驗逃脫密室的刺激與成就感。</p>
        </div>
        <!-- 下方圖片區 -->
        <div class="homepage-img">
          <!-- 照片1 -->
          <div class="homepage-card01" data-aos="fade-up" data-aos-delay="100">
            <router-link to="/Theme/1"><img src="/src/assets/img/Index-person4.png" alt="成都醫院"></router-link>
          </div>
          <!-- 照片2 -->
          <div class="homepage-card02" data-aos="fade-up" data-aos-delay="200">
            <router-link to="/Theme/6"><img src="/src/assets/img/Index-person5.png" alt="恐怖密室"></router-link>
          </div>
          <!-- 照片3 -->
          <div class="homepage-card03" data-aos="fade-up" data-aos-delay="300">
            <router-link to="/Theme/5"><img src="/src/assets/img/Index-person6.png" alt="逃離武石監"></router-link>
          </div>
        </div>
      </section>

      <!-- 首頁第二部分  品牌故事-->
      <section class="content-brandstory">
        <!-- 閃光特效區域 -->
        <div class="brandstory-effect"></div>
        <!-- 內容區域 -->
        <section class="brandstory-content">
          <!-- 左側圖片 -->
          <div class="brandstory-img" data-aos="fade-up" data-aos-delay="100">
            <img src="../assets/img/breadstoryimg3.jpg" alt="品牌故事照片">
          </div>
          <!-- 文字區域 -->
          <div class="brandstory-text" data-aos="fade-up" data-aos-delay="200">
            <div class="brandstory-title">
              <span>— 品牌</span>
              <span>故事 —</span>
            </div>
            <p class="brandstory-sub">2024 MAY 14</p>
            <div class="while-lineforhome"></div>
            <h3># 流連忘返的密室逃脫體驗</h3>
            <p class="brandstory-intro">我們希望創造一個需要共同努力、交流和協作的密室逃脫環境，使團隊在挑戰中增進默契和合作精神。</p>
            <p class="brandstory-intro">透過遊戲解謎的過程，不僅增加參與者的動腦能力，更重要的是提升團隊成員之間的互助合作。</p>
            <p class="brandstory-intro">在這樣的情境下，每個成員的貢獻都至關重要！他們需要共同解決問題、分享資訊，並在壓力下作出決策，這不僅有助於提升個人的思維能力、更能促進團隊的協作和信任。</p>
            <!-- 底部文字 -->
            <div class="brandstory-bottom">
              <p>The Birth of </p>
              <p>Meme Studio</p>
            </div>
          </div>
        </section>
      </section>

      <!-- 首頁第三部分 限時主題 -->
      <section class="content-limitlevel">
        <!-- <video src="../assets/img/Abyss_small2.mp4" playsinline autoplay muted loop type="video/mp4"
          class="limit_video"></video> -->
        <!-- 羽毛特效區域 -->
        <div class="limitlevel-effect"></div>
        <!-- 內容區域 -->
        <section class="limitlevel-content">
          <p class="limitlevel-topic" data-aos="fade-down" data-aos-delay="100">— 限時主題 —</p>

          <!-- 下方內容 -->
          <section class="limitlevel-title" data-aos="fade-down" data-aos-delay="130">
            <span data-text="代碼深淵">代碼深淵</span>
          </section>

          <section class="limitlevel-Area">
            <!-- 左側標語 -->
            <section class="limitlevel-text">

              <div class="limitlevel-sologan-1" data-aos="fade-up" data-aos-delay="150">
                <span>「藍光閃現虛實</span>
                <span class="limitlevel-sologanred">界限消失</span>
                <span>」</span>
              </div>

              <div class="limitlevel-sologan-2" data-aos="fade-up" data-aos-delay="150">
                <span>「教室傳來的</span>
                <span class="limitlevel-sologanred">神秘激光</span>
                <span>」</span>
              </div>

              <div class="limitlevel-sologan-3" data-aos="fade-up" data-aos-delay="150">
                <span>「你們能否成功</span>
                <span class="limitlevel-sologanred">脫離深淵？</span>
                <span>」</span>
              </div>

              <div class="limitlevel-sologan-4" data-aos="fade-up" data-aos-delay="150">
                <span>「2024年10月01日</span>
                <span class="limitlevel-sologanred">預約逃離？</span>
                <span>」</span>
              </div>
            </section>

            <section class="limitlevel-img" data-aos="fade-up" data-aos-delay="250">
              <!-- <div class="limitlevel-imgtext">
                <p>JavaScriptは大丈夫ですか？</p>
                <p>青い光が一瞬にして爆発した </p>
                <p>複雑なコードの異世界。</p>
                <p>未知の危険と神秘的な力</p>
                <p>現実世界に戻る方法を見つけてください</p>
                <p> あるいは永遠に暗号の深淵に迷い込んでしまう</p>
              </div> -->

              <!-- <div class="limitlevel-info">
                <div class="limitlevel-level">
                  <font-awesome-icon :icon="['fas', 'lock']" class="limit-icon" />
                  <p>3 Star</p>
                </div>
                <div class="limitlevel-people">
                  <font-awesome-icon :icon="['fas', 'user-group']" class="limit-icon" />
                  <p>4 - 8</p>
                </div>
                <div class="limitlevel-time">
                  <font-awesome-icon :icon="['far', 'clock']" class="limit-icon" />
                  <p>60 mins</p>
                </div>
              </div> -->
            </section>
          </section>
          <router-link to="/Branch/" class="linmit-link" data-aos="fade-up" data-aos-delay="50"><button type="button"
              class="btn linmit-btn">立即預定</button></router-link>
        </section>
      </section>

      <!-- 首頁第四部分 如何遊玩-->
      <section class="content-howtoplay">
        <!-- 內容區域 -->
        <section class="howtoplay-content">
          <h3 class="howtoplay-title" data-aos="fade-down" data-aos-delay="100">— 遊玩流程 — </h3>

          <!-- 內容區塊 01 -->
          <section class="howtoplay-box howPic1" data-aos="fade-right" data-aos-delay="150">
            <!-- 左邊文字區塊 -->
            <section class="howtoplay-text">
              <!-- 上方標語 -->
              <div class="howtoplay-slogan">
                <span>尋找</span>
                <img src="/src/assets/img/keyhole.svg" alt="">
                <span>出口</span>
              </div>
              <!-- 下方文字 -->
              <div class="howtoplay-lan">
                <p>受困在無出口的密室</p>
                <p>依靠微弱月光</p>
                <p>尋找散落的各種線索</p>
              </div>
            </section>
            <!-- 右側圖片區塊 -->
            <!-- <section class="howtoplay-img">
              <img src="/src/assets/img/Index-howto01.jpg" alt="">
            </section> -->
          </section>

          <!-- 內容區塊 02 -->
          <section class="howtoplay-box howPic2" data-aos="fade-right" data-aos-delay="150">
            <!-- 左側圖片區域 -->
            <!-- <section class="howtoplay-img">
              <img src="/src/assets/img/Index-howto02.jpg" alt="">
            </section> -->
            <!-- 右邊文字區塊 -->
            <section class="howtoplay-text">
              <!-- 上方標語 -->
              <div class="howtoplay-slogan">
                <span>解謎</span>
                <img src="/src/assets/img/keyhole.svg" alt="">
                <span>合作</span>
              </div>
              <!-- 下方文字 -->
              <div class="howtoplay-lan">
                <p>與夥伴分享情報</p>
                <p>共同動腦輸入密碼</p>
                <p>開啟機關離開密室 </p>
              </div>
            </section>
          </section>

          <!-- 內容區塊 03 -->
          <section class="howtoplay-box howPic3" data-aos="fade-right" data-aos-delay="150">
            <!-- 左邊文字區塊 -->
            <section class="howtoplay-text">
              <!-- 上方標語 -->
              <div class="howtoplay-slogan">
                <span>了解</span>
                <img src="/src/assets/img/keyhole.svg" alt="">
                <span>真相</span>
              </div>
              <!-- 下方文字 -->
              <div class="howtoplay-lan">
                <p>事出必有因</p>
                <p>層層謎題的牽連下</p>
                <p>挖掘埋沒的真相</p>
              </div>
            </section>
            <!-- 右側圖片區塊 -->
            <!-- <section class="howtoplay-img">
              <img src="/src/assets/img/Index-howto03.jpg" alt="">
            </section> -->
          </section>
        </section>
      </section>

      <!-- 首頁第五部分 最新消息-->
      <section class="content-announcement">
        <div class="announcement-content">
          <p class="howtoplay-title" data-aos="fade-down" data-aos-delay="100">— 最新消息 — </p>
          <ul>
            <div class="theme_forindex" data-aos="fade-up" data-aos-delay="150">
              <!-- 輪播按鈕左方 -->
              <div class="News-swiper-button-prev">
                <li @click="prevSlide"><i class="fa-solid fa-caret-left"></i></li>
              </div>

              <li class="index-news-li" v-for="(newsItem, index) in visibleNews" :key="index">
                <router-link :to="`/Announcement/`">
                  <img :src="newsItem.img" :alt="newsItem.name">
                  <h3>{{ newsItem.title }}</h3>
                  <p class="index-news-text">{{ newsItem.newstext }}</p>
                </router-link>
              </li>

              <!-- 輪播按鈕右方 -->
              <div class="News-swiper-button-next">
                <li @click="nextSlide"><i class="fa-solid fa-caret-right"></i></li>
              </div>
            </div>
          </ul>


          <!-- <ul>
            <div class="theme_forindex" data-aos="fade-up" data-aos-delay="150">
              <div class="News-swiper-button-prev">
                <li><i class="fa-solid fa-caret-left"></i></li>
              </div>
              
              <li class="index-news-li">
                <router-link to="/Announcement/"><img src="../assets/img/banner_openning.png" alt="">
                  <h3>謎因工作室盛大開幕！</h3>
                  <p class="index-news-text">
                    預約我們的謎因密室逃脫，體驗刺激解謎挑戰！還有……Read More</p>
                </router-link>
              </li>

              <li class="index-news-li  news-notshow">
                <router-link to="/Announcement/"><img src="/src/assets/img/banner_teacher.png" alt="">
                  <h3>緯育教師專屬特惠！</h3>
                  <p class="index-news-text">
                    教師節快樂！感謝緯育老師們無私的奉獻，現在只要……Read More</p>
                  </router-link>
              </li>

              <li class="index-news-li  news-notshow">
                <router-link to="/Announcement/"><img src="/src/assets/img/banner_discount.png" alt="">
                  <h3>歡慶中秋！</h3>
                  <p class="index-news-text">
                    謎因工作室隆重推出中秋特惠！四人同行一人免費！還有……Read More</p>
                  </router-link>
              </li>
              <div class="News-swiper-button-next">
                <li><i class="fa-solid fa-caret-right"></i></li>
              </div>
            </div>
          </ul> -->
        </div>
      </section>

      <!-- 首頁第六部分 FAQ -->
      <section class="content-p-faq">
        <p class="index-faq-title" data-aos="fade-up" data-aos-delay="100">— 注意事項 — </p>
        <section class="content-p-faq-contenter" data-aos="fade-up" data-aos-delay="200">
          <div v-for="(faq, index) in faqs" :key="index">
            <!-- 第1個問題 -->
            <button class="index-question index-active-faq"> {{ faq.question }}
              <div class="indexfaq-icon"><i class="fa-solid fa-plus"></i></div>
            </button>
            <!-- 第1個問題的回答 -->
            <div class="index-answer">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </section>
      </section>
    </section>
    <Footerbar />
  </main>

</template>
