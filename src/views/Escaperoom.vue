<template>
  <!-- <TopNavbar /> -->
  <main class="escaperoom_container">

    <div class="esc_hint_wrapper" v-if="currentSceneIndex >= 1 && currentSceneIndex <= 5">
      <input type="checkbox" />
      <div class="float_btn"></div>
      <div class="float_actions">
        <i class="fa-solid fa-info" @click="showInfo"></i>
        <i class="fa-solid fa-lightbulb" @click="showHint"></i>
        <router-link to="/Minigame/"><i class="fa-solid fa-book-skull"></i></router-link>
      </div>
    </div>
    <!-- <div class="esc_hint" @click="showInfo" v-if="currentSceneIndex !== 0">
      <i class="fa-solid fa-lightbulb"></i>
    </div> -->

    <!------- 進入畫面 ------->
    <div ref="scene0" class="scene active esc_enter_container">
      <div class="esc_start_container room">

        <img src="../assets/img/esc_start.png" alt="enter-Screen">

        <div class="esc_start">

          <p>穿過古老墓園，迎面而來的是一座佇立多年、陰森詭異的廢棄醫院。<br>勇者是無法回頭的，唯有在這座迷霧籠罩的醫院內，解開重重謎團，才能找到生存的出口！</p>

          <div class="esc_start_btn">
            <button @click="startGame"><i class="fa-solid fa-ghost"></i>開始遊戲</button>
            <button @click="noviceTeach"><i class="fa-solid fa-question"></i>新手教學</button>
          </div>
        </div>
      </div>
    </div>

    <!-- ----- 廁所 ----- -->
    <div ref="scene1" class="scene esc_bathroom_container">

      <div class="esc_bath room">
        <img src="../assets/img/esc_bathroom.png" alt="bathroom">
      </div>

      <div class="esc_bath_exit">
        <img src="../assets/img/esc_02.png" alt="sewer-outlet" @click="escExit('2014')">
      </div>

      <div class="esc_bath_icon">
        <img src="../assets/img/esc_03.png" alt="paper" @click="paperClues(0)">
        <img src="../assets/img/esc_04.png" ref="trash" class="esc_bath_trash" alt="Trash" @click="removeTrash">
      </div>

    </div>


    <!------- 病房 ------->
    <div ref="scene2" class="scene esc_bedroom_container">
      <div class="esc_bed room">
        <img src="../assets/img/esc_bedroom.png" alt="esc-bedroom">
      </div>

      <div class="esc_bed_exit">
        <img src="../assets/img/esc_01.png" alt="bedroom-door" @click="escExit('NEXIVAN')">
      </div>

      <div class="esc_bed_icon">
        <img ref="brokenWindow" src="../assets/img/esc_06.png" alt="broken-window">
        <img ref="window" src="../assets/img/esc_05.png" alt="window">
        <img ref="shards" src="../assets/img/esc_09.png" alt="shards">
        <img ref="wastepaper" src="../assets/img/esc_11.png" alt="wastepaper" @click="paperClues(1)">
        <img src="../assets/img/esc_10.png" alt="wheelchair">
        <img ref="axe" src="../assets/img/esc_08.png" alt="axe">
        <img src="../assets/img/esc_07.png" alt="bed">
        <img src="../assets/img/esc_12.png" alt="phone" class="bed_phone animate__animated animate__tada"
          @click="paperClues(2)">
      </div>

    </div>


    <!------- 辦公室 ------->

    <div ref="scene3" class="scene esc_office_container" :class="{ 'light_on': !isLightOff }">

      <div class="esc_office room">
        <img src="../assets/img/esc_office.png" alt="esc-office">
      </div>

      <div class="esc_office_exit">
        <img src="../assets/img/esc_01.png" alt="office-door" ref="office-door" @click="escExit('0417')">
      </div>

      <div class="esc_office_icon">
        <img src="../assets/img/esc_18.png" alt="number-hint" v-show="!isLightOff">
        <img src="../assets/img/esc_14.png" alt="light-off" @click="toggleLight" v-show="isLightOff">
        <img src="../assets/img/esc_13.png" alt="light-on" @click="toggleLight" v-show="!isLightOff">
        <img src="../assets//img/esc_20.png" alt="office-lock" ref="officeLock"
          @click="lockClues('message', 'officeLock', 5)">
        <img src="../assets//img/esc_15.png" alt="computer-key" v-show="!isLightOff">
        <img src="../assets//img/esc_16.png" alt="eyes" v-show="!isLightOff">
        <img src="../assets//img/esc_17.png" alt="office-box" ref="OfficeBox" @click="paperClues(3)">
        <img src="../assets//img/esc_19.png" alt="fold-paper" ref="FoldPaper" @click="paperClues(4)">
      </div>
    </div>


    <!------- 餐廳 ------->
    <div ref="scene4" class="scene esc_restaurant_container">

      <div class="esc_restaurant room">
        <img src="../assets/img/esc_restaurant.png" alt="esc-restaurant">
      </div>

      <div class="esc_restaurant_exit">
        <img src="../assets/img/esc_21.png" alt="restaurant-door">
      </div>

      <div class="esc_restaurant_icon">
        <img src="../assets/img/restaurant_hint_1.png" alt="restaurant-menu" @click="paperClues(6)">
        <img src="../assets/img/esc_22.png" alt="restaurant-lock-menu" ref="lockMenu"
          @click="lockClues('560', 'lockMenu', 7)">
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50" />
        </svg>
        <img src="../assets/img/esc_24.png" alt="restaurant-light">
        <img src="../assets/img/esc_21.png" alt="restaurant-door1" @click="escExit('DEATH')">

      </div>
    </div>


    <!------- 大廳走廊 ------->

    <div ref="scene5" class="scene esc_hall_container">

      <div class="esc_hall room">
        <img src="../assets/img/esc_hall.png" alt="esc-hall">
      </div>

      <div class="esc_hall_exit">
        <img src="../assets/img/esc_33.png" alt="hall-door" @click="escExit('CYCLE')">
      </div>


      <div class="puzzle_container">
        <img src="../assets/img/hall_hint_1.png" alt="hall-phone-frame">
        <img src="../assets/img/esc_25.png" alt="puzzle-up" @click="movePuzzle('puzzle-up')"
          :class="{ 'puzzle-active': activePuzzles['puzzle-up'] }">
        <img src="../assets/img/esc_26.png" alt="puzzle-right" @click="movePuzzle('puzzle-right')"
          :class="{ 'puzzle-active': activePuzzles['puzzle-right'] }">
        <img src="../assets/img/esc_27.png" alt="puzzle-left" @click="movePuzzle('puzzle-left')"
          :class="{ 'puzzle-active': activePuzzles['puzzle-left'] }">
        <img src="../assets/img/esc_28.png" alt="puzzle-down" @click="movePuzzle('puzzle-down')"
          :class="{ 'puzzle-active': activePuzzles['puzzle-down'] }">

        <img v-if="allPuzzlesCompleted" src="../assets/img/hall_hint_2.png" alt="full-puzzle-tips"
          @click="paperClues(8)">

      </div>

      <div class="esc_hall_icon">
        <img src="../assets/img/esc_29.png" alt="hall-clock">
        <img src="../assets/img/esc_30.png" alt="hall-phone">
        <img src="../assets/img/esc_31.png" alt="hall-vase">
        <img src="../assets/img/esc_32.png" alt="hall-paper" @click="paperClues(9)">


      </div>
    </div>


    <!------- 結束影片 ------->
    <div ref="scene6" class="scene esc_end">

      <div class="esc_end room">
        <video ref="endVideo" src="../assets/img/esc_end.mp4" playsinline autoplay muted preload="auto"
          controls></video>

        <!-- <video ref="endVideo" src="../assets/img/esc_end.mp4" playsinline autoplay muted></video> -->
      </div>
    </div>

    <!-- <div>
      <button @click="showCoupon()">test</button>
    </div> -->
  </main>
  <!-- <Footerbar /> -->
</template>

<script>
import '../assets/css/style.css';
import secAlert from 'sweetalert2';
import 'animate.css';
import interact from 'interactjs';
import axios from 'axios';


export default {
  component: { secAlert, interact },

  //------------讓音樂和alert可以正常返回------------
  beforeRouteLeave(to, from, next) {

    secAlert.close();

    if (this.bgMusic1) {
      this.bgMusic1.pause();
      this.bgMusic1.currentTime = 0; //重新設定播放進度

    }
    next();
  },
  data() {
    return {
      currentSceneIndex: 0, //當前的場景索引

      //------------辦公室------------
      isLightOff: true,

      //------------大廳------------
      activePuzzles: {
        'puzzle-up': false,
        'puzzle-right': false,
        'puzzle-left': false,
        'puzzle-down': false,
      },

      allPuzzlesCompleted: false,

      //------------大廳------------
      bgMusic1: null,  // 第一首音樂
      bgMusic2: null,  // 第二首音樂

      //------------各關提示圖片+文字------------
      clueImages: [
        //廁所
        new URL("@/assets/img/bath_hint.png", import.meta.url).href,

        // 病房
        new URL("@/assets/img/bed_hint.png", import.meta.url).href,
        new URL("@/assets/img/esc_12.png", import.meta.url).href,

        //辦公室
        new URL("@/assets/img/office_hint_1.png", import.meta.url).href,
        new URL("@/assets/img/office_hint_2.png", import.meta.url).href,
        new URL("@/assets/img/office_hint_3.png", import.meta.url).href,

        //餐廳
        new URL("@/assets/img/restaurant_hint_1.png", import.meta.url).href,
        new URL("@/assets/img/restaurant_hint_2.png", import.meta.url).href,

        //大廳
        new URL("@/assets/img/hall_hint_2.png", import.meta.url).href,
        new URL("@/assets/img/hall_hint_3.png", import.meta.url).href,

        //新手教學
        new URL("@/assets/img/esc_noviceteach.png", import.meta.url).href,

      ],

    };
  },
  mounted() {

    const axe = this.$refs.axe;
    const window = this.$refs.window;
    const brokenWindow = this.$refs.brokenWindow;
    const shards = this.$refs.shards;
    const wastepaper = this.$refs.wastepaper;

    import('../assets/img/escapebgmusic_1.mp3')
      .then((module) => {
        this.bgMusic1 = new Audio(module.default);
        this.bgMusic1.loop = true;

      })
      .catch((err) => {
        console.error("音樂檔案載入失敗:", err);
      });

    import('../assets/img/escapebgmusic_2.mp3')
      .then((module) => {
        this.bgMusic2 = new Audio(module.default);
        this.bgMusic2.loop = true;

      })
      .catch((err) => {
        console.error("音樂檔案載入失敗:", err);
      });

    //------------斧頭------------
    interact(axe).draggable({
      listeners: {
        move(event) {
          // event.dx 和 dy 是 比起上一次拖動的水平與垂直偏移量
          const x = (parseFloat(axe.getAttribute('data-x')) || 0) + event.dx;
          // console.log(x);
          const y = (parseFloat(axe.getAttribute('data-y')) || 0) + event.dy;
          // console.log(y);

          // 更新斧頭的位置
          axe.style.transform = `translate(${x}px, ${y}px)`;
          axe.setAttribute('data-x', x);
          axe.setAttribute('data-y', y);
        },
        end(event) {
          const axeRect = axe.getBoundingClientRect();
          const windowRect = window.getBoundingClientRect();

          // 碰撞檢測
          if (
            axeRect.right > windowRect.left &&
            axeRect.left < windowRect.right &&
            axeRect.bottom > windowRect.top &&
            axeRect.top < windowRect.bottom
          ) {
            axe.style.display = 'none';
            window.style.display = 'none';
            brokenWindow.style.display = 'block';
            shards.style.display = 'block';
            wastepaper.style.display = 'block';
          }
        }
      }
    });
  },
  methods: {
    //------------開始遊戲並觸發音樂------------
    startGame() {
      if (this.bgMusic1) {
        this.bgMusic1.play().catch(error => {
          console.error("背景音樂1播放失敗:", error);
        });
      }

      this.nextScene();  // 切換到下一個場景
    },


    //------------轉場------------
    noviceTeach() {
      secAlert.fire({
        // title: "新手教學",
        imageUrl: this.clueImages[10],
        html: '一進入密室後，右上角的＋號背包會一直陪伴著你！<br><br><li>場景資訊：快速了解每個關卡的環境。</li><br><li>密室提示：遇到瓶頸時，點擊燈泡獲取提示</li><br><li>好想回家：點擊此按鈕返回遊戲選單頁<br>（勇者無法回頭，但我不會攔你！）</li><br>建議使用電腦操作，並開啟全螢幕畫面（F11）及聲音。<br>若使用手機請轉向，以獲得最佳遊戲體驗！',
        confirmButtonColor: "#82a7af",
        backdrop: false,
        willOpen: () => {
          document.body.style.paddingRight = '0';
        }
      });
    },
    nextScene() {
      if (this.transitioning) return; //避免重複觸發
      this.transitioning = true;

      const scenes = [
        this.$refs.scene0, this.$refs.scene1, this.$refs.scene2,
        this.$refs.scene3, this.$refs.scene4, this.$refs.scene5, this.$refs.scene6
      ];

      const currentScene = scenes[this.currentSceneIndex];
      currentScene.classList.add('animate__animated', 'animate__fadeOut');

      setTimeout(() => {
        currentScene.classList.remove('active', 'animate__fadeOut');
        currentScene.style.display = 'none';

        // 切換到下一個場景
        this.currentSceneIndex++;
        const nextScene = scenes[this.currentSceneIndex];
        nextScene.style.display = 'block';
        nextScene.classList.add('active', 'animate__animated', 'animate__fadeIn');

        // 音樂切換邏輯
        if (this.currentSceneIndex === 6 && this.bgMusic1) {
          this.bgMusic1.pause();  // 停止第一首音樂

          if (this.bgMusic2) {
            this.bgMusic2.play().catch(error => {
              console.error("背景音樂2播放失敗:", error);
            });
          }

          const videoElement = this.$refs.endVideo;
          videoElement.addEventListener('ended', () => {
            this.checkCoupon();
          });
        }

        setTimeout(() => {
          nextScene.classList.remove('animate__fadeIn');
          this.transitioning = false; //重置過渡狀態
        }, 800);
      }, 800);
    },
    //------------關卡資訊提示------------
    showInfo() {
      // console.log(this);
      let infoText = '';

      switch (this.currentSceneIndex) {
        case 1:
          infoText = '…這裡是廁所？看起來唯一的出口就是下水道了…';
          break;
        case 2:
          infoText = '窗戶後面好像有什麼，找看看有沒有可以擊破的東西';
          break;
        case 3:
          infoText = '這裡好暗，先找看看有沒有燈吧！';
          break;
        case 4:
          infoText = '看來要先知道被擋住的東西是什麼，才能逃出去@@';
          break;
        case 5:
          infoText = '這裡看起來是醫院的大廳！離出口不遠了！<br>壁畫上的裂痕好像拼圖，先找一下有沒有類似形狀的碎片';
          break;
        default:
          infoText = '目前沒有可用的提示。';
      }

      secAlert.fire({
        icon: 'info',
        html: infoText,
        showConfirmButton: false,
        showCloseButton: true,
        CloseButtonColor: "#221F3C",
        backdrop: false,
        willOpen: () => {
          document.body.style.paddingRight = '0';
        },
        showClass: {
          popup: `
          animate__animated
          animate__fadeIn
          animate__faster
          `
        },
        hideClass: {
          popup: `
          animate__animated
          animate__fadeOut
          animate__faster
          `
        }
      });
    },
    //------------線索提示------------
    showHint() {
      // console.log(this);
      let hintText = '';

      switch (this.currentSceneIndex) {
        case 1:
          hintText = '觀察看看洗手台的顏色，或許會有幫助～';
          break;
        case 2:
          hintText = '找到窗戶後面的東西了嗎？<br>那串數字透過手機好像可以得出一些訊息...？';
          break;
        case 3:
          hintText = '鎖頭上面的形狀和顏色好像在哪裡看過？再找找吧！';
          break;
        case 4:
          hintText = '觀察一下餐盤上的食物和刀叉等線索吧！<br>菜單的排版配置怎麼好像在哪裡看過？';
          break;
        case 5:
          hintText = '若看不見的為真相，那試著拼出消失的部分吧！';
          break;
        default:
          hintText = '目前沒有可用的提示。';
      }

      secAlert.fire({
        icon: 'question',
        html: hintText,
        showConfirmButton: false,
        showCloseButton: true,
        CloseButtonColor: "#221F3C",
        backdrop: false,
        willOpen: () => {
          document.body.style.paddingRight = '0';
        },
        showClass: {
          popup: `
          animate__animated
          animate__fadeIn
          animate__faster
          `
        },
        hideClass: {
          popup: `
          animate__animated
          animate__fadeOut
          animate__faster
          `
        }
      });
    },
    // ------------廁所：移除垃圾------------
    removeTrash() {
      const trash = this.$refs.trash;
      if (trash) {
        trash.classList.add('animate__animated', 'animate__fadeOut');

        setTimeout(() => {
          trash.remove();
        }, 1000);
      }
    },
    //------------提示線索------------
    paperClues(index) {
      secAlert.fire({
        imageUrl: this.clueImages[index],
        html: '發現了線索！',
        showCloseButton: true,
        CloseButtonColor: "#221F3C",
        showConfirmButton: false,

      });
    },
    //------------輸入密碼、正確、錯誤------------
    //then 是 promise的用法，所以要返回 promise 才可以繼續使用 then
    enterPwd(correctPwd) {
      return secAlert.fire({
        title: "請輸入密碼",
        input: "text",
        showConfirmButton: true,
        confirmButtonText: "確認",
        showCloseButton: true,
        confirmButtonColor: "#82a7af",
        inputValidator: (value) => {
          // 確保輸入不為空
          if (!value) {
            return '請輸入密碼';
          }
        },
        preConfirm: (value) => {
          // 動態檢查傳入的正確密碼
          if (value !== correctPwd) {
            secAlert.showValidationMessage('密碼錯誤，亡靈越來越近了！');
            const inputElement = document.querySelector('.swal2-input');
            if (inputElement) {
              inputElement.value = ''; // 清空輸入框
            }
            return false; //阻止彈窗關閉
          } else {
            return true; //允許關閉彈窗
          }
        },
      });
    },
    showSuccess() {
      secAlert.fire({
        icon: 'success',
        title: '密碼正確！',
        showConfirmButton: false,
        timer: 1000,
        backdrop: false,
            willOpen: () => {
                document.body.style.paddingRight = '0';
              }
      });
    },
    //------------辦公室 & 餐廳鎖頭密碼------------
    lockClues(correctPwd, elementRef, index) {
      secAlert.fire({
        imageUrl: this.clueImages[index],
        html: '發現了線索！',
        showConfirmButton: true,
        confirmButtonText: "繼續",
        confirmButtonColor: "#82a7af",
        showCloseButton: true,
        CloseButtonColor: "#221F3C"
      }).then((result) => {
        if (result.isConfirmed) {
          this.enterPwd(correctPwd).then((pwdResult) => {
            if (pwdResult.isConfirmed) {
              this.showSuccess();

              // 使用 $refs 來引用你指定的元素
              const element = this.$refs[elementRef];
              element.classList.add('animate__animated', 'animate__fadeOut');

              setTimeout(() => {
                element.remove();
              }, 1000);
            }
          });
        }
      });
    },
    //------------辦公室：開關燈------------
    toggleLight() {
      this.isLightOff = !this.isLightOff;
    },
    //------------大廳：拚碎片------------
    movePuzzle(puzzleAlt) {
      this.activePuzzles[puzzleAlt] = true; // 更新拼圖狀態

      // 檢查是否所有拼圖都已移動到正確位置
      if (Object.values(this.activePuzzles).every(status => status)) {
        setTimeout(() => {
          this.allPuzzlesCompleted = true; // 延遲 1 秒後設置完成狀態
        }, 100);
      }
    },
    //------------答對密碼，轉下一個場景------------
    escExit(correctPwd) {
      this.enterPwd(correctPwd).then((result) => {
        if (result.isConfirmed) {
          this.showSuccess();
          this.nextScene();
        }
      });
    },

    // 確認是否可以領取優惠券
    async checkCoupon() {

      const user = JSON.parse(localStorage.getItem('user'));
      const memberId = user.id; // 假設的會員ID
      const discount = 150;

      try {
        // 在調用 API 之前顯示一個 console.log，確認方法被調用
        // console.log('checkCoupon 方法被調用了，gameId:', gameId);

        const response = await axios.get(import.meta.env.VITE_API_BASE + `/api/coupon.php`, { params: { member_id: memberId, discount: discount } });
        // const response = await axios.get(`http://localhost/appleyy/public/php/api/coupon.php`, { params: { member_id: memberId, discount: discount } });

        console.log('API 回應數據:', response.data);

        const result = response.data;

        if (result.status === 'exists') {
          // 已有優惠券
          this.showCouponAlert("逃脫成功，預約成都醫院繼續調查！", '/Theme/1/');
          // console.log('成功領取優惠券', result.message);

        } else if (result.status === 'not_found') {
          // 沒有優惠券
          await this.issueCoupon(memberId, discount);
          this.showCouponAlert("逃脫成功，恭喜挖到寶藏啦！", { path: '/Membermanage/', query: { tab: 'tab2' } });
        } else {
          console.error("未知的優惠券狀態", result);
        }
      } catch (error) {
        console.error("API調用錯誤:", error);
      }
    },

    //發放優惠券
    async issueCoupon(memberId, discount) {
      try {
        console.log('正在發送的折扣值:', discount);

        let form_data = new FormData();
        form_data.append("member_id", memberId);
        form_data.append("discount", discount);

        const response = await axios.post(import.meta.env.VITE_API_BASE + "/api/coupon.php", form_data, {
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
    showCouponAlert(message, redirectUrl) {
      secAlert.fire({
        imageUrl: new URL("@/assets/img/esc_34.png", import.meta.url).href,
        imageWidth: 250,
        text: message,
        confirmButtonText: '確認',
        confirmButtonColor: "#82a7af",
      }).then(() => {

        if (this.bgMusic2) {
          this.bgMusic2.pause();
        }
        this.$router.push(redirectUrl);
      });
    }
  }
}

</script>