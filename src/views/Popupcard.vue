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
            <section class="popupcard-card">
                <p class="popupcard-title">請出示電子票券即可入場</p>
                <div class="popupcard-qrcode">
                    <img src="../assets/img/qrcode_001.jpg" alt="">
                </div>
                <h1>逃出虛空</h1>
                <div class="qrcode-time">
                    <p class="qrcode-y">2024 /</p>
                    <p class="qrcode-m">08 /</p>
                    <p class="qrcode-d">17</p>
                </div>
                <div class="qrcode-place">
                    <p>台北館</p>
                    <div class="qrcode-line"></div>
                    <span>開始</span>
                    <span>14:00</span>
                </div>
            </section>
        </section>
    </main>

    <Footerbar />
</template>