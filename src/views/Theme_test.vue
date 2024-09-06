<script setup>
import '../assets/css/style.css';
import TopNavbar from '../components/TopNavbar.vue';
import Footerbar from '../components/Footerbar.vue';
import themeAlart from 'sweetalert2';
</script>

<template>
    <!-- header -->
    <TopNavbar />
    <!-- banner -->
    <div class="theme_banner">
        <!-- <video v-if="all_data.banner.type === 'video'" :src="all_data.banner.src" playsinline="" autoplay="" muted="" loop="" type="video/mp4" height="100%"
            width="100%" class="banner_video"></video> -->

        <video v-if="all_data.banner.type === 'video'" src="../assets/img/banner_hospital.mp4" playsinline=""
            autoplay="" muted="" loop="" type="video/mp4" height="100%" width="100%" class="banner_video"></video>
        <img v-else :src="all_data.banner.src" alt="" class="banner_img">
    </div>

    <main class="theme_container">
        <!-- -----主題文字介紹＋指數 start----- -->
        <section class="overview">
            <!-- <div class="blood"> </div> -->
            <p class="overview_text">{{ all_data.overviewText }}</p>

            <div :class="['theme_number', themeClass]">
                <div v-for="(bar, index) in all_data.bar" :key="index">
                    <span>{{ bar.title }}</span>
                    <div :class="['progress_bar', themeClass]">
                        <div :class="['progress', themeClass]" :style="{ width: bar.per + '%' }">{{ bar.per }}%</div>
                    </div>
                </div>
            </div>
        </section>
        <!-- -----主題文字介紹＋指數 end----- -->

        <!-- -----遊戲資訊 start----- -->
        <section class="gameinfo">
            <div v-for="(gameData, index) in all_data.gameData" :key="index" :class="['theme_game', themeClass]">
                <i :class="gameData.icon"></i>
                <h3>{{ gameData.title }}</h3>
                <p v-if="gameData.clickable" class="game_price" @click="showAlart" v-html="gameData.content"></p>
                <p v-else v-html="gameData.content"></p>
            </div>
        </section>
        <!-- -----遊戲資訊 end----- -->

        <!-- -----小圖 start----- -->
        <section class="iconinfo">
            <div v-for="(iconData, index) in all_data.iconData" :key="index" :class="['theme_icon', themeClass]">
                <div class="theme_icon_img">
                    <!-- <img src="../assets/img/icon-1.png" alt=""> -->
                    <img :src="all_data.iconData.src" alt="">
                </div>
                <h3>{{ iconData.title }}</h3>
                <p>{{ iconData.content }}</p>
            </div>
        </section>
        <!-- -----小圖 end----- -->

        <!-- -----行銷亮點 start----- -->
        <section class="theme_marketing_container">
            <div v-for="(textSec, index) in all_data.textSec" :key="index" :class="'theme_marketing'">
                <div class="theme_marketing_text">
                    <h3>{{ textSec.title }}</h3>
                    <p>{{ textSec.content }}</p>
                    <!-- <img src="hand.jpg" alt="" v-if="bar.animation === 'hand'"> -->
                </div>
            </div>
            <!-- -----行銷亮點 end----- -->

            <input type="button" :value="all_data.btn" class="btn">
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

            <div :class="['notice_text', themeClass]">
                <p v-for="(paragraph, index) in Object.values(all_data.notice[0])" :key="index">
                    {{ paragraph }}
                </p>
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
                        <li v-for="(card, index) in all_data.otherTheme" :key="index" class="theme_card">
                            <a href="#">
                                <img :src="card.src" :alt="card.title">
                                <h4>{{ card.title}}</h4>
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

