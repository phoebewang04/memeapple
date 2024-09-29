

<template>

    <TopNavbar />
    <ScrollToTop />
    <orderinformlogin v-if="showLoginPopup" @close="closePopup" @loginSuccess="handleLoginSuccess" />

    <div id="order_wrapper">

        <div class="order_return">
            <i class="fa-solid fa-chevron-left"></i>
            <RouterLink :to="{ path: `/Theme/${$route.params.id}/preorder` }">
                <p>返回</p>
            </RouterLink>
        </div>

     <!-- ----------------------順序時間圖---------------------- -->

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

        <!-- /* ----------------------------會員輸入資料欄位----------------------------------------- */ -->

        <div class="order_all" @submit.prevent="handleEnter" @keypress.enter="handleEnter">

            <div class="order_left">

                <div class="memberinfrom">
                    <div class="login">
                        <h3>聯絡人資料</h3>
                        <p v-if="!isLoggedIn">已經是會員？請</p><p v-if="!isLoggedIn" @click="showLoginPopup = true" class="orderpopup">登入</p> 
                    </div>

                    <div class="mi_dt">
                        <p>姓名</p>
                        <input type="text" v-model="orderName" @input="validName"  placeholder="請輸入姓名">
                        <p v-if="nameError" style="color: #DC2F2F;" class="redError">{{ nameError }}</p>
                    </div>

                    <p>訂單資訊會寄到您的信箱，此信箱同時會成為您的帳號，請務必確認信箱填寫正確。</p>

                    <div class="mi_dt">
                        <p>電子信箱</p>
                        <input type="text" v-model="orderEmail" @input="validEmail"  placeholder="請輸入正確的電子信箱格式">
                        <p v-if="emailError" style="color: #DC2F2F;" class="redError">{{ emailError }}</p>
                    </div>

                    <div class="mi_dt">
                        <p>聯絡電話</p>
                        <div class="phone">
                            <select v-model="countryPhone" @change="validPhone">
                                <option value="TW">台灣 (+886)</option>
                                <option value="HK">香港 (+852)</option>
                                <option value="MO">澳門 (+853)</option>
                            </select>
                            <input type="text" v-model="orderPhone" @input="validPhone" >
                            <p v-if="phoneError" style="color: #DC2F2F;" class="redError">{{ phoneError }}</p>
                        </div>
                    </div>

                    <div class="password" v-if="!isLoggedIn">
                        <div class="password01">
                            <p>建立密碼</p>
                            <input type="password" v-model="orderPassword" @input="validPassword" placeholder="請輸入6位以上密碼">
                            <p v-if="passwordError" style="color: #DC2F2F;" class="redError">{{ passwordError }}</p>
                        </div>

                        <div class="password02">
                            <p>請再次輸入密碼</p>
                            <input type="password" v-model="comfirmPassword" @input="validComfirm"  placeholder="再次確認密碼">
                            <p v-if="comfirmError" style="color: #DC2F2F;" class="redError">{{ comfirmError }}</p>
                        </div>
                    </div>

                    <p v-if="!isLoggedIn">繼續進行且完成訂單，代表您同意服務條款與隱私權政策並成為註冊會員</p>

                </div>

                <!-- /* ---------------------------確認報名資料欄位------------------------------------------ */ -->


                <div class="confrim">

                    <h3>確認報名資料</h3>

                    <div class="check">
                        <input type="checkbox" id="check1" class="box" v-model="orderCheck1" @change="checkValid">
                        <label for="check1">
                        <p v-if="theme">我同意《{{ theme.themeName }}注意事項》請閱讀《{{ theme.themeName }}》頁面中下方注意事項（含取消及更改辦法）</p>
                        </label>
                    </div>

                    <div class="check">
                        <input type="checkbox" id="check2" class="box" v-model="orderCheck2" @change="checkValid">
                        <label for="check2">
                        <p>遊戲出發日 " 當日及前兩日 " 不接受取消，並不予退回款項。</p>
                        </label>
                    </div>

                </div>
            </div>


            <!-- /* --------------------------訂單明細表------------------------------------------- */ -->

            <div class="order_right">

                <div class="details">
                    <h3>訂單明細</h3>

                    <div class="list">
                        <p v-if="theme">{{ theme.themeName }}（ {{ theme.branch }} ）</p>
                        <p>預約場次</p>
                        <p class="pp"> 日期：{{ selectedDate}} ｜ 時間：{{ selectedTimeSlot }} </p>
                        <p>總人數：<span class="pp" v-if="peopleAmount">{{peopleAmount }} 人</span></p>
                        <p>訂購項目：</p>
                        <p class="pp">包場訂金 2,000 元 X1</p>

                        <div class="orderLabel">
                            <label for="orderDiscount">使用優惠卷</label>
                            <select v-if="coupons.length > 0" name="使用優惠卷" v-model="orderDiscount" @change="selectDiscount">
                                <option v-for="coupon in coupons" :key="coupon.ID" :value="coupon.ID">
                                    {{ `折扣 - ${coupon.DISCOUNT} 元` }}
                                </option>
                            </select>
                            <h6 v-else>無可用優惠券 </h6>
                        </div>
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
                                <p>折扣（現場折抵）</p>
                            </div>
                            <div>
                                <p> NT {{ discountPrice }} 元</p>
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
                            <button class="btn next_btn" :disabled="orderstatus === 1 || !dataValid"  :class="{active: orderstatus !== 1 && dataValid}" @click="submitData">下一步</button>
                            <!-- <button class="btn next_btn" :disabled="!dataValid" :class="{active: dataValid}" @click="submitData" v-if="orderstatus === 0">下一步</button> -->
                             <p v-if="orderstatus === 1">此帳號已被停權，有任何疑問請洽客服</p>
                        </div>
                       

                </div>

            </div>

        </div>

        </div>


    <Footerbar />

