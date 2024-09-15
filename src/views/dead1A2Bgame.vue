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
            <!-- -------返回按鈕------- -->
            <RouterLink to="/Minigame">
                <div class="returnBtn">
                    <img src="../assets/img/deadreturn.png" alt="">
                </div>
            </RouterLink>
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
            <el-input maxlength="4" placeholder="請輸入四位數字" v-model="guess" :readonly="isReadOnly" @keyup.enter="checkGuess" class="guessNumberBox"></el-input>
            <el-button id="enterBtn" :disabled="!isValidGuess"  @click="checkGuess" class="btn playBtn" >送出</el-button>
            <!-- <el-button id="answerBtn" @click="showAnswer" class="btn answerBtn">Answer</el-button>
            <el-button id="reloadBtn" @click="reloadPage" class="btn reloadBtn">Reload</el-button> -->


            <!-- -------返回按鈕------- -->

            <div class="returnBtn2">
                <img src="../assets/img/deadreturn.png" alt="">
            </div>

             <!-- -------墓碑------- -->
            <div class="deadZombie3">
                <img src="../assets/img/gameZombie3.png" alt="">
            </div>

            <!-- -------警報器------- -->
            <div class="deadZombie4">
                <img src="../assets/img/gameZombie4-1png.png" alt="">
            </div>
            <div class="deadZombie4_1">
                <img src="../assets/img/gameZombie4-2.png" alt="">
            </div>

             <!-- -------提示燈------- -->
            <div class="deadZombie5" @click="tips">
                <img src="../assets/img/gameZombie5.png" alt="">
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
                <img src="../assets/img/gameZombie8.png" alt="">
            </div>

            <!-- -------樹------- -->
            <div class="deadZombie9">
                <img src="../assets/img/gameZombie9.png" alt="">
            </div>

            <!-- -------咕嚕頭------- -->
            <div class="deadZombie10">
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

             <!-- -------數字顯示框------- -->
            <div class="recordPlace">
                <div id="history" v-for="(record, index) in history" :key="index" class="record" >{{ record }}</div>
            </div>

             <!-- 遊戲邏輯 -->
            <div>
                <win-dialog :visible="showWinDialog" :status="gameResult" :winImageSrc="winningImage" :loseImageSrc="loseImage"  @confirm="resetGame"/>
            </div>
            
        </div>

         <!-- -------進入遊戲場景------- -->




    </div>

</template>

<script>
import '../assets/css/style.css';
import TopNavbar from '../components/TopNavbar.vue';
import Footerbar from '../components/Footerbar.vue';
import 'animate.css';
import { ElButton, ElInput } from "element-plus";
import { ElMessageBox } from 'element-plus';
import 'element-plus/dist/index.css';
import WinDialog from '../components/WinDialog.vue';


    export default {
        components: {
            // TopNavbar,
            // Footerbar
            ElButton,
            ElInput,
            WinDialog,
        },

        data () {
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
                winningImage: new URL('@/assets/img/deadWinPic.png', import.meta.url).href,
                loseImage: new URL('@/assets/img/deadLosePic.png', import.meta.url).href,
            };
        },
        methods: {

            goToNextPage() {
                if(this.transitioning) return;
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
                const record = `${this.guess}   ${numA} A ${numB} B`;
                this.history.push(record);
                this.allGuess.push(this.guess);

                // 6. 若猜中 4A 則結束遊戲
                if (numA === 4) {
                    this.playerWins();
                    this.isReadOnly = true;
                }else if (this.count >= this.maxTry) {
                    this.playerLose();
                }

                // 7. 清空猜測輸入
                this.guess = "";
            },
            playerWins() {
            // 顯示對話框
                this.gameResult = 'win';
                this.showWinDialog = true;
            },
            playerLose() {
                this.gameResult = 'lose';
                this.showWinDialog = true;
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
                
            },

            // showAnswer() {
            //     ElMessageBox.alert("Answer : " + this.answer, "Answer", {
            //         confirmButtonText: "OK",
            //         callback: (action) => {
            //             console.log(action);
            //         },
            //         type: "info",
            //     });
            // },
            // reloadPage() {
            //     ElMessageBox.confirm("確定要重新開始遊戲？", {
            //         confirmButtonText: "Confirm",
            //         cancelButtonText: "Cancel",
            //         type: "warning",
            //     })
            //     .then(() => {
            //     console.log("Item reload.");
            //     location.reload();
            //     })
            //     .catch(() => {
            //     console.log("Item reload canceled.");
            //     });
            // },
        },
        mounted (){
            this.createAnswer();
        },

        watch: {
            guess(newGuess) {
                this.isValidGuess = newGuess.length === 4;
            },
        },


    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat&family=Lilita+One&family=Nerko+One&family=Permanent+Marker&family=Playwrite+CU:wght@100..400&family=Protest+Guerrilla&display=swap');
</style>