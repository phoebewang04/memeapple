
<!-- --------------------------------原始碼---------------------------------------------- -->

<template>

    <TopNavbar />

    <div id="preorder_wrapper">
        <ScrollToTop />

        <div class="preorder_toppic">
            <img v-if="theme" :src= "theme.src"  alt="">
        </div>

        <div class="preorderinfor_active">
            <h2>活動資訊</h2>
            <div class="infor_list">
                <ul> <!-- ---------主題基本資訊---------- -->
                    <li v-if="theme">主題名稱：{{ theme.themeName }}</li>
                    <div class="infor_time">
                        <li><i class="fa-regular fa-clock"></i></li>
                        <li>活動時間：1小時10分鐘</li>
                    </div>
                    <li v-if="theme">地點：{{ theme.address }}</li>
                </ul>
            </div>
        </div>

        <div class="preorder_datetime">
            <h2>選擇日期與場次</h2>

            <div class="timeandele">

                <!-- ---------日曆---------- -->
                <VCalendar v-model="selectedDate" :attributes="attrs" @dayclick="onDateChange" title-position="left" />

                <!-- ---------場次時間---------- -->
                <div class="time">

                    <h3>請選擇場次</h3>
                    <div class="time_ele">
                        <div v-for="slot in timeSlots" :key="slot.time" :class="['ele', slot.disabled ? 'disabled' : 'enabled', selectedTimeSlot === slot.time ? 'selectTime' : '']" @click="selectTimeSlot(slot)"> {{ slot.time }}</div>
                    </div>
                    <!-- ---------遊戲人數---------- -->
                    <div class="amount">
                    <select name="totalPeople" id="people" v-model="peopleAmount" @change="selectPeople">
                        <option value="0">遊戲人數</option>
                        <option value="4">4 人</option>
                        <option value="5">5 人</option>
                        <option value="6">6 人</option>
                        <option value="7">7 人</option>
                        <option value="8">8 人</option>
                    </select>
                    </div>
                </div>
            </div>
        </div>


        <!-- /* --------------------------訂購須知------------------------------------------- */ -->

        <div class="preorder_infornotice">
                    <h2>訂購須知</h2>
                    <p> 歡迎來到我們的密室逃脫主題館！在您預訂體驗前，請仔細閱讀以下訂票須知
                        以確保您擁有一次愉快且難忘的冒險之旅：</p>
                    <ul>
                        <li>
                            <div>
                                <h3>1. 訂票方式：</h3>
                                <div class="content">
                                    <i class="fa-solid fa-circle"></i>
                                    <p>線上預訂：請訪問我們的網站，選擇您感興趣的主題房間和時間段進行預訂。</p>
                                </div>
                                <div class="content">
                                    <i class="fa-solid fa-circle"></i>
                                    <p>電話預訂：您也可以致電我們的客服中心進行預訂。</p>
                                </div>
                            </div>
                        </li>


                        <li>
                            <h3>2. 訂票規則：</h3>
                            <div class="content">
                                <i class="fa-solid fa-circle"></i>
                                <p>每個房間有固定人數限制，請根據提示選擇適當的參與人數。</p>
                            </div>
                            <div class="content">
                                <i class="fa-solid fa-circle"></i>
                                <p>預訂需提前至少24小時，確保我們有充足的時間為您準備。</p>
                            </div>
                        </li>


                        <li>
                            <h3>3. 取消和更改：</h3>
                            <div class="content">
                                <i class="fa-solid fa-circle"></i>
                                <p>如需取消或更改預訂，請在體驗時間的48小時前聯繫我們。</p>
                            </div>
                            <div class="content">
                                <i class="fa-solid fa-circle"></i>
                                <p>48小時內的取消將收取一定的手續費。</p>
                            </div>
                        </li>


                        <li>
                            <h3>4. 到達時間：</h3>
                            <div class="content">
                                <i class="fa-solid fa-circle"></i>
                                <p>請提前15分鐘到達現場，以便我們能為您講解遊戲規則和安全事項。</p>
                            </div>
                            <div class="content">
                                <i class="fa-solid fa-circle"></i>
                                <p>遲到超過15分鐘將視為自動放棄，且不退還票款。</p>
                            </div>
                        </li>


                        <li>
                            <h3>5. 年齡限制：</h3>
                            <div class="content">
                                <i class="fa-solid fa-circle"></i>
                                <p>部分房間有年齡限制，請在預訂前確認適合的年齡範圍。</p>
                            </div>
                            <div class="content">
                                <i class="fa-solid fa-circle"></i>
                                <p>12歲以下兒童需由成年人陪同參加。</p>
                            </div>
                        </li>


                        <li>
                            <h3>6. 衣著建議：</h3>
                            <div class="content">
                                <i class="fa-solid fa-circle"></i>
                                <p>建議穿著輕便、適合活動的服裝和鞋子，以便順利完成挑戰。</p>
                            </div>
                        </li>


                        <li>
                            <h3>7. 安全提示：</h3>
                            <div class="content">
                                <i class="fa-solid fa-circle"></i>
                                <p>請勿攜帶危險物品進入場館，並遵守現場工作人員的指示。</p>
                            </div>
                            <div class="content">
                                <i class="fa-solid fa-circle"></i>
                                <p>如在遊戲過程中遇到任何不適或緊急情況，請立即通知工作人員。</p>
                            </div>
                        </li>
                    </ul>

                    <p>感謝您的配合，我們期待與您一起探索神秘的密室逃脫之旅！</p>

        </div>

        <!-- -------------------------------------手機版 滾輪畫面---------------------------------------------- -->

        <div class="preorder_infornotice1" ref="parent">
                    <h2>訂購須知</h2>
                    <p> 歡迎來到我們的密室逃脫主題館！在您預訂體驗前，請仔細閱讀以下訂票須知
                        以確保您擁有一次愉快且難忘的冒險之旅：</p>
                    <ul>
                        <li>
                            <div>
                                <h3>1. 訂票方式：</h3>
                                <div class="content">
                                    <i class="fa-solid fa-circle"></i>
                                    <p>線上預訂：請訪問我們的網站，選擇您感興趣的主題房間和時間段進行預訂。</p>
                                </div>
                                <div class="content">
                                    <i class="fa-solid fa-circle"></i>
                                    <p>電話預訂：您也可以致電我們的客服中心進行預訂。</p>
                                </div>
                            </div>
                        </li>


                        <li>
                            <h3>2. 訂票規則：</h3>
                            <div class="content">
                                <i class="fa-solid fa-circle"></i>
                                <p>每個房間有固定人數限制，請根據提示選擇適當的參與人數。</p>
                            </div>
                            <div class="content">
                                <i class="fa-solid fa-circle"></i>
                                <p>預訂需提前至少24小時，確保我們有充足的時間為您準備。</p>
                            </div>
                        </li>


                        <li>
                            <h3>3. 取消和更改：</h3>
                            <div class="content">
                                <i class="fa-solid fa-circle"></i>
                                <p>如需取消或更改預訂，請在體驗時間的48小時前聯繫我們。</p>
                            </div>
                            <div class="content">
                                <i class="fa-solid fa-circle"></i>
                                <p>48小時內的取消將收取一定的手續費。</p>
                            </div>
                        </li>


                        <li>
                            <h3>4. 到達時間：</h3>
                            <div class="content">
                                <i class="fa-solid fa-circle"></i>
                                <p>請提前15分鐘到達現場，以便我們能為您講解遊戲規則和安全事項。</p>
                            </div>
                            <div class="content">
                                <i class="fa-solid fa-circle"></i>
                                <p>遲到超過15分鐘將視為自動放棄，且不退還票款。</p>
                            </div>
                        </li>


                        <li>
                            <h3>5. 年齡限制：</h3>
                            <div class="content">
                                <i class="fa-solid fa-circle"></i>
                                <p>部分房間有年齡限制，請在預訂前確認適合的年齡範圍。</p>
                            </div>
                            <div class="content">
                                <i class="fa-solid fa-circle"></i>
                                <p>12歲以下兒童需由成年人陪同參加。</p>
                            </div>
                        </li>


                        <li>
                            <h3>6. 衣著建議：</h3>
                            <div class="content">
                                <i class="fa-solid fa-circle"></i>
                                <p>建議穿著輕便、適合活動的服裝和鞋子，以便順利完成挑戰。</p>
                            </div>
                        </li>


                        <li>
                            <h3>7. 安全提示：</h3>
                            <div class="content">
                                <i class="fa-solid fa-circle"></i>
                                <p>請勿攜帶危險物品進入場館，並遵守現場工作人員的指示。</p>
                            </div>
                            <div class="content">
                                <i class="fa-solid fa-circle"></i>
                                <p>如在遊戲過程中遇到任何不適或緊急情況，請立即通知工作人員。</p>
                            </div>
                        </li>
                    </ul>

                    <p>感謝您的配合，我們期待與您一起探索神秘的密室逃脫之旅！</p>

        </div>

      
        <RouterLink :to="{ path: `/Theme/${$route.params.id}/preorder/orderinform` }" @click.prevent="goToNextPage">
            <div class="nextstep" >
                <button class="btn next_btn" @click="goToNextPage" :disabled="!dataValid" :class="{active: dataValid}">下一步</button>
            </div>
        </RouterLink> 
    
    </div>
    <Footerbar />
