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
      faqs: [
        {
          question: "請問可以在開始前增加人數嗎?",
          answer: "可以喔!只要開始遊戲前補繳多一人產生的費用即可，但唯獨超過當前關卡最大出席人數將無法一同參與，建議最好先與朋友再次確認，讓雙方都有一次美好的密室逃脫體驗!"
        },
        {
          question: "請問有心血管疾病適合遊玩嗎?",
          answer: "由於本館部分主題具有恐怖成分，且可能需要耗費體力，為了您的身體健康建議與醫生諮詢，並主動告知服務人員，服務人員將會安排安全路線給您！"
        },
        {
          question: "請問遊戲主題會定期更新嗎?",
          answer: "為了確保玩家們每次遊玩體驗皆不同，因此同一遊戲主題關卡配置仍會定期更新配置，而主題也會隨季節推出不同主題！"
        },
        {
          question: "請問去年的絕體絕命東京殘響主題是否還會再次推出?",
          answer: "很遺憾該主題已經下架，誠摯推薦您持續關注我們，敬請期待其他主題推出！"
        },

      ]
    };
  },
  methods: {

  },
  mounted() {
    const word = document.querySelectorAll('.homeeffect-word');
    // 隨機顏色
    word.forEach(word => {
      const randomTop = Math.random() * 100;
      const randomLeft = Math.random() * 100;
      const randomRight = Math.random() * 100;
      const randomBottom = Math.random() * 100;
      const randomFontSize = Math.random() * 1.5 + 1;
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
      });
    });
  }
};
</script>


