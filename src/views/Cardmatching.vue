<template>
    <main class="card_container">

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



        <div v-if="isGameStarted" class="card_scene card_game_container" ref="card_scene1">
            <div class="card_game_info">
                <span id="time_remaining"><i class="fa-regular fa-hourglass-half"></i>時間：{{ timeRemaining }} 秒</span>
                <span @click="restart"><i class="fa-solid fa-repeat"></i>重新開始</span>
                <router-link to="/Minigame/"><span><i class="fa-solid fa-house-chimney"></i>遊戲首頁</span></router-link>
            </div>

            <div v-for="(card, index) in cards" :key="index" class="card_monument" :class="{ 'flipped': card.flipped }"
                @click="flipCard(card)">
                <!-- 卡片正面 -->
                <div class="card_front card_face">
                    <img class="card_hand" src="../assets/img/card_icon_hand.png">
                </div>

                <!-- 卡片背面 -->
                <div class="card_back card_face">
                    <img class="card_value" :src="card.src" :alt="card.name" :class="{ 'card_match': card.matched }">
                </div>
            </div>
        </div>

    </main>
</template>

<script>

import '../assets/css/style.css';
import cardAlert from 'sweetalert2';
import 'animate.css';
import axios from 'axios';

export default {

    beforeRouteLeave(to, from, next) {
        if (cardAlert.isVisible()) {
            cardAlert.close();
        }

        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
        next();
    },

    data() {
        return {
            isGameStarted: false,
            initialTime: 80,
            timeRemaining: this.initialTime,
            intervalId: null,
            cards: [
                { src: new URL("@/assets/img/card_icon_bat.png", import.meta.url).href, name: 'bat', flipped: false },
                { src:  new URL("@/assets/img/card_icon_coffin.png", import.meta.url).href, name: 'coffin', flipped: false },
                { src:  new URL("@/assets/img/card_icon_coin.png", import.meta.url).href, name: 'coin', flipped: false },
                { src:  new URL("@/assets/img/card_icon_eye.png", import.meta.url).href, name: 'eye', flipped: false },
                { src:  new URL("@/assets/img/card_icon_ghost.png", import.meta.url).href, name: 'ghost', flipped: false },
                { src:  new URL("@/assets/img/card_icon_skull.png", import.meta.url).href, name: 'skull', flipped: false },
                { src:  new URL("@/assets/img/card_icon_tombstone.png", import.meta.url).href, name: 'tombstone', flipped: false },
                { src:  new URL("@/assets/img/card_icon_potion.png", import.meta.url).href, name: 'potion', flipped: false },

            ],
            flippedCards: [],  // 追蹤翻開的卡片
            lockBoard: false,  // 避免玩家在翻卡時重複操作
            cardBgi: [new URL("@/assets/img/123.png", import.meta.url).href,]
        };
    },
    components: { cardAlert },
    mounted() {
        this.initializeGame();  // 頁面載入時初始化遊戲
    },

    methods: {
        getImagePath(imageName) {
            // 測試 console.log 檢查圖片路徑是否正確
            const path = new URL(`@/assets/img/${imageName}.png`, import.meta.url).href;
            console.log('Image path:', path);  // 檢查路徑是否正確
            return path;
        },
        startGame() {
            this.isGameStarted = true;
            this.startCountdown();
        },
        startCountdown() {
            this.timeRemaining = this.initialTime;
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

        initializeGame() {
            const cardPairs = this.cards.concat(this.cards.map(card => ({ ...card })));
            this.timeRemaining = this.initialTime;
            this.cards = this.shuffleArray(cardPairs);
        },

        flipCard(card) {
            if (this.lockBoard || card.flipped) return;

            card.flipped = true;
            this.flippedCards.push(card);

            if (this.flippedCards.length === 2) {
                this.lockBoard = true;
                setTimeout(()=>{
                    this.checkForMatch();
                },600);
            }
        },

        checkForMatch() {
            const [firstCard, secondCard] = this.flippedCards;

            if (firstCard.name === secondCard.name) {
                firstCard.matched = true;
                secondCard.matched = true;

                setTimeout(() => {
                    this.flippedCards = [];
                    this.lockBoard = false;
                    this.checkAllCardsMatched();
                },0);
            } else {
                this.lockBoard = true;
                setTimeout(() => {
                    firstCard.flipped = false;
                    secondCard.flipped = false;
                    this.flippedCards = [];
                    this.lockBoard = false;
                }, 200);
            }
        },

        checkAllCardsMatched() {
            const allMatched = this.cards.every(card => card.matched);
            if (allMatched) {
                this.challengeSuccess();
            }
        },
        //確認是否可以領取優惠券
        async challengeSuccess() {
            const user = JSON.parse(localStorage.getItem('user'));
            const memberId = user.id; // 假設的會員ID
            const discount = 50;

            try {
                // 在調用 API 之前顯示一個 console.log，確認方法被調用
                // console.log('checkCoupon 方法被調用了，gameId:', gameId);

                // const response = await axios.get(`http://localhost/appleyy/public/php/api/coupon.php`, { params: { member_id: memberId, discount: discount } });
                const response = await axios.get(import.meta.env.VITE_API_BASE + `/api/coupon.php`, { params: { member_id: memberId, discount: discount } });
                console.log('API 回應數據:', response.data);

                const result = response.data;

                if (result.status === 'exists') {
                    // 已有優惠券
                    this.showCardCoupon("挑戰成功，但你已經擁有寶藏了喔！", '/minigame/');
                    // console.log('成功領取優惠券', result.message);

                } else if (result.status === 'not_found') {
                    // 沒有優惠券
                    await this.issueCoupon(memberId, discount);
                    this.showCardCoupon("挑戰成功，恭喜挖到寶藏啦！", { path: '/Membermanage/', query: { tab: 'tab2' } });
                } else {
                    console.error("未知的優惠券狀態", result);
                }
            } catch (error) {
                console.error("API調用錯誤:", error);
            }
        },
        // 發放優惠券
        async issueCoupon(memberId, discount) {
            try {
                console.log('正在發送的折扣值:', discount);

                let form_data = new FormData();
                form_data.append("member_id", memberId);
                form_data.append("discount", discount);

                const response = await axios.post(import.meta.env.VITE_API_BASE + `/api/coupon.php`, form_data, {
                // const response = await axios.post("http://localhost/appleyy/public/php/api/coupon.php", form_data, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                console.log('優惠券發放成功:', response.data);
            } catch (error) {
                console.error("發放優惠券時出錯:", error);
            }
        },
        showCardCoupon(message, redirectUrl) {
            clearInterval(this.intervalId); // 停止計時
            cardAlert.fire({
                imageUrl: new URL("@/assets/img/card_icon_treasure.png", import.meta.url).href,
                imageWidth: 120,
                imageHeight: 140,
                text: message,
                confirmButtonText: '確認',
                confirmButtonColor: '#2b2b40',
                background: '#373757',
                color: 'white'
            }).then(() => {
                this.$router.push(redirectUrl);
            });
        },

        restart() {
            clearInterval(this.intervalId);
            this.lockBoard = true;

            this.cards = this.cards.map(card => ({ ...card, flipped: false }));
            setTimeout(() => {
                this.cards = this.cards.map(card => ({ ...card, matched: false }));
                this.cards = this.shuffleArray(this.cards);
                this.flippedCards = [];
                this.lockBoard = false;
                this.timeRemaining = this.initialTime;
                this.startCountdown();
            }, 500);
        },

        challengeFailed() {
            this.lockBoard = true;
            cardAlert.fire({
                imageUrl: new URL("@/assets/img/card_icon_ghost.png", import.meta.url).href,
                imageWidth: 100,
                imageHeight: 120,
                text: '時間到！挑戰失敗！',
                color: 'white',
                confirmButtonText: '重新挑戰',
                confirmButtonColor: '#2b2b40',
                background: '#373757',
                focusConfirm: false
            }).then(() => {
                this.restart();
            });
        },

        shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        },

        gameRules() {
            cardAlert.fire({
                imageUrl: new URL("@/assets/img/card_icon_candle.png", import.meta.url).href,
                imageWidth: 120,
                html: '80秒的記憶翻牌遊戲，在時間內完成即可獲得秘寶！<br>若使用手機請轉為橫向，以獲得最佳遊戲體驗！',
                background: '#2b2b40',
                color: 'white',
                showConfirmButton: false,
                showCloseButton: true,
                focusConfirm: false
            });
        }
    },
};
</script>
