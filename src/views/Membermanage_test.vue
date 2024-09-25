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
                  <p
                    :class="order.ORDER_STATUS === '已使用' || order.ORDER_STATUS === 1 ? 'onuse' : (order.ORDER_STATUS === '已預訂' || order.ORDER_STATUS === 2 ? 'noneuse' : (order.ORDER_STATUS === '已取消' || order.ORDER_STATUS === 3 ? 'cancaluse' : ''))">
                    {{ order.ORDER_STATUS }}
                  </p>
                </div>
                <!-- 票券左側，點選後觸發SweetAlert2，顯示入場票券 -->
                <div class="order_cardleft"
                  @click="order.ORDER_STATUS !== '已使用' && order.ORDER_STATUS !== '已取消' && showAlert(order)">
                  <!-- 活動海報圖片 -->
                  <div class="order_cardimg">
                    <img :src="`${posters[Number(order.THEME_ID) - 1].banner}`" alt="Ticket Image">
                    <!-- <img src="/img/poster_time.png" alt="Poster Time"> -->
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
                      @click="orderquestion()">問卷填寫</button>
                    <!-- 取消訂單按鈕 -->
                    <button v-else-if="order.ORDER_STATUS === '已預訂'" class="cancelorder"
                      @click="ordercancel(order)">取消訂單</button>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div class="ordertext_right">
            <ul>
              <li>
                <h3>訂單查詢</h3>
              </li>
              <li> <button class="btn btn_ordera" @click="showUnusedOrders">未使用訂單</button></li>
              <li><button class="btn btn_ordera" @click="showAllOrders">全部訂單</button></li>
            </ul>
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
import { all_data } from '../assets/js/all_data.js';
import '../assets/js/vue.global';
import '../assets/css/style.css';
import TopNavbar from '../components/TopNavbar.vue';
import Footerbar from '../components/Footerbar.vue';
import Swal from 'sweetalert2';
import axios from 'axios';
import LoginPopup from '../components/login.vue';

