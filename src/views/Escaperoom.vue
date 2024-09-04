<script setup>
import '../assets/css/style.css';
import TopNavbar from '../components/TopNavbar.vue';
import Footerbar from '../components/Footerbar.vue';
import Swal from 'sweetalert2';
import 'animate.css';

</script>

<template>
    <!-- <TopNavbar /> -->
    <main class="escaperoom_container">

    <div ref="scene0" class="scene active esc_enter_container">
        <div class="esc_start room">
        <img src="../assets/img/esc_start.png" alt="進入畫面">
        <div class="esc_start_arrow" @click="nextScene">
            <p>穿過古老墓園，迎面而來的是一座佇立多年、陰森詭異的廢棄醫院。<br>勇者是無法回頭的，唯有在這座迷霧籠罩的醫院內，解開重重謎團，才能找到生存的出口！  <span>&#9660;</span></p>
        </div>    
    </div>
    </div>

    
    <div ref="scene1" class="scene esc_bathroom_container">

        <div class="esc_bathroom room">
            <img src="../assets/img/esc_bathroom.png" alt="廁所">
        </div>

         <div class="esc_bath_exit">
            <img src="../assets/img/esc_02.png" alt="">
        </div>

        <div class="esc_bath_icon">
         <img src="../assets/img/esc_03.png" alt="紙張" @click="paperClues">
         <img ref="trash" class="esc_bath_trash" src="../assets/img/esc_04.png" alt="垃圾" @click="removeTrash">
        </div>


    </div>


<div class="esc_hint" @click="showHint" v-if="currentSceneIndex !== 0">
    <i class="fa-solid fa-lightbulb" ></i>
</div>
</main>
    <!-- <Footerbar /> -->
</template>

<script>
export default {
  data() {
    return {
      currentSceneIndex: 0, // 跟蹤當前的場景索引
    };
  },
  methods: {
  //------------轉場------------
    nextScene() {
      // 取得所有場景的 $refs
      const scenes = [this.$refs.scene0, this.$refs.scene1];

      if (this.currentSceneIndex < scenes.length - 1 && scenes[this.currentSceneIndex]) {
        // 移除當前場景的 active 類名
        scenes[this.currentSceneIndex].classList.remove('active');
        // 增加索引來切換到下一個場景
        this.currentSceneIndex++;
        // 將 active 類名添加到下一個場景
        scenes[this.currentSceneIndex].classList.add('active');
      }else {
        console.warn("無法切換到下一個場景");
      }
    },
  //------------燈泡提示------------
    showHint() {
    console.log(this); // 查看 this 的內容
    let hintText = '';

    switch (this.currentSceneIndex) {
      case 1:
        hintText = '…這裡是廁所？看起來唯一的出口就是下水道了…';
        break;
      case 2:
        hintText = '這裡可能有藏著的通道，看看牆壁上有沒有異常的地方。';
        break;
      // 可以繼續為其他場景添加提示
      default:
        hintText = '目前沒有可用的提示。';
    }

    Swal.fire({
      icon: 'info',
      html: hintText,
      showClass: {
      popup: `
      animate__animated
      animate__fadeIn
      animate__fast
    `
    },
      hideClass: {
      popup: `
      animate__animated
      animate__fadeOut
      animate__fast
    `
    }});
  },
  // ------------移除垃圾------------
  removeTrash(){
    const trash = this.$refs.trash;
    if(trash){
      trash.remove();
    }
  },
  //------------紙條線索------------
  paperClues(){
    Swal.fire({
      imageUrl:'',
      html: '發現了線索！',
      showConfirmButton:false,
      });
  }
  
  }
}

</script>