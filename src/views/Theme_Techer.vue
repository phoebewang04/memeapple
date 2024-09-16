<template>

    <!-- header -->
    <TopNavbar />

    <!-- banner -->
    <div class="theme_banner">

        <video v-if="current_data.banner.type === 'video'" :src="current_data.banner.src" playsinline autoplay muted
            loop type="video/mp4" height="100%" width="100%" class="banner_video" </video>
            <img v-else :src="current_data.banner.src" alt="" class="banner_img">


            <!-- <video playsinline autoplay muted loop  height="100%" width="100%" class="banner_video">
            <source :src="current_data.banner.videoSrc" type="video/mp4">
        </video>

        <img :src="current_data.banner.src"> -->

    </div>


    <main :class="['theme_container', current_data.themeClass]">

        <section class="blood_container">
            <img v-for="(image, imgIndex) in current_data.bloodImage" :key="imgIndex" :class="`blood_${imgIndex + 1}`"
                :src="image.src" alt="blood" ref="bloodImage">
        </section>

        <!-- -----主題文字介紹＋指數 start----- -->
        <section class="overview">

            <p class="overview_text">{{ current_data.overviewText }}</p>

            <div :class="['theme_number', current_data.themeClass]">
                <div v-for="(bar, index) in current_data.bar" :key="index">
                    <span>{{ bar.title }}</span>
                    <div :class="['progress_bar', current_data.themeClass]">
                        <div :class="['progress', current_data.themeClass]" :style="{ width: bar.per + '%' }">{{ bar.per
                            }}%</div>
                    </div>
                </div>
            </div>
        </section>
        <!-- -----主題文字介紹＋指數 end----- -->

        <!-- -----遊戲資訊 start----- -->
        <section class="gameinfo">
            <div v-for="(gameData, index) in current_data.gameData" :key="index"
                :class="['theme_game', current_data.themeClass]">
                <i :class="gameData.icon"></i>
                <h3>{{ gameData.title }}</h3>
                <p v-if="gameData.clickable" class="game_price" @click="showAlart" v-html="gameData.content"></p>
                <p v-else v-html="gameData.content"></p>
            </div>
        </section>
        <!-- -----遊戲資訊 end----- -->

        <!-- -----小圖 start----- -->
        <section class="iconinfo">
            <div v-for="(iconData, index) in current_data.iconData" :key="index"
                :class="['theme_icon', current_data.themeClass]">
                <div class="theme_icon_img">
                    <img :src="iconData.src" alt="">
                </div>
                <h3>{{ iconData.title }}</h3>
                <p>{{ iconData.content }}</p>
            </div>
        </section>
        <!-- -----小圖 end----- -->

        <!-- -----行銷亮點 start----- -->
        <section class="theme_marketing_container">
            <div v-for="(textSec, index) in current_data.textSec" :key="index" class="theme_marketing"
                :style="{ backgroundImage: `url(${textSec.backgroundImage})` }">
                <div class="theme_marketing_text">
                    <h3>{{ textSec.title }}</h3>
                    <p>{{ textSec.content }}</p>
                    <!-- <img src="hand.jpg" alt="" v-if="bar.animation === 'hand'"> -->
                </div>
            </div>

            <!-- -----行銷亮點 end----- -->
            <RouterLink :to="{ path: `/Theme/${$route.params.id}/preorder` }"><input type="button"
                    :value="current_data.btn" class="btn"></RouterLink>
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

            <div :class="['notice_text', current_data.themeClass]">
                <p v-for="(paragraph, index) in Object.values(current_data.notice[0])" :key="index">
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
                <h2>{{ current_data.otherSeparate }}</h2>
            </div>
            <div class="theme_arrow">

                <i class="fa-solid fa-caret-left" id="left" @click="scroll('left')"></i>
                <div class="theme_wrapper" ref="theme_wrapper">
                    <ul class="theme_carousel">
                        <li v-for="(card, index) in current_data.otherTheme" :key="index" class="theme_card">
                            <router-link :to="{ path: `/Theme/${card.id}` }">
                                <img :src="card.src" :alt="card.title">
                                <h4>{{ card.title }}</h4>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <i class="fa-solid fa-caret-right" id="right" @click="scroll('right')"></i>
            </div>
        </section>


    </main>

    <Footerbar />

</template>

<script>
import { all_data } from '../assets/js/all_data.js';
//console.log(all_data);
import '../assets/css/style.css';
import TopNavbar from '../components/TopNavbar.vue';
import Footerbar from '../components/Footerbar.vue';
import themeAlart from 'sweetalert2';

// import all_data from 'xxx.js'
export default {
    components: { TopNavbar, Footerbar, themeAlart },
    data() {
        // console.log(this.$route.query);
        // console.log(this.$route.query.id);
        return {

            //引入 all_data
            all_data: all_data,

            //輪播
            cardWidth: 0,
        }
    },
    mounted() {
        //輪播
        this.cardWidth = this.$refs.theme_wrapper.querySelector('.theme_card').offsetWidth;
        // console.log(this.cardWidth);

    },
    computed: {
        current_data() {
            return this.all_data[this.$route.params.id]
        }

    },
    methods: {

        //價錢popup
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
        },

        //輪播
        scroll(direction) {
            const wrapper = this.$refs.theme_wrapper;
            const scrollAmount = direction === 'left' ? -this.cardWidth : this.cardWidth;
            wrapper.scrollLeft += scrollAmount;
        },

        //滾動出現血手印
    },
};
</script>