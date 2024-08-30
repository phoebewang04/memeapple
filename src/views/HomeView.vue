<script setup>

  import '../assets/css/style.css';
  import TopNavbar from '../components/TopNavbar.vue';
  import Footerbar from '../components/Footerbar.vue';

  let canvas = document.querySelector('#homedesign-redline');
  let context = canvas.getContext('2d');
  


</script>

<template>
  <TopNavbar />

  <main class="main-homepage">
    <section class="wrapper-homepage">
      <!-- 首頁第一部分  主視覺-->
      <section class="content-p-homedesign">
        <!-- 浮動文字特效區域 -->
        <div class="content-p-homedesign-effect"></div>
        <!--  紅色線條區域 -->
        <div class="homedesign-img-line" id="homedesign-redline"></div>
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
      <section class="content-p-howtoplay"></section>

      <!-- 首頁第五部分 最新消息-->
      <section class="content-p-announcement"></section>

       <!-- 首頁第六部分 FAQ -->
      <section class="content-p-faq"></section>
    </section>
  </main>
  <!-- <Footerbar /> -->
</template>




