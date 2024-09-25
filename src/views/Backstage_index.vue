<script>
import "../assets/css/style.css";
import TopNavbarBack from "../components/TopNavbarBack.vue";

import axios from "axios";

import "v-calendar/style.css";
import { Calendar } from "v-calendar";

import { Bar } from "vue-chartjs";
import { Doughnut } from "vue-chartjs";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
} from "chart.js";
// import { valueOrDefault } from 'chart.js/helpers';

ChartJS.register(
  Title,
  Tooltip,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
);

export default {
  components: {
    TopNavbarBack,
    Calendar,
    Bar,
    Doughnut,
  },
  data() {
    return {
      selectedDate: new Date().toISOString().split("T")[0], // set the default selected date to today
      attrs: [
        {
          key: "today",
          highlight: true,
          dates: new Date(),
        },
      ],
      orders: [],
      chartData: {
        labels: [],
        datasets: [
          {
            backgroundColor: [],
            data: [],
          },
        ],
      },
      chartOptions: {
        indexAxis: "y", //直條圖
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            beginAtZero: true,
            ticks: {
              color: "#262B3F",
            },
          },
          y: {
            ticks: {
              color: "#262B3F",
            },
          },
        },
      },
      doughnutData: {
        labels: [],
        Legend: { display: false },
        datasets: [
          {
            backgroundColor: [],
            data: [],
          },
        ],
      },
      doughnutOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
      isPreviewVisible: false,
      selectedOrderId: '',
      paginatedData: [],
    };
  },
  methods: {
    // 取得VCalendar日期
    onDateChange(date) {
      // 提取日期的字符串格式
      const formattedDate = date.id;
      this.selectedDate = formattedDate;
      // 將選擇的日期傳遞給 PHP 後端
      this.queryDatabaseByDate(formattedDate);
    },

    // 切換月份時取得VCalendar年月資訊
    onMonthChange(page) {
      if (page && page.length > 0) {
        const { month, year } = page[0];
        console.log(`Month changed to: ${month}, Year: ${year}`);
        // 將切換後年月傳給 PHP 後端
        this.queryDatabaseByMonth(month, year);
      } else {
        console.error("Page update event did not provide the expected data.");
        console.log("Page update event data:", page);
      }
    },

    async queryDatabaseByDate(date) {
      console.log("查詢日期：", date);
      try {
        const response = await axios.get(
          // import.meta.env.VITE_API_BASE + `/api/dashboard.php?date=${date}`
          `http://localhost/memeapple/public/php/api/dashboard.php?date=${date}`
        );
        console.log("伺服器回應：", response); // 檢查伺服器回應
        this.orders = response.data; // 直接使用回應的資料
        console.log("查詢結果：", this.orders); // 檢查回傳的資料結構
      } catch (error) {
        console.error("查詢失敗：", error);
      }
    },

    getOrder(themeID, time) {
      const order = this.orders.find(
        (order) =>
          order.THEME_ID === themeID && order.ORDER_TIME.startsWith(time)
      );
      return order ? order.ORDER_ID : "";
    },

    async queryDatabaseByMonth(month, year) {
      console.log("查詢月份：", month, year);
      try {
        const response = await axios.get(
          // import.meta.env.VITE_API_BASE + `/api/dashboard.php?month=${month}&year=${year}`
          `http://localhost/memeapple/public/php/api/dashboard.php?month=${month}&year=${year}`
        );
        console.log("伺服器回應：", response); // 檢查伺服器回應
        const { themeRevenue = [], storeRevenue = [] } = response.data || {}; // 直接使用回應的資料

        this.chartData = {
          labels: themeRevenue.map((theme) => theme.THEME_NAME),
          datasets: [
            {
              data: themeRevenue.map((theme) => theme.theme_revenue), // 確認使用正確的鍵名
              // backgroundColor: ['#B00000', '#FFC700', '#324872', '#90E7F2', '#C8D1E0', '#8DA18D', '#6EE742'],
              backgroundColor: '#3d486b',
              
            },
          ],
        };

        this.doughnutData = {
          labels: storeRevenue.map((store) => store.STORE_NAME),
          datasets: [
            {
              data: storeRevenue.map((store) => store.store_revenue), // 確認使用正確的鍵名
              backgroundColor: ["#FCD15B", "#5265a3"],
            },
          ],
        };

        console.log("每月主題營收：", this.chartData); // 檢查回傳的資料結構
        console.log("每月分館營收：", this.doughnutData); // 檢查回傳的資料結構
      } catch (error) {
        console.error("查詢失敗：", error);
      }
    },
    showPreview(orderId) {
      if (orderId) {
        this.selectedOrderId = orderId; // 儲存選中的訂單編號
        this.isPreviewVisible = true; // 顯示 pop 視窗
        this.fetchData(); // 觸發 fetchData 方法
      }
    },

    async fetchData(){
      try {
        const params = {
          keyword: this.selectedOrderId
        };
        console.log('params: ', params)
        // const response = await axios.get(import.meta.env.VITE_API_BASE + '/api/order.php', { params });
        const response = await axios.get('http://localhost/memeapple/public/php/api/order.php', { params });
        this.paginatedData = response.data;
        console.log('paginatedData: ', this.paginatedData);
      } catch (err){
        this.error = 'An error occurred: ' + err.message
      }
    },

    formatDate(timestamp) {
      let date = new Date(timestamp);
      return date.toISOString().split('T')[0];
    },
    // 調整時間格式
    formatTime(time) {
      return time.substring(0, 5);
    },

    hidePreview() {
      this.isPreviewVisible = false;
    },
  },

  mounted() {
    this.selectedDate = new Date().toISOString().split("T")[0];
    this.queryDatabaseByDate(this.selectedDate);
    this.queryDatabaseByMonth(
      new Date().getMonth() + 1,
      new Date().getFullYear()
    );
  },
};
</script>

