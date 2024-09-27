<template>
     <TopNavbar />
    <div class="points-card">
      <h3>集點卡</h3>
      <p>您目前的集點數：{{ user.ordercounts }}</p>
      <p>還需要 {{ pointsNeeded }} 點以獲得優惠！</p>

      <div class="stamp-table">
      <div v-for="index in 8" :key="index" class="stamp-cell" :class="{ filled: index <= user.ordercounts }">
        <img v-if="index <= user.ordercounts" src="../assets/img/card_icon_eye.png" alt="已蓋章" class="stamp-image" />
      </div>
    </div>
    </div>

    <Footerbar />
  </template>

<script>
import TopNavbar from '../components/TopNavbar.vue';
import Footerbar from '../components/Footerbar.vue';
import Swal from 'sweetalert2';

export default {
    components: {
    TopNavbar,
    Footerbar,
  },
  computed: {
    pointsNeeded() {
        return 8 - (this.user.ordercounts % 8); // 假設需要 8 點才能獲得優惠
    }
  },
  data() {
    return {
        user: {},
    }
  },
  mounted() {
    // 從 localStorage 獲取會員資料
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.user = user;
      this.memberId = user.id; // 動態設置 memberId
    } else {
      Swal.fire({
        title: '請登入或註冊',
        text: '請進行登入或註冊以造訪會員專區',
        confirmButtonColor: '#FCD15B',
        confirmButtonText: 'OK'
      }).then(() => {
        this.$router.push('/index/'); // 重定向到登入頁面
      });
    }

  },
};
</script>

<style scoped>

.points-card {
  padding: 20px;
  background-color: #fcd15b;
  border-radius: 10px;
}
.stamp-table {
  max-width: 600px;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 列 */
  grid-template-rows: repeat(2, 1fr); /* 2 行 */
  margin-top: 20px;
}
.stamp-cell {
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: #fff;
  border: 2px solid #4caf50; /* 只保留邊框顏色 */
  border-radius: 0; /* 移除圓角 */
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box; /* 讓padding不影響大小 */
}

.stamp-image {
  width: 40px; /* 調整圖片大小 */
  height: 40px;
}
</style>
