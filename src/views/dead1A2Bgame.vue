<template>
   <!-- <TopNavbar /> -->

   <div class="wrapper">

        <!-- <div class="return">
            <i class="fa-solid fa-chevron-left"></i>
            <a href="#">
                <p>返回遊戲選單</p>
            </a>
        </div> -->

        <div class="backgroundImg">

            <div class="deadgame1">
                <img src="../assets/img/deadgame1.png" alt="">
            </div>

            <div class="deadstar1">
                <img src="../assets/img/deadstar.png" alt="">
            </div>

            <div class="deadstar2">
                <img src="../assets/img/deadstar.png" alt="">
            </div>

            <div class="deadstar3">
                <img src="../assets/img/deadstar.png" alt="">
            </div>

            <div class="deadBtn animate__animated animate__pulse" @click="deadgameBtn">
                <img src="../assets/img/deadgameBtn.png" alt="">
            </div>

            <div class="deadZombie1">
                <img src="../assets/img/gameZombie1.png" alt="">
            </div>

            <div class="deadZombie2">
                <img src="../assets/img/gamezombie2.png" alt="">
            </div>

        </div>
    </div>

   <!-- <Footerbar /> -->
</template>

<script>
import '../assets/css/style.css';
import TopNavbar from '../components/TopNavbar.vue';
import Footerbar from '../components/Footerbar.vue';

    export default {
        components: {
        TopNavbar,
        Footerbar
    },

    }
</script>

<style lang="scss" scoped>

</style>