<template>
  <TopNavbar />

  <main ref="scrollContainer" class="main-homepage" @scroll="roll_effect">
    <section class="wrapper-homepage">
      <!-- 首頁第一部分  主視覺-->
      <section class="content-homepage">
        <!-- 浮動文字特效區域 -->
        <div class="homepage-effect">
          <div class="homeeffect-word"># 代碼深淵</div>
          <div class="homeeffect-word"># 成都醫院</div>
          <div class="homeeffect-word"># 恐怖密室</div>
          <div class="homeeffect-word">怪談逐漸湧入...!</div>
          <div class="homeeffect-word"># 時光迷宮</div>
          <div class="homeeffect-word"># 逃離武石監</div>
          <div class="homeeffect-word"># 逃出虛空</div>
          <div class="homeeffect-word"># 末日庇護所</div>
        </div>
        <!-- 文字區域 -->
        <div class="homepage-text">
          <h1>Meme謎因</h1>
          <h2>Unknow Story</h2>
        </div>
        <!-- 下方圖片區 -->
        <div class="homepage-img">
          <!-- 照片1 -->
          <div class="homepage-card01">
            <router-link to="/Theme/"><img src="/src/assets/img/Index-person1.png" alt="成都醫院"></router-link>
          </div>
          <!-- 照片2 -->
          <div class="homepage-card02">
            <router-link to="/Escaperoom/"><img src="/src/assets/img/Index-person2.png" alt="恐怖密室"></router-link>
          </div>
          <!-- 照片3 -->
          <div class="homepage-card03">
            <router-link to="/Theme_Lock/"><img src="/src/assets/img/Index-person3.png" alt="逃離武石監"></router-link>
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
          <div class="brandstory-img">
            <img src="../assets/img/breadstoryimg.jpg" alt="佛萊迪大戰傑森">
          </div>
          <!-- 文字區域 -->
          <div class="brandstory-text">
            <div class="brandstory-title">
              <span>— 品牌</span>
              <span>故事 —</span>
            </div>
            <p class="brandstory-sub">2024 MAY 14</p>
            <div class="while-lineforhome"></div>
            <h3># 流連忘返的密室逃脫體驗</h3>
            <p class="brandstory-intro">我們希望創造一個需要共同努力、交流和協作的密室逃脫環境，使團隊在挑戰中增進默契和合作精神。</p>
            <p class="brandstory-intro">透過遊戲解謎的過程，不僅增加參與者的動腦能力，更重要的是提升團隊成員之間的互助合作。</p>
            <p class="brandstory-intro">在這樣的情境下，每個成員的貢獻都至關重要!他們需要共同解決問題、分享資訊，並在壓力下作出決策，這不僅有助於提升個人的思維能力、更能促進團隊的協作和信任。</p>
            <!-- 底部文字 -->
            <div class="brandstory-bottom">
              <p>The Birth of </p>
              <p>The Meme Room</p>
            </div>
          </div>
        </section>
      </section>

      <!-- 首頁第三部分 限時主題 -->
      <section class="content-limitlevel">
        <video src="../assets/img/Abyss_small2.mp4" playsinline autoplay muted loop type="video/mp4"
          class="limit_video"></video>
        <!-- 羽毛特效區域 -->
        <div class="limitlevel-effect"></div>
        <!-- 內容區域 -->
        <section class="limitlevel-content">
          <p class="limitlevel-topic">— 限時主題 —</p>
          <section class="limitlevel-Area">
            <!-- 左側標語 -->
            <section class="limitlevel-text">

              <!-- 下方內容 -->
              <section class="limitlevel-title">
                <span data-text="代碼深淵">代碼深淵</span>
                <p>引き返せない深淵、<br class="limit-br">生存競争が始まる</p>
              </section>

              <div class="limitlevel-sologan-1">
                <span>「藍光閃現虛實</span>
                <span class="limitlevel-sologanred">界限消失</span>
                <span>」</span>
              </div>

              <div class="limitlevel-sologan-2">
                <span>「402教室傳來的</span>
                <span class="limitlevel-sologanred">神秘激光</span>
                <span>」</span>
              </div>

              <div class="limitlevel-sologan-3">
                <span>「你們能否成功</span>
                <span class="limitlevel-sologanred">脫離深淵?</span>
                <span>」</span>
              </div>

              <div class="limitlevel-sologan-4">
                <span>「2024年10月01日</span>
                <span class="limitlevel-sologanred">預約逃離</span>
              </div>
            </section>

            <!-- <section class="limitlevel-img">
               <div class="limitlevel-imgtext">
                  <p>JavaScriptは大丈夫ですか？</p>
                  <p>青い光が一瞬にして爆発した </p>
                  <p>複雑なコードの異世界。</p>
                  <p>未知の危険と神秘的な力</p>
                  <p>現実世界に戻る方法を見つけてください</p>
                  <p> あるいは永遠に暗号の深淵に迷い込んでしまう</p>
                </div>  

                <div class="limitlevel-info">
                  <div class="limitlevel-level">
                    <font-awesome-icon :icon="['fas', 'lock']" class="limit-icon"  />
                    <p>3 Star</p>
                  </div>
                   <div class="limitlevel-people">
                    <font-awesome-icon :icon="['fas', 'user-group']" class="limit-icon"  />
                    <p>4 - 8</p>
                   </div>
                  <div class="limitlevel-time">
                    <font-awesome-icon :icon="['far', 'clock']" class="limit-icon" />
                    <p>60 mins</p>
                  </div>
                </div>
                <router-link to="/preorder/"><button type="button" class="btn linmit-btn">立即預定</button></router-link>
            </section> -->
          </section>
        </section>
      </section>

      <!-- 首頁第四部分 如何遊玩-->
      <section class="content-howtoplay">
        <!-- 內容區域 -->
        <section class="howtoplay-content">
          <h3 class="howtoplay-title">— 遊玩流程 — </h3>

          <!-- 內容區塊 01 -->
          <section class="howtoplay-box howPic1">
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
          <section class="howtoplay-box howPic2">
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
          <section class="howtoplay-box howPic3">
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

          <h3 class="announcement-title">— 最新消息 — </h3>
          <ul>
            <div class="branch-swiper-button-prev">
              <li><i class="fa-solid fa-caret-left"></i></li>
            </div>

            <div class="theme_forindex">

              <li class="index-news-li">
                <a href="#"><img src="../assets/img/banner-hospital.png" alt="">
                  <h3>成都醫院</h3>
                  <p class="index-news-text">
                    五年前，成都醫院因連環失蹤案而成為禁地，身為菁英偵探的你，收到神秘委託，必須調查此宗懸案，隨著你步入醫院，腐朽的氣息和幽暗的走廊讓人不寒而慄。這裡的每一個角落似乎都隱藏著難以解釋的秘密…</p>
                </a>
              </li>

              <li class="index-news-li  news-notshow">
                <a href="#"><img src="/src/assets/img/banner-mazeofTime.png" alt="">
                  <h3>時光迷宮</h3>
                  <p class="index-news-text">
                    初原之火光芒驟減，不死魔物大量發生，為延續人界與驅除瘴氣。一群菁英尋火者前往「時光迷宮」尋找被諸神之王關押的普羅米修斯。你必須解開謎題與陷阱，解放普羅米修斯得到初原之火，導正世界秩序。</p>
                </a>
              </li>

              <li class="index-news-li  news-notshow">
                <a href="#"><img src="/src/assets/img/poster_dead.jpg" alt="">
                  <h3>末日庇護所</h3>
                  <p class="index-news-text">
                    世界末日降臨，殭屍橫行，生存成為最大的挑戰。傳說中的安全庇護所是唯一的希望，但位置隱藏在謎團之中。你必須解開線索，找到這處避難所，才能在末日災難中倖存。勇敢尋找，活下去是唯一的選擇。</p>
                </a>
              </li>
            </div>

            <div class="branch-swiper-button-next">
              <li><i class="fa-solid fa-caret-right"></i></li>
            </div>
          </ul>

          <!-- swiper套件 -->
          <!-- <swiper :modules="[Pagination]" :pagination="{ clickable: true }" class="mySwiper">
              <swiper-slide> <li><a href="#"><img src="../assets/img/banner-hospital.png" alt=""><h3>成都醫院</h3></a></li></swiper-slide>
              <swiper-slide> <li><a href="#"><img src="/src/assets/img/banner-mazeofTime.png" alt=""><h3>時光迷宮</h3></a></li></swiper-slide>
              <swiper-slide><li><a href="#"><img src="/src/assets/img/banner-dead.jpg" alt=""><h3>末日庇護所</h3></a></li></swiper-slide>
          </swiper> -->
        </div>
      </section>

      <!-- 首頁第六部分 FAQ -->
      <section class="content-p-faq">
        <p class="index-faq-title">— 注意事項 — </p>
        <section class="content-p-faq-contenter">
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
