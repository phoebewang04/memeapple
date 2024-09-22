<template>
  <TopNavbar />
  <div class="main">
    <div class="wrappermmange">
      <div class="mmangeleft" id="mmangeleft">
        <button type="button" v-for="tab in tabs" :class="{ active: currentTab == tab.id }" :key="tab.id"
          @click="currentTab = tab.id" class="btn btn_mange">{{ tab.name }}</button>
        <!-- <button class="btn btn_mange">訂單檢視</button>
            <button class="btn btn_mange">優惠券</button>
            <button class="btn btn_mange">會員資料修改</button> -->
      </div>

      <div class="mmangeright" id="mmangeright">
        <div class="mangerightitems">
          <button type="button" v-for="tab in tabs" :class="{ active: currentTab == tab.id }" :key="tab.id"
            @click="currentTab = tab.id" class="btn btn_mange">{{ tab.name }}</button>
          <!-- <button class="btn btn_mange">訂單檢視</button>
          <button class="btn btn_mange">優惠券</button>
          <button class="btn btn_mange">會員資料修改</button> -->
        </div>

        <div class="ordertext" v-if="currentTab == 'tab1'">
          <div class="ordertext_left">
            <h3>您的訂單</h3>

            <section class="order_container">
              <!-- 訂單票券 -->
              <div v-for="order in filteredOrders" :key="order.ORDER_ID" class="order_card">
                <!-- 右上標籤 -->
                <div class="order_cardusage">
                  <p :class="order.ORDER_STATUS === '已使用' ? 'onuse' : (order.ORDER_STATUS === '已預訂' ? 'noneuse' : '')">
                    {{ order.ORDER_STATUS }}
                  </p>
                </div>
                <!-- 票券左側，點選後觸發SweetAlert2，顯示入場票券 -->
                <div class="order_cardleft" @click="order.ORDER_STATUS !== '已使用' && showAlert(order)">
                  <!-- 活動海報圖片 -->
                  <div class="order_cardimg">
                    <img v-for="poster in posters" v-if="poster && poster.id === Number(order.THEME_ID)"
                      :src="poster.banner" alt="Ticket Image">
                  </div>
                  <!-- 活動詳細資訊以及訂單編號 -->
                  <div class="order_cardtext">
                    <p>{{ order.THEME_NAME }}</p>
                    <p>訂單編號： {{ order.ORDER_ID }}</p>
                    <p>訂購日期： {{ order.ORDER_DATE }}</p>
                  </div>
                </div>

                <!-- 票券右側，有問券填寫功能以及已經支付的訂金 -->
                <div class="order_cardright">
                  <!-- 訂金詳細資訊 -->
                  <div class="order_cardstate">
                    <p>訂金</p>
                    <p>TWD 2000元</p>
                    <!-- 問卷填寫按鈕 -->
                    <button v-if="order.ORDER_STATUS === '已使用'" class="questionwrite"
                      @click="orderquestion(order)">問卷填寫</button>
                    <!-- 取消訂單按鈕 -->
                    <button v-else-if="order.ORDER_STATUS === '已預訂'" class="cancelorder"
                      @click="ordercancel()">取消訂單</button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>


        <div class="coupontext" v-if="currentTab == 'tab2'">
          <div class="couponticket">
            <img src="../assets/img/banner_Lock.png" class="couponbg">
            <div class="coupont">
              <h3>COUPON</h3>
              <h4>150元</h4>
              <h4>未使用</h4>
              <!-- <h4>已使用</h4> -->
            </div>
          </div>
        </div>

        <div class="editmember" v-if="currentTab == 'tab3'">
          <h3>會員資料修改</h3>
          <ul>
            <li>
              <h4>帳號：</h4>
            </li>
            <li>
              <h4>a123456789@yahoo.com.tw</h4>
            </li>
            <li>
              <h4>生日：</h4>
            </li>
            <li>
              <h4>1987-08-07</h4>
            </li>
            <li>
              <h4>修改密碼：</h4>
            </li>
            <li><input type="text" class="editphone" value="********"></li>
            <li>
              <h4>請再次輸入密碼：</h4>
            </li>
            <li><input type="text" class="editphone" value="********"></li>
            <li>
              <h4>修改姓名：</h4>
            </li>
            <li><input type="text" class="editphone" value="李小王"></li>
            <li>
              <h4>電話：</h4>
            </li>
            <li><input type="text" class="editphone" value="0912123123" maxlength="10" pattern="^09\d{8}$"></li>
          </ul>
          <div>
            <button class="btn btnedit">儲存變更</button>
            <button class="btn btnedit">取消</button>
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
import Swal from 'sweetalert2';
import axios from 'axios';