<template>
  <TopNavbarBack />

  <main class="backstage_main bindex_wrapper">
    <div class="wrapper backstage_wrapper">
      <!-- 儀表板 -->
      <div class="backstage_dashboard">
        <div class="backstage_daily">
          <div class="backstage_calendar">
            <VCalendar v-model="selectedDate" :attributes="attrs" @dayclick="onDateChange" @update:pages="onMonthChange"
              title-position="left" style="width: 100%; height: 100%" />
          </div>
          <div class="backstage_booking">
            <table class="backstage_table dashboard_table">
              <thead class="backstage_tablehead">
                <tr style="height: 34px">
                  <th style="width: 100px" class="column-header"></th>
                  <th style="width: 112px">10:30</th>
                  <th style="width: 112px">11:15</th>
                  <th style="width: 112px">12:55</th>
                  <th style="width: 112px">14:35</th>
                  <th style="width: 112px">16:30</th>
                  <th style="width: 112px">18:15</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th class="column-header">成都醫院</th>
                  <td :class="{ 'filled': getOrder(1, '10:30') }">
                    <a href="#" @click="showPreview(getOrder(1, '10:30'))">{{ getOrder(1, "10:30") }}</a>
                  </td>
                  <td :class="{ 'filled': getOrder(1, '11:15') }">
                    <a href="#" @click="showPreview(getOrder(1, '11:15'))">{{ getOrder(1, "11:15") }}</a>
                  </td>
                  <td :class="{ 'filled': getOrder(1, '12:55') }">
                    <a href="#" @click="showPreview(getOrder(1, '12:55'))">{{ getOrder(1, "12:55") }}</a>
                  </td>
                  <td :class="{ 'filled': getOrder(1, '14:35') }">
                    <a href="#" @click="showPreview(getOrder(1, '14:35'))">{{ getOrder(1, "14:35") }}</a>
                  </td>
                  <td :class="{ 'filled': getOrder(1, '16:30') }">
                    <a href="#" @click="showPreview(getOrder(1, '16:30'))">{{ getOrder(1, "16:30") }}</a>
                  </td>
                  <td :class="{ 'filled': getOrder(1, '18:15') }">
                    <a href="#" @click="showPreview(getOrder(1, '18:15'))">{{ getOrder(1, "18:15") }}</a>
                  </td>
                </tr>
                <tr>
                  <th class="column-header">時光迷宮</th>
                  <td :class="{ 'filled': getOrder(2, '10:30') }">
                    <a href="#" @click="showPreview(getOrder(2, '10:30'))">{{ getOrder(2, "10:30") }}</a>
                  </td>
                  <td :class="{ 'filled': getOrder(2, '11:15') }">
                    <a href="#" @click="showPreview(getOrder(2, '11:15'))">{{ getOrder(2, "11:15") }}</a>
                  </td>
                  <td :class="{ 'filled': getOrder(2, '12:55') }">
                    <a href="#" @click="showPreview(getOrder(2, '12:55'))">{{ getOrder(2, "12:55") }}</a>
                  </td>
                  <td :class="{ 'filled': getOrder(2, '14:35') }">
                    <a href="#" @click="showPreview(getOrder(2, '14:35'))">{{ getOrder(2, "14:35") }}</a>
                  </td>
                  <td :class="{ 'filled': getOrder(2, '16:30') }">
                    <a href="#" @click="showPreview(getOrder(2, '16:30'))">{{ getOrder(2, "16:30") }}</a>
                  </td>
                  <td :class="{ 'filled': getOrder(2, '18:15') }">
                    <a href="#" @click="showPreview(getOrder(2, '18:15'))">{{ getOrder(2, "18:15") }}</a>
                  </td>
                </tr>
                <tr>
                  <th class="column-header">末日庇護所</th>
                  <td :class="{ 'filled': getOrder(3, '10:30') }">
                    <a href="#" @click="showPreview(getOrder(3, '10:30'))">{{ getOrder(3, "10:30") }}</a>
                  </td>
                  <td :class="{ 'filled': getOrder(3, '11:15') }">
                    <a href="#" @click="showPreview(getOrder(3, '11:15'))">{{ getOrder(3, "11:15") }}</a>
                  </td>
                  <td :class="{ 'filled': getOrder(3, '12:55') }">
                    <a href="#" @click="showPreview(getOrder(3, '12:55'))">{{ getOrder(3, "12:55") }}</a>
                  </td>
                  <td :class="{ 'filled': getOrder(3, '14:35') }">
                    <a href="#" @click="showPreview(getOrder(3, '14:35'))">{{ getOrder(3, "14:35") }}</a>
                  </td>
                  <td :class="{ 'filled': getOrder(3, '16:30') }">
                    <a href="#" @click="showPreview(getOrder(3, '16:30'))">{{ getOrder(3, "16:30") }}</a>
                  </td>
                  <td :class="{ 'filled': getOrder(3, '18:15') }">
                    <a href="#" @click="showPreview(getOrder(3, '18:15'))">{{ getOrder(3, "18:15") }}</a>
                  </td>
                </tr>
                <tr>
                  <th class="column-header">代碼深淵</th>
                  <td :class="{ 'filled': getOrder(4, '10:30') }">
                    <a href="#" @click="showPreview(getOrder(4, '10:30'))">{{ getOrder(4, "10:30") }}</a>
                  </td>
                  <td :class="{ 'filled': getOrder(4, '11:15') }">
                    <a href="#" @click="showPreview(getOrder(4, '11:15'))">{{ getOrder(4, "11:15") }}</a>
                  </td>
                  <td :class="{ 'filled': getOrder(4, '12:55') }">
                    <a href="#" @click="showPreview(getOrder(4, '12:55'))">{{ getOrder(4, "12:55") }}</a>
                  </td>
                  <td :class="{ 'filled': getOrder(4, '14:35') }">
                    <a href="#" @click="showPreview(getOrder(4, '14:35'))">{{ getOrder(4, "14:35") }}</a>
                  </td>
                  <td :class="{ 'filled': getOrder(4, '16:30') }">
                    <a href="#" @click="showPreview(getOrder(4, '16:30'))">{{ getOrder(4, "16:30") }}</a>
                  </td>
                  <td :class="{ 'filled': getOrder(4, '18:15') }">
                    <a href="#" @click="showPreview(getOrder(4, '18:15'))">{{ getOrder(4, "18:15") }}</a>
                  </td>
                </tr>
                <tr>
                  <th class="column-header">逃離武石監</th>
                  <td :class="{ 'filled': getOrder(5, '10:30') }">
                    <a href="#" @click="showPreview(getOrder(5, '10:30'))">{{ getOrder(5, "10:30") }}</a>
                  </td>
                  <td :class="{ 'filled': getOrder(5, '11:15') }">
                    <a href="#" @click="showPreview(getOrder(5, '11:15'))">{{ getOrder(5, "11:15") }}</a>
                  </td>
                  <td :class="{ 'filled': getOrder(5, '12:55') }">
                    <a href="#" @click="showPreview(getOrder(5, '12:55'))">{{ getOrder(5, "12:55") }}</a>
                  </td>
                  <td :class="{ 'filled': getOrder(5, '14:35') }">
                    <a href="#" @click="showPreview(getOrder(5, '14:35'))">{{ getOrder(5, "14:35") }}</a>
                  </td>
                  <td :class="{ 'filled': getOrder(5, '16:30') }">
                    <a href="#" @click="showPreview(getOrder(5, '16:30'))">{{ getOrder(5, "16:30") }}</a>
                  </td>
                  <td :class="{ 'filled': getOrder(5, '18:15') }">
                    <a href="#" @click="showPreview(getOrder(5, '18:15'))">{{ getOrder(5, "18:15") }}</a>
                  </td>
                </tr>
                <tr>
                  <th class="column-header">恐怖密室</th>
                  <td :class="{ 'filled': getOrder(6, '10:30') }">
                    <a href="#" @click="showPreview(getOrder(6, '10:30'))">{{ getOrder(6, "10:30") }}</a>
                  </td>
                  <td :class="{ 'filled': getOrder(6, '11:15') }">
                    <a href="#" @click="showPreview(getOrder(6, '11:15'))">{{ getOrder(6, "11:15") }}</a>
                  </td>
                  <td :class="{ 'filled': getOrder(6, '12:55') }">
                    <a href="#" @click="showPreview(getOrder(6, '12:55'))">{{ getOrder(6, "12:55") }}</a>
                  </td>
                  <td :class="{ 'filled': getOrder(6, '14:35') }">
                    <a href="#" @click="showPreview(getOrder(6, '14:35'))">{{ getOrder(6, "14:35") }}</a>
                  </td>
                  <td :class="{ 'filled': getOrder(6, '16:30') }">
                    <a href="#" @click="showPreview(getOrder(6, '16:30'))">{{ getOrder(6, "16:30") }}</a>
                  </td>
                  <td :class="{ 'filled': getOrder(6, '18:15') }">
                    <a href="#" @click="showPreview(getOrder(6, '18:15'))">{{ getOrder(6, "18:15") }}</a>
                  </td>
                </tr>
                <tr>
                  <th class="column-header">逃出虛空</th>
                  <td :class="{ 'filled': getOrder(7, '10:30') }">
                    <a href="#" @click="showPreview(getOrder(7, '10:30'))">{{ getOrder(7, "10:30") }}</a>
                  </td>
                  <td :class="{ 'filled': getOrder(7, '11:15') }">
                    <a href="#" @click="showPreview(getOrder(7, '11:15'))">{{ getOrder(7, "11:15") }}</a>
                  </td>
                  <td :class="{ 'filled': getOrder(7, '12:55') }">
                    <a href="#" @click="showPreview(getOrder(7, '12:55'))">{{ getOrder(7, "12:55") }}</a>
                  </td>
                  <td :class="{ 'filled': getOrder(7, '14:35') }">
                    <a href="#" @click="showPreview(getOrder(7, '14:35'))">{{ getOrder(7, "14:35") }}</a>
                  </td>
                  <td :class="{ 'filled': getOrder(7, '16:30') }">
                    <a href="#" @click="showPreview(getOrder(7, '16:30'))">{{ getOrder(7, "16:30") }}</a>
                  </td>
                  <td :class="{ 'filled': getOrder(7, '18:15') }">
                    <a href="#" @click="showPreview(getOrder(7, '18:15'))">{{ getOrder(7, "18:15") }}</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="backstage_chart">
          <div class="theme_income barChart">
            <h5>各主題每月營收：</h5>
            <div class="bar">
              <!-- bar -->
              <Bar class="bar" ref="barChart" :data="chartData" :options="chartOptions" />
            </div>
          </div>
          <div class="store_income pieChart">
            <h5>各分店每月營收：</h5>
            <div class="pie">  
            <!-- pie -->
            <Doughnut class="pie" ref="doughnutChart" :data="doughnutData" :options="doughnutOptions" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- popup -->
    <div v-if="isPreviewVisible" class="backstage_news" @click="hidePreview">
      <div class="backstage_news_preview" @click.stop style="background-color: #e5e5e5; border: .5px solid #8F9191; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);">
        <div class="backstage_news_content">

          <table class="backstage_table preview" style="padding: 24px 24px 0 24px;">
            <thead class="backstage_tablehead">
              <tr>
                <th class="column-header" style="width: 100px;">日期</th>
                <th class="column-header" style="width: 75px;">時間</th>
                <th class="column-header" style="width: 175px;">訂單編號</th>
                <th class="column-header" style="width: 100px;">分館</th>
                <th class="column-header" style="width: 100px;">主題</th>
                <th class="column-header" style="width: 100px;">姓名</th>
                <th class="column-header" style="width: 125px;">電話</th>
                <th class="column-header" style="width: 175px;">E-Mail</th>
                <th class="column-header" style="width: 100px;">狀態</th>
                <th class="column-header" style="width: 75px;">人數</th>
                <th class="column-header" style="width: 100px;">總額</th>
                <th class="column-header" style="width: 100px;">待付</th>
              </tr>
            </thead>
            <tbody class="backstage_tablebody">
              <tr v-for="item in paginatedData" :key="item.ID">
                <td id="order_date">{{ formatDate(item.ORDER_DATE) }}</td>
                <td id="order_time">{{ formatTime(item.ORDER_TIME) }}</td>
                <td id="order_ID">{{ item.ORDER_ID }}</td>
                <td id="order_store">{{ item.STORE_NAME }}</td>
                <td id="order_theme">{{ item.THEME_NAME }}</td>
                <td id="member_name">{{ item.MEMBER_NAME }}</td>
                <td id="member_phone">{{ item.MEMBER_PHONE }}</td>
                <td id="member_email">{{ item.MEMBER_EMAIL }}</td>
                <td id="order_status">{{ item.ORDER_STATUS }}</td>
                <td id="order_attendance">{{ item.ATTENDANCE }}</td>
                <td id="order_total">{{ item.TOTAL_AMOUNT }}</td>
                <td id="order_amount">{{ item.PENDING_AMOUNT }}</td>
              </tr>
            </tbody>
          </table>    
        </div>

        <div class="backstage_panel">
          <button class="btn backstage_button" @click="hidePreview">關閉</button>
        </div>
      </div>
    </div>
  </main>
  <!-- <FooterbarBack /> -->
</template>

<style>  

/* 小汪部分VCalendar樣式設定，9/16更新後必須加上否則跑版 */

.vc-bordered {
    border-radius: 4px;
    border: 3px solid #EFEFEF;
}
.vc-pane-container {
    background-color: #ffffff;
    width: 520px ;
    height: 373px;
}

.vc-header {
    height: 40px;
    margin-top: 16px;
    margin-bottom: 16px;
    padding-left: 25px;
    padding-right: 25px;
}


.vc-header .vc-arrow {
    border-radius: 40px ;
    width: 40px ; 
    height: 40px;
    color: #100E24;
}

.vc-header .vc-arrow:active{
    border: 1px solid #100E24;
}

.vc-base-icon {
    width: 30px;
    height: 30px;
}

.vc-header .vc-arrow:hover{
    background-color: #FCD15B;
}

.vc-header .vc-title {
    background-color: #ffffff;
    color: #324872;
    font-size: 24px;
}

.vc-weekday {
    color: #324872;
    font-size: 20px;
    margin-bottom: 10px;
}

.vc-weeks {
    color: #324872;
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

.vc-container *:active {
    outline: none;
}

</style>
