<template>

    <div class="deadGame">

        <div ref="game0" class="game active backgroundImg">

            <!-- -------背景圖------- -->
            <div class="deadgame1 deadPc">
                <img src="../assets/img/deadgame1.png" alt="">
            </div>
            <div class="deadgame2 deadMb">
                <img src="../assets/img/deadgame2.png" alt="">
            </div>
            <!-- -------星星------- -->
            <div class="deadstar1">
                <img src="../assets/img/deadstar.png" alt="">
            </div>
            <div class="deadstar2">
                <img src="../assets/img/deadstar.png" alt="">
            </div>
            <div class="deadstar3">
                <img src="../assets/img/deadstar.png" alt="">
            </div>
            <!-- -------殭屍圖------- -->
            <div class="deadZombie1">
                <img src="../assets/img/gameZombie1.png" alt="">
            </div>
            <div class="deadZombie2">
                <img src="../assets/img/gamezombie2.png" alt="">
            </div>
            <!-- -------開始按鈕------- -->
            <div class="deadBtn animate__animated animate__pulse" @click="goToNextPage">
                <img src="../assets/img/deadgameBtn.png" alt="">
            </div>

        </div>

        <!-- -------進入遊戲場景------- -->

        <div ref="game1" class="game playGround">

            <!-- -------背景圖------- -->
            <div class="deadgame3 deadPc">
                <img src="../assets/img/deadgame3.png" alt="">
            </div>


            <div class="deadgame4 deadMb">
                <img src="../assets/img/deadgame4.png" alt="">
            </div>

            <!-- -------輸入框跟按鈕------- -->
            <div class="guessNumberBox">
            <input type="text" maxlength="4" placeholder="請輸入四位數字" v-model="guess" :readonly="isReadOnly" @keyup.enter="checkGuess">
            <button id="enterBtn" :disabled="!isValidGuess"  @click="checkGuess" class="btn playBtn">送出</button>
            <!-- <el-button id="answerBtn" @click="showAnswer" class="btn answerBtn">Answer</el-button>   -->
            <!-- <el-button id="reloadBtn" @click="reloadPage" class="btn reloadBtn">Reload</el-button>  -->
            </div>
            <!-- -------重新開始------- -->

            <div class="resetBtn">
                <img src="../assets/img/deadreset.png" alt="" @click="reloadPage">
            </div>

            <!-- -------墓碑遊戲說明------- -->
            <div class="deadZombie3" @click="playText">
                <img src="../assets/img/gameZombie3.png" alt="">
            </div>

            <!-- -------警報器------- -->
            <div class="deadZombie4">
                <img src="../assets/img/gameZombie4-1png.png" alt="" :class="{ 'alermSpin': isAlermSpin }">
            </div>

            <!-- -------警報器光暈------- -->
            <div class="alertLeft" :class="{ 'active-alarm': isAlarmActive }"></div>
            <div class="alertRight" :class="{ 'active-alarm': isAlarmActive }"></div>

            <!-- -------警報器黃色光束------- -->
            <div class="deadZombie4_1">
                <img src="../assets/img/gameZombie4-2.png" alt="">
            </div>

            <!-- -------殭屍手臂------- -->
            <div class="deadZombie6">
                <img src="../assets/img/gameZombie6.png" alt="">
            </div>

            <!-- -------羊駝殭屍------- -->
            <div class="deadZombie7">
                <img src="../assets/img/gameZombie7.png" alt="">
            </div>

            <!-- -------乳牛殭屍------- -->
            <div class="deadZombie8">
                <!-- <p>hello</p> -->
                <img src="../assets/img/gameZombie8.png" alt="">
            </div>

            <!-- -------樹------- -->
            <div class="deadZombie9">
                <img src="../assets/img/gameZombie9.png" alt="">
            </div>

            <!-- -------咕嚕頭------- -->
            <div class="deadZombie10 animate__animated animate__headShake">
                <img src="../assets/img/gameZombie10.png" alt="">
            </div>

            <!-- -------鹿殭屍------- -->
            <div class="deadZombie11">
                <img src="../assets/img/gameZombie11.png" alt="">
            </div>

            <!-- -------蝙蝠------- -->
            <div class="deadZombie12">
                <img src="../assets/img/gameZombie12.png" alt="">
            </div>

            <!-- -------綿羊殭屍------- -->
            <div class="deadZombie13">
                <img src="../assets/img/gameZombie13.png" alt="">
            </div>

            <!-- -------離開掛牌------- -->
            <RouterLink to="/Minigame">
                <div class="deadZombie14">
                    <img src="../assets/img/gameZombie14.png" alt="">
                </div>
            </RouterLink>

            <!-- -------數字顯示框------- -->
            <div class="recordPlace">
                <div id="history" v-for="(record, index) in history" :key="index" class="record">{{ record }}</div>
            </div>

            <!-- -------對話文字------- -->
            <p class="deadtext" v-if="deadtext1">
                <span class="line">注意！你僅有的生命只有8條 ...</span>
                <span class="line">大門的密碼就是四個數字 他們快來了 快啊！</span>
            </p>
            <p class="deadtext" v-if="deadtext2">撐住 ... 還剩2條命 答案就在細節裡 ...</p>

            <!-- 遊戲邏輯 -->
            <div>
                <win-dialog :visible="showWinDialog" :status="gameResult" :winImageSrc="winningImage"
                    :loseImageSrc="loseImage" @confirm="resetGame" />
            </div>

        </div>

        <!-- -------進入遊戲場景------- -->




    </div>

