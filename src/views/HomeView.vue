<script setup>
import { onMounted } from 'vue';
import '../assets/css/style.css';
import TopNavbar from '../components/TopNavbar.vue';
import Footerbar from '../components/Footerbar.vue';

onMounted(() => {
  const word = document.querySelectorAll('.homeeffect-word');
  // 隨機顏色
  word.forEach(word => {
    const randomTop = Math.random() * 100;
    const randomLeft = Math.random() * 100;
    const randomRight = Math.random() * 100;
    const randomBottom = Math.random() * 100;
    const randomFontSize = Math.random() * 3 + 1;
    const randomOpacity = Math.random();
    const randomScale = Math.random() * 2 + 0.5; 

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
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;

      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        this.querySelector('.indexfaq-icon i').classList.replace('fa-minus', 'fa-plus');
      } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        this.querySelector('.indexfaq-icon i').classList.replace('fa-plus', 'fa-minus');
      }
    });
  });
});
</script>

<!-- --------------------------------功能程式---------------------------------------------- -->

<script>

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
    },


    setup(){
        const swiperInstance = Swiper.use([Pagination]);

        swiperInstance.on('init', () => {
           
        });

        return {
            modules: [Pagination],
        };
    },
};

</script>



<template>
  <TopNavbar />

  <main class="main-homepage">
    <section class="wrapper-homepage">
      <!-- 首頁第一部分  主視覺-->
      <section class="content-p-homedesign">
        <!-- 浮動文字特效區域 -->
        <div class="content-p-homedesign-effect">
          <div class="homeeffect-word"># 代碼深淵</div>
          <div class="homeeffect-word"># 成都醫院</div>
          <div class="homeeffect-word"># 恐怖密室</div>
          <div class="homeeffect-word">怪談逐漸湧入...!</div>
          <div class="homeeffect-word"># 時光迷宮</div>
          <div class="homeeffect-word"># 逃離武石監</div>
          <div class="homeeffect-word"># 逃出虛空</div>
        </div>
        <!-- 文字區域 -->
        <div class="content-p-homedesign-text">
          <h1>Meme謎因</h1>
          <h2>Unknow Story</h2>
        </div>
        <!-- 下方圖片區 -->
        <div class="content-p-homedesign-img">
          <!-- 照片1 -->
          <div class="homedesign-card01">
            <img src="/src/assets/img/Index-person1.png" alt="人像1">
          </div>
          <!-- 照片2 -->
          <div class="homedesign-card02">
            <img src="/src/assets/img/Index-person2.png" alt="人像2">
          </div>
          <!-- 照片3 -->
          <div class="homedesign-card03">
            <img src="/src/assets/img/Index-person3.png" alt="人像3">
          </div>
        </div>
      </section>

      <!-- 首頁第二部分  品牌故事-->
      <section class="content-p-brandstory">
        <!-- 閃光特效區域 -->
        <div class="content-p-brandstory-effect"></div>
        <!-- 內容區域 -->
        <section class="content-p-brandstory-contenter">
          <!-- 左側圖片 -->
           <div class="content-p-brandstory-imgarea">
              <img src="../assets/img/breadstoryimg.jpg" alt="佛萊迪大戰傑森">
           </div>
          <!-- 文字區域 -->
          <div class="content-p-brandstory-textarea">
            <div class="brandstory-textarea-year">
              <span>- 19</span>
              <span>65 -</span>
            </div>
            <p>JULY 14</p>
            <div class="while-lineforhome"></div>
            <h3># 流連忘返的密室逃脫體驗</h3>
            <p class="content-p-brandstory-text">我們希望創造一個需要共同努力、交流和協作的密室逃脫環境，使團隊在挑戰中增進默契和合作精神。</p>
            <p class="content-p-brandstory-text">透過遊戲解謎的過程，不僅增加參與者的動腦能力，更重要的是提升團隊成員之間的互助合作。</p>
            <p class="content-p-brandstory-text">在這樣的情境下，每個成員的貢獻都至關重要!他們需要共同解決問題、分享資訊，並在壓力下作出決策，這不僅有助於提升個人的思維能力、更能促進團隊的協作和信任。</p>
            <!-- 底部文字 -->
            <div class="content-p-brandstory-bottom">
                <p>The Birth of </p>
                <p>The Secret Room</p>
            </div>
          </div>

        </section>
      </section>
      <!-- 首頁第三部分 限時主題 -->
      <section class="content-p-limitlevel">
        <!-- 羽毛特效區域 -->
        <div class="content-p-limitlevel-effect"></div>
        <!-- 內容區域 -->
        <section class="content-p-limitlevel-content">
          <section class="content-p-limitlevel-contentArea">
            <!-- 左側標語 -->
            <div class="content-p-limitlevel-content-text">
              <!-- 標語1 -->
              <div class="content-p-limitlevel-sologan-1">
                <span>「人氣YTR佐藤洋子的廢棄校舍的</span>
                <span>探靈直播</span>
                <span>」</span>
              </div>
              <!-- 標語2 -->
              <div class="content-p-limitlevel-sologan-2">
                <span>「校舍東方的102教室傳來的</span>
                <span>神秘歌聲</span>
                <span>」</span>
              </div>
              <!-- 標語3 -->
              <div class="content-p-limitlevel-sologan-3">
                <span>「前往探查成為她的</span>
                <span>最後身影</span>
                <span>」</span>
              </div>
              <!-- 標語4 -->
              <div class="content-p-limitlevel-sologan-4">
                <span>「你們能否成功將</span>
                <span>真正的她</span>
                <span>尋回」</span>
              </div>
            </div>
            <!-- 右側圖像 -->
            <div class="content-p-limitlevel-content-img">
              <!-- 底圖 -->
              <div class="limitlevel-content-img">
               <!-- 圖釘 -->
              <img src="" alt="">
                <!-- 促銷 -->
                <div class="limitlevel-content-img-popup">
                  <p># 主題解禁!</p>
                </div>
                <!-- 標語 -->
                <div class="limitlevel-content-img-text">
                  <p>かごめかごめ</p>
                  <p>籠の中の鳥は </p>
                  <p>いついつ出やる</p>
                  <p>夜明けの晩に</p>
                  <p>鶴と亀が滑った</p>
                  <p>後ろの正面だあれ？</p>
                </div>
                <!-- 關卡資訊 -->
                <div class="limitlevel-content-img-info">
                  <!-- 遊玩難度 -->
                  <div class="limitlevel-info-level">
                    <!-- icon -->
                    <img src="" alt="">
                    <p>3 Star</p>
                  </div>
                  <!-- 遊玩人數 -->
                   <div class="limitlevel-info-people">
                    <!-- icon -->
                    <img src="" alt="">
                    <p>4 - 8</p>
                   </div>
                  <!-- 遊玩時間 -->
                  <div class="limitlevel-info-time">
                    <!-- icon -->
                    <img src="" alt="">
                    <p>60 mins</p>
                   </div>
                   <!-- 預定按鈕 -->
                   <button type="button" class="btn">立即預定</button>
                </div>
              </div>
              <!-- 圖釘 -->
              <img src="" alt="">
            </div>
          </section>
          <section class="content-p-limitlevel-titleArea">
            <span>龍</span>
            <span>中</span>
            <span>鳥</span>
            <p>廃校舎の不思議な部屋で、誰かが日本の童謡を歌い始める。</p>
          </section>
        </section>
      </section>
 
      <!-- 首頁第四部分 如何遊玩-->
      <section class="content-p-howtoplay">
        <!-- 內容區域 -->
        <section class="p-howtoplay-content">
          <h3 class="p-howtoplay-title">- 遊玩流程 - </h3>

          <!-- 內容區塊 01 -->
          <section class="p-howtoplay-content">
            <!-- 左邊文字區塊 -->
            <section class="p-howtoplay-content-text">
              <!-- 上方標語 -->
              <div class="howtoplay-content-text-slogan">
                <span>尋找</span>
                <img src="/src/assets/img/keyhole.svg" alt="">
                <span>出口</span>
              </div>
              <!-- 下方文字 -->
              <div class="howtoplay-content-text-lan">
                <p>受困在無出口的密室</p>
                <p>依靠微弱月光</p>
                <p>尋找散落的各種線索</p> 
              </div>
            </section>
            <!-- 右側圖片區塊 -->
            <section class="p-howtoplay-img">
              <img src="/src/assets/img/Index-howto01.jpg" alt="">
            </section>
          </section>

          <!-- 內容區塊 02 -->
          <section class="p-howtoplay-content">
            <!-- 左側圖片區域 -->
            <section class="p-howtoplay-img">
              <img src="/src/assets/img/Index-howto02.jpg" alt="">
            </section>
            <!-- 右邊文字區塊 -->
            <section class="p-howtoplay-content-text">
              <!-- 上方標語 -->
              <div class="howtoplay-content-text-slogan">
                <span>解謎</span>
                <img src="/src/assets/img/keyhole.svg" alt="">
                <span>合作</span>
              </div>
              <!-- 下方文字 -->
              <div class="howtoplay-content-text-lan">
                <p>與夥伴分享情報</p>
                <p>共同動腦輸入密碼</p>
                <p>開啟機關離開密室 </p> 
              </div>
          </section>
        </section>

          <!-- 內容區塊 03 -->
          <section class="p-howtoplay-content">
            <!-- 左邊文字區塊 -->
            <section class="p-howtoplay-content-text">
              <!-- 上方標語 -->
              <div class="howtoplay-content-text-slogan">
                <span>了解</span>
                <img src="/src/assets/img/keyhole.svg" alt="">
                <span>真相</span>
              </div>
              <!-- 下方文字 -->
              <div class="howtoplay-content-text-lan">
                <p>事出必有因</p>
                <p>層層謎題的牽連下</p>
                <p>挖掘埋沒的真相</p> 
              </div>
            </section>
            <!-- 右側圖片區塊 -->
            <section class="p-howtoplay-img">
              <img src="/src/assets/img/Index-howto03.jpg" alt="">
            </section>
          </section>
      </section>
    </section>

      <!-- 首頁第五部分 最新消息-->
      <section class="content-p-announcement">
        <div class="theme-announcement-index">
          <ul>
            <li><i class="fa-solid fa-caret-left"></i></li>
            <div class="theme_forindex">

                <li class="index-news-li">
                  <a href="#"><img src="../assets/img/banner-hospital.png" alt="">
                  <h3>成都醫院</h3>
                  <p class="index-news-text">社交達人水豚君!社交達人水豚君!社交達人社交達人水豚君社交達人水豚君她社交達人水豚君!社交達人水豚君!社交達人社交達人水豚君社交達人水豚君她社交達人水豚君!社交達人水豚君!社交達人社交達人水豚君社交達人水豚君她</p>
                  </a>
                </li>

                <li class="index-news-li">
                  <a href="#"><img src="/src/assets/img/banner-mazeofTime.png" alt="">
                    <h3>時光迷宮</h3>
                    <p class="index-news-text">社交達人水豚君!社交達人水豚君!社交達人社交達人水豚君社交達人水豚君她社交達人水豚君!社交達人水豚君!社交達人社交達人水豚君社交達人水豚君她社交達人水豚君!社交達人水豚君!社交達人社交達人水豚君社交達人水豚君她</p>
                  </a>
                </li>

                <li class="index-news-li">
                  <a href="#"><img src="/src/assets/img/banner-dead.jpg" alt="">
                  <h3>末日庇護所</h3>
                  <p class="index-news-text">社交達人水豚君!社交達人水豚君!社交達人社交達人水豚君社交達人水豚君她社交達人水豚君!社交達人水豚君!社交達人社交達人水豚君社交達人水豚君她社交達人水豚君!社交達人水豚君!社交達人社交達人水豚君社交達人水豚君她</p>
                 </a>
                </li>
            </div>    
            <li><i class="fa-solid fa-caret-right"></i></li>
          </ul>
          <!-- swiper套件 -->
          <swiper :modules="[Pagination]" :pagination="{ clickable: true }" class="mySwiper">
              <swiper-slide> <li><a href="#"><img src="../assets/img/banner-hospital.png" alt=""><h3>成都醫院</h3></a></li></swiper-slide>
              <swiper-slide> <li><a href="#"><img src="/src/assets/img/banner-mazeofTime.png" alt=""><h3>時光迷宮</h3></a></li></swiper-slide>
              <swiper-slide><li><a href="#"><img src="/src/assets/img/banner-dead.jpg" alt=""><h3>末日庇護所</h3></a></li></swiper-slide>
          </swiper>
        </div>
      </section>

       <!-- 首頁第六部分 FAQ -->
      <section class="content-p-faq">
          <p class="index-faq-title">- 注意事項 - </p>
          <section class="content-p-faq-contenter">
          <!-- 第1個問題 -->
          <button class="index-question index-active-faq">請問可以在開始前增加人數嗎?我不確定我的朋友是否會突然出席 
            <div class="indexfaq-icon"><i class="fa-solid fa-minus"></i></div>
          </button>
          <!-- 第1個問題的回答 -->
          <div class="index-answer"><p>可以喔!只要開始遊戲前補繳多一人產生的費用即可，但唯獨超過當前關卡最大出席人數將無法一同參與，建議最好先與朋友再次確認，讓雙方都有一次美好的密室逃脫體驗!</p></div>

          <!-- 第2個問題 -->
          <button class="index-question index-active-faq">請問可以在開始前增加人數嗎?我不確定我的朋友是否會突然出席 
            <div class="indexfaq-icon"><i class="fa-solid fa-minus"></i></div>
          </button>
          <!-- 第2個問題的回答 -->
          <div class="index-answer"><p>可以喔!只要開始遊戲前補繳多一人產生的費用即可，但唯獨超過當前關卡最大出席人數將無法一同參與，建議最好先與朋友再次確認，讓雙方都有一次美好的密室逃脫體驗!</p></div>

          <!-- 第3個問題 -->
          <button class="index-question index-active-faq">請問可以在開始前增加人數嗎?我不確定我的朋友是否會突然出席 
            <div class="indexfaq-icon"><i class="fa-solid fa-minus"></i></div>
          </button>
          <!-- 第3個問題的回答 -->
          <div class="index-answer"><p>可以喔!只要開始遊戲前補繳多一人產生的費用即可，但唯獨超過當前關卡最大出席人數將無法一同參與，建議最好先與朋友再次確認，讓雙方都有一次美好的密室逃脫體驗!</p></div>
        </section>
      </section>
    </section>
    <Footerbar />
  </main>

</template>