export default {
  props: ["tasks"],
  emits: ["taskStar"],
  components: {
    TopNavbar,
    Footerbar,
    LoginPopup,
  },
  beforeRouteLeave(to, from, next) {
    // Close SweetAlert when leaving the route
    Swal.close();
    next();
  },
  data() {
    return {
      //引入 all_data
      all_data: all_data,
      currentTab: "tab1",
      tabs: [
        { id: "tab1", name: "訂單檢視" },
        { id: "tab2", name: "優惠券" },
        { id: "tab3", name: "會員資料修改" }
      ],
      tasks: [],
      brainIndex: 0,
      scareIndex: 0,
      recommendationIndex: 0,
      memberId: null,
      orders: [],
      error: null,
      posters: [
        { id: 1, banner: '/tid102/g1/img/poster_hospital.png' },
        { id: 2, banner: '/tid102/g1/img/poster_time.png' },
        { id: 3, banner: '/tid102/g1/img/poster_dead.png' },
        { id: 4, banner: '/tid102/g1/img/poster_code.png' },
        { id: 5, banner: '/tid102/g1/img/poster_Lock.jpg' },
        { id: 6, banner: '/tid102/g1/img/poster_room.png' },
        { id: 7, banner: '/tid102/g1/img/poster_alien.png' }
      ],
      filterStatus: 'all' // 新增狀態變量
      ,
    };
  },
  computed: {
    filteredOrders() {
      if (Array.isArray(this.orders)) {
        const filtered = this.orders.filter(order => {
          if (this.filterStatus === 'all') {
            return order.MEMBER_ID === this.memberId;
          } else if (this.filterStatus === '未使用') {
            return order.MEMBER_ID === this.memberId && order.ORDER_STATUS === '已預訂';
          }
          return false;
        });
        // order.MEMBER_ID === this.memberId &&
        // (order.ORDER_STATUS === '已使用' || order.ORDER_STATUS === '已預訂' || order.ORDER_STATUS === '已取消')
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
    // 從 localStorage 獲取會員資料
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.memberId = user.id; // 動態設置 memberId
      this.fetchOrders();
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

    console.log('Tickets on mount:', this.posters);
    console.log('Orders on mount:', this.orders);

  },
  watch: {
    'order.ORDER_STATUS': function (newStatus, oldStatus) {
      console.log(`Order status changed from ${oldStatus} to ${newStatus}`);
      // 在這裡執行你需要的操作，例如更新標籤
    }
  },
  methods: {
    showUnusedOrders() {
      this.filterStatus = '未使用';
    },
    showAllOrders() {
      this.filterStatus = 'all';
    },
    // 查會員訂單資料
    async fetchOrders() {
      try {
        const params = {
          memberId: this.memberId
        };
        console.log('params: ', params)
        const response = await axios.get(import.meta.env.VITE_API_BASE + '/api/Order.php', { params });
        // const response = await axios.get('http://localhost/meme_apple/public/php/api/Order.php', { params });
        console.log(import.meta.env.VITE_API_BASE);
        console.log('response.data: ', response.data);
        this.orders = response.data;
        console.log('this.orders: ', this.orders);
      } catch (err) {
        this.error = 'An error occurred: ' + err.message
      }
    },
    async ordercancel(order) {
      const result = await Swal.fire({
        title: "確定要取消訂單？",
        text: "按下確定將取消訂單",
        icon: "warning",
        color: "#100E24",
        showCancelButton: true,
        cancelButtonText: "<span>取消</span>",
        confirmButtonColor: "#FCD15B",
        cancelButtonColor: "#C70000",
        confirmButtonText: "<span>確定</span>"
      });

      if (result.isConfirmed) {
        try {
          const response = await axios.post(import.meta.env.VITE_API_BASE +'/api/OrderCancel.php', {
            // const response = await axios.post('http://localhost/meme_apple/public/php/api/OrderCancel.php', {
            orderId: order.ORDER_ID,
            status: 3
          });

          if (response.data.success) {
            Swal.fire({
              title: "取消訂單",
              text: "您的訂單已取消完成",
              icon: "success",
              confirmButtonColor: "#FCD15B",
              color: "#100E24",
              confirmButtonText: "<span>OK</span>",
            });

            // 更新本地訂單狀態
            order.ORDER_STATUS = '已取消';
          } else {
            Swal.fire({
              title: "錯誤",
              text: "無法取消訂單，請稍後再試。",
              icon: "error",
              confirmButtonColor: "#FCD15B",
              color: "#100E24",
              confirmButtonText: "<span>OK</span>",
            });
          }
        } catch (error) {
          console.error(error);
          Swal.fire({
            title: "錯誤",
            text: "發生錯誤。",
            icon: "error",
            confirmButtonColor: "#FCD15B",
            color: "#100E24",
            confirmButtonText: "<span>OK</span>",
          });
        }
      }
    },
    showAlert(order) {
      // 這邊是卡片主題名稱
      let titleText = '';
      // 這邊是卡片場館名稱
      let placeText = '';
      // 這是訂單上面的日期，我需要使用次元斬分割他
      const [year, month, day] = order.ORDER_DATE.split('-');
      // 這是訂單上面的入場時間，我需要使用次元斬分割他
      const [hour, min] = order.ORDER_TIME.split(':');
      const displayTime = `${hour}:${min}`;
      // 這是訂單的背景圖片
      let backgroundImage = '';
      // 這是訂單小於pad尺寸變換的背景圖片
      let backgroundImageMobile = '';

      // const all_data = [
      //   {
      //     titleText: '成都醫院',
      //     backgroundImage: 'url("/tid102/g1/img/popupcard_space_1.png")',
      //     backgroundImageMobile: 'url("/tid102/g1/img/popupcard_space-m_1.png")',
      //   },
      //   {
      //     titleText: '時光迷宮',
      //     backgroundImage: 'url("/tid102/g1/img/popupcard_space_2.png")',
      //     backgroundImageMobile: 'url("/tid102/g1/img/popupcard_space-m_2.png")',
      //   },
      //   {
      //     titleText: '末日庇護所',
      //     backgroundImage: 'url("/tid102/g1/img/popupcard_space_3.png")',
      //     backgroundImageMobile: 'url("/tid102/g1/img/popupcard_space-m_3.png")',
      //   },
      //   {
      //     titleText: '代碼深淵',
      //     backgroundImage: 'url("/tid102/g1/img/popupcard_space_4.png")',
      //     backgroundImageMobile: 'url("/tid102/g1/img/popupcard_space-m_4.png")',
      //   },
      //   {
      //     titleText: '逃離武石監',
      //     backgroundImage: 'url("/tid102/g1/img/popupcard_space_5.png")',
      //     backgroundImageMobile: 'url("/tid102/g1/img/popupcard_space-m_5.png")',
      //   },
      //   {
      //     titleText: '恐怖密室',
      //     backgroundImage: 'url("/tid102/g1/img/popupcard_space_6.png")',
      //     backgroundImageMobile: 'url("/tid102/g1/img/popupcard_space-m_6.png")',
      //   },
      //   {
      //     titleText: '逃出虛空',
      //     backgroundImage: 'url("/tid102/g1/img/popupcard_space_7.png")',
      //     backgroundImageMobile: 'url("/tid102/g1/img/popupcard_space-m_7.png")',
      //   },
      // ]

      // titleText = all_data[order.THEME_ID - 1].titleText;
      // backgroundImage = all_data[order.THEME_ID - 1].backgroundImage;
      // backgroundImageMobile = all_data[order.THEME_ID - 1].backgroundImageMobile;

      if (Number(order.THEME_ID) === 1 || Number(order.THEME_ID) === 2 || Number(order.THEME_ID) === 3 || Number(order.THEME_ID) === 4) {
        placeText = '台北館';
      } else if (Number(order.THEME_ID) === 5 || Number(order.THEME_ID) === 6 || Number(order.THEME_ID) === 7) {
        placeText = '台中館';
      } else {
        placeText = '未知場館';
      }

      console.log(placeText);
      console.log(order.THEME_ID);

      const themeData = all_data[order.THEME_ID];
      // console.log('theme_data', themeData);
      // console.log('all_data', all_data);
      // console.log('id', order.THEME_ID);

      if (themeData) {
        titleText = themeData.titleText;
        backgroundImage = themeData.backgroundImage;
        backgroundImageMobile = themeData.backgroundImageMobile;
        placeText = themeData.branch;
        // console.log(themeData.branch);
      } else {
        titleText = '未知主題';
        backgroundImage = 'url("/tid102/g1/img/popupcard_space_unknown.png")';
        backgroundImageMobile = 'url("/tid102/g1/img/popupcard_space-m_unknown.png")';
        placeText = '未知場館';
      }

      // 檢查螢幕尺寸
      const isMobile = window.innerWidth < 820;
      const finalBackgroundImage = isMobile ? backgroundImageMobile : backgroundImage;

      Swal.fire({
        html:
          `
                      <main class="main-popupcard">
                        <section class="popupcard-card" style='background-image:${finalBackgroundImage} !important;''>
                            <p class="popupcard-title">請出示電子票券即可入場</p>
                            <div class="popupcard-qrcode">
                                <img src="${new URL("@/assets/img/qrcode_001.jpg", import.meta.url).href}" alt="">
                                
                            </div>
                            <h1>${titleText}</h1>
                            <div class="qrcode-time">
                                <p class="qrcode-y">${year} /</p>
                                <p class="qrcode-m">${month} /</p>
                                <p class="qrcode-d">${day}</p>
                            </div>
                            <div class="qrcode-place">
                                <p>${placeText}</p>
                                <div class="qrcode-line"></div>
                                <span>入場時間</span>
                                <span>${displayTime}</span>
                           </div>
                        </section>
                      </main>
                `,
        showConfirmButton: false,
        showCloseButton: true,
        color: '#FFFFFF',
        width: 'auto',
        // backgroundcolor: 'transparent',
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
    orderquestion(order) {
      Swal.fire({
        title: "問卷調查",
        html:
          `
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