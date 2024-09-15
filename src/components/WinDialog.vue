<template>
    <div v-if="visible" class="dialog-overlay">
      <div class="dialog-box animate__animated animate__tada">
        <!-- <h2>{{ title }}</h2> -->
        <img :src="imageSrc" alt="贏得遊戲" class="result-image">
        <!-- <p>{{ message }}</p> -->
        <button @click="onConfirm" class="confirm-btn">重新開始遊戲</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        default: '恭喜贏得遊戲'
        },
        message: {
        type: String,
        default: '你表現得非常棒！'
        },
        status :{
        type: String, // 'win' 或 'lose'
        required: true
        },
        winImageSrc: {
        type: String,
        default: ''
        },
        loseImageSrc: {
        type: String,
        default: ''
        },
        visible: {
        type: Boolean,
        default: false
        }
    },
    methods: {
      onConfirm() {
        this.$emit('confirm'); // 觸發父組件的事件，比如重置遊戲
      }
    },
    computed: {
        imageSrc (){
            return this.status === 'win' ? this.winImageSrc : this.loseImageSrc;
        }
    }
  };
  </script>
  
  <style scoped>
  .dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .dialog-box {
    height: 50%;
    width: 40%;
    /* background: #100E24; */
    /* padding: 10px; */
    border-radius: 8px;
    text-align: center;
    /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); */
    animation-iteration-count:1;
  }
  
  .result-image {
    max-width: 100%;
    height: auto;
    margin: 10px 0;
  }
  
  .confirm-btn {
    background-color: #a0a0a0;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .confirm-btn:hover {
    background-color: #45a049;
  }
  </style>