<script>
// import all_data from 'xxx.js'
export default {
    beforeRouteLeave(to, from, next) {
    // Close SweetAlert when leaving the route
    themeAlart.close();
    next();
  },
    data() {
        // console.log(this.$route.query);
        // console.log(this.$route.query.id);
        return {
            themeClass: 'hospital',
            // all_data: all_data[this.$route.query.id]
            all_data: {

                banner: {
                    type: 'video',
                    src: '../assets/img/banner_hospital.mp4',
                    // type:'img',
                    // src:'../assets/img/header.png',
                },
                overviewText: `十年前，成都醫院因連環失蹤案而成為禁地，醫院的過去被層層迷霧包裹著，成為無法觸及的秘密。身為菁英偵探的你，收到神秘委託，必須調查此宗懸案，隨著你步入醫院，腐朽的氣息和幽暗的走廊讓人不寒而慄。這裡的每一個角落似乎都隱藏著難以解釋的秘密…`
                ,
                bar: [
                    { 'title': '燒腦指數', 'per': 87, },
                    { 'title': '驚嚇指數', 'per': 95, },
                    { 'title': '推薦指數', 'per': 90, }
                ],

                gameData: [
                    {
                        'icon': 'fa-solid fa-clock',
                        'title': '遊戲時間',
                        'content': '120分鐘 \n （含20分鐘解說）'
                    },
                    {
                        'icon': 'fa-solid fa-user-secret',
                        'title': '建議人數',
                        'content': '4－8 人\n （最少4人成團）'
                    },
                    {
                        'icon': 'fa-solid fa-sack-dollar',
                        'title': '遊戲費用',
                        'content': '＄710－＄990 / 人 \n ▲ 點此查看詳細價格',
                        clickable: true
                    }
                ],

                iconData: [
                    {
                        // src:'../assets/img/icon-1.png',
                        'title': '極度重恐',
                        'content': '真人互動，將恐懼推向極限\n密閉驚悚的壓迫體驗'
                    },
                    {
                        // src:'../assets/img/icon-2.png',
                        'title': '身歷其境',
                        'content': '精心還原醫院每個角落\n逼真場景宛如置身其中'
                    },
                    {
                        src: '@/assets/img/icon-3.png',
                        'title': '海量謎題',
                        'content': '層層難關，精心雕琢\n由你揭開最深的秘密'
                    },
                ],

                textSec: [
                    {
                        'title': '廢墟深處，重重謎團',
                        'content': '步入禁地，調查塵封的過往\n觸碰那被時間遺忘的秘密',
                        // 'animation': 'hand',    
                    },
                    {
                        'title': '光影交錯，虛實難辨',
                        'content': '詭異的筆記，失蹤者的殘骸\n指引你走向真相的深淵',
                        // 'animation': 'hand',    
                    }, {
                        'title': '怨念瀰漫，等待救贖',
                        'content': '唯有步步為營，方能撕裂虛\n幻的帷幕，讓真相水落石出',
                        // 'animation': 'hand',    
                    }, {
                        'title': null,
                        'content': '沉寂五年的未解之謎，至今仍在黑暗中低語\n你願意接下此次委託，揭開那些不該被遺忘的秘密嗎？',
                        // 'animation': 'hand',    
                    },

                ],
                btn: '預約偵查'
                ,

                notice: [
                    {
                        'p1': `＊ 建議遊戲人數 6 ~ 7 人，容納人數 4 - 8 人。`,
                        'p2': `＊ 建議穿著輕便服裝，避免穿裙子。`,
                        'p3': `＊ 會有真人ＮＰＣ互動，無法調整恐怖程度，膽小誤入。`,
                        'p4': `＊ 未滿15歲孩童需有成人陪同參與。`,

                    }
                ],

                otherTheme: [
                    {
                        src: '../assets/img/banner-dead.jpg',
                        'title': '末日庇護所'
                    },
                    {
                        src: '../assets/img/banner-code.png',
                        'title': '代碼深淵'
                    },
                    {
                        src: '../assets/img/banner-mazeofTime.png',
                        'title': '時光迷宮'
                    },

                ]

            },

        }
    },
    methods: {
        showAlart() {
            themeAlart.fire({
                // icon: 'success',
                title: '詳細價格',
                html: `
        <br>4人－＄990元 / 人<br>
        <br>5人－＄920元 / 人<br>
        <br>6人－＄850元 / 人<br>
        <br>7人－＄780元 / 人<br>
        <br>8人－＄710元 / 人<br>
        `,
                showConfirmButton: false,
                customClass: {
                    popup: 'theme_popup',
                    title: 'theme_popup_title',
                }

            });
        }
    }
};
</script>