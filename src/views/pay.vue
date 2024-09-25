
<!-- --------------------------------原始碼---------------------------------------------- -->

<template>

    <TopNavbar />

    <div id="pay_wrapper">

        <div class="pay_return">
            <i class="fa-solid fa-chevron-left"></i>
            
            <RouterLink :to="{ path: `/Theme/${$route.params.id}/preorder/orderinform` }">
                <p>返回</p>
            </RouterLink>
        </div>

        <div class="pay_process">
            <div class="pay_number">
                <div class="circle1">
                    <p>1</p>
                </div>
                <p>填寫資料</p>
            </div>

            <div class="pay_number">
                <div class="circle2">
                    <p>2</p>
                </div>
                <p>結帳</p>
            </div>

            <div class="pay_number">
                <div class="circle3">
                    <p>3</p>
                </div>
                <p>確認訂單</p>
            </div>
        </div>

        <div class="pay_all">

            <div class="pay_left">
                <h2>付款方式</h2>
                <div class="paycard">
                    <p>信用卡付款</p>
                    <p>請於 15 分鐘內完成付款流程，逾時該筆訂單失效，需重新操作。付款金額超過 NT$199,999 無法使用信用卡付款。</p>
                    <div class="card_number">
                        <p>信用卡卡號</p>
                        <input type="text" v-model="payCard" @input="validCard" @keyup.enter="submitData" placeholder="0000 0000 0000 0000">
                        <p v-if="cardError" style="color: #DC2F2F;" class="redError"> {{ cardError }}</p>
                    </div>
                    <div class="card_time">
                        <div>
                            <p>信用卡有效月年</p>
                            <div class="cardmonth">
                                <input type="text"  v-model="payMonth" @input="validTime" @keyup.enter="submitData" placeholder="月份" maxlength="2">
                                <input type="text" v-model="payYear" @input="validTime" @keyup.enter="submitData" placeholder="年份" maxlength="4">
                                <p v-if="timeError" style="color: #DC2F2F;" class="redError">{{ timeError }}</p>
                            </div>
                        </div>
                        <div class="cardcode">
                            <p>信用卡檢查碼</p>
                            <input type="text" v-model="payNum" @input="validNum" @keyup.enter="submitData" placeholder="123" maxlength="4">
                            <p v-if="NumError" style="color: #DC2F2F;" class="redError">{{ NumError }}</p>
                        </div>
                    </div>

                </div>
            </div>


            <div class="pay_right">

                <div class="details">
                    <h2>訂單明細</h2>

                    <div class="list">
                        <p v-if="theme">{{ theme.themeName }} （ {{ theme.branch }} ）</p>
                        <p>預約場次</p>
                        <p class="pp">日期：{{ selectedDate}}  ｜  時間：{{ selectedTimeSlot }} </p>
                        <p>總人數：<span class="pp" v-if="peopleAmount">{{peopleAmount }} 人</span></p>
                        <p>訂購項目：</p>
                        <p class="pp">包場訂金 2000 元 X1</p>
                        
                        <div class="orderLabel">
                            <label for="orderDiscount">使用優惠卷</label>
                            <select v-model="orderDiscount" disabled>
                                <option value="discountA">優惠卷折扣 - 50 元</option>
                                <option value="discountB">優惠卷折扣 - 100 元</option>
                                <option value="discountC">優惠卷折扣 - 150 元</option>
                            </select>
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
                                <p>折扣 (現場折抵)</p>
                            </div>
                            <div>
                                <p>NT {{ discountPrice }} 元</p>
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
                        <button  class=" btn next_btn" :disabled="!dataValid" :class="{active : dataValid}" @click="goToNextPage">下一步</button>
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
import ScrollToTop from '../components/ScollToTop.vue';

export default {
    components: {
        TopNavbar,
        Footerbar,
        ScrollToTop,
    },

    data (){
        return {
            discountPrice : '',
            orderDiscount : '',
            payCard : '',
            payMonth:'',
            payYear :'',
            payNum :'',

            cardError:'',
            timeError:'',
            NumError:'',

            all_data: all_data,
            theme: null,
            selectedTimeSlot: null,
            peopleAmount: null,
            selectedDate: null,
        }
    },
    computed : {
        dataValid (){
            return (
                this.payCard && !this.cardError &&
                this.payMonth && !this.timeError &&
                this.payYear && !this.timeError &&
                this.payNum && !this.NumError
        )
        }
    },
    methods : {
        validCard (){
            let clean = this.payCard.replace(/\D/g, '');
            clean = clean.replace(/(\d{4})(?=\d)/g, '$1 ');
             
            if (clean.length < 13 || clean.length > 19) {
                this.cardError = '請輸入正確信用卡卡號！（13 到 19 位數）';
            } else {
                this.cardError = '';
            }
            
        },
        validTime (){
            const currentYear = new Date().getFullYear();
            const currentMonth = new Date().getMonth() + 1;

            if (this.payMonth < 1 || this.payMonth > 12) {
                this.timeError = '無效月份';
            } else {
                this.timeError = '';
            }

            
            if (this.payYear < currentYear) {
                this.timeError = '年份不能小於現在年份';
            } else {
                this.timeError = '';
            }
        },
        validNum (){
            const numData = /^[0-9]{3}$/;

            if (!this.payNum.match(numData)){
                this.NumError = '無效安全碼';
            }else {
                this.NumError = '';
            }
        },

        goToNextPage (){
            localStorage.clear();
            this.$router.push({
            path: `/Theme/${this.$route.params.id}/preorder/orderinform/pay/Membermanage`
            });
        }

    },
    mounted (){
        this.orderDiscount = localStorage.getItem('orderDiscount') || '';
        this.discountPrice = localStorage.getItem('discountPrice') || '';

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
            console.error("未選擇場次時間");
        }
        
    },
}
</script>

<!-- --------------------------------樣式版---------------------------------------------- -->

<style lang="scss" scoped>

</style>