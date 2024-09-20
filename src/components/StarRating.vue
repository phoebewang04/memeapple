<template>
    <div>
      <div class="stars">
        <span v-for="n in 5" :key="n" @click="rate(n)" :class="{ active: n <= rating }">★</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StarRating',
    props: {
      rating: Number
    },
    methods: {
      rate(n) {
        this.$emit('rate', n);
      }
    }
  };
  </script>
  
  <style scoped>
  .stars {
    display: flex;
  }
  .stars span {
    font-size: 2rem;
    cursor: pointer;
  }
  .stars span.active {
    color: gold;
  }
  </style>
  