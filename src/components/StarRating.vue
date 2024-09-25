<template>
  <div v-if="visible" class="popup1">
    <div class="popup-content1">
      <div class="rating">
        <span class="close" @click="closePopup">&times;</span>
        <h3>問卷調查</h3>
        <div v-for="(task, index) in tasks" :key="index" class="star_block">
          <span>{{ task.label }}</span>
          <span
            class="star"
            v-for="star in stars"
            :key="star"
            :class="{'-on': task.star >= star}"
            @click="setRating(index, star)"
          >
            <i class="fas fa-star"></i>
          </span>
        </div>
        <button id="btnrating" @click="showAlertA">送出</button>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/css/style.css';
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  props: {
  orderId: {
    type: String,
    required: true
    }
  },
  data() {
    return {
      visible: true,
      stars: [1, 2, 3, 4, 5],
      tasks: [
        { label: '燒腦指數', star: 0 },
        { label: '驚嚇指數', star: 0 },
        { label: '推薦指數', star: 0 },
      ],
      
    };
  },
  computed: {
  filteredOrders() {
    return this.orders.filter(order => order.MEMBER_ID === this.memberId);
    }
  },
  mounted() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      this.tasks = storedTasks;
    }
  },
  methods: {
    setRating(index, star) {
      this.tasks[index].star = star;
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    closePopup() {
      this.$emit('close'); // 通知父組件關閉
    },
    showAlertA() {
      Swal.fire({
        title: '確認送出評分?',
        text: '你確定要送出這些評分嗎?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '送出',
        cancelButtonText: '取消',
      }).then((result) => {
        if (result.isConfirmed) {
          this.submitRatings();
        }
      });
    },
    submitRatings() {

        const paload = {
          orderId: this.orderId, // 將 orderId 加入 paload
          difficult: this.tasks[0].star, 
          scary: this.tasks[1].star,     
          recommand: this.tasks[2].star, 
        };
        console.log(paload);
        // axios.post(import.meta.env.VITE_API_BASE + '/api/starrating.php', paload)
        axios.post('http://localhost/sweethome/meme/public/php/api/starrating.php', paload)
          .then(response => {
            console.log('送出成功', response.data);
            this.closePopup(); // 送出後關閉 popup
          })
          .catch(error => {
            console.error('送出失敗', error);
          });
      },
  },
};
</script>
