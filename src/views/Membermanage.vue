<template>
  <TopNavbar />
  <div class="main">
    <div class="wrappermmange">
      <div class="mmangeleft" id="mmangeleft">
        <button type="button" v-for="tab in tabs" :class="{ active: currentTab == tab.id }" :key="tab.id"
          @click="currentTab = tab.id" class="btn btn_mange">{{ tab.name }}</button>
      </div>
      <div class="mmangeright" id="mmangeright">
        <div class="mangerightitems">
          <button type="button" v-for="tab in tabs" :class="{ active: currentTab == tab.id }" :key="tab.id"
            @click="currentTab = tab.id" class="btn btn_mange">{{ tab.name }}</button>
        </div>

        <div class="ordertext" v-if="currentTab == 'tab1'">
          <div class="ordertext_left">
            <h3>您的訂單</h3>
            <div class="order_card">
              <div class="order_cardusage">
                <p class="onuse">已使用</p>
                <!-- <p class="noneuse">未使用</p> -->
              </div>
              <div class="order_cardleft" @click="showAlert()">
                <div class="order_cardimg"><img src="../assets/img/poster_Lock.jpg" alt=""></div>
                <div class="order_cardtext">
                  <p>逃離武石監</p>
                  <p>訂單編號： ABC202408070807</p>
                  <p>訂購日期： 2024/08/07</p>
                </div>
              </div>
              <div class="order_cardright">
                <div class="order_cardstate">
                  <p>訂金</p>
                  <P>TWD 2,000元</P>
                  <button class="questionwrite" @click="orderquestion()">問卷填寫</button>
                  <!-- <button class="questionwrite" @click="orderquestion1()">問卷填寫</button> -->
                  <StarRating v-if="showStarRating" @close="showStarRating = false" />
                  <!-- <button class="cancelorder" @click="ordercancel()">取消訂單</button> -->
                </div>
              </div>
            </div>

            <div class="order_card">
              <div class="order_cardusage">
                <!-- <p class="onuse">已使用</p> -->
                <p class="noneuse">未使用</p>
              </div>
              <div class="order_cardleft">
                <div class="order_cardimg"><img src="../assets/img/poster_time.jpg" alt=""></div>
                <div class="order_cardtext">
                  <p>時光迷宮</p>
                  <p>訂單編號： ABC202409020902</p>
                  <p>訂購日期： 2024/09/02</p>
                </div>
              </div>
              <div class="order_cardright">
                <div class="order_cardstate">
                  <p>訂金</p>
                  <P>TWD 2,000元</P>
                  <!-- <button class="questionwrite" @click="orderquestion()">問卷填寫</button> -->
                  <button class="cancelorder" @click="ordercancel()">取消訂單</button>
                </div>
              </div>
            </div>


          </div>
          <div class="ordertext_right">
                <ul>
                  <li><h3>訂單查詢</h3></li>
                  <li> <button class="btn btn_ordera" >未使用訂單</button></li>
                  <li><button class="btn btn_ordera" >全部訂單</button></li>
                </ul>
              </div>
        </div>


        <div class="coupontext" v-if="currentTab == 'tab2'">
          <div v-for="coupon in coupons" :key="coupon.id" class="couponticket">
            <div class="couponimg">
              <img src="../assets/img/game_coupon.png" class="couponbg">
            </div>
            <div class="coupondata">
              <div class="couponposition">
                <!-- <h3>COUPON</h3> -->
                <h4 class="rotate-text">折價券</h4>
                <h3 class="rotate-text">${{ coupon.DISCOUNT }}</h3>
              </div>
            </div>
          </div>

        </div>


        <div class="editmember" v-if="currentTab == 'tab3'">
          <div class="memberdata" v-if="!isEditing">
            <h3>會員資料</h3>
            <ul>
              <li><h4>帳號：{{user.email}}</h4></li>
              <li><h4>密碼：{{user.password}}</h4></li>
              <li><h4>姓名：{{user.name}}</h4></li>
              <li><h4>電話：{{user.phone}}</h4></li>
            </ul>
            <div><button class="btn btnedit" @click="isEditing = true">資料變更</button></div>
          </div>
          <div class="editmemberdata" v-else>
            <h3>會員資料修改</h3>
            <ul>
              <li><h4>帳號：{{user.email}}</h4></li>
              <li>
                <div class="flexinput">
                  <h4>修改密碼：</h4><input type="text" class="editphone" v-model="editedUser.password">    
                </div>
              </li>
              <li>
                <div class="flexinput">
                  <h4>請再次輸入密碼：</h4><input type="text" class="editphone" v-model="editedUser.password">
                </div>
              </li>
              <li>
                <div class="flexinput">
                  <h4>修改姓名：</h4><input type="text" class="editphone" v-model="editedUser.name">
                </div>  
              </li>
              <li>
                <div class="flexinput">
                  <h4>電話：</h4><input type="text" class="editphone" v-model="editedUser.phone" maxlength="10" pattern="^09\d{8}$">
                </div>
              </li>
            </ul>
            <div>
              <button class="btn btnedit" @click="saveChanges">儲存變更</button>
              <button class="btn btnedit" @click="isEditing = false">取消</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footerbar />