export default {
  props: ["tasks"],
  emits: ["taskStar"],
  components: {
    TopNavbar,
    Footerbar,
  },
  beforeRouteLeave(to, from, next) {
    // Close SweetAlert when leaving the route
    Swal.close();
    next();
  },
  data() {
    return {
      currentTab: "tab1",
      tabs: [
        { id: "tab1", name: "訂單檢視" },
        { id: "tab2", name: "優惠券" },
        { id: "tab3", name: "會員資料修改" }
      ],
      tasks: [
        // {
        //   id: "aaa",
        //   name: "123",
        //   star: 0,
        //   editable: false
        // }
      ],
      brainIndex: 0,
      scareIndex: 0,
      recommendationIndex: 0,
      memberId: 2,
      orders: [],
      error: null,
      posters: [
        { id: 1, banner: '/img/poster_hospital.png' },
        { id: 2, banner: '/img/poster_time.png' },
        { id: 3, banner: '/img/poster_dead.png' },
        { id: 4, banner: '/img/poster_code.png' },
        { id: 5, banner: '/img/poster_Lock.jpg' },
        { id: 6, banner: '/img/poster_room.png' },
        { id: 7, banner: '/img/poster_alien.png' }
      ],
    };
  },
  computed: {
    filteredOrders() {
      if (Array.isArray(this.orders)) {
        const filtered = this.orders.filter(order =>
          order.MEMBER_ID === this.memberId &&
          (order.ORDER_STATUS === '已使用' || order.ORDER_STATUS === '已預訂')
        );
        console.log('Filtered orders:', filtered);
        return filtered;
      }
      console.log('Fetched orders:', this.orders);
      return [];
    }
  },
  beforeMount() {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      this.tasks = tasks;
    }
  },
  mounted() {
    this.fetchOrders();
    console.log('Tickets on mount:', this.posters);
    console.log('Orders on mount:', this.orders);
  },
  methods: {
    // 查會員訂單資料
    async fetchOrders() {
      try {
        const params = {
          memberId: this.memberId
        };
        console.log('params: ', params)
        const response = await axios.get('http://localhost/meme_apple/public/php/api/Order.php', { params });
        console.log('response.data: ', response.data);
        this.orders = response.data;
        console.log('this.orders: ', this.orders);
      } catch (err) {
        this.error = 'An error occurred: ' + err.message
      }
    },
    showAlert(order) {
      
      // 這邊是卡片主題名稱
      let titleText = '';
      // 這邊是卡片場館名稱
      let placeText = '';

      switch (order.THEME_ID) {
        case 1:
          titleText = '成都醫院';
          break;
        case 2:
          titleText = '時光迷宮';
          break;
        case 3:
          titleText = '末日庇護所';
          break;
        case 4:
          titleText = '代碼深淵';
          break;
        case 5:
          titleText = '逃離武石監';
          break;
        case 6:
          titleText = '恐怖密室';
          break;
        case 7:
          titleText = '逃出虛空';
          break;
        default:
          titleText = '未知主題';
      }

      switch (order.STORE_ID) {
        case 1:
        placeText = '台北館';
          break;
        case 2:
        placeText = '台中館';
          break;
        default:
          titleText = '未知場館';
      }

      Swal.fire({
        html:
          `
                      <main class="main-popupcard">
                        <section class="popupcard-card">
                            <p class="popupcard-title">請出示電子票券即可入場</p>
                            <div class="popupcard-qrcode">
                                <img src="${new URL("@/assets/img/qrcode_001.jpg", import.meta.url).href}" alt="">
                                
                            </div>
                            <h1>${titleText}</h1>
                            <div class="qrcode-time">
                                <p class="qrcode-y">2024 /</p>
                                <p class="qrcode-m">08 /</p>
                                <p class="qrcode-d">17</p>
                            </div>
                            <div class="qrcode-place">
                                <p>${placeText}</p>
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
    orderquestion(order) {
      Swal.fire({
        title: "問卷調查",
        html: this.generateHtml(),
        confirmButtonColor: "#FCD15B",
        confirmButtonText: "<span>送出</span>",
        allowOutsideClick: false,
        allowEscapeKey: false,
        color: "#100E24",
        preConfirm: () => {
          this.saveData();
        }
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
    generateHtml() {
      `    <div class="star_block">
      <span>燒腦指數</span>
      <span class="star" id="brain-1"><i class="fas fa-star"></i></span>
      <span class="star" id="brain-2"><i class="fas fa-star"></i></span>
      <span class="star" id="brain-3"><i class="fas fa-star"></i></span>
      <span class="star" id="brain-4"><i class="fas fa-star"></i></span>
      <span class="star" id="brain-5"><i class="fas fa-star"></i></span>
    </div>
    <div class="star_block">
      <span>驚嚇指數</span>
      <span class="star" id="scare-1"><i class="fas fa-star"></i></span>
      <span class="star" id="scare-2"><i class="fas fa-star"></i></span>
      <span class="star" id="scare-3"><i class="fas fa-star"></i></span>
      <span class="star" id="scare-4"><i class="fas fa-star"></i></span>
      <span class="star" id="scare-5"><i class="fas fa-star"></i></span>
    </div>
    <div class="star_block">
      <span>推薦指數</span>
      <span class="star" id="recommendation-1"><i class="fas fa-star"></i></span>
      <span class="star" id="recommendation-2"><i class="fas fa-star"></i></span>
      <span class="star" id="recommendation-3"><i class="fas fa-star"></i></span>
      <span class="star" id="recommendation-4"><i class="fas fa-star"></i></span>
      <span class="star" id="recommendation-5"><i class="fas fa-star"></i></span>
    </div>`
    }
    ,
    setBrainIndex(index) {
      this.brainIndex = index;
    },
    setScareIndex(index) {
      this.scareIndex = index;
    },
    setRecommendationIndex(index) {
      this.recommendationIndex = index;
    },
    saveData() {
      // 保存數據的 Vue 方法
      console.log('Data saved');
    },
  },

};
</script>