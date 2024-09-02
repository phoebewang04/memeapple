<script setup>
// import { useRouter,useRoute } from 'vue-router';
// const router = useRouter()
// const route = useRoute()
// console.log(router);
// console.log(route.query);

// ajax


import '../assets/css/style.css';
import TopNavbar from '../components/TopNavbar.vue';
import Footerbar from '../components/Footerbar.vue';

</script>


<template>
    <TopNavbar />
    <main class="main-announcement">
        <section class="wrapper-announcement">
            <section class="content-announcement">
                <!-- 左邊圖像 -->
                <section class="content-announcement-img">
                    <!-- 麵包屑 -->
                    <section class="bread-announcement">
                        <nav class="bread-announcement-breadcrumb">
                            <ul>
                                <li><router-link to="/index/">首頁</router-link></li>
                                <li>&gt;</li>
                                <li><router-link to="/index/">最新消息</router-link></li>
                                <li>&gt;</li>
                                <li><router-link to="/Announcement/">成都廢院無法驅散的幽冥殘穢</router-link></li>
                            </ul>
                        </nav>
                    </section>
                    <img src="../assets/img/AnnouncementPic01.jpg" alt="">
                </section>

                <!-- 右邊文字內容與按鈕 -->
                 <section class="content-announcement-text">
                    <h2>-鄉野傳說</h2>
                    <h1>成都廢院 無法驅散的幽冥殘穢</h1>
                    <p>位於中國成都某間醫院發生一場嚴重爆炸事故，而後該醫院被政府勒令停業廢棄。自那之後追求刺激的年輕人紛紛結群成黨將其當作靈異事件的熱點。</p>
                    <p>你和你的兄弟們決定進入這座醫院探險，就像其他年輕人一樣，準備帶回一些紀念品，殊不知這便是一切輪迴的開端......。</p> 
                    <p>「看我帶回醫院裡面的消防斧頭，這樣我就可以證明我有來過這邊!」你一臉不屑的擊破被封鎖的窗戶，再次進入月光無法觸及的漆黑深淵，無數的眼睛凝視著你，期待下一隻迷路的羔羊成為祭品。</p>
                    <router-link to="/index/"><button class="btn NewsBack">回到首頁</button></router-link>
                </section>
            </section>
        </section>
    </main>

    <Footerbar />
</template>