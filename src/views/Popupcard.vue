<script setup>
import '../assets/css/style.css';
import TopNavbar from '../components/TopNavbar.vue';
import Footerbar from '../components/Footerbar.vue';
</script>

<template>
    <TopNavbar />
    <main class="main-popupcard">
        <div class="background-blur"></div>
        <section class="wrapper-popupcard">
            <section class="card-popupcard">
                <p class="card-popupcard-title">請出示電子票券即可入場</p>
                <div class="card-popupcard-qrcode">
                    <img src="../assets/img/qrcode_001.jpg" alt="">
                </div>
                <h1>逃出虛空</h1>
                <div class="qrcode-time">
                    <p class="qrcode-time-y">2024</p>
                    <p class="qrcode-time-m">08</p>
                    <p class="qrcode-time-d">.17</p>
                </div>
                <div class="qrcode-place">
                    <p>台北館</p>
                    <div class="qrcode-vertical-line"></div>
                    <span>開始</span>
                    <span>14:00</span>
                </div>
            </section>
        </section>
    </main>

    <Footerbar />
</template>