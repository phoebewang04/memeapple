

<template>

    <TopNavbar />

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

        <div class="order_all">

            <div class="order_left">

                <div class="memberinfrom">
                    <div class="login">
                        <h3>聯絡人資料</h3>
                        <p v-if="!isLoggedIn">已經是會員？請 <RouterLink to="/Login">登入</RouterLink>
                        </p>
                    </div>

                    <div class="mi_dt">
                        <p>姓名</p>
                        <input type="text" v-model="orderName" @input="validName" @keyup.enter="submitData"
                            placeholder="請輸入姓名">
                        <p v-if="nameError" style="color: #DC2F2F;" class="redError">{{ nameError }}</p>
                    </div>

                    <p>訂單資訊會寄到您的信箱，此信箱同時會成為您的帳號，請務必確認信箱填寫正確。</p>

                    <div class="mi_dt">
                        <p>電子信箱</p>
                        <input type="text" v-model="orderEmail" @input="validEmail" @keyup.enter="submitData"
                            placeholder="請輸入正確的電子信箱格式">
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
                            <input type="text" v-model="orderPhone" @input="validPhone" @keyup.enter="submitData">
                            <p v-if="phoneError" style="color: #DC2F2F;" class="redError">{{ phoneError }}</p>
                        </div>
                    </div>

                    <div class="password" v-if="!isLoggedIn">
                        <div class="password01">
                            <p>建立密碼</p>
                            <input type="password" v-model="orderPassword" @input="validPassword"
                                @keyup.enter="submitData" placeholder="請輸入6位以上密碼">
                            <p v-if="passwordError" style="color: #DC2F2F;" class="redError">{{ passwordError }}</p>
                        </div>

                        <div class="password02">
                            <p>請再次輸入密碼</p>
                            <input type="password" v-model="comfirmPassword" @input="validComfirm"
                                @keyup.enter="submitData" placeholder="再次確認密碼">
                            <p v-if="comfirmError" style="color: #DC2F2F;" class="redError">{{ comfirmError }}</p>
                        </div>
                    </div>

                    <p v-if="!isLoggedIn">繼續進行且完成訂單，代表您同意服務條款與隱私權政策並成為註冊會員</p>

                </div>

                <!-- /* ---------------------------確認報名資料欄位------------------------------------------ */ -->


                <div class="confrim">

                    <h3>確認報名資料</h3>

                    <div class="check">
                        <input type="checkbox" class="box" v-model="orderCheck1" @change="checkValid">
                        <p v-if="theme">我同意《{{ theme.themeName }}注意事項》請閱讀《{{ theme.themeName }}》頁面中下方注意事項（含取消及更改辦法）</p>
                    </div>

                    <div class="check">
                        <input type="checkbox" class="box" v-model="orderCheck2" @change="checkValid">
                        <p>遊戲出發日 " 當日及前兩日 " 不接受取消，並不予退回款項。</p>
                    </div>

                </div>
            </div>


            <!-- /* --------------------------訂單明細表------------------------------------------- */ -->

            <div class="order_right">

                <div class="details">
                    <h3>訂單明細</h3>

                    <div class="list">
                        <p v-if="theme">{{ theme.themeName }} （ {{ theme.branch }} ）</p>
                        <p>預約場次</p>
                        <p class="pp"> 日期：{{ selectedDate}} ｜ 時間：{{ selectedTimeSlot }} </p>
                        <p>總人數：<span class="pp" v-if="peopleAmount">{{peopleAmount }} 人</span></p>
                        <p>訂購項目：</p>
                        <p class="pp">包場訂金 2000 元 X1</p>

                        <label for="orderDiscount">使用優惠卷</label>
                        <select v-if="coupons.length > 0" name="使用優惠卷" v-model="orderDiscount" @change="selectDiscount">
                            <!-- <option value="discountA">優惠卷折扣 - 50 元</option> -->
                            <!-- <option value="discountB">優惠卷折扣 - 100 元</option> -->
                            <!-- <option value="discountC">優惠卷折扣 - 150 元</option> -->
                            <option v-for="coupon in coupons" :key="coupon.ID" :value="coupon.ID">
                                {{ `優惠卷折扣 - ${coupon.DISCOUNT} 元` }}
                            </option>
                        </select>
                        <p v-else>無可用優惠券</p>
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
                                <p v-if="discountPrice">NT {{ discountPrice }} 元</p>
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

                    <!-- <RouterLink :to="{ path: `/Theme/${$route.params.id}/preorder/orderinform/pay` }"> -->
                    <div class="button01">
                        <button class="btn next_btn" :disabled="!dataValid" :class="{active: dataValid}"
                            @click="goToNextStep">下一步</button>
                    </div>
                    <!-- </RouterLink> -->

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
import Swal from 'sweetalert2';