</template>

<!-- --------------------------------功能程式---------------------------------------------- -->

<script>
import { all_data } from '../assets/js/all_data.js';
import '../assets/css/style.css';
import TopNavbar from '../components/TopNavbar.vue';
import Footerbar from '../components/Footerbar.vue';
import { RouterLink } from 'vue-router';
import ScrollToTop from '../components/ScollToTop.vue';
import axios from 'axios';
import orderAlert from 'sweetalert2';
import orderinformlogin from '../components/login.vue'

export default {
    components: {
        TopNavbar,
        Footerbar,
        ScrollToTop,
        orderinformlogin,
    },
    data () {
        return {
            orderName : '',
            orderEmail : '',
            orderPhone:'',
            countryPhone:'TW',
            orderPassword:'',
            comfirmPassword:'',
            orderDiscount:'',
            usedDiscount: false,
            discountPrice: '0',
            orderCheck1 : false,
            orderCheck2 : false,

            nameError: '',
            emailError: '',
            phoneError:'',
            passwordError:'',
            comfirmError:'',

            all_data: all_data,
            theme: null,
            finalPeople: '',
            selectedTimeSlot: null,
            peopleAmount: null,
            selectedDate: null,

            isLoggedIn: false,
            orderstatus: null,
            coupons: [],
            showLoginPopup: false,

        }
    },
    computed: {
        dataValid (){
   
            if (this.isLoggedIn) {
            // 當用戶已登入，只需要驗證基本資料和同意條款
            return (
                this.orderName && !this.nameError &&
                this.orderEmail && !this.emailError &&
                this.orderPhone && !this.phoneError &&
                this.orderCheck1 && this.orderCheck2
                
            );
            } else {
                // 當用戶未登入，還需要驗證密碼和確認密碼
                return (
                    this.orderName && !this.nameError &&
                    this.orderEmail && !this.emailError &&
                    this.orderPhone && !this.phoneError &&
                    this.orderPassword && !this.passwordError &&
                    this.comfirmPassword && !this.comfirmError &&
                    this.orderCheck1 && this.orderCheck2
                );
            }
        },
    },
    created() {
        const memberData = JSON.parse(localStorage.getItem('user'));
        if (memberData) {
            this.orderName = memberData.name;
            this.orderEmail = memberData.email;
            this.orderPhone = memberData.phone;
            this.isLoggedIn = true;
            this.getCoupons(memberData.id);

        };
        //去判斷localstorage的status是不是0而去判斷是否停權
        if (memberData && memberData.status !== undefined) {
            // 確保 status 是數字類型
            this.orderstatus = Number(memberData.status);
        }
   
    },

    methods :{

        closePopup() {
        this.showLoginPopup = false;
        },
        handleLoginSuccess() {
        this.showLoginPopup = false;
        if (this.targetRoute) {
            // 登入後自動導航到之前的目標路由
            this.$router.push(this.targetRoute);
        }
        },
        saveToLocalStorage() {
        const orderData = {
            // storeId: this.$route.params.storeId,
            themeId: this.$route.params.id,
            selectedDate: this.selectedDate,
            selectedTimeSlot: this.selectedTimeSlot,
            peopleAmount: this.peopleAmount,
            
        };
        localStorage.setItem('orderData', JSON.stringify(orderData));
        
        },
        // 查詢優惠券
        getCoupons(memberId) {
             axios.get(import.meta.env.VITE_API_BASE + `/api/membercoupon.php?member_id=${memberId}`)
            //  axios.get(`http://localhost/appleTeam/public/php/api/membercoupon.php?member_id=${memberId}`)
                .then(response => {
                    if (Array.isArray(response.data)) {
                        this.coupons = response.data;

                        // 找尋折扣最大的優惠券
                        if (this.coupons.length > 0) {
                            // const maxDiscountCoupon = this.coupons.reduce((max, coupon) => {
                            //     return coupon.DISCOUNT > max.DISCOUNT ? coupon : max;
                            // }, this.coupons[0]);
                            const maxDiscountCoupon = this.coupons.reduce((max, coupon) => {
                                return Number(coupon.DISCOUNT) > Number(max.DISCOUNT) ? coupon : max;
                            }, this.coupons[0]);
                            this.orderDiscount = maxDiscountCoupon.ID;
                            this.discountPrice = maxDiscountCoupon.DISCOUNT;

                            //把優惠卷的值存入localstorage裡 再由下一頁帶入值
                            this.$nextTick(() => {
                            localStorage.setItem('discountPrice', this.discountPrice);
                            console.log('Stored Discount Price:', localStorage.getItem('discountPrice'));
                    });
                        }
                    } else {
                        console.error('Invalid response data:', response.data);
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        },
        validName(){
            const nameData = /^[\u4e00-\u9fa5]+$/;
            if (!this.orderName.match(nameData)){
                this.nameError = '注意！姓名不能有特殊字元噢';
            }else {
                this.nameError= '';
            }
        },
        validEmail(){
            const emailData = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if(!this.orderEmail.match(emailData)){
                this.emailError = '電子信箱格式有錯誤！';
            }else {
                this.emailError='';
            }
        },
        validPhone(){
            let phoneData ;
            if (this.countryPhone === 'TW'){
                phoneData = /^09\d{8}$/;
            }else if (this.countryPhone === 'HK'){
                phoneData = /^[69]\d{7}$/;
            }else if (this.countryPhone === 'MO'){
                phoneData = /^6\d{7}$/;
            }

            if (!this.orderPhone.match(phoneData)){
                this.phoneError = '手機輸入格式有錯誤！'
            }else {
                this.phoneError = '';
            }
        },
        validPassword(){
            const regex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/; 
            if (!this.orderPassword.match(regex)){
                this.passwordError = '密碼輸入格式有誤！至少要包含6位數 含字母和數字！';
            }else {
                this.passwordError = '';
            }
        },
        validComfirm (){
            if (this.orderPassword !== this.comfirmPassword){
                this.comfirmError = '兩者密碼輸入不一致，請重新確認！';
            }else {
                this.comfirmError = '';
            }
        },
        selectDiscount (){
            // 小郭version
            const selectedCoupon = this.coupons.find(coupon => coupon.ID === this.orderDiscount);
            if (selectedCoupon) {
                this.discountPrice = selectedCoupon.DISCOUNT;
            } else {
                this.discountPrice = '0';
            }
            
        },
        
        goToNextPage (){
            localStorage.setItem ('orderDiscount', this.orderDiscount);
            localStorage.setItem('discountPrice', this.discountPrice);
            

            this.$router.push({ path: `/Theme/${this.$route.params.id}/preorder/orderinform/pay` });

      
        },
        checkValid (){

            return new Promise((resolve, reject) => {
                let isValid = true;

                this.validName();
                this.validEmail();
                this.validPhone();
                // this.validPassword();
                this.validComfirm();
                

                if (!this.isLoggedIn) {
                // 如果不是會員，還需要驗證密碼和確認密碼
                this.validPassword();
                
            }

                // 根據驗證結果判斷表單是否有效
                if (this.nameError || this.emailError || this.phoneError ||
                (!this.isLoggedIn && (this.passwordError || this.comfirmError))) {
                isValid = false;
                }

                if (isValid) {
                    resolve(); // 驗證通過
                } else {
                    reject(); // 驗證失敗
                }
            });
        },
        handleEnter() {
            console.log('Data Valid:', this.dataValid);
            if (this.dataValid) {
                this.submitData(); // 表單有效時，提交數據
            } else {
                
                orderAlert.fire({
                // title: "The Internet?",
                
                text: "請檢查所有輸入欄位和同意條款噢！",
                icon: "warning",
                iconColor:'#FEDA77',
                background:'#100E24',
                color:'white',
                confirmButtonText: '確認',
                confirmButtonColor:'#FEDA77',
                });
           
                // alert('請檢查所有輸入欄位和同意條款');
            }
            
        },

        async submitData() {
            await this.checkValid();
             console.log('提交的數據：', {
                name: this.orderName,
                email: this.orderEmail,
                phone: this.orderPhone,
                password: this.orderPassword,
                
            });
  
                try {
                    if (!this.isLoggedIn) {
                // 如果未登入，準備要提交的資料
                const payload = {
                    name: this.orderName,
                    email: this.orderEmail,
                    phone: this.orderPhone,
                    password: this.orderPassword, // 如果是註冊會員，必須傳遞密碼
                };

                console.log('提交的註冊數據：', payload);

                // 發送 POST 請求到後端進行註冊
                const response = await axios.post(import.meta.env.VITE_API_BASE + '/api/register.php', payload);
                // const response = await axios.post('http://localhost/appleTeam/public/php/api/register.php', payload);

                    if (response.data.status === "success") {
                        // 註冊成功，跳轉到下一頁
                        this.$router.push({ path: `/Theme/${this.$route.params.id}/preorder/orderinform/pay` });
             
                        this.autoLogin(this.orderEmail, this.orderPassword);
                        
                    } else {
                        alert("發生錯誤：" + response.data.message); // 顯示錯誤消息
                    }
                } else {
                    // 如果已經是登入會員，直接進行到下一步
                    console.log('會員已登入，進行到下一步');
                    this.$router.push({ path: `/Theme/${this.$route.params.id}/preorder/orderinform/pay` });
                }
                } catch (error) {
                    console.error(error);
                    alert("發生錯誤，請稍後再試。");
                }
        },
        //註冊即登入
        async autoLogin(username, password) {
            try {
                const response = await axios.post(import.meta.env.VITE_API_BASE + '/api/login.php', {
                    username: this.orderEmail,
                    password: this.orderPassword
                });

                if (response.data.status === "success") {
              
                        // 儲存登入的用戶資料
                        const user = response.data.user;
                        localStorage.setItem('user', JSON.stringify(user));

                        // 發出登入事件
                        this.$emit('login', user);

                        // 進行其他登入後的操作
                        console.log("自動登入成功:", response.data.user);
                        this.closePopup();
                   
                } else {
                    alert("自動登入失敗：" + response.data.message);
                }
            } catch (error) {
                console.error("自動登入失敗：", error);
            }
        }
    },
    mounted (){
        const themeId = this.$route.params.id;
        this.theme = this.all_data[themeId]; 

        this.peopleAmount = localStorage.getItem('peopleAmount') || '';
        const selectedTimeSlot = localStorage.getItem('selectedTimeSlot');
        const selectedDate = localStorage.getItem('selectedDate');
        if (selectedTimeSlot) {
            // 如果找到了選定的場次時間，將其顯示在頁面上
            this.selectedTimeSlot = selectedTimeSlot;
            this.selectedDate = selectedDate;
        }

        const savedOrderData = localStorage.getItem('orderData');
        if (savedOrderData) {
            const parsedData = JSON.parse(savedOrderData);
            // this.storeId = parsedData.storeId;
            this.themeId = parsedData.themeId;
            this.selectedDate = parsedData.selectedDate;
            this.selectedTimeSlot = parsedData.selectedTimeSlot;
            this.peopleAmount = parsedData.peopleAmount;
          
        }
        
        },

       

}
</script>

<!-- --------------------------------樣式版---------------------------------------------- -->

<style>

</style>