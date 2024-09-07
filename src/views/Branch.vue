
<template>

    <TopNavbar />

    <div id="wrapper"> 

         <!-- ----------------------slogan---------------------- -->

        <div class="slogan">
            <p>世界的謎底存在著很多的因果關係，透過一些方式找到其中的答案，這個過程就稱為解謎，而我們剛好是一群熱愛冒險跟喜好解開世界所有謎題的答案的夥伴，把這樣的想法和精神化成實體，邀請你一起加入我們，
                探險這世界上所有的謎題吧！
            </p>
        </div>

        
        <div class="branch_btn">
                <button id="taipei" @click="taipeiBtn" :class="{active: activeButton === 'taipei'}">台北館</button>
                <button id="taichung" @click="taichungBtn" :class="{active: activeButton === 'taichung'}">台中館</button>
        </div>

        <div id="main">

            <!-- -------------------------台北館------------------------------ -->

            <div v-if="currentBranch === 'taipei'">
                <div class="introduce">
                    <div>
                        <img src="../assets/img/branch1.jpg" alt="">
                    </div>
                    <div class="text">
                        <h2>場館介紹</h2>
                        <p>本場館以專業美術設計，打造逼真的場景，讓你仿若置身真實的故事中。劇情從簡單入手，逐步提升難度，每一關卡都充滿挑戰性。謎題設計深奧，讓人陷入思考，不僅考驗你的觀察力，更考驗你的智慧與推理能力。無論新手或老手，都能在此享受充滿樂趣的解謎體驗。
                        </p>
                    </div>
                </div>

                <!-- -------------------------台北館 主題展示------------------------------ -->

                <div class="theme">

                    <ul>
                        <li @click="leftPage"><i class="fa-solid fa-caret-left"></i></li>
                        <div class="theme_name" >

                            <li v-for="(item, index) in items" :key="index" v-show="showItem(index)" >
                                <img :src="item.img" :alt="item.name"><h3>{{ item.title }}</h3>
                            </li>

                        </div>
                        <li @click="rightPage"><i class="fa-solid fa-caret-right"></i></li>
                        
                    </ul>

                <!-- -------------------------台北館 手機畫面的swiper------------------------------ -->

                    <swiper :spaceBetween="30" :pagination="{ clickable: true,}" :modules="modules" class="mySwiper">
                        <swiper-slide><li><img src="../assets/img/banner-hospital.png" alt=""><h3>成都醫院</h3></li></swiper-slide>
                        <swiper-slide><li><img src="../assets/img/banner-mazeofTime.png" alt=""><h3>時光迷宮</h3></li></swiper-slide>
                        <swiper-slide><li><img src="../assets/img/poster_dead.jpg" alt=""><h3>末日庇護所</h3></li></swiper-slide>
                        <swiper-slide><li><img src="../assets/img/banner-code.png" alt=""><h3>代碼深淵</h3></li></swiper-slide>
                    </swiper>


                </div>

                <!-- -------------------------台北館 聯絡資訊------------------------------ -->

                <div class="location">

                    <div class="location_text">

                        <div class="location_icon">
                            <i class="fa-solid fa-location-dot"></i>
                            <p> 台北館<br><br>台北市密逃路88之107號</p>
                        </div>

                        <div class="location_icon">
                            <i class="fa-solid fa-envelope"></i>
                            <p> Email<br><br>meme9487@gmail.com</p>
                        </div>

                        <div class="location_icon">
                            <i class="fa-solid fa-square-phone"></i>
                            <p> 聯絡電話<br><br> 09123456789</p>
                        </div>

                        <div class="location_icon">
                            <i class="fa-solid fa-user-group"></i>
                            <p> 客服時間<br><br> 10：00 - 18：00</p>
                        </div>

                    </div>

                    <div class="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d48586.425759455786!2d121.50372230597527!3d25.046885350589072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3442abe6b0446815%3A0xf006dde8c27afcc7!2zMTA05Y-w5YyX5biC5Lit5bGx5Y2A5Y2X5Lqs5p2x6Lev5LiJ5q61MjE56JmfNEY!3m2!1d25.052128!2d121.5432529!5e0!3m2!1szh-TW!2stw!4v1723432655924!5m2!1szh-TW!2stw"
                            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>



            <!-- -------------------------台中館------------------------------ -->

            <div v-if="currentBranch === 'taichung'">
                <div class="introduce">
                    <div>
                        <img src="../assets/img/branch2.jpg" alt="">
                    </div>
                    <div class="text">
                        <h2>場館介紹</h2>
                        <p>本場館以專業美術設計，打造逼真的場景，讓你仿若置身真實的故事中。劇情從簡單入手，逐步提升難度，每一關卡都充滿挑戰性。謎題設計深奧，讓人陷入思考，不僅考驗你的觀察力，更考驗你的智慧與推理能力。無論新手或老手，都能在此享受充滿樂趣的解謎體驗。
                        </p>
                    </div>
                </div>

                <!-- -------------------------台中館 主題展示------------------------------ -->

                <div class="theme">

                    <ul>
                        <li @click="leftPage"><i class="fa-solid fa-caret-left"></i></li>
                        <div class="theme_name" >
                            <li v-for="(item, index) in items" :key="index" v-show="showItem(index)">
                               <img :src="item.img" :alt="item.name"><h3>{{ item.title }}</h3>
                            </li>
                        </div>
                        <li @click="rightPage"><i class="fa-solid fa-caret-right"></i></li>
                        
                    </ul>

                    <!-- -------------------------台中館 手機畫面的swiper------------------------------ -->

                    <swiper :spaceBetween="30" :pagination="{ clickable: true,}" :modules="modules" class="mySwiper">
                        <swiper-slide><li><img src="../assets/img/banner-paper.jpg" alt=""><h3>逃離武石監</h3></li></swiper-slide>
                        <swiper-slide><li><img src="../assets/img/poster_room.png" alt=""><h3>恐怖密室</h3></li></swiper-slide>
                        <swiper-slide><li><img src="../assets/img/banner-space.png" alt=""><h3>逃出虛空</h3></li></swiper-slide>
                        <swiper-slide><li><img src="../assets/img/poster_comingsoon.png" alt=""><h3>coming soon</h3></li></swiper-slide>
                    </swiper>

                </div>

                <!-- -------------------------台中館 聯絡資訊------------------------------ -->

                <div class="location">

                    <div class="location_text">

                        <div class="location_icon">
                            <i class="fa-solid fa-location-dot"></i>
                            <p> 台中館<br><br>台中市北屯區路黎明路8號</p>
                        </div>

                        <div class="location_icon">
                            <i class="fa-solid fa-envelope"></i>
                            <p> Email<br><br>meme9487@gmail.com</p>
                        </div>

                        <div class="location_icon">
                            <i class="fa-solid fa-square-phone"></i>
                            <p> 聯絡電話<br><br> 09123456789</p>
                        </div>

                        <div class="location_icon">
                            <i class="fa-solid fa-user-group"></i>
                            <p> 客服時間<br><br> 10：00 - 18：00</p>
                        </div>

                    </div>

                    <div class="map">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d116456.30671489843!2d120.60070688326766!3d24.197686546526768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z5Y-w5Lit5biC5pS_5bqc!5e0!3m2!1szh-TW!2stw!4v1725365611378!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <Footerbar />

</template>


<!-- --------------------------------功能程式---------------------------------------------- -->

<script>
import '../assets/css/style.css';
import TopNavbar from '../components/TopNavbar.vue';
import Footerbar from '../components/Footerbar.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


    export default {
        
        components: {
            TopNavbar,
            Footerbar,
            Swiper,
            SwiperSlide,
        },

        data (){
            return {
                modules: [Pagination],
                currentBranch: 'taipei',
                activeButton: 'taipei',
                currentStartIndex: 0,
                items: [
                    { name: "成都醫院", img: "/src/assets/img/banner-hospital.png", title: "成都醫院" },
                    { name: "時光迷宮", img: "/src/assets/img/banner-mazeofTime.png", title: "時光迷宮" },
                    { name: "末日庇護所", img: "/src/assets/img/poster_dead.jpg", title: "末日庇護所" },
                    { name: "代碼深淵", img: "/src/assets/img/banner-code.png", title: "代碼深淵" },
                    { name: "逃離武石監", img: "/src/assets/img/banner-paper.jpg", title: "逃離武石監"},
                    { name: "恐怖密室", img: "/src/assets/img/poster_room.png", title: "恐怖密室"},
                    { name: "逃出虛空", img: "/src/assets/img/banner-space.png", title: "逃出虛空"},
                    { name: "coming soon", img: "/src/assets/img/poster_comingsoon.png", title: "coming soon"}
                ],
                itemsPerPage: 3
            };
        },
        computed: {
            maxIndex () {
                return Math.floor(this.items.length / this.itemPerPage);
            }
        },
        methods : {

            showItem(index){
                const baseIndex = this.currentBranch === 'taipei' ? 0 : 4;
                const startIndex = baseIndex + this.currentStartIndex;
                const endIndex = startIndex + this.itemsPerPage;

                return index >= startIndex && index < endIndex;
            },

            taipeiBtn (){
               this.currentBranch = 'taipei';
               this.activeButton = 'taipei';
               this.currentStartIndex = 0;
            },
            taichungBtn(){
                this.currentBranch = 'taichung';
                this.activeButton = 'taichung';
                this.currentStartIndex = 0;
            },

            leftPage (){
                if (this.currentStartIndex > 0) {
                    this.currentStartIndex--;
                }
            },

            rightPage (){
                 const maxIndex = this.currentBranch === 'taipei' ? 1 : 1;
                if (this.currentStartIndex < maxIndex) {
                    this.currentStartIndex++;
                }
            }
        }
    };

</script>

<!-- --------------------------------樣式版---------------------------------------------- -->

<style scoped>


    /* -------------------------------RWD的swiper-------------------------------------------- */

    .mySwiper {
        width: 100%;
        height: 480px;
        display: none;

       @media screen and (max-width: 430px) {
            display: block;
            margin-bottom: 40px;
       }
    }

    .mySwiper .swiper-slide li  {
        text-decoration: none;
        color: #292929;
    }


    .mySwiper img {
        width: 300px;
        height: 420px;
    }

    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        height: 400px;
    }

    .swiper-slide h3 {
        background-color: #FEDA77;
        text-align: center;
        width: 300px;
    }

    ::v-deep .mySwiper .swiper-pagination-bullet {
         background-color: white;
    } 

    ::v-deep .mySwiper .swiper-pagination {
        @media screen and (max-width: 430px){
            position: absolute;
            bottom: 0px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 10;
        }
    }

</style>