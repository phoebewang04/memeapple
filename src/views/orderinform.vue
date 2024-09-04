<script setup>
import '../assets/css/style.css';
import TopNavbar from '../components/TopNavbar.vue';
import Footerbar from '../components/Footerbar.vue';
</script>

<!-- --------------------------------原始碼---------------------------------------------- -->

<template>

  <TopNavbar />

  <div id="order_wrapper">

    <div class="order_return">
        <i class="fa-solid fa-chevron-left"></i>
        <a href="#">
            <p>返回</p>
        </a>
    </div>

    <div class="order_process">
        <div class="order_number">
            <div class="circle1">
                <p>1</p>
            </div>
            <p>填寫資料</p>
        </div>

        <div class="order_number">
            <div class="circle2">
                <p>2</p>
            </div>
            <p>結帳</p>
        </div>

        <div class="order_number">
            <div class="circle3">
                <p>3</p>
            </div>
            <p>確認訂單</p>
        </div>
    </div>

    <!-- /* ----------------------------會員輸入資料----------------------------------------- */ -->

    <div class="order_all">

        <div class="order_left">

            <div class="memberinfrom">
                <div class="login">
                    <h3>聯絡人資料</h3>
                    <p>已經是會員？請 <a href="#">登入</a></p>
                </div>

                <div class="mi_dt">
                    <p>姓名</p>
                    <input type="text" v-model="orderName"  placeholder="請輸入姓名">
                </div>

                <p>訂單資訊會寄到您的信箱，此信箱同時會成為您的帳號，請務必確認信箱填寫正確。</p>

                <div class="mi_dt">
                    <p>電子信箱</p>
                    <input type="text" v-model="orderEmail"  placeholder="請輸入正確的電子信箱格式">
                </div>

                <div class="mi_dt">
                    <p>聯絡電話</p>
                    <div class="phone">
                        <select name="" id="">
                            <option value="">台灣 (+886)<i class="fa-solid fa-angle-down"></i></option>
                            <option value="">美國 (+1)</option>
                            <option value="">加拿大 (+1)</option>
                            <option value="">英國 (+44)</option>
                            <option value="">阿富汗 (+93)</option>
                        </select>
                        <input type="text" name="" id="">
                    </div>
                </div>

                <div class="password">
                    <div class="password01">
                        <p>建立密碼</p>
                        <input type="password" name="" id="" placeholder="請輸入6位以上密碼">
                    </div>

                    <div class="password02">
                        <p>請再次輸入密碼</p>
                        <input type="password" name="" id="" placeholder="再次確認密碼">
                    </div>
                </div>

                <p>繼續進行且完成訂單，代表您同意服務條款與隱私權政策並成為註冊會員</p>

            </div>

            <!-- /* ---------------------------確認報名資料------------------------------------------ */ -->


            <div class="confrim">

                <h3>確認報名資料</h3>

                <div class="check">
                    <input type="checkbox" class="box">
                    <p>我同意《末日庇護所注意事項》請閱讀《末日庇護所》頁面中下方注意事項(含取消及更改辦法)</p>
                </div>

                <div class="check">
                    <input type="checkbox" class="box">
                    <p>遊戲出發日 " 當日及前兩日 " 不接受取消，並不予退回款項。</p>
                </div>

            </div>
        </div>


        <!-- /* --------------------------訂單明細表------------------------------------------- */ -->

        <div class="order_right">

            <div class="details">
                <h3>訂單明細</h3>

                <div class="list">
                    <p>末日庇護所 台北館</p>
                    <p>場次時間：
                        <br>
                        2024 年08 月 06 日 10：30
                    </p>
                    <p>總人數：4 人</p>
                    <p>訂購項目：
                        <br>
                        包場訂金 2000 元 X1
                    </p>

                    <select name="" id="">
                        <option value="">使用優惠卷<i class="fa-solid fa-caret-down"></i></option>
                        <option value="">優惠卷折扣 -50 元</option>
                        <option value="">優惠卷折扣 -100 元</option>
                        <option value="">優惠卷折扣 -150 元</option>
                    </select>
                </div>

                <div class="amount">

                    <div class="price">
                        <div>
                            <p>小計</p>
                        </div>
                        <div>
                            <p>NT 2,000</p>
                        </div>
                    </div>

                    <div class="price">
                        <div>
                            <p>折扣 (現場折抵)</p>
                        </div>
                        <div>
                            <p>NT 50</p>
                        </div>
                    </div>

                    <div class="price">
                        <div>
                            <p>總計</p>
                        </div>
                        <div>
                            <p>NT 2,000</p>
                        </div>
                    </div>
                </div>

                <div class="button01">
                    <button class="next_btn" disabled>下一步</button>
                </div>
            </div>
        </div>

    </div>

  </div>

  <Footerbar />

</template>

<!-- --------------------------------功能程式---------------------------------------------- -->

<script>
  export default {
    data () {
        return {
            orderName : '',
            orderEmail : '',
        }
    },
    computed : {
        
    },
    methods (){

    }
    
  }
</script>

<!-- --------------------------------樣式版---------------------------------------------- -->

<style lang="scss" scoped>

</style>