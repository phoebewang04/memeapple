<template>
    <main class="card_container">
        <div class="card_scene active">
            <div class="card_start">

                <img src="../assets/img/card_bg.png" alt="card_bg">
            </div>

            <div class="card_start_icon">

                <img src="../assets/img/card_name.png" alt="">
                <img src="../assets/img/card_start.png" alt="">
                <img src="../assets/img/card_rules.png" alt="">

            </div>
        </div>

        <div class="card_game_container">

            <div class="card_game_info">
                <i class="fa-regular fa-hourglass-half"></i><span id="time_remaining">{{ timeRemaining }}</span>
                <i class="fa-solid fa-repeat"></i>
                <i class="fa-solid fa-house-chimney"></i><p>回遊戲首頁</p>
            </div>






        </div>


    </main>
</template>

<script>

import '../assets/css/style.css';
import secAlert from 'sweetalert2';
import 'animate.css';
import axios from 'axios';



export default {
components:{secAlert},
}
</script>

<style lang="scss" scoped></style>