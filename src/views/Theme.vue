<script setup>
import { all_data } from '../assets/js/all_data.js';
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

        <!-- <video v-if="all_data.banner.type === 'video'" src="../assets/img/banner_hospital.mp4" playsinline=""
            autoplay="" muted="" loop="" type="video/mp4" height="100%" width="100%" class="banner_video"></video>
        <img v-else :src="all_data.banner.src" alt="" class="banner_img"> -->

        <div v-if="all_data && all_data.banner" class="theme_banner">
        <video v-if="all_data.banner.type === 'video'" :src="all_data.banner.src" playsinline="" autoplay="" muted="" loop="" type="video/mp4" height="100%" width="100%" class="banner_video"></video>
        <img v-else :src="all_data.banner.src" alt="" class="banner_img">
    </div>
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

            <!-- <div :class="['notice_text', themeClass]">
                <p v-for="(paragraph, index) in Object.values(all_data.notice[0])" :key="index">
                    {{ paragraph }}
                </p>
            </div> -->

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
    data() {
        // console.log(this.$route.query);
        // console.log(this.$route.query.id);
       
        return {
            themeClass: 'hospital',
            all_data  // 使用引入的 all_data
            // all_data: all_data[this.$route.query.id]
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