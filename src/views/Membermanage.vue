<script setup>

</script>






<template>
    <TopNavbar />
    <div class="main">
        <div class="wrappermmange">
           <div class="mmangeleft" id="mmangeleft">
            <button type="button" v-for="tab in tabs" :class="{active: currentTab == tab.id}" :key="tab.id" @click="currentTab = tab.id" class="btn btn_mange">{{ tab.name }}</button>
            <!-- <button class="btn btn_mange">訂單檢視</button>
            <button class="btn btn_mange">優惠券</button>
            <button class="btn btn_mange">會員資料修改</button> -->
        </div>
        <div class="mmangeright" id="mmangeright">
          <div class="mangerightitems"> 
            <button type="button" v-for="tab in tabs" :class="{active: currentTab == tab.id}" :key="tab.id" @click="currentTab = tab.id" class="btn btn_mange">{{ tab.name }}</button>
          <!-- <button class="btn btn_mange">訂單檢視</button>
          <button class="btn btn_mange">優惠券</button>
          <button class="btn btn_mange">會員資料修改</button> -->
          </div>
          
          <div class="ordertext" v-if="currentTab =='tab1'">
              <div class="ordertext_left">
                <h3>您的訂單</h3>
                <div class="order_card" >
                  <div class="order_cardusage">
                    <p class="onuse">已使用</p>
                    <!-- <p class="noneuse">未使用</p> -->
                  </div>
                  <div class="order_cardleft" @click="showAlert()">
                    <div class="order_cardimg"><img src="../assets/img/banner-lock.jpg" alt=""></div>
                    <div class="order_cardtext">
                      <p>逃離武石監</p>
                      <p>訂單編號：  ABC202408070807</p>
                      <p>訂購日期：  2024/08/07</p>
                    </div>
                  </div>
                  <div class="order_cardright">
                    <div class="order_cardstate">
                      <p>訂金</p><P>TWD 2,000元</P>
                      <button class="questionwrite" @click="orderquestion()">問卷填寫</button>
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
                    <div class="order_cardimg"><img src="../assets/img/banner-mazeofTime.png" alt=""></div>
                    <div class="order_cardtext">
                      <p>時光迷宮</p>
                      <p>訂單編號：  ABC202409020902</p>
                      <p>訂購日期：  2024/09/02</p>
                    </div>
                  </div>
                  <div class="order_cardright">
                    <div class="order_cardstate">
                      <p>訂金</p><P>TWD 2,000元</P>
                      <!-- <button class="questionwrite" @click="orderquestion()">問卷填寫</button> -->
                      <button class="cancelorder" @click="ordercancel()">取消訂單</button>
                    </div>
                  </div>                  
                </div>


              </div>
              <div class="ordertext_right">
                <ul>
                  <li><h3>訂單查詢</h3></li>
                  <li> <button class="btn btn_ordera">未使用訂單</button></li>
                  <li><button class="btn btn_ordera">全部訂單</button></li>
                </ul>
              </div>
            </div>


            <div class="coupontext" v-if="currentTab =='tab2'">
              <div class="couponticket">
                <div class="coupont">
                  <h3>小遊戲優惠卷</h3>
                  <h4>折扣金額：</h4>
                  <h4>50元</h4>
                  <h4>使用狀態：</h4>
                  <h4>未使用</h4>
                </div>
              </div>
            </div>


            <div class="editmember" v-if="currentTab =='tab3'">
              <h3>會員資料修改</h3>
              <ul>
                <li><h4>帳號：</h4></li>
                <li><h4>a123456789@yahoo.com.tw</h4></li>
                <li><h4>生日：</h4></li>
                <li><h4>1987-08-07</h4></li>
                <li><h4>修改密碼：</h4></li>
                <li><input type="text" class="editphone" value="********"></li>
                <li><h4>請再次輸入密碼：</h4></li>
                <li><input type="text" class="editphone" value="********"></li>
                <li><h4>修改姓名：</h4></li>
                <li><input type="text" class="editphone" value="李小王"></li>
                <li><h4>電話：</h4></li>
                <li><input type="text" class="editphone" value="0912123123"></li>
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


export default {
  props: ["tasks"],
  emits: ["taskStar"],
  components:{
      TopNavbar,
      Footerbar,
    },
    beforeRouteLeave(to, from, next) {
    // Close SweetAlert when leaving the route
    Swal.close();
    next();
    },
  data(){
    return {
      currentTab: "tab1",
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
          name: "會員資料修改"
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
    };
  },
  beforeMount(){
      let tasks = JSON.parse(localStorage.getItem("tasks"));
      if(tasks){
        this.tasks = tasks;
      }
    },
  methods: {
    showAlert(){
      Swal.fire({
                html:
                `
                      <main class="main-popupcard">
                        <section class="popupcard-card">
                            <p class="popupcard-title">請出示電子票券即可入場</p>
                            <div class="popupcard-qrcode">
                                <img src="/src/assets/img/qrcode_001.jpg" alt="">
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
                showConfirmButton:false,
                color:'#FFFFFF',
                width:'auto',
                backgroundcolor:'transparent',
                customClass: 
                    {
                        popup: 'main-popupcard',
                        content: 'wrapper-popupcard',
                        title: 'popupcard-title',
                        image: 'popupcard-qrcode',
                        htmlContainer: 'popupcard-card',
                        
                    },
                position:'center',
            })
    },
    ordercancel(){
      Swal.fire({
      title: "確定要取消訂單？",
      text: "按下確定將取消訂單",
      icon: "warning",
      color:"#100E24",
      showCancelButton: true,
      cancelButtonText: "<span class='swalcolor'>取消</span>",
      confirmButtonColor: "#FCD15B",
      cancelButtonColor: "#C70000",
      confirmButtonText: "<span class='swalcolor'>確定</span>"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "取消訂單",
            text: "您的訂單已取消完成",
            icon: "success",
            confirmButtonColor: "#FCD15B",
            color:"#100E24",
            confirmButtonText: "<span class='swalcolor'>OK</span>",
          });
        }
      });
    },
    orderquestion(){
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
      confirmButtonText: "<span class='swalcolor'>送出</span>",
      allowOutsideClick:false,
      allowEscapeKey:false,
      color:"#100E24",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "完成問卷",
            text: "您已完成問券，歡迎再次光臨",
            icon: "success",
            allowOutsideClick:false,
            allowEscapeKey:false,
            confirmButtonColor: "#FCD15B",
            confirmButtonText: "<span class='swalcolor'>OK</span>",
            color:"#100E24",
          });
        }
      });
    },
    taskStar(e, i, star){
        this.tasks[i].star = star;
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      },
  },
};

</script>