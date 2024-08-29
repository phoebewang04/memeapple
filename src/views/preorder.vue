<script setup>
import '../assets/css/style.css';
import TopNavbar from '../components/TopNavbar.vue';
import Footerbar from '../components/Footerbar.vue';
</script>

<!-- --------------------------------原始碼---------------------------------------------- -->

<template>

  <TopNavbar />

  <div id="preorder_wrapper">

        <div class="preorder_toppic">
            <img src="../../src/assets/img/dead01.png" alt="">
        </div>

        <div class="preorderinfor_active">
            <h2>活動資訊</h2>
            <div class="infor_list">
                <ul>
                    <li>主題名稱 : 末日庇護所</li>
                    <div class="infor_time">
                        <li><i class="fa-regular fa-clock"></i></li>
                        <li>活動時間 1小時20分鐘</li>
                    </div>
                    <li>地點 : 台北市密逃路88之107號</li>
                </ul>
            </div>
        </div>

        <div class="preorder_datetime">
            <h2>選擇日期與場次</h2>

            <div class="timeandele">

                <VCalendar title-position="left" />

                <div class="time">

                    <h3>請選擇場次</h3>
                    <div class="time_ele">
                        <div class="ele">10:30</div>
                        <div class="ele">11:15</div>
                        <div class="ele">12:55</div>
                        <div class="ele">14:35</div>
                        <div class="ele">16:30</div>
                        <div class="ele">18:15</div>
                    </div>

                    <div class="amount">
                    <select name="" id="people">
                        <option value="">遊戲人數</option>
                        <option value="">4人</option>
                        <option value="">5人</option>
                        <option value="">6人</option>
                        <option value="">7人</option>
                        <option value="">8人</option>
                    </select>
                    </div>
                </div>
            </div>
        </div>


        <!-- /* --------------------------訂購須知------------------------------------------- */ -->


        <div class="preorder_infornotice">
            <h2>訂購須知</h2>
            <p> 歡迎來到我們的密室逃脫主題館！在您預訂體驗前，請仔細閱讀以下訂票須知
                以確保您擁有一次愉快且難忘的冒險之旅：</p>
            <ul>
                <li>
                    <div>
                        <h3>1. 訂票方式 :</h3>
                        <div class="content">
                            <i class="fa-solid fa-circle"></i>
                            <p>線上預訂：請訪問我們的網站，選擇您感興趣的主題房間和時間段進行預訂。</p>
                        </div>
                        <div class="content">
                            <i class="fa-solid fa-circle"></i>
                            <p>電話預訂：您也可以致電我們的客服中心進行預訂。</p>
                        </div>
                    </div>
                </li>


                <li>
                    <h3>2. 訂票規則 :</h3>
                    <div class="content">
                        <i class="fa-solid fa-circle"></i>
                        <p>每個房間有固定人數限制，請根據提示選擇適當的參與人數。</p>
                    </div>
                    <div class="content">
                        <i class="fa-solid fa-circle"></i>
                        <p>預訂需提前至少24小時，確保我們有充足的時間為您準備。</p>
                    </div>
                </li>


                <li>
                    <h3>3. 取消和更改 :</h3>
                    <div class="content">
                        <i class="fa-solid fa-circle"></i>
                        <p>如需取消或更改預訂，請在體驗時間的48小時前聯繫我們。</p>
                    </div>
                    <div class="content">
                        <i class="fa-solid fa-circle"></i>
                        <p>48小時內的取消將收取一定的手續費。</p>
                    </div>
                </li>


                <li>
                    <h3>4. 到達時間 :</h3>
                    <div class="content">
                        <i class="fa-solid fa-circle"></i>
                        <p>請提前15分鐘到達現場，以便我們能為您講解遊戲規則和安全事項。</p>
                    </div>
                    <div class="content">
                        <i class="fa-solid fa-circle"></i>
                        <p>遲到超過15分鐘將視為自動放棄，且不退還票款。</p>
                    </div>
                </li>


                <li>
                    <h3>5. 年齡限制 :</h3>
                    <div class="content">
                        <i class="fa-solid fa-circle"></i>
                        <p>部分房間有年齡限制，請在預訂前確認適合的年齡範圍。</p>
                    </div>
                    <div class="content">
                        <i class="fa-solid fa-circle"></i>
                        <p>12歲以下兒童需由成年人陪同參加。</p>
                    </div>
                </li>


                <li>
                    <h3>6. 衣著建議 :</h3>
                    <div class="content">
                        <i class="fa-solid fa-circle"></i>
                        <p>建議穿著輕便、適合活動的服裝和鞋子，以便順利完成挑戰。</p>
                    </div>
                </li>


                <li>
                    <h3>7. 安全提示 :</h3>
                    <div class="content">
                        <i class="fa-solid fa-circle"></i>
                        <p>請勿攜帶危險物品進入場館，並遵守現場工作人員的指示。</p>
                    </div>
                    <div class="content">
                        <i class="fa-solid fa-circle"></i>
                        <p>如在遊戲過程中遇到任何不適或緊急情況，請立即通知工作人員。</p>
                    </div>
                </li>
            </ul>

            <p>感謝您的配合，我們期待與您一起探索神秘的密室逃脫之旅！</p>

        </div>

        <div class="nextstep">
            <button class="next_btn">下一步</button>
        </div>

    </div>

    <Footerbar />

</template>

<!-- --------------------------------功能程式---------------------------------------------- -->

<script>

import 'v-calendar/style.css';

</script>

<!-- --------------------------------樣式版---------------------------------------------- -->

<style>

.vc-bordered {
    border-radius: 0px;
}
.vc-pane-container {
  background-color: #100E24;
  width: 520px ;
  height: 375px;
}

.vc-header {
    height: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 25px;
    padding-right: 25px;
}


.vc-header .vc-arrow {
    border-radius: 40px ;
    width: 40px ; 
    height: 40px;
    color: #100E24;
}

.vc-base-icon {
    width: 30px;
    height: 30px;
}

.vc-header .vc-arrow:hover{
    background-color: #FCD15B;
}

.vc-header .vc-title {
    background-color: #100E24;
    color: #ffff;
    font-size: 24px;
}

.vc-weekday {
    color: #ffff;
    font-size: 20px;
    margin-bottom: 10px;
}

.vc-weeks {
    color: #ffff;
}

.vc-day-content {
    font-size: 18px;
    margin-bottom: 15px;
}

.vc-day-content:hover {
    background-color: #FCD15B;
}

.vc-container *:focus {
    outline: 3px solid 100E24;
    background-color:#FCD15B;
}

</style>