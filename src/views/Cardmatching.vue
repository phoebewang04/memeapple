<template>
    <main class="card_container">
        <transition name="fade" mode="out-in">
        <div v-if="!isGameStarted" class="card_scene active card_start_container" ref="card_scene0">
            <div class="card_start">

                <img src="../assets/img/card_bg.png" alt="card_bg">
            </div>

            <div class="card_start_icon">

                <img src="../assets/img/card_name.png" alt="">
                <img src="../assets/img/card_start.png" alt="" @click="startGame">
                <img src="../assets/img/card_rules.png" alt="" @click="gameRules">

            </div>
        </div>
    </transition>

    <transition name="fade" mode="out-in">
        <div class="card_scene card_game_container" ref="card_scene1">

            <!-- <div class="aa">
             <img src="../assets/img/123.png" alt="">
            </div> -->

            <div class="card_game_info">
                <span id="time_remaining"><i class="fa-regular fa-hourglass-half"></i>遊戲時間：{{ timeRemaining }}秒</span>
                <span @click="restart"><i class="fa-solid fa-repeat"></i>重新開始</span>
                <router-link to="/Minigame/"><span><i class="fa-solid fa-house-chimney"></i>回遊戲首頁</span></router-link>

            </div>


            <div v-for="(card, index) in cards" :key="index" class="card_monument" :class="{ 'flipped': card.flipped }"
                @click="flipCard(card)">
                <!-- 卡片正面 -->
                <div class="card_front card_face">
                    <img class="card_hand" src="../assets/img/card_icon_hand.png">
                </div>

                <!-- 卡片背面 -->
                <div class="card_back card_face">
                    <img class="card_value" :src="`/tid102/g1/front/src/assets/img/${card.image}.png`" :alt="card.name"
                        :class="{ 'card_match': card.matched }">
                </div>
            </div>
        </div>
    </transition>

    </main>
</template>

<script>

import '../assets/css/style.css';
import cardAlert from 'sweetalert2';
import 'animate.css';
import axios from 'axios';



export default {

    beforeRouteLeave(to, from, next) {

        cardAlert.close();
        
        if (this.intervalId) {
        clearInterval(this.intervalId);
    }
        next();
    },

    data() {
        return {
            isGameStarted: false,
            cardSceneIndex: 0,
            isFlipped: false,
            timeRemaining: 10,
            intervalId: null,

            //卡片icon
            cards: [
                { image: 'card_icon_bat', name: 'bat', flipped: false },
                { image: 'card_icon_coffin', name: 'coffin', flipped: false },
                { image: 'card_icon_coin', name: 'coin', flipped: false },
                { image: 'card_icon_eye', name: 'eye', flipped: false },
                { image: 'card_icon_ghost', name: 'ghost', flipped: false },
                { image: 'card_icon_skull', name: 'skull', flipped: false },
                { image: 'card_icon_tombstone', name: 'tombstone', flipped: false },
                { image: 'card_icon_potion', name: 'potion', flipped: false },
            ],

            flippedCards: [],  // 追蹤翻開的卡片
            lockBoard: false,  // 避免玩家在翻卡時重複操作


        };
    },
    components: { cardAlert },
    mounted() {
        this.initializeGame();  // 頁面載入時初始化遊戲
    },

    methods: {
        startGame() {
            this.isGameStarted = true;  // 當點擊開始遊戲按鈕後，顯示遊戲畫面
        this.startCountdown();  // 開始倒數計時
        },
        startCountdown() {
            this.timeRemaining = 10;
            if (this.intervalId) {
                clearInterval(this.intervalId);
            }
            this.intervalId = setInterval(() => {
                if (this.timeRemaining > 0) {
                    this.timeRemaining--;
                } else {
                    clearInterval(this.intervalId);
                    this.challengeFailed();
                }
            }, 1000);
        },

        //初始化遊戲
        initializeGame() {
            // 複製一組卡片 (總共16張)
            const cardPairs = this.cards.concat(this.cards.map(card => ({ ...card })));
            this.timeRemaining = 10;
            // 打亂卡片順序
            this.cards = this.shuffleArray(cardPairs);
        },

        flipCard(card) {
            card.flipped = !card.flipped; // 切換flipped狀態
        },

        shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        },
        // 翻牌邏輯
        flipCard(card) {
            if (this.lockBoard || card.flipped) return;  // 如果卡片已經翻開則返回

            card.flipped = true;
            this.flippedCards.push(card);

            if (this.flippedCards.length === 2) {
                this.checkForMatch();
            }
        },
        checkForMatch() {
            const [firstCard, secondCard] = this.flippedCards;

            if (firstCard.name === secondCard.name) {
                firstCard.matched = true;
                secondCard.matched = true;

                setTimeout(() => {
                    this.flippedCards = [];
                }, 600);  // 等待動畫結束後清空 flippedCards
            } else {
                // 如果不匹配
                this.lockBoard = true;
                setTimeout(() => {
                    firstCard.flipped = false;
                    secondCard.flipped = false;
                    this.flippedCards = [];
                    this.lockBoard = false;
                }, 1000);
            }
        },
        restart() {
            // 重置卡片狀態，將所有卡片設為未翻開
            this.cards = this.cards.map(card => {
                return { ...card, flipped: false };
            });

            // 打亂卡片順序
            this.cards = this.shuffleArray(this.cards);

            // 清空翻牌狀態和解除鎖定
            this.flippedCards = [];
            this.lockBoard = false;
        },
        challengeFailed() {
            cardAlert.fire({
                title: '挑戰失敗',
                text: '時間到！你可以重新挑戰！',
                icon: 'error',
                confirmButtonText: '重新開始'
            }).then(() => {
                this.restart();
            });
        },
        gameRules(){

        }

    },
};
</script>