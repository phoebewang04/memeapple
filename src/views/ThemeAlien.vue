<script setup>
import '../assets/css/style.css';
import TopNavbar from '../components/TopNavbar.vue';
import Footerbar from '../components/Footerbar.vue';
</script>

<template>
<!-- header -->
<TopNavbar />
   <!-- banner -->

   <!-- <video src="../assets/img/banner.mp4" playsinline="" autoplay="" muted="" loop="" type="video/mp4" height="100%"
        width="100%" class="banner_video hospital"></video> -->

    <img src="../assets/img/banner.png" alt="" class="banner">

    <main class="theme_container alien">
        <div class="alien_bgi">
        <!-- -----主題文字介紹＋指數 start----- -->
        <section class="overview">
            <p class="overview_text">
                帶著開始新生活的夢想，你搭上了太空殖民飛船修普諾斯號(Hypnos)。但理應在兩年後醒來的你卻被提前喚醒，其他同伴的睡眠倉則被暴力破壞。你必須盡快找尋失蹤同伴，解開船艙內未知的謎團，並設法讓飛船重回正軌。記住，在宇宙中，沒人能聽見你的尖叫......</p>

            <div class="theme_number alien">
                <span>燒腦指數</span>
                <div class="progress_bar alien">
                    <div class="progress alien" style="width: 87%;">87%</div>
                </div>
                <span>驚嚇指數</span>
                <div class="progress_bar alien">
                    <div class="progress alien" style="width: 95%;">95%</div>
                </div>
                <span>推薦指數</span>
                <div class="progress_bar alien">
                    <div class="progress alien" style="width: 90%;">90%</div>
                </div>
            </div>
        </section>
        <!-- -----主題文字介紹＋指數 end----- -->

        <section class="gameinfo alien">
            <div class="theme_game alien">
                <i class="fa-solid fa-clock alien"></i>
                <h3>遊戲時間
                </h3>
                <p>120分鐘<br>（含20分鐘解說）</p>
            </div>
            <div class="theme_game alien">
                <i class="fa-solid fa-circle-user alien"></i>
                <h3>建議人數</h3>
                <p>4－8 人</p>
            </div>
            <div class="theme_game alien">
                <div class="dollar alien">
                    <i class="fa-solid fa-dollar-sign alien"></i>
                </div>
                <h3>遊戲費用</h3>
                <p>＄660－＄990 / 人<br>▲ 點此查看詳細價格</p>
            </div>
        </section>

        <section class="iconinfo alien">
            <div class="theme_icon alien">
                <img src="../assets/img/icon_alien_planet.png" alt="" style="width: 400px;">
                <h3>仿真場景體驗</h3>
                <p>聲光、煙霧效果<br>打造太空旅行沉浸式體驗</p>
            </div>
            <div class="theme_icon alien">
                <img src="../assets/img/icon_alien_ship.png" alt="" style="width: 400px;">
                <h3>多段式密室劇情</h3>
                <p>隨劇情進展<br>分工找尋線索或駕駛飛船逃離</p>
            </div>
            <div class="theme_icon alien">
                <img src="../assets/img/icon_alien_egg.png" alt="" style="width: 400px;">
                <h3>電影等級道具</h3>
                <p>重金打造電影級恐怖道具<br>重現驚悚太空逃生</p>
            </div>
        </section>
        <section class="theme_marketing_container">
            <div class="theme_marketing alien">
                <div class="theme_marketing_text">
                    <h3>沉浸體驗&emsp;孤立無援</h3>
                    <p>無垠的宇宙中<br>偏移航道的飛船<br>要如何解開謎團、重回正軌？</p>
                </div>
            </div>
            <div class="theme_marketing alien">
                <div class="theme_marketing_text">
                    <h3>屏氣凝神&emsp;逃出生天</h3>
                    <p>在理應無人的船艙找尋生機<br>卻一直聽見詭異的呼吸聲<br>轉角的陰影到底有甚麼在等你？</p>
                </div>
            </div>
            <div class="theme_marketing alien">
                <div class="theme_marketing_text">
                    <h3>幽暗密室&emsp;危機四伏</h3>
                    <p>船內多處被暴力破壞<br>究竟是機械故障、船員叛變<br>還是有更邪惡的東西在你身後？</p>
                </div>
            </div>
            <!-- <div class="theme_marketing">
                <div class="theme_marketing_text">
                    <p>沉寂五年的未解之謎，至今仍在黑暗中低語</p>
                    <p>你願意接下此次委託，揭開那些不該被遺忘的秘密嗎？</p>
                </div>
            </div> -->

            <input type="button" value="預約登船" class="btn alien" style="background-color: #6EE742;">
        </section>

        <section class="notice">

            <div class="small_mark">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 40 40" fill="none">
                    <path
                        d="M20 40C8.954 40 0 31.046 0 20C0 8.954 8.954 0 20 0C31.046 0 40 8.954 40 20C40 31.046 31.046 40 20 40ZM18 21.584V28H22V21.584C23.0528 21.1245 23.9153 20.3165 24.4424 19.2959C24.9696 18.2753 25.1292 17.1043 24.8945 15.9799C24.6598 14.8554 24.0451 13.846 23.1537 13.1215C22.2624 12.3969 21.1487 12.0014 20 12.0014C18.8513 12.0014 17.7376 12.3969 16.8463 13.1215C15.9549 13.846 15.3402 14.8554 15.1055 15.9799C14.8708 17.1043 15.0304 18.2753 15.5576 19.2959C16.0847 20.3165 16.9472 21.1245 18 21.584Z"
                        fill="#6EE742" />
                </svg>
                <h2 style="color: #6EE742;">注意事項</h2>
            </div>

            <div class="notice_text alien" style="color: #D8FFDF;">
                <p>＊ 建議遊戲人數 6 ~ 7 人，容納人數 4 - 8 人。</p>
                <p>＊ 建議穿著輕便服裝，避免穿裙子。</p>
                <p>＊ 會有真實生物互動，無法調整恐怖程度，膽小誤入</p>
                <p>＊ 未滿15歲孩童需有成人陪同參與。</p>
            </div>

        </section>
        <section>
            <div class="small_mark alien">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 40 40" fill="none">
                    <path
                        d="M20 40C8.954 40 0 31.046 0 20C0 8.954 8.954 0 20 0C31.046 0 40 8.954 40 20C40 31.046 31.046 40 20 40ZM18 21.584V28H22V21.584C23.0528 21.1245 23.9153 20.3165 24.4424 19.2959C24.9696 18.2753 25.1292 17.1043 24.8945 15.9799C24.6598 14.8554 24.0451 13.846 23.1537 13.1215C22.2624 12.3969 21.1487 12.0014 20 12.0014C18.8513 12.0014 17.7376 12.3969 16.8463 13.1215C15.9549 13.846 15.3402 14.8554 15.1055 15.9799C14.8708 17.1043 15.0304 18.2753 15.5576 19.2959C16.0847 20.3165 16.9472 21.1245 18 21.584Z"
                        fill="#6EE742" />
                </svg>
                <h2 style="color: #6EE742;">台中館其他主題</h2>
            </div>
            <div class="theme_arrow">

                <i class="fa-solid fa-angle-left" id="left"></i>
                <div class="theme_wrapper">
                    <ul class="theme_carousel">
                        <li class="theme_card">
                            <a href="#">
                            <img src="../assets/img/banner-dead.jpg" alt="末日庇護所">
                            <h4>末日庇護所</h4>
                            </a>
                        </li>
                        <li class="theme_card">
                            <a href="#">
                            <img src="../assets/img/banner-code.png" alt="代碼深淵">
                            <h4>代碼深淵</h4>
                            </a>
                        </li>
                        <li class="theme_card">
                            <a href="#">
                            <img src="../assets/img/banner-mazeofTime.png" alt="時空迷宮">
                            <h4>時空迷宮</h4>
                            </a>
                        </li>
                    </ul>
                </div>
                <i class="fa-solid fa-angle-right" id="right"></i>
            </div>
        </section>
        </div>
    </main>

    <Footerbar />

</template>