</template>

<!-- --------------------------------功能程式---------------------------------------------- -->

<script>
import { all_data } from '../assets/js/all_data.js';
import '../assets/css/style.css';
import TopNavbar from '../components/TopNavbar.vue';
import Footerbar from '../components/Footerbar.vue';
import 'v-calendar/style.css';
import ScrollToTop from '../components/ScollToTop.vue';
import axios from 'axios';


export default {
    components: {
        TopNavbar,
        Footerbar,
        ScrollToTop,

    },
    data (){
        return {
            all_data: all_data,
            theme: null, //根據主題 ID 來決定當前顯示的主題資料。
            selectedDate: new Date().toISOString().split("T")[0], // 當前日期
            themeId: this.$route.params.id,  // 從路由中獲取的主題 ID
            orders: [], //儲存從後端 API 查詢到的訂單資料，用於決定哪些場次已被預訂
            timeSlots: [
                { time: "10：30", disabled: false },
                { time: "11：15", disabled: false },
                { time: "12：55", disabled: false },
                { time: "14：35", disabled: false },
                { time: "16：30", disabled: false },
                { time: "18：15", disabled: false }
            ],
            selectedTimeSlot: null,
            attrs: [
                {
                key: 'today',
                class: 'selected-date',
                highlight: true,
                dates: new Date(), 
                
                },
            ],
            peopleAmount: '0',
    
        };
    },

    methods: {
        // 當用戶點擊日曆中的某一天時觸發的事件處理器
        onDateChange(date) {
            // 檢查 `date.id` 是否存在，並使用它作為日期，並呼叫 queryDatabaseByDate 方法去後端查詢該日期的預訂資料。
            if (date && date.id) {
                const formattedDate = date.id; 
                this.selectedDate = formattedDate;
                console.log("格式化後的日期：", formattedDate);
                this.queryDatabaseByDate(formattedDate);
                
                this.selectedTimeSlot = null;
                localStorage.setItem('selectedDate', formattedDate);
                localStorage.removeItem('selectedTimeSlot');
                this.timeSlots.forEach(slot => {
                slot.selected = false; // 重置每個場次的選擇狀態
                });

                this.attrs = [
                {
                    key: 'formattedDate',
                    dates: formattedDate,  // 這裡使用選中的日期
                    highlight: true,
                    class: 'selected-date' // 自定義的選中樣式
                }
            ];
            } else {
                console.error("無效的日期值：", date);
            }
        },
        //根據選擇的日期查詢後端數據庫中的訂單資料，並更新到 orders 數據中
        async queryDatabaseByDate(date) {
            console.log("查詢日期：", date);
            console.log("查詢的 themeId：", this.themeId);
            try {
                // 確保 URL 正確格式化，使用 & 分隔日期和 themeId
                const response = await axios.get(
                    `http://localhost/appleTeam/public/php/api/preorder.php?date=${date}&themeId=${this.themeId}`
                );
                console.log("伺服器回應：", response); // 檢查伺服器回應
                this.orders = response.data;// 直接使用回應的資料
                this.updateTimeSlots(); 
                console.log("查詢結果：", this.orders); // 檢查回傳的資料結構
                } catch (error) {
                    console.error("查詢失敗：", error);
            }
        },
         updateTimeSlots() {
           // 檢查 orders，根據每個場次的時間來更新其 `disabled` 狀態
             this.timeSlots.forEach(slot => {
              // 檢查是否有訂單的時間與場次時間匹配
                 const order = this.orders.find(o => {
                   const orderTime = o.ORDER_TIME.split(':').slice(0, 2).join(':'); // 提取訂單時間的 小時:分鐘
                   return orderTime === slot.time; // 如果訂單時間匹配場次時間
                });
                 // 如果找到匹配的訂單，將該場次設為 disabled，否則可選
                slot.disabled = !!order; // order 存在則設置 disabled
            });
            
         },

        selectTimeSlot(slot) {
            if (!slot.disabled) {
                localStorage.setItem('selectedTimeSlot', slot.time);
                this.selectedTimeSlot = slot.time;
                
                // 不更改日期，只處理場次
                console.log("已選擇場次：", slot.time);

            }
        },

        //	它會經過 orders，尋找與傳遞進來的 themeId 和 time 匹配的訂單
        getOrder(themeID, time) {
            const order = this.orders.find(
                (order) =>
                order.themeId === themeID && order.ORDER_TIME.startsWith(time)
            );
            return order ? order.ORDER_ID : "";



        },
        goToNextPage (){
            localStorage.setItem ('peopleAmount', this.peopleAmount);

            if (!selectedDate) {
                alert('請選擇一個日期');
                return; 
            } else if (!selectedTimeSlot) {
                alert('請選擇一個場次');
                return; 
            } else if (peopleAmount === '0') {
                alert('請選擇人數');
                return; 
            }

        },
    },

    computed: {
        dataValid (){
            return (
                this.selectedDate && this.selectedTimeSlot && this.peopleAmount     
            )
            
        }
    },

    mounted (){

        const themeId = this.$route.params.id;
        this.theme = this.all_data[themeId]; 
        // this.selectedDate = new Date().toISOString().split("T")[0];
        const today = new Date().toISOString().split('T')[0];

        // 將當前日期存入 localStorage
        localStorage.setItem('selectedDate', today);
        // 設置 selectedDate 並查詢當天的預訂信息
        this.selectedDate = today;
        console.log('當天的日期已存入 localStorage:', today);
        this.queryDatabaseByDate(this.selectedDate);

        // localStorage.clear();

    }

}