export default {
    components: {
        TopNavbar,
        Footerbar,
        ScrollToTop,
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
            coupons: [],
        }
    },
    computed: {
        dataValid (){
            return(
                this.orderName && !this.nameError &&
                this.orderEmail && !this.emailError &&
                this.orderPhone && !this.phoneError &&
                this.orderPassword && !this.passwordError&&
                this.comfirmPassword && !this.comfirmError &&
                this.orderCheck1 && 
                this.orderCheck2
            );
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
    },

    methods :{
        // 查詢優惠券
        getCoupons(memberId) {
            axios.get(`http://localhost/memeapple/public/php/api/membercoupon.php?member_id=${memberId}`)
                .then(response => {
                    if (Array.isArray(response.data)) {
                        this.coupons = response.data;

                        // 找尋折扣最大的優惠券
                        if (this.coupons.length > 0) {
                            const maxDiscountCoupon = this.coupons.reduce((max, coupon) => {
                                return coupon.DISCOUNT > max.DISCOUNT ? coupon : max;
                            }, this.coupons[0]);
                            this.orderDiscount = maxDiscountCoupon.ID;
                            this.discountPrice = maxDiscountCoupon.DISCOUNT;
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
            // 原本小汪的
            // let discountPrice;
            // if (this.orderDiscount === 'discountA'){
            //     this.discountPrice = '-50';
            // }else if (this.orderDiscount === 'discountB'){
            //     this.discountPrice = '-100';
            // }else if (this.orderDiscount === 'discountC'){
            //     this.discountPrice = '-150';
            // }else {
            //     this.discountPrice = '0';
            // }

            // 小郭version
            const selectedCoupon = this.coupons.find(coupon => coupon.ID === this.orderDiscount);
            if (selectedCoupon) {
                this.discountPrice = selectedCoupon.DISCOUNT;
            } else {
                this.discountPrice = '0';
            }
        },
        // showDiscountPopup() {
        //   Swal.fire({
        //     title: "今日是否要使用優惠卷？",
        //     text: "什麼？你還沒有拿到優惠卷！",
        //     text: "偷偷告訴你去玩小遊戲！會有驚喜給你噢！",
        //     icon: "warning",
        //     color: "#100E24",
        //     showCancelButton: true,
        //     cancelButtonText: "<span>取消</span>",
        //     confirmButtonColor: "#FCD15B",
        //     cancelButtonColor: "#C70000",
        //     confirmButtonText: "<span>確定</span>"
        //   }).then((result) => {
        //     if (result.isConfirmed) {
        //       // 用戶選擇了使用優惠卷
        //       this.usedDiscount = true;  // 設置優惠卷已選擇
        //     } else if (result.isDismissed) {
        //       // 用戶選擇不使用優惠卷，直接跳轉下一步
        //       this.goToNextStep(); 
        //     }
        //   });
        // },
        // nextStep() {
        //   if (this.usedDiscount) {
        //     // 如果選擇了優惠卷，應用折扣
        //     this.selectDiscount(); 
        //     // 然後跳轉到下一步
        //     this.goToNextStep();
        //   } else {
        //     // 如果未選擇優惠卷，彈出優惠卷選擇框
        //     this.showDiscountPopup();
        //   }
        // },
        goToNextPage (){
            localStorage.setItem ('orderDiscount', this.orderDiscount);
            localStorage.setItem('discountPrice', this.discountPrice);

        //     Swal.fire({
        //     title: "今日是否要使用優惠卷？",
        //     text: "什麼？你還沒有拿到優惠卷！",
        //     text: "偷偷告訴你去玩小遊戲！會有驚喜給你噢！",
        //     icon: "warning",
        //     color: "#100E24",
        //     showCancelButton: true,
        //     cancelButtonText: "<span>取消</span>",
        //     confirmButtonColor: "#FCD15B",
        //     cancelButtonColor: "#C70000",
        //     confirmButtonText: "<span>確定</span>"
        //   }).then((result) => {
        //     if (result.isConfirmed) {
        //       // 用戶選擇了使用優惠卷
        //       this.usedDiscount = true;  // 設置優惠卷已選擇
        //     } else if (result.isDismissed) {
        //       // 用戶選擇不使用優惠卷，直接跳轉下一步
        //       this.goToNextStep(); 
        //     }
        //   });
        //     if (this.usedDiscount) {
        //     // 如果選擇了優惠卷，應用折扣
        //     this.selectDiscount(); 
        //     // 然後跳轉到下一步
        //     this.goToNextStep();
        //   } else {
        //     // 如果未選擇優惠卷，彈出優惠卷選擇框
        //     this.showDiscountPopup();
        //   }
             this.$router.push({ path: `/Theme/${this.$route.params.id}/preorder/orderinform/pay` });

        //     Swal.fire({
        //     title: "今日是否要使用優惠卷？",
        //     text: "什麼？你還沒有拿到優惠卷！偷偷告訴你去玩小遊戲！會有驚喜給你噢！",
        //     icon: "warning",
        //     color: "#100E24",
        //     showCancelButton: true,
        //     cancelButtonText: "<span>取消</span>",
        //     confirmButtonColor: "#FCD15B",
        //     cancelButtonColor: "#C70000",
        //     confirmButtonText: "<span>確定</span>"
        //     }).then((result) => {
        //         if (result.isConfirmed) {
        //             // 用戶點擊了「確認」停留在本頁
        //             console.log("用戶選擇使用優惠卷");
                    
        //         } else if (result.isDismissed) {
        //             // 用戶點擊了「取消」，跳轉到下一步
        //             this.$router.push({ path: `/Theme/${this.$route.params.id}/preorder/orderinform/pay` });
        //         }   
            
        // });
        },
        checkValid (){
            // this.validName();
            // this.validEmail();
            // this.validPhone();
            // this.validPassword();
            // this.validComfirm();
            return new Promise((resolve, reject) => {
                let isValid = true;

                this.validName();
                this.validEmail();
                this.validPhone();
                this.validPassword();
                this.validComfirm();

                // 根據驗證結果判斷表單是否有效
                if (this.nameError || this.emailError || this.phoneError || this.passwordError || this.comfirmError) {
                    isValid = false;
                }

                if (isValid) {
                    resolve(); // 驗證通過
                } else {
                    reject(); // 驗證失敗
                }
            });
        },

        async submitData() {
            await this.checkValid();
             console.log('Submitting data:', {
                name: this.orderName,
                email: this.orderEmail,
                phone: this.orderPhone,
                password: this.orderPassword,
            });
            // console.log(this.dataValid); 

                try {
                    const response = await axios.post('http://localhost/appleTeam/public/php/api/register.php', {
                   
                    name: this.orderName,
                    email: this.orderEmail,
                    phone: this.orderPhone,
                    password: this.orderPassword,
                  
                    });     
                   
                  
                     if (response.data.status === "success") {
                        alert("註冊成功123");
                        // this.goToNextPage ();
                         // 可以在這裡進行重定向或其他操作
                        // this.$router.push({ path: `/Theme/${this.$route.params.id}/preorder/orderinform/pay` });

                        // this.orderName = '';
                        // this.orderEmail = '';
                        // this.orderPhone = '';
                        // this.orderPassword = '';

                     } else {
                         alert("發生錯誤：" + response.data.message); // 顯示錯誤消息
                    }
                } catch (error) {
                    console.error(error);
                    alert("發生錯誤，請稍後再試。");
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
        } else {
            alert("未選擇日期、人數與場次時間");
        }

        
        },

       

}
</script>

<!-- --------------------------------樣式版---------------------------------------------- -->

<style>

</style>