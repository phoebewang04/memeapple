<script setup>
import '../assets/js/vue.global';
import '../assets/css/style.css';
import TopNavbar from '../components/TopNavbar.vue';
import Footerbar from '../components/Footerbar.vue';


</script>






<template>
    <TopNavbar />
    <div class="main">
        <div class="wrappermmange">
           <div class="mmangeleft">
            <button class="btn btn_">訂單檢視</button>
            <button class="btn btn_">優惠券</button>
            <button class="btn btn_">會員資料修改</button>
        </div>
        <div class="mmangeright">
            <div class="ordertext">
              <div class="ordertext_left">
                <h3>您的訂單</h3>
                <div class="order_card">
                  <div class="order_cardleft">
                    <div class="order_cardimg"></div>
                    <div class="order_cardtext">
                      <p>時光迷宮</p>
                      <p>訂單編號  ABC202408070807</p>
                      <p>訂購日期  20240807</p>
                    </div>
                  </div>
                  <div class="order_cardright">
                    <div class="order_cardusage">
                      <p>已使用</p>
                      <!-- <p>未使用</p> -->
                    </div>
                    <div class="order_cardstate">
                      <p>訂金</p><P>TWD 2,000元</P>
                      <p>問卷填寫</p>
                      <!-- <p>取消訂單</p> -->
                    </div>
                  </div>
                </div>
              </div>
              <div class="ordertext_right">
                <ul>
                  <li><h3>訂單查詢</h3></li>
                  <li><h3>未使用訂單</h3></li>
                  <li><h3>全部訂單</h3></li>
                </ul>
              </div>
            </div>


            <div class="coupontext">
              <div class="couponticket">
                <div class="coupont">
                  <h3>小遊戲優惠卷</h3>
                  <h4>折扣金額:</h4>
                  <h4>50元</h4>
                  <h4>使用狀態:</h4>
                  <h4>未使用</h4>
                </div>
              </div>
            </div>


            <div class="editmember">
              <h3>會員資料修改</h3>
              <ul>
                <li><h4>帳號</h4></li>
                <li><h4>a123456789@yahoo.com.tw</h4></li>
                <li><h4>E-mail</h4></li>
                <li><h4>a123456789@yahoo.com.tw</h4></li>
                <li><h4>生日</h4></li>
                <li><h4>1987-08-07</h4></li>
                <li><h4>修改密碼:</h4></li>
                <li><input type="text" class="jeditphone" value="********"></li>
                <li><h4>請再次輸入密碼:</h4></li>
                <li><input type="text" class="editphone" value="********"></li>
                <li><h4>修改姓名:</h4></li>
                <li><input type="text" class="editphone" value="李小王"></li>
                <li><h4>電話:</h4></li>
                <li><input type="text" class="editphone" value="0912123123"></li>
                <li><button class="btn btnlogin">儲存變更</button></li>
                <li><button class="btn btnlogin">取消</button></li> 
              </ul>
              
            </div>
           </div> 
        </div>
    </div>
    <Footerbar />
</template>