</script>

<!-- --------------------------------樣式版---------------------------------------------- -->

<style>
/* ------------場次時間按鈕變化----------------- */
.disabled {
  color: white;
  background-color: lightgray;
  cursor: not-allowed;
}
.enabled {
  color: #100E24;
  background-color: #FEDA77;
  cursor: pointer; 
}

.selectTime {
    color: #FCD15B;
    border: 1px solid #FCD15B;
    background-color: #100E24;
}

/* -------------日曆的樣式---------------- */
.vc-bordered {
    border-radius: 0px;
}
.vc-pane-container {
  background-color: #100E24;
  width: 520px ;
  height: 375px;

  @media screen and (max-width: 1100px){
    width: 430px;
  } 

  @media screen and (max-width: 1015px){
    width: 380px;
  } 

  @media screen and (max-width: 1000px){
    width: 330px;
  } 

  @media screen and (max-width: 920px){
    width: 280px;
  } 

  @media screen and (max-width: 820px){
    width: 630px;
  } 

  @media screen and (max-width: 768px){
    width: 586px;
  } 

  @media screen and (max-width: 680px){
    width: 520px;
  } 

  @media screen and (max-width: 590px){
    width: 452px;
  } 

  @media screen and (max-width: 540px){
    width: 415px;
  } 

  @media screen and (max-width: 430px) {
    width: 328px;
    
  }

  @media screen and (max-width: 412px) {
    width: 315px;
    
  }

  @media screen and (max-width: 414px) {
    width: 316px;
    
  }

  @media screen and (max-width: 390px) {
    width: 260px;
    
  }

  @media screen and (max-width: 375px) {
    width: 289px;
    
  }
}

