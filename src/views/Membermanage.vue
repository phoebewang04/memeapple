<template>
  <TopNavbar />
  <ScrollToTop />
  <StarRating v-if="showStarRating" @close="showStarRating = false" :orderId="selectedOrderId" />
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
                      @click="orderquestion(order)">問卷填寫</button>

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
          <div v-for="coupon in coupons" :key="coupon.id" class="couponticket">
            <div class="couponimg">
              <img v-if="coupon.DISCOUNT !== 300" src="../assets/img/game_coupon.png" class="couponbg">
              <img  v-if="coupon.DISCOUNT == 300" src="../assets/img/integral_coupon.png" class="couponbg">
            </div>
            <h3 class="rotate-text" v-if="coupon.DISCOUNT !== 300">${{ coupon.DISCOUNT }}</h3>
          </div>

        </div>


        <div class="editmember" v-if="currentTab == 'tab3'">

          <!-- 卡片正面：會員資料 -->
          <div class="member_card_container" :style="cardContainerStyle">

            <p :style="cardTitleStyle">{{ showCollectCard ? 'Meme Studio積分卡' : 'Meme Studio會員卡' }}</p>

            <div class="member_card_data" v-if="!showCollectCard">


              <div class="head_sticker">
                <img :src="headSticker" alt="Head Sticker Image" class="member_photo" :style="headStickerStyle">
              </div>


              <div class="data_right">
                <ul :style="cardTextStyle">
                  <li>
                    <span>挑戰者：{{ isEditing ? editedUser.name : user.name }}</span>
                  </li>
                  <li>
                    <span>帳號：{{ user.email }}</span>
                  </li>
                  <li>
                    <span>電話：{{ isEditing ? editedUser.phone : user.phone }}</span>
                  </li>
                  <li>
                    <span>註冊日期：{{ user.regidate }}</span>
                  </li>
                  <li>
                    <span>會員狀態：
                      <span v-if="user.status == 0">正常</span>
                      <span v-else-if="user.status == 1" class="card_suspension">帳號停權，請洽客服！</span>
                    </span>
                  </li>
                  <li class="accessories">
                    <img :src="accessoriesImg" alt="accessory image">
                  </li>
                </ul>
              </div>


            </div>


            <!-- 卡片背面：集點卡 -->

            <div class="member_card_collect" v-show="showCollectCard">
              <!-- <div v-for="(card, index) in cards" :key="index" class="card_collect" :class="{ filled: index <= user.ordercounts }" >
                <img v-if="index <= user.ordercounts" src="../assets/img/stamp.png" alt="已蓋章" class="stamp-image" />
              </div> -->
              <div v-for="index in 8" :key="index" class="card_collect" :class="{ filled: index <= user.ordercounts }"
                :style="{ backgroundColor: collectColor }">
                <img v-if="index <= user.ordercounts" src="../assets/img/stamp.png" alt="已蓋章" class="stamp-image" />
              </div>
            </div>

          </div>


          <div class="memberdata" v-if="!isEditing">
            <div class="btnlocation">
              <button class="btnedit" @click="membershipCard">資料變更</button>
              <button class="btn_collect" @click="overturn">{{ showCollectCard ? '會員卡' : '成就之鑰' }}</button>
            </div>
          </div>

          <div class="editmemberdata" v-else>



            <div class="btnlocation">
              <button class="btn btnedit" @click="saveChanges">儲存變更</button>
              <button class="btn btnedit" @click="cancelEdit">取消</button>
            </div>

            <div class="data_style">
              <ul class="custom_data">
                <span>會員資料修改</span>
                <li>
                  <div class="flexinput">
                    <h4>修改密碼：</h4><input type="text" class="editphone" v-model="editedUser.password"
                      placeholder="請輸入新密碼">
                  </div>
                </li>
                <li>
                  <div class="flexinput">
                    <h4>請再次輸入密碼：</h4><input type="text" class="editphone" v-model="editedUser.passwordConfirm"
                      placeholder="請再次輸入新密碼">
                  </div>
                </li>
                <li>
                  <div class="flexinput">
                    <h4>修改姓名：</h4><input type="text" class="editphone" v-model="editedUser.name" placeholder="請輸入姓名">
                  </div>
                </li>
                <li>
                  <div class="flexinput">
                    <h4>電話：</h4><input type="text" class="editphone" v-model="editedUser.phone" maxlength="10"
                      pattern="^09\d{8}$" placeholder="請輸入電話">
                  </div>
                </li>
              </ul>

              <div class="custom_sticker">
                <span>樣式修改</span>

                <div class="custom_profession">
                  <p @click="custerProfession('detective')"
                    :class="{ customactive: editedUser.profession === 'detective' }">偵探</p>
                  <p @click="custerProfession('police')" :class="{ customactive: editedUser.profession === 'police' }">
                    警察</p>
                  <p @click="custerProfession('adventurer')"
                    :class="{ customactive: editedUser.profession === 'adventurer' }">冒險家</p>
                  <p @click="custerProfession('astronaut')"
                    :class="{ customactive: editedUser.profession === 'astronaut' }">太空人</p>
                </div>

                <div class="custom_color">
                  <p @click="customColor('blue')" :class="{ customactive: editedUser.color === 'blue' }"></p>
                  <p @click="customColor('gray')" :class="{ customactive: editedUser.color === 'gray' }"></p>
                  <p @click="customColor('green')" :class="{ customactive: editedUser.color === 'green' }"></p>
                  <p @click="customColor('pink')" :class="{ customactive: editedUser.color === 'pink' }"></p>
                </div>

              </div>


            </div>
          </div>

        </div>

        <div class="collect_rules">

          <p>{{ showCollectCard
            ?'每當你遊玩一場密室遊戲，成就之鑰便可獲得1點榮耀積分。當累積至8點時，神秘的優惠券將向你敞開，為你下一次的挑戰提供助力。探索的腳步不停，秘境的謎題等著你解開，來謎因工作室，集點成就不凡旅程！':''
            }}</p>
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
import StarRating from '../components/StarRating.vue';
import Swal from 'sweetalert2';
import axios from 'axios';
import ScrollToTop from '../components/ScollToTop.vue';


