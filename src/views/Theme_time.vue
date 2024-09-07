<script setup>
import '../assets/css/style.css';
import TopNavbar from '../components/TopNavbar.vue';
import Footerbar from '../components/Footerbar.vue';
</script>

<template>
<!-- header -->
<TopNavbar />
   <!-- banner -->
    <div class="theme_banner">
    <!-- <video src="../assets/img/banner.mp4" playsinline="" autoplay="" muted="" loop="" type="video/mp4" height="100%"
        width="100%" class="banner_video"></video> -->

    <!-- <img src="../assets/img/header.png" alt="" class="banner"> -->
    </div>
   
    <main class="theme_container">
        <!-- -----主題文字介紹＋指數 start----- -->
        <section class="overview">
            <!-- <div class="blood"> </div> -->
            <p class="overview_text">
                初原之火光芒驟減，不死魔物大量發生，為延續人界與驅除瘴氣。一群菁英尋火者前往「時光迷宮」尋找被諸神之王關押的普羅米修斯。你必須解開謎題與陷阱，解放普羅米修斯得到初原之火，導正世界秩序。</p>

            <div class="theme_number hospital">
                <span>燒腦指數</span>
                <div class="progress_bar hospital">
                    <div class="progress hospital" style="width: 87%;">87%</div>
                </div>
                <span>驚嚇指數</span>
                <div class="progress_bar hospital">
                    <div class="progress hospital" style="width: 95%;">95%</div>
                </div>
                <span>推薦指數</span>
                <div class="progress_bar hospital">
                    <div class="progress hospital" style="width: 90%;">90%</div>
                </div>
            </div>
        </section>
        <!-- -----主題文字介紹＋指數 end----- -->

        <section class="gameinfo">
            <div class="theme_game hospital">
                <i class="fa-solid fa-clock"></i>
                <h3>遊戲時間
                </h3>
                <p>120分鐘<br>（含20分鐘解說）</p>
            </div>
            <div class="theme_game hospital">
                <i class="fa-solid fa-circle-user"></i>
                <h3>建議人數</h3>
                <p>4－8 人</p>
            </div>
            <div class="theme_game hospital">
                <div class="dollar hospital">
                    <i class="fa-solid fa-dollar-sign"></i>
                </div>
                <h3>遊戲費用</h3>
                <p>＄660－＄990 / 人<br>▲ 點此查看詳細價格</p>
            </div>
        </section>

        <section class="iconinfo">
            <div class="theme_icon hospital">
                <img src="../assets/img/theme-time-item01.png" alt="">
                <h3>仿真陷阱道具</h3>
                <p>透過機關設置場景<br>為了前進必須解開謎題</p>
            </div>
            <div class="theme_icon hospital">
                <img src="../assets/img/theme-time-item02.png" alt="">
                <h3>沉浸式體驗</h3>
                <p>實境效果和音效設計<br>讓你體驗探索地下城的感覺</p>
            </div>
            <div class="theme_icon hospital">
                <img src="../assets/img/theme-time-item03.png" alt="">
                <h3>精緻的場景佈置</h3>
                <p>專業美術設計場景<br>讓你置身在陰森迷宮當中</p>
            </div>
        </section>
        <section class="theme_marketing_container">
            <div class="theme_marketing theme_time">
                <div class="theme_marketing_text">
                    <h3>沉浸探索，重重謎團</h3>
                    <p>幽暗地城<br>沿著階梯向下</p>
                </div>
            </div>
            <div class="theme_marketing theme_time">
                <div class="theme_marketing_text">
                    <h3>沉浸探索，重重謎團</h3>
                    <p>殘缺的筆記，先遣隊的遺物<br>指引你走向被囚之處</p>
                </div>
            </div>
            <div class="theme_marketing theme_time">
                <div class="theme_marketing_text">
                    <h3>詭異瀰漫，等待救贖</h3>
                    <p>唯有步步為營，方能平安<br>解放普羅米修斯</p>
                </div>
            </div>
            <input type="button" value="預約探索" class="btn">
        </section>

        <section class="notice">

            <div class="small_mark">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 40 40" fill="none">
                    <path
                        d="M20 40C8.954 40 0 31.046 0 20C0 8.954 8.954 0 20 0C31.046 0 40 8.954 40 20C40 31.046 31.046 40 20 40ZM18 21.584V28H22V21.584C23.0528 21.1245 23.9153 20.3165 24.4424 19.2959C24.9696 18.2753 25.1292 17.1043 24.8945 15.9799C24.6598 14.8554 24.0451 13.846 23.1537 13.1215C22.2624 12.3969 21.1487 12.0014 20 12.0014C18.8513 12.0014 17.7376 12.3969 16.8463 13.1215C15.9549 13.846 15.3402 14.8554 15.1055 15.9799C14.8708 17.1043 15.0304 18.2753 15.5576 19.2959C16.0847 20.3165 16.9472 21.1245 18 21.584Z"
                        fill="#FEDA77" />
                </svg>
                <h2>注意事項</h2>
            </div>

            <div class="notice_text hospital">
                <p>＊ 建議遊戲人數 6 ~ 7 人，容納人數 4 - 8 人。</p>
                <p>＊ 建議穿著輕便服裝，避免穿裙子。</p>
                <p>＊ 會有真人ＮＰＣ互動，無法調整恐怖程度，膽小誤入</p>
                <p>＊ 未滿15歲孩童需有成人陪同參與。</p>
            </div>

        </section>
        <section>
            <div class="small_mark">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 40 40" fill="none">
                    <path
                        d="M20 40C8.954 40 0 31.046 0 20C0 8.954 8.954 0 20 0C31.046 0 40 8.954 40 20C40 31.046 31.046 40 20 40ZM18 21.584V28H22V21.584C23.0528 21.1245 23.9153 20.3165 24.4424 19.2959C24.9696 18.2753 25.1292 17.1043 24.8945 15.9799C24.6598 14.8554 24.0451 13.846 23.1537 13.1215C22.2624 12.3969 21.1487 12.0014 20 12.0014C18.8513 12.0014 17.7376 12.3969 16.8463 13.1215C15.9549 13.846 15.3402 14.8554 15.1055 15.9799C14.8708 17.1043 15.0304 18.2753 15.5576 19.2959C16.0847 20.3165 16.9472 21.1245 18 21.584Z"
                        fill="#FEDA77" />
                </svg>
                <h2>台北其他館主題</h2>
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
                            <img src="../assets/img/banner-hunted.png" alt="恐怖密室">
                            <h4>恐怖密室</h4>
                            </a>
                        </li>
                    </ul>
                </div>
                <i class="fa-solid fa-angle-right" id="right"></i>
            </div>
        </section>
    </main>

    <Footerbar />

</template>