</template>

<script>
import '../assets/css/style.css';
import 'animate.css';
import { ElButton, ElInput } from "element-plus";
import { ElMessageBox } from 'element-plus';
import 'element-plus/dist/index.css';
import WinDialog from '../components/WinDialog.vue';
import { RouterLink } from 'vue-router';
import orderAlert from 'sweetalert2';
import axios from 'axios';


export default {
    components: {
        ElButton,
        ElInput,
        WinDialog,
    },

    data() {
        return {
            currentgameIndex: 0,

            number: [],
            guess: "",
            isValidGuess: false,
            isReadOnly: false,
            history: [],
            answer: null,
            allGuess: [],
            count: 0,
            showWinDialog: false,
            gameResult: '', // 'win' 或 'lose'
            maxTry: 8,
            isAlarmActive: false,
            isAlermSpin: false,
            winningImage: new URL('@/assets/img/deadWinPic.png', import.meta.url).href,
            loseImage: new URL('@/assets/img/deadLosePic.png', import.meta.url).href,

            deadtext1: true,
            deadtext2: false,
        };
    },
    methods: {

        goToNextPage() {
            if (this.transitioning) return;
            this.transitioning = true;

            const scenes = [this.$refs.game0, this.$refs.game1, this.$refs.game2];

            //淡出場景效果
            const currentScene = scenes[this.currentgameIndex];
            currentScene.classList.add('animate__animated', 'animate__fadeOut');

            setTimeout(() => {
                currentScene.classList.remove('active', 'animate__fadeOut');
                currentScene.style.display = 'none';

                //切換到下一個場景
                this.currentgameIndex++;
                const nextScene = scenes[this.currentgameIndex];
                nextScene.style.display = 'block';
                nextScene.classList.add('active', 'animate__animated', 'animate__fadeIn');

                //動畫結束後重置
                setTimeout(() => {
                    nextScene.classList.remove('animate__fadeIn');
                    this.transitioning = false; //重置過渡狀態
                }, 500);
            }, 500);
        },
        createAnswer() {
            let randomNumbers = [];
            while (randomNumbers.length < 4) {
                const randomNum = Math.floor(Math.random() * 10);
                if (!randomNumbers.includes(randomNum)) {
                    randomNumbers.push(randomNum);
                }
            }
            this.answer = randomNumbers.join("");
        },
        // hideText() {
        //     this.deadtext1 = false;
        // },
        checkGuess() {

            //判斷數字是否為4個數字長度
            if (this.guess.length !== 4) {
                ElMessageBox.alert("請輸入 4 個數字", "Error", {
                    confirmButtonText: "OK",
                    type: "error",
                });
                return;
            }

            // 正規表示去判斷是否為數字
            const numericPattern = /^\d{4}$/;
            if (!numericPattern.test(this.guess)) {
                ElMessageBox.alert("請輸入四個數字，不能包含字母或符號", "Error", {
                    confirmButtonText: "OK",
                    type: "error",
                });
                return;
            }


            // 2. 檢查是否有重複的數字
            for (let i = 0; i < 4; i++) {
                for (let j = i + 1; j < 4; j++) {
                    if (this.guess[i] === this.guess[j]) {
                        ElMessageBox.alert("請輸入不同數字", "Error", {
                            confirmButtonText: "OK",
                            type: "error",
                        });
                        return;
                    }
                }
            }

            // 3. 檢查是否已經猜過這個數字
            if (this.allGuess.includes(this.guess)) {
                ElMessageBox.alert("已輸入相同的猜測", "Error", {
                    confirmButtonText: "OK",
                    type: "error",
                });
                return;
            }

            // 4. 計算幾A幾B
            let numA = 0;
            let numB = 0;
            let usedIndices = new Set();
            for (let i = 0; i < 4; i++) {
                if (this.guess[i] === this.answer[i]) {
                    numA++;
                    usedIndices.add(i);
                }
            }

            for (let i = 0; i < 4; i++) {
                if (this.guess[i] !== this.answer[i] && this.answer.includes(this.guess[i])) {
                    let correctIndex = this.answer.indexOf(this.guess[i]);
                    if (!usedIndices.has(correctIndex)) {
                        numB++;
                        usedIndices.add(correctIndex);
                    }
                }
            }

            // 5. 記錄猜測次數和結果
            this.count++;
            //判斷剩餘次數來啟動警報器效果
            const playTimes = this.maxTry - this.count;
            if (playTimes === 2) {
                this.activeAlerm();
            }

            const record = `${this.guess}  ${numA}A${numB}B`;

            this.history.push(record);
            this.allGuess.push(this.guess);

            // 6. 若猜中 4A 則結束遊戲
            if (numA === 4) {
                // this.playerWins();
                this.challengeSuccess();
                this.isReadOnly = true;
            } else if (this.count >= this.maxTry) {
                this.playerLose();
            }

            // 7. 清空猜測輸入
            this.guess = "";
        },
        activeAlerm() {
            this.isAlarmActive = true;
            this.isAlermSpin = true;
            this.deadtext2 = true;
            this.deadtext1 = false;
        },
        playerWins() {
            // 顯示對話框
            this.gameResult = 'win';
            this.showWinDialog = true;
            this.isAlarmActive = false;
            this.isAlermSpin = false;
            this.deadtext2 = false;
        },
        playerLose() {
            this.gameResult = 'lose';
            this.showWinDialog = true;
            this.isAlarmActive = false;
            this.isAlermSpin = false;
            this.deadtext2 = false;
        },

        resetGame() {
            // 重置遊戲邏輯
            this.showWinDialog = false;  // 隱藏對話框
            this.createAnswer();// 重新生成答案
            this.guess = "";  // 清空玩家輸入
            this.history = [];  // 清空歷史記錄
            this.count = 0;  // 重置嘗試次數
            this.isReadOnly = false; // 允許玩家再次輸入
            this.allGuess = []; // 清空已經猜過的數字
            this.isAlarmActive = false;
            this.isAlermSpin = false;
            this.deadtext1 = true;
            this.deadtext2 = false;

        },

        showAnswer() {
            ElMessageBox.alert("Answer : " + this.answer, "Answer", {
                confirmButtonText: "OK",
                callback: (action) => {
                    console.log(action);
                },
                type: "info",
            });
        },
        reloadPage() {
            ElMessageBox.confirm("確定要重新開始遊戲？", {
                confirmButtonText: "Confirm",
                cancelButtonText: "Cancel",
                type: "warning",
            })
                .then(() => {
                    this.resetGame();  // 調用來重置遊戲的邏輯
                    console.log("Game reset.");
                })
                .catch(() => {
                    console.log("Item reload canceled.");
                });
        },

        playText() {
            ElMessageBox.alert("1A2B是一個數字猜測遊戲。<br>遊戲目標是猜出由四個不同數字組成的秘密數字 位置和數字完全正確的稱為「A」，<br>數字正確但位置錯誤的稱為「B」。<br>若秘密數字是1234，玩家猜測1325，<br>則結果為「2A1B」：<br>1和2的數字及位置正確，3數字正確但位置錯誤。<br><br>", " 歡迎來到亡命數字", {
                dangerouslyUseHTMLString: true,
                confirmButtonText: "OK",
            })
        },
        CautionAlert() {

        },
        //確認是否可以領取優惠券
        async challengeSuccess() {
            const user = JSON.parse(localStorage.getItem('user'));
            const memberId = user.id;
            const discount = 100;

            try {
                
                 const response = await axios.get(import.meta.env.VITE_API_BASE + `/api/coupon.php`, { params: { member_id: memberId, discount: discount } });
                // const response = await axios.get(`http://localhost/appleTeam/public/php/api/coupon.php`, { params: { member_id: memberId, discount: discount } });
                console.log('API 回應數據:', response.data);

                const result = response.data;

                if (result.status === 'exists') {
                    // 已有優惠券
                    this.playerWins();

                } else if (result.status === 'not_found') {
                    // 沒有優惠券
                    await this.issueCoupon(memberId, discount);
                    this.showDeadCoupon("挑戰成功，恭喜挖到寶藏啦！", { path: '/Membermanage/', query: { tab: 'tab2' } });
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

                // const response = await axios.post(import.meta.env.VITE_API_BASE + "/api/coupon.php", form_data, {
                 const response = await axios.post("http://localhost/appleTeam/public/php/api/coupon.php", form_data, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                console.log('優惠券發放成功:', response.data);
            } catch (error) {
                console.error("發放優惠券時出錯:", error);
            }
        },
        showDeadCoupon(message, redirectUrl) {
            orderAlert.fire({
                icon: 'success',
                text: message,
                confirmButtonText: '確認',
                confirmButtonColor: '#2b2b40',
                // background: '#373757',
                // color: 'white'
            }).then(() => {
                this.$router.push(redirectUrl);
            });
        },
    },
    mounted() {
        this.createAnswer();
    },

    watch: {
        guess(newGuess) {
            this.isValidGuess = newGuess.length === 4;
        },
    },


}
</script>

<style scoped></style>