export default {
  props: ["tasks"],
  emits: ["taskStar"],
  components: {
    TopNavbar,
    Footerbar,
    StarRating,
    ScrollToTop,
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
      //引入 all_data
      all_data: all_data,
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
      tasks: [],
      user: {},
      editedUser: {
        password: '',
        passwordConfirm: '',
        name: '',
        phone: '',
        profession: '',
        color: ''
      },
      memberId: null, // 定義 memberId
      coupons: [], // 定義 coupons
      showStarRating: false,
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
      cards: Array(8).fill({}) // 生成 8 個卡片
      ,
      showCollectCard: false, // 用來控制集點卡顯示與隱藏
      headSticker: '',
      accessoriesImg: '',

      collectColor: '#35395b', // 集點卡顏色
      cardContainerStyle: { backgroundColor: '#221F3C' }, // 預設卡片容器顏色
      cardTitleStyle: { backgroundColor: '#35395b' }, // 預設卡片標題顏色
      cardTextStyle: { color: '#FFFFFF' }, // 預設卡片文字顏色
      headStickerStyle: { backgroundColor: '#35395b' }, // 預設頭像背景顏色
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
      this.user = user;
      this.memberId = user.id; // 動態設置 memberId
      this.fetchOrders();
      this.editedUser = { ...user, passwordConfirm: user.password };

      this.$nextTick(() => {
        // 確保 DOM 元素已渲染完畢後再操作
        this.custerProfession(user.profession);
        this.customColor(user.color);
      });


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
    this.fetchCoupons(); // 獲取優惠券

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
        const response = await axios.get(import.meta.env.VITE_API_BASE + '/api/order.php', { params });
        // const response = await axios.get('http://localhost/sweethome/meme/public/php/api/Order.php', { params });
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
          const response = await axios.post(import.meta.env.VITE_API_BASE + '/api/ordercancel.php', {
            // const response = await axios.post('http://localhost/sweethome/meme/public/php/api/OrderCancel.php', {
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
        showConfirmButton: true,
        confirmButtonText: '核銷',
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
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            // 更新訂單狀態為1
            order.ORDER_STATUS = 1; // 本地更新狀態

            // 發送請求到後端更新狀態
            const response = await axios.post(import.meta.env.VITE_API_BASE + '/api/ordercancel.php', {
              orderId: order.ORDER_ID,
              status: 1
            });
            if (response.data.success) {
              Swal.fire({
                title: "核銷成功",
                text: "您的訂單已成功核銷。",
                icon: "success",
                confirmButtonColor: "#FCD15B",
                color: "#100E24",
                confirmButtonText: "<span>OK</span>",
              });
              order.ORDER_STATUS = '已使用';

              const memberDetailsResponse = await axios.post(import.meta.env.VITE_API_BASE + '/api/dataupdate.php',
                { memberId: this.user.id }); // 使用memberId 作為查詢參數
              console.log(memberDetailsResponse.data);

              if (memberDetailsResponse.data.status === "success") {
                // 更新 localStorage
                localStorage.setItem('user', JSON.stringify(memberDetailsResponse.data.user));

                // 直接發放優惠券
                if (this.user.ordercounts == 0) {
                  try {
                    // 固定發放300元優惠券

                    let form_data = new FormData();
                    form_data.append("member_id", memberDetailsResponse.data.user.id);
                    form_data.append("discount", 300);

                    const couponResponse = await axios.post(import.meta.env.VITE_API_BASE + '/api/coupon.php', form_data, {
                      headers: {
                        'Content-Type': 'multipart/form-data'
                      }
                    });

                    Swal.fire({
                      title: "恭喜您！集點卡已滿",
                      text: "您獲得300元優惠券！",
                      icon: "success",
                      confirmButtonColor: "#FCD15B",
                      confirmButtonText: "<span>OK</span>",
                    }).then(() => {
                      location.reload(); // 重新整理頁面
                    });
                  } catch (error) {
                    console.error("發放優惠券時出錯:", error);
                  }
                } else {
                  // 若無需發放優惠券，更新資料成功後重新整理頁面
                  location.reload();
                }
              } else {
                console.error('獲取會員詳細資料失敗', memberDetailsResponse.data.message);
              }
            } else {
              throw new Error('核銷失敗');
            }
          } catch (error) {
            console.error(error);
            Swal.fire({
              title: "錯誤",
              text: "核銷過程中發生錯誤，請稍後再試。",
              icon: "error",
              confirmButtonColor: "#FCD15B",
              color: "#100E24",
              confirmButtonText: "<span>OK</span>",
            });
          }
        }
      });
    },
    taskStar(e, i, star) {
      this.tasks[i].star = star;
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    saveChanges() {
      // 初始化錯誤訊息陣列
      const errorMessages = [];

      // 密碼驗證：至少6個字符，包含字母和數字
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
      if (!passwordRegex.test(this.editedUser.password)) {
        errorMessages.push('密碼至少需要6個字符，並且包含字母和數字');
      }

      // 確認密碼是否相同
      if (this.editedUser.password !== this.editedUser.passwordConfirm) {
        errorMessages.push('密碼和確認密碼不匹配');
      }

      // 電話號碼驗證：以09開頭的10位數字
      const phoneRegex = /^09\d{8}$/;
      if (!phoneRegex.test(this.editedUser.phone)) {
        errorMessages.push('電話號碼必須是以09開頭的10位數字');
      }

      // 如果有錯誤訊息，顯示所有錯誤
      if (errorMessages.length > 0) {
        Swal.fire('錯誤', errorMessages.join('<br>'), 'error');
        return;
      }

      // 更新用戶資料
      this.user.name = this.editedUser.name;
      this.user.phone = this.editedUser.phone;
      this.user.password = this.editedUser.password; // 直接使用明文密碼
      this.user.passwordConfirm = this.editedUser.password;
      this.user.profession = this.editedUser.profession;
      this.user.color = this.editedUser.color;
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
        password: user.password, // 直接傳送明文密碼
        passwordConfirm: user.password,
        profession: user.profession,
        color: user.color
      };
      axios.post(import.meta.env.VITE_API_BASE + '/api/editmemberdata.php', payload)
        // axios.post('http://localhost/sweethome/meme/public/php/api/editmemberdata.php', payload)
        .then(response => {
          Swal.fire('成功', '資料已更新', 'success');
        })
        .catch(error => {
          console.error('更新用戶資料失敗:', error);
          Swal.fire('失敗', '更新失敗', 'error');
        });
    },
    fetchCoupons() {
      axios.get(import.meta.env.VITE_API_BASE + `/api/membercoupon.php?member_id=${this.memberId}`)
        // axios.get(`http://localhost/sweethome/meme/public/php/api/membercoupon.php?member_id=${this.memberId}`)
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
    orderquestion(order) {
      this.selectedOrderId = order.ORDER_ID;
      this.showStarRating = true; // 顯示彈出窗口
    },
    overturn() {
      this.showCollectCard = !this.showCollectCard; // 切換顯示狀態
    },
    membershipCard() {
      this.isEditing = true;
      this.showCollectCard = false;
    },
    cancelEdit() {
      this.editedUser = { ...this.user }; // 重置 editedUser 為 user 的值

      // 恢復職業圖片
      this.custerProfession(this.user.profession);

      // 恢復顏色樣式
      this.customColor(this.user.color);

      this.isEditing = false;
    },
    custerProfession(profession) {
      this.editedUser.profession = profession;
      if (profession === 'detective') {
        // 偵探
        this.headSticker = new URL("@/assets/img/customized_detective.png", import.meta.url).href;
        this.accessoriesImg = new URL("@/assets/img/accessories_detective.png", import.meta.url).href;
      } else if (profession === 'police') {
        // 警察
        this.headSticker = new URL("@/assets/img/customized_police.png", import.meta.url).href;
        this.accessoriesImg = new URL("@/assets/img/accessories_police.png", import.meta.url).href;
      } else if (profession === 'adventurer') {
        // 冒險家
        this.headSticker = new URL("@/assets/img/customized_adventurer.png", import.meta.url).href;
        this.accessoriesImg = new URL("@/assets/img/accessories_adventurer.png", import.meta.url).href;
      } else if (profession === 'astronaut') {
        // 太空人
        this.headSticker = new URL("@/assets/img/customized_astronaut.png", import.meta.url).href;
        this.accessoriesImg = new URL("@/assets/img/accessories_astronaut.png", import.meta.url).href;
      }
    },
    customColor(color) {
      this.editedUser.color = color;

      // 根據 color 動態設置樣式
      if (color === 'blue') {
        this.collectColor = '#35395b';  // 集點卡顏色
        this.cardContainerStyle = {
          backgroundColor: '#221F3C'
        };
        this.cardTitleStyle = {
          backgroundColor: '#35395b'
        };
        this.cardTextStyle = {
          color: '#FFFFFF'
        };
        this.headStickerStyle = {
          backgroundColor: '#35395b'
        };
      } else if (color === 'gray') {
        this.collectColor = '#ececec';
        this.cardContainerStyle = {
          backgroundColor: '#D9D9D9'
        };
        this.cardTitleStyle = {
          backgroundColor: '#737373'
        };
        this.cardTextStyle = {
          color: '#737373'
        };
        this.headStickerStyle = {
          backgroundColor: '#ececec'
        };
      } else if (color === 'green') {
        this.collectColor = '#fff7e1';
        this.cardContainerStyle = {
          backgroundColor: '#F1EAD5'
        };
        this.cardTitleStyle = {
          backgroundColor: '#918F6A'
        };
        this.cardTextStyle = {
          color: '#918F6A'
        };
        this.headStickerStyle = {
          backgroundColor: '#fff7e1'
        };
      } else if (color === 'pink') {
        this.collectColor = '#fae9e9';
        this.cardContainerStyle = {
          backgroundColor: '#F1DBD5'
        };
        this.cardTitleStyle = {
          backgroundColor: '#BF5D5D'
        };
        this.cardTextStyle = {
          color: '#BF5D5D'
        };
        this.headStickerStyle = {
          backgroundColor: '#fae9e9'
        };
      }
    },
    couponImage() {
    return this.coupon.DISCOUNT === 300
      ? new URL('@/assets/img/integral_coupon.png', import.meta.url).href
      : new URL('@/assets/img/game_coupon.png', import.meta.url).href;
     },
  },
};
</script>