<script setup>
import '../assets/css/style.css'
</script>

<template>
    <footer>
        <section class="bottom">

            <!-- 這邊是Logo，可以回前後台分流頁 -->
            <section> <router-link to="/"><img src="../assets/img/memelogo.svg" alt=""></router-link></section>

            <!-- 這邊是中央文字 -->
            <section class="bm_text">
                <div class="footerRule">
                    <router-link to="/Branch/"><span>隱私權政策</span></router-link>
                    <router-link to="/Branch/"><span>服務條款</span></router-link>
                </div>
                <p>© Copyright Meme謎因工作室&nbsp;&nbsp;All Rights Reserved.</p>
                <p>本網站為緯育TibaMe【第93期】前端工程師專業技術養成班學員作品，僅供學習、展示之用途。</p>
            </section>

            <!-- 這邊是右側icon區域 -->
            <section class="bm_info">
                <!-- 
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-square-threads"></i> 
                -->

                <div class="footerPlace">
                    <p>台北館：台北市密逃路8之10號</p>
                    <p>台中館：台中市北屯區路黎明路8號</p>
                </div>

                <div class="footerInfo">
                    <p>聯絡方式：meme@gmail.com</p>
                    <!-- <p>連絡電話：09123456789</p> -->
                    <p>營業時間：10：00 - 18：00</p>
                </div>

            </section>
        </section>
    </footer>
</template>


<!-- <style lang="scss" scoped>
    .bottom {
    background-color: #262B3F;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;

    img {
        width: 100px;
        height: 70px;
        margin-left: 80px;

        @media (max-width: 650px) {
        width: 70px;
        margin: 0 20px;
        }
    }

    .bm_text {
        color: white;
        margin: 0 auto;
        line-height: 1.6;
        display: flex;
        flex-direction: column;
        text-align: center;

        @media (max-width: 650px) {
        width: 160px;
        font-size: 6px;
        }
    }

    .icon {
        width: 80px;
        display: flex;
        justify-content: space-between;
        color: white;
        margin-left: auto;
        padding-right: 80px;

        @media (max-width: 650px) {
        padding-right: 20px;
        font-size: 20px;
        width: 100px;
        }
    }
    }

    .spec {
    color: #FEDA77;
    font-size: 32px;
    margin-top: 20px;
    }
</style> -->