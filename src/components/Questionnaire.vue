<template>
    <div class="overlay">
      <div class="modal">
        <button class="close" @click="$emit('close')">X</button>
        <p>問券調查</p>
        <div v-for="(task, index) in tasks" :key="task.id" class="star_block">
          <span>燒腦指數</span>
          <span class="star" :class="{ '-on': task.star >= 1 }" @click="$emit('taskStar', index, 1)"><i class="fas fa-star"></i></span>
          <span class="star" :class="{ '-on': task.star >= 2 }" @click="$emit('taskStar', index, 2)"><i class="fas fa-star"></i></span>
          <span class="star" :class="{ '-on': task.star >= 3 }" @click="$emit('taskStar', index, 3)"><i class="fas fa-star"></i></span>
          <span class="star" :class="{ '-on': task.star >= 4 }" @click="$emit('taskStar', index, 4)"><i class="fas fa-star"></i></span>
          <span class="star" :class="{ '-on': task.star >= 5 }" @click="$emit('taskStar', index, 5)"><i class="fas fa-star"></i></span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      tasks: Array,
      showDiv: Boolean
    },
    methods: {
      taskStar(index, star) {
        this.$emit('taskStar', index, star);
      }
    }
  }
  </script>
  
  <style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: relative;
  
    p {
      color: black;
      text-align: center;
    }
  
    span {
      color: black;
    }
  }
  
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
  
  .star_block {
    display: flex;
    align-items: center;
  }
  
  .star {
    cursor: pointer;
    margin: 0 5px;
  }
  
  .star.-on i {
    color: gold;
  }
  </style>
  