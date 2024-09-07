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
        
        <img src="@/assets/img/header.png" alt="" class="banner">
    </div>

  
    <main class="theme_container">
        <!-- -----主題文字介紹＋指數 start----- -->
        <section class="overview">
            <!-- <div class="blood"> </div> -->
            <!-- <p class="overview_text">
                武石監來了新的所長，他以其殘暴和病態的控制欲而聞名，他經常在監獄中進行秘密的實驗和虐待。再這樣下去遲早我們會死在這裡，我們必須設法越獄，重獲自由，並揭露所長的可怕秘密。</p> -->
                <p class="overview_text">
                    武石監來了新的所長，他以其殘暴和病態的控制欲而聞名，自他上任以來，監獄中的氣氛變得更加陰沉恐怖，經常在監獄內進行秘密的實驗和虐待，囚犯們無時無刻不在忍受著折磨，甚至有關於他進行人體實驗的可怕謠言在囚犯中流傳，他的目標是通過殘忍的實驗來探索人體的極限，再這樣下去，我們每個人都可能在這裡死去，為了重獲自由，揭露所長的可怕秘密，我們必須設法越獄。</p>

            <div class="theme_number hospital">
                <span>燒腦指數</span>
                <div class="progress_bar hospital">
                    <div class="progress hospital" style="width: 95%;">95%</div>
                </div>
                <span>驚嚇指數</span>
                <div class="progress_bar hospital">
                    <div class="progress hospital" style="width: 87%;">87%</div>
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
                <div class="theme_icon_img">
                    <img src="../assets/img/prisonuniform.png" alt="">
                </div>
                <h3>角色扮演</h3>
                <p>換上囚服，扮演逃犯與獄友<br>們共同患難逃出</p>
            </div>
            <div class="theme_icon hospital">
                <div class="theme_icon_img">
                    <img src="../assets/img/handcuffs.png" alt="">
                </div>
                <h3>逃生道具</h3>
                <p>逃生道具散落監獄每個角落<br>解題找出道具逃離監獄</p>
            </div>
            <div class="theme_icon hospital">
                <div class="theme_icon_img">
                    <img src="../assets/img/room.jpg" alt="">
                </div>
                <h3>海量謎題</h3>
                <p>打造真實監獄場景<br>宛如身歷其境</p>
            </div>
        </section>
        <section class="theme_marketing_container">
            <div class="theme_marketing theme_lock">
                <div class="theme_marketing_text">
                    <h3>陰森監獄，黑暗深處</h3>
                    <p>冰冷牢籠、囚徒嘶啞的聲音<br>在死寂的監獄中探索隱藏於<br>冷酷牆壁下的黑暗秘密</p>
                </div>
            </div>
            <div class="theme_marketing theme_lock">
                <div class="theme_marketing_text">
                    <h3>陰影囚室，沉默線索</h3>
                    <p>狹窄的牢房，牆壁上的刻痕<br>在囚室裡解讀那些隱藏的符號<br>發現通向自由的線索</p>
                </div>
            </div>
            <div class="theme_marketing theme_lock">
                <div class="theme_marketing_text">
                    <h3>詭異所長，心理暗黑</h3>
                    <p>恐怖的辦公室，獵物的相片<br>所長的變態計劃<br>在陰影中揭開他病態的秘密</p>
                </div>
            </div>
            <!-- <div class="theme_marketing">
                <div class="theme_marketing_text">
                    <p>沉寂五年的未解之謎，至今仍在黑暗中低語</p>
                    <p>你願意接下此次委託，揭開那些不該被遺忘的秘密嗎？</p>
                </div>
            </div> -->

            <input type="button" value="預約逃獄" class="btn">
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
                <p>＊ 遊戲進行中禁止攝影、飲食、吸菸，現場會有置物區保管</p>
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
                            <img src="../assets/img/banner-mazeofTime.png" alt="時空迷宮">
                            <h4>時空迷宮</h4>
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