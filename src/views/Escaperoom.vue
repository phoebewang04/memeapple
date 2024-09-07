<!-- <script setup>
import '../assets/css/style.css';
// import TopNavbar from '../components/TopNavbar.vue';
// import Footerbar from '../components/Footerbar.vue';
import secAlert from 'sweetalert2';
import 'animate.css';
import interact from 'interactjs';
import bathHintImg from '../assets/img/bath_hint.png';
import bedHintImg from '../assets/img/bed_hint.png';
import bedHintImg2 from '../assets/img/esc_12.png';


</script> -->

<template>
  <!-- <TopNavbar /> -->
  <main class="escaperoom_container">



    <div class="esc_hint" @click="showHint" v-if="currentSceneIndex !== 0">
      <i class="fa-solid fa-lightbulb"></i>
    </div>

    <!------- 進入畫面 ------->
    <div ref="scene0" class="scene active esc_enter_container">
      <div class="esc_start room">
        <img src="../assets/img/esc_start.png" alt="Enter Screen">
        <div class="esc_start_arrow" @click="nextScene">
          <p>穿過古老墓園，迎面而來的是一座佇立多年、陰森詭異的廢棄醫院。<br>勇者是無法回頭的，唯有在這座迷霧籠罩的醫院內，解開重重謎團，才能找到生存的出口！ <span>&#9654;</span></p>
        </div>
      </div>
    </div>

    <!------- 廁所 ------->
    <div ref="scene1" class="scene esc_bathroom_container">

      <div class="esc_bath room">
        <img src="../assets/img/esc_bathroom.png" alt="廁所">
      </div>

      <div class="esc_bath_exit">
        <img src="../assets/img/esc_02.png" alt="Sewer Outlet" @click="escExit('2014')">
      </div>

      <div class="esc_bath_icon">
        <img src="../assets/img/esc_03.png" alt="紙張" @click="paperClues(0)">
        <img src="../assets/img/esc_04.png" ref="trash" class="esc_bath_trash" alt="Trash" @click="removeTrash">
      </div>

    </div>


    <!------- 病房 ------->
    <div ref="scene2" class="scene esc_bedroom_container">
      <div class="esc_bed room">
        <img src="../assets/img/esc_bedroom.png" alt="Esc Bedroom">
      </div>

      <div class="esc_bed_exit">
        <img src="../assets/img/esc_01.png" alt="Bedroom Door" @click="escExit('NEXIVAN')">
      </div>

      <div class="esc_bed_icon">
        <img ref="brokenWindow" src="../assets/img/esc_06.png" alt="Broken Window">
        <img ref="window" src="../assets/img/esc_05.png" alt="Window">
        <img ref="shards" src="../assets/img/esc_09.png" alt="Shards">
        <img ref="wastepaper" src="../assets/img/esc_11.png" alt="Wastepaper" @click="paperClues(1)">
        <img src="../assets/img/esc_10.png" alt="Wheelchair">
        <img ref="axe" src="../assets/img/esc_08.png" alt="Axe">
        <img src="../assets/img/esc_07.png" alt="Bed">
        <img src="../assets/img/esc_12.png" alt="phone" class="bed_phone animate__animated animate__tada"
          @click="paperClues(2)">
      </div>

    </div>


  </main>
  <!-- <Footerbar /> -->
</template>

<script>
import '../assets/css/style.css';
import secAlert from 'sweetalert2';
import 'animate.css';
import interact from 'interactjs';


export default {
  component: { secAlert, interact },

  beforeRouteLeave(to, from, next) {
    // Close SweetAlert when leaving the route
    secAlert.close();
    next();
  },
  data() {
    return {
      currentSceneIndex: 0, //當前的場景索引

      clueImages: [
        new URL("@/assets/img/bath_hint.png", import.meta.url).href,
        new URL("@/assets/img/bed_hint.png", import.meta.url).href,
        new URL("@/assets/img/esc_12.png", import.meta.url).href,
      ],

      clueHint:[
        '一坨紙團',
      ]
    };
  },
  mounted() {
    const axe = this.$refs.axe;
    const window = this.$refs.window;
    const brokenWindow = this.$refs.brokenWindow;
    const shards = this.$refs.shards;
    const wastepaper = this.$refs.wastepaper;

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
  }
  ,
  methods: {
    //------------轉場------------
    nextScene() {
      if (this.transitioning) return; //避免重複觸發
      this.transitioning = true;

      const scenes = [this.$refs.scene0, this.$refs.scene1, this.$refs.scene2];

      //讓當前場景淡出
      const currentScene = scenes[this.currentSceneIndex];
      currentScene.classList.add('animate__animated', 'animate__fadeOut');

      //等待淡出動畫結束後切換場景
      setTimeout(() => {
        currentScene.classList.remove('active', 'animate__fadeOut');
        currentScene.style.display = 'none';

        //切換到下一個場景
        this.currentSceneIndex++;
        const nextScene = scenes[this.currentSceneIndex];
        nextScene.style.display = 'block';
        nextScene.classList.add('active', 'animate__animated', 'animate__fadeIn');

        //動畫結束後重置
        setTimeout(() => {
          nextScene.classList.remove('animate__fadeIn');
          this.transitioning = false; //重置過渡狀態
        }, 800);
      }, 800);
    },
    //------------燈泡提示------------
    showHint() {
      // console.log(this);
      let hintText = '';

      switch (this.currentSceneIndex) {
        case 1:
          hintText = '…這裡是廁所？看起來唯一的出口就是下水道了…';
          break;
        case 2:
          hintText = '窗戶後面好像有什麼，找看看有沒有可以擊破的東西';
          break;

        default:
          hintText = '目前沒有可用的提示。';
      }

      secAlert.fire({
        icon: 'info',
        html: hintText,
        showConfirmButton: false,
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
    // ------------移除垃圾------------
    removeTrash() {
      const trash = this.$refs.trash;
      if (trash) {
        trash.classList.add('animate__animated', 'animate__fadeOut');

        setTimeout(() => {
          trash.remove();
        }, 1000);
      }
    },
    //------------紙條線索------------

    paperClues(index) {
      secAlert.fire({
        imageUrl: this.clueImages[index],
        // html: '發現了線索！',
        html: this.clueHint[index],
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
        inputValidator: (value) => {
          // 確保輸入不為空
          if (!value) {
            return '請輸入密碼';
          }
        },
        preConfirm: (value) => {
          // 動態檢查傳入的正確密碼
          if (value !== correctPwd) {
            secAlert.showValidationMessage('密碼錯誤，請再次輸入！');
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
        title: '正確!',
        showConfirmButton: false,
        timer: 1000
      });
    },
    // showError() {
    //   return secAlert.fire({
    //     icon: 'error',
    //     title: '密碼錯誤，請再次輸入。',
    //     input: 'text',
    //     showConfirmButton: true,
    //     confirmButtonText: '確認',
    //     didOpen: () => {
    //     // 當彈窗打開時自動清空輸入框
    //     document.querySelector('.swal2-input').value = '';
    //   }
    //   });
    // },
    //------------出口------------
    escExit(correctPwd) {
      this.enterPwd(correctPwd).then((result) => {
        if (result.isConfirmed) {
          this.showSuccess();
          this.nextScene();
        }
      });
    }
  }
}
</script>