</template>

<script>
import '../assets/js/vue.global';
import '../assets/css/style.css';
import TopNavbar from '../components/TopNavbar.vue';
import Footerbar from '../components/Footerbar.vue';
import StarRating from '../components/StarRating.vue';
import Swal from 'sweetalert2';
import axios from 'axios';


export default {
  props: ["tasks"],
  emits: ["taskStar"],
  components: {
    TopNavbar,
    Footerbar,
    StarRating,
  },
  created() {
  const tab = this.$route.query.tab;
  if (tab) {
    this.currentTab = tab; // 或其他初始化邏輯
  }
  },
  beforeRouteLeave(to, from, next) {
    // Close SweetAlert when leaving the route
    Swal.close();
    next();
  },
  data() {
    return {
      currentTab: "tab1",
      isEditing: false,
      tabs: [
        {
          id: "tab1",
          name: "訂單檢視"
        },
        {
          id: "tab2",
          name: "優惠券"
        },
        {
          id: "tab3",
          name: "會員資料"
        }
      ],
      tasks: [
        // {
        //   id: "aaa",
        //   name: "123",
        //   star: 0,
        //   editable: false
        // }
      ],
      user: {},
      editedUser: {
        password: '',
        passwordConfirm: '',
        name: '',
        phone: ''
      },
      memberId: null, // 定義 memberId
      coupons: [], // 定義 coupons
      showStarRating: false,
    };
  },
  beforeMount() {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      this.tasks = tasks;
    }
  },
  mounted() {
    // 從 localStorage 獲取會員資料
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.user=user;
      this.memberId = user.id; // 動態設置 memberId
      
      this.editedUser = { ...user };
    } else {
      alert("請進行登入或註冊以造訪會員專區");
      this.$router.push('/index/'); // 重定向到登入頁面
    }
    this.fetchCoupons(); // 獲取優惠券

  },
  methods: {
    showAlert() {


      Swal.fire({
        html:
          `
                      <main class="main-popupcard">
                        <section class="popupcard-card">
                            <p class="popupcard-title">請出示電子票券即可入場</p>
                            <div class="popupcard-qrcode">
                                <img src="${new URL("@/assets/img/qrcode_001.jpg", import.meta.url).href}" alt="">
                                
                            </div>
                            <h1>逃離武石監</h1>
                            <div class="qrcode-time">
                                <p class="qrcode-y">2024 /</p>
                                <p class="qrcode-m">08 /</p>
                                <p class="qrcode-d">17</p>
                            </div>
                            <div class="qrcode-place">
                                <p>台中館</p>
                                <div class="qrcode-line"></div>
                                <span>入場</span>
                                <span>14:00</span>
                           </div>
                        </section>
                      </main>
                `,
        showConfirmButton: false,
        color: '#FFFFFF',
        width: 'auto',
        backgroundcolor: 'transparent',
        customClass:
        {
          popup: 'main-popupcard',
          content: 'wrapper-popupcard',
          title: 'popupcard-title',
          image: 'popupcard-qrcode',
          htmlContainer: 'popupcard-card',

        },
        position: 'center',
      })
    },
    ordercancel() {
      Swal.fire({
        title: "確定要取消訂單？",
        text: "按下確定將取消訂單",
        icon: "warning",
        color: "#100E24",
        showCancelButton: true,
        cancelButtonText: "<span>取消</span>",
        confirmButtonColor: "#FCD15B",
        cancelButtonColor: "#C70000",
        confirmButtonText: "<span>確定</span>"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "取消訂單",
            text: "您的訂單已取消完成",
            icon: "success",
            confirmButtonColor: "#FCD15B",
            color: "#100E24",
            confirmButtonText: "<span>OK</span>",
          });
        }
      });
    },
    orderquestion1() {
      Swal.fire({
        title: "問卷調查",
        html: `
        <div class="star_block">
            <span>燒腦指數</span>
            <span class="star" :class="{'-on': task.star >=  1}" @click="$emit('taskStar',$event , index, 1)"><i class="fas fa-star"></i></span>
            <span class="star" :class="{'-on': task.star >=  2}" @click="$emit('taskStar',$event , index, 2)"><i class="fas fa-star"></i></span>
            <span class="star" :class="{'-on': task.star >=  3}" @click="$emit('taskStar',$event , index, 3)"><i class="fas fa-star"></i></span>
            <span class="star" :class="{'-on': task.star >=  4}" @click="$emit('taskStar',$event , index, 4)"><i class="fas fa-star"></i></span>
            <span class="star" :class="{'-on': task.star >=  5}" @click="$emit('taskStar',$event , index, 5)"><i class="fas fa-star"></i></span>
        </div>
        <div class="star_block">
            <span>驚嚇指數</span>
            <span class="star" :class="{'-on': task.star >=  1}" @click="$emit('taskStar',$event , index, 1)"><i class="fas fa-star"></i></span>
            <span class="star" :class="{'-on': task.star >=  2}" @click="$emit('taskStar',$event , index, 2)"><i class="fas fa-star"></i></span>
            <span class="star" :class="{'-on': task.star >=  3}" @click="$emit('taskStar',$event , index, 3)"><i class="fas fa-star"></i></span>
            <span class="star" :class="{'-on': task.star >=  4}" @click="$emit('taskStar',$event , index, 4)"><i class="fas fa-star"></i></span>
            <span class="star" :class="{'-on': task.star >=  5}" @click="$emit('taskStar',$event , index, 5)"><i class="fas fa-star"></i></span>
        </div>
        <div class="star_block">
            <span>推薦指數</span>
            <span class="star" :class="{'-on': task.star >=  1}" @click="$emit('taskStar',$event , index, 1)"><i class="fas fa-star"></i></span>
            <span class="star" :class="{'-on': task.star >=  2}" @click="$emit('taskStar',$event , index, 2)"><i class="fas fa-star"></i></span>
            <span class="star" :class="{'-on': task.star >=  3}" @click="$emit('taskStar',$event , index, 3)"><i class="fas fa-star"></i></span>
            <span class="star" :class="{'-on': task.star >=  4}" @click="$emit('taskStar',$event , index, 4)"><i class="fas fa-star"></i></span>
            <span class="star" :class="{'-on': task.star >=  5}" @click="$emit('taskStar',$event , index, 5)"><i class="fas fa-star"></i></span>
        </div>
      `,
        confirmButtonColor: "#FCD15B",
        confirmButtonText: "<span>送出</span>",
        allowOutsideClick: false,
        allowEscapeKey: false,
        color: "#100E24",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "完成問卷",
            text: "您已完成問券，歡迎再次光臨",
            icon: "success",
            allowOutsideClick: false,
            allowEscapeKey: false,
            confirmButtonColor: "#FCD15B",
            confirmButtonText: "<span>OK</span>",
            color: "#100E24",
          });
        }
      });
    },
    taskStar(e, i, star) {
      this.tasks[i].star = star;
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    saveChanges() {
     // 更新用戶資料
      this.user.name = this.editedUser.name;
      this.user.phone = this.editedUser.phone;
      this.user.password = this.editedUser.password; // 直接使用明文密碼

      // 更新 localStorage
      localStorage.setItem('user', JSON.stringify(this.user));

      // 發送請求到後端
      this.updateUserData(this.user);
      this.isEditing = false; // 儲存後退出編輯模式
    },
    updateUserData(user) {
      const payload = {
        id: user.id, // 假設有用戶ID
        email: user.email,
        name: user.name,
        phone: user.phone,
        password: user.password
      };
      // axios.post(import.meta.env.VITE_API_BASE + '/api/editmemberdata.php', payload)
      axios.post('http://localhost/sweethome/meme/public/php/api/editmemberdata.php', payload)
        .then(response => {
          Swal.fire('成功', '資料已更新', 'success');
        })
        .catch(error => {
          console.error('更新用戶資料失敗:', error);
          Swal.fire('失敗', '更新失敗', 'error');
        });
    },
    fetchCoupons() {
      // axios.get(import.meta.env.VITE_API_BASE + `/api/membercoupon.php?member_id=${this.memberId}`)
      axios.get(`http://localhost/sweethome/meme/public/php/api/membercoupon.php?member_id=${this.memberId}`)
        .then(response => {
          if (response.data.error) {
            console.error(response.data.error);
          } else {
            // Handle the coupons data (e.g., store it in a data property)
            this.coupons = response.data;
            console.log('獲取的優惠券:', this.coupons);
          }
        })
        .catch(error => {
          console.error('Error fetching coupons:', error);
        });
    },
    orderquestion() {
      this.showStarRating = true; // 顯示彈出窗口
    },
  },

};



</script>