.vc-header {
    height: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 25px;
    padding-right: 25px;
}


.vc-header .vc-arrow {
    border-radius: 40px ;
    width: 40px ; 
    height: 40px;
    color: #100E24;
}

.vc-base-icon {
    width: 30px;
    height: 30px;
}

.vc-header .vc-arrow:hover{
    background-color: #FCD15B;
}

.vc-header .vc-title {
    background-color: #100E24;
    color: #ffff;
    font-size: 24px;
}

.vc-weekday {
    color: #ffff;
    font-size: 20px;
    margin-bottom: 10px;
}

.vc-weeks {
    color: #ffff;
}


.vc-day-content {
    font-size: 18px;
}

.vc-day{
    /* margin-left: 10px;
    margin-right: 10px; */
    /* margin: 0px 20px; */
    margin-bottom: 10px;
}

.vc-day-content:hover {
    background-color: #FCD15B;
}

.vc-container *:focus {
    outline: 3px solid #100E24;
    background-color:#FCD15B;
}

.selected-date {
    background-color: #FCD15B;  
}

/* ------------------------------------------------------------------------ */

.preorder_infornotice1 {

    display: none;
    
    @media screen and (max-width:430px){
    border: 1px solid #ffff;
    border-radius: 12px;
    display: block;
    padding: 20px;
    overflow: auto;
    height: 480px;
    }

}

.preorder_infornotice1 h2 {
    font-weight: bold;
}


.preorder_infornotice1 .content {
    display: flex;
    align-items: center;
}

.preorder_infornotice1 .content i {

    @media screen and (max-width:430px) {
          font-size: 6px;
          height: 40px;
          margin-right: 12px;
    }
    
}


</style>