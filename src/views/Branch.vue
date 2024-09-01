<script setup>
import '../assets/css/style.css';
import TopNavbar from '../components/TopNavbar.vue';
import Footerbar from '../components/Footerbar.vue';
</script>

<!-- --------------------------------原始碼---------------------------------------------- -->
<template>

    <TopNavbar />
        <!-- ----------------------中間段落---------------------- -->

    <div id="wrapper"> 

        <div class="slogan">
            <p>世界的謎底存在著很多的因果關係，透過一些方式找到其中的答案，這個過程就稱為解謎，而我們剛好是一群熱愛冒險跟喜好解開世界所有謎題的答案的夥伴，把這樣的想法和精神化成實體，邀請你一起加入我們，
                探險這世界上所有的謎題吧！
            </p>
        </div>

        
        <div class="branch_btn">
                <button id="taipei" >台北館</button>
                <button id="taichung">台中館</button>
        </div>

        <div id="main">

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


            <div class="theme">

                <!--<ul>
                    <li><i class="fa-solid fa-caret-left"></i></li>
                    <div class="theme_name">
                        <li>
                            <a href="#"><img src="../assets/img/banner-hospital.png" alt=""><h3>成都醫院</h3></a>
                        </li>
                        <li>
                            <a href="#"><img src="/src/assets/img/banner-mazeofTime.png" alt=""><h3>時光迷宮</h3></a>
                        </li>
                        <li>
                            <a href="#"><img src="/src/assets/img/banner-dead.jpg" alt=""><h3>末日庇護所</h3></a>
                        </li>
                        <li>
                            <a href="#"><img src="/src/assets/img/banner-code.png" alt=""><h3>代碼深淵</h3></a>
                        </li>
                    </div>
                    <li><i class="fa-solid fa-caret-right"></i></li>
                </ul>-->

               
                <swiper :slidesPerView="3" :spaceBetween="30" :navigation="{ nextEl: '.branch-swiper-button-next', prevEl: '.branch-swiper-button-prev',}" :modules="modules" class="mySwiper1">

                    <swiper-slide> <li><a href="#"><img src="../assets/img/banner-hospital.png" alt=""><h3>成都醫院</h3></a></li></swiper-slide>
                    <swiper-slide> <li><a href="#"><img src="/src/assets/img/banner-mazeofTime.png" alt=""><h3>時光迷宮</h3></a></li></swiper-slide>
                    <swiper-slide><li><a href="#"><img src="/src/assets/img/banner-dead.jpg" alt=""><h3>末日庇護所</h3></a></li></swiper-slide>
                    <swiper-slide><li><a href="#"><img src="/src/assets/img/banner-code.png" alt=""><h3>代碼深淵</h3></a></li></swiper-slide>

                    <div class="branch-swiper-button-prev">
                        <li><i class="fa-solid fa-caret-left"></i></li>
                    </div>
                    <div class="branch-swiper-button-next">
                        <li><i class="fa-solid fa-caret-right"></i></li>
                    </div>

                </swiper>


                <swiper :modules="[Pagination]" :pagination="{ clickable: true }" class="mySwiper">
                    <swiper-slide> <li><a href="#"><img src="../assets/img/banner-hospital.png" alt=""><h3>成都醫院</h3></a></li></swiper-slide>
                    <swiper-slide> <li><a href="#"><img src="/src/assets/img/banner-mazeofTime.png" alt=""><h3>時光迷宮</h3></a></li></swiper-slide>
                    <swiper-slide><li><a href="#"><img src="/src/assets/img/banner-dead.jpg" alt=""><h3>末日庇護所</h3></a></li></swiper-slide>
                    <swiper-slide><li><a href="#"><img src="/src/assets/img/banner-code.png" alt=""><h3>代碼深淵</h3></a></li></swiper-slide>

                </swiper>


            </div>

            <div class="location">

                <div class="location_text">

                    <div class="location_icon">
                        <i class="fa-solid fa-location-dot"></i>
                        <p> 台北館：<br><br>台北市密逃路88之107號</p>
                    </div>

                    <div class="location_icon">
                        <i class="fa-regular fa-paper-plane"></i>
                        <p> Email：<br><br>meme9487@gmail.com</p>
                    </div>

                    <div class="location_icon">
                        <i class="fa-solid fa-square-phone"></i>
                        <p> 聯絡電話：<br><br> 09123456789</p>
                    </div>

                    <div class="location_icon">
                        <i class="fa-solid fa-user-group"></i>
                        <p> 客服時間：<br><br> 10：00 - 18：00</p>
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
    </div>

    <Footerbar />

</template>


<!-- --------------------------------功能程式---------------------------------------------- -->

<script>

    import { Swiper, SwiperSlide } from "swiper/vue";
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';

    import { Pagination} from 'swiper/modules';
    import { Navigation } from 'swiper/modules';


// export default {
//   components: {
//     Swiper,
//     SwiperSlide,
//     },
//     setup(){

//         return {
//             modules: [Pagination],
//             modules: [Navigation]
//         };
//     },
// },

    export default {

        components: {
            Swiper,
            SwiperSlide,
        },

        data() {
            return {
                swiper: null,
            };
        },
        mounted() {
            this.swiper = new Swiper('.mySwiper1', {
                navigation: {
                    nextEl: '.branch-swiper-button-next',
                    prevEl: '.branch-swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        },
        methods: {
            slideToPrev() {
                if (this.swiper) {
                    this.swiper.slidePrev();
                }
            },
            slideToNext() {
                if (this.swiper) {
                    this.swiper.slideNext();
                }
            },
        },
    };


</script>

<!-- --------------------------------樣式版---------------------------------------------- -->

<style scoped>

    /* -------------------------------pc的swiper-------------------------------------------- */

    .mySwiper1 {
        display: block;
        @media screen and (max-width:430px) {
            display: none;
        }
    }

    /* .mySwiper1 .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        /* display: flex;
        justify-content: center;
        align-items: center;
    }  */


    .mySwiper1 .swiper-slide li a {
        text-decoration: none;
        color: #292929;
    }


    .mySwiper1 li img {
        width: 300px;
        height: 420px;
    }


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

    .mySwiper .swiper-slide li a {
        text-decoration: none;
        color: #292929;
    }


    .mySwiper li img {
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