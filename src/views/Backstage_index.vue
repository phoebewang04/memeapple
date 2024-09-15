<script>
import '../assets/css/style.css'
import TopNavbarBack from '../components/TopNavbarBack.vue';

import axios from 'axios';

import 'v-calendar/style.css';
import { Calendar, setupCalendar } from 'v-calendar';

import { Bar } from 'vue-chartjs'
import { Doughnut } from 'vue-chartjs'

import { 
    Chart as ChartJS, 
    Title, 
    Tooltip,
    BarElement, 
    CategoryScale, 
    LinearScale,
    ArcElement 
} from 'chart.js'
// import { valueOrDefault } from 'chart.js/helpers';

ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale, ArcElement);

export default {
  components: {
    TopNavbarBack,
    Calendar,
    Bar,
    Doughnut,
  },
  data() {
    return {
      selectedDate: new Date().toISOString().split('T')[0], // set the default selected date to today
      attrs: [
        {
          key: 'today',
          highlight: true,
          dates: new Date(),
        }
      ],
      orders: [],
      chartData: {
        labels: [],
        datasets: [
          { 
            backgroundColor: '#3c598d',
            data: [] 
          }
        ]
      },
      chartOptions: {
        indexAxis: 'y',  //直條圖
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            beginAtZero: true,
            ticks:{
              color: '#FCD15B'
            }
          },
          y: {
            ticks:{
              color: '#FCD15B'
            }
          }
        },
        width: '835px',
      },
      doughnutData: {
        labels: [],
        Legend: { display: false },
        datasets:[
          {
            backgroundColor: ['#324872', '#4f71a8'],
            data: []
          }
        ]
      },
      doughnutOptions: {
        responsive: true,
        maintainAspectRatio: false,
        width: '355px'
      }
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
        console.error('Page update event did not provide the expected data.');
        console.log('Page update event data:', page);
      }
    },
    
    async queryDatabaseByDate(date) {
      console.log('查詢日期：', date);
      try {
        const response = await axios.get(`http://localhost/memeapple/public/php/api/dashboard.php?date=${date}`);
        console.log('伺服器回應：', response); // 檢查伺服器回應
        this.orders = response.data; // 直接使用回應的資料
        console.log('查詢結果：', this.orders); // 檢查回傳的資料結構
      } catch (error) {
        console.error('查詢失敗：', error);
      }
    },

    getOrder(themeID, time){
      const order = this.orders.find(order => 
        order.THEME_ID === themeID && 
        order.ORDER_TIME.startsWith(time));
      return order ? order.ORDER_ID : '';
    },

    async queryDatabaseByMonth(month, year) {
        console.log('查詢月份：', month, year);
        try {
          const response = await axios.get(`http://localhost/memeapple/public/php/api/dashboard.php?month=${month}&year=${year}`);
          console.log('伺服器回應：', response); // 檢查伺服器回應
          const { themeRevenue = [], storeRevenue = [] } = response.data || {}; // 直接使用回應的資料

          this.chartData = {
            labels: themeRevenue.map(theme => theme.THEME_NAME),
            datasets: [
              {
                data: themeRevenue.map(theme => theme.theme_revenue), // 確認使用正確的鍵名
                backgroundColor: '#3c598d'
              }
            ]
          };

          this.doughnutData = {
            labels: storeRevenue.map(store => store.STORE_NAME),
            datasets: [
              {
                data: storeRevenue.map(store => store.store_revenue), // 確認使用正確的鍵名
                backgroundColor: ['#324872', '#4f71a8']
              }
            ]
          };

          console.log('每月主題營收：', this.chartData); // 檢查回傳的資料結構
          console.log('每月分館營收：', this.doughnutData); // 檢查回傳的資料結構
        } catch (error) {
          console.error('查詢失敗：', error);
        }
    },
  },

  mounted() {
    this.selectedDate = new Date().toISOString().split('T')[0];
    console.log(this.selectedDate);
  },

};

</script>



<template>
<TopNavbarBack />

 <main class="bindex_wrapper">
        <div class="wrapper backstage_wrapper">
            <!-- 儀表板 -->
            <div class="backstage_dashboard">
                <div class="backstage_daily">
                    <div class="backstage_calendar">
                        <VCalendar 
                        v-model="selectedDate"
                        :attributes="attrs"
                        @dayclick="onDateChange"
                        @update:pages="onMonthChange"
                        title-position="left" style="width: 100%; height: 100%;" />
                    </div>
                    <div class="backstage_booking">
                        
                        <table class="backstage_table dashboard_table" style="width: 99%; height: 99%;">
                            <thead class="backstage_tablehead">
                                <tr>
                                    <th class="column-header"></th>
                                    <th>10:30</th>
                                    <th>11:15</th>
                                    <th>12:55</th>
                                    <th>14:35</th>
                                    <th>16:30</th>
                                    <th>18:15</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th class="column-header">成都醫院</th>
                                    <td><a href="">{{ getOrder(1, '10:30') }}</a></td>
                                    <td><a href="">{{ getOrder(1, '11:15') }}</a></td>
                                    <td><a href="">{{ getOrder(1, '12:55') }}</a></td>
                                    <td><a href="">{{ getOrder(1, '14:35') }}</a></td>
                                    <td><a href="">{{ getOrder(1, '16:30') }}</a></td>
                                    <td><a href="">{{ getOrder(1, '18:15') }}</a></td>
                                </tr>
                                <tr>
                                    <th class="column-header">時光迷宮</th>
                                    <td><a href="">{{ getOrder(2, '10:30') }}</a></td>
                                    <td><a href="">{{ getOrder(2, '11:15') }}</a></td>
                                    <td><a href="">{{ getOrder(2, '12:55') }}</a></td>
                                    <td><a href="">{{ getOrder(2, '14:35') }}</a></td>
                                    <td><a href="">{{ getOrder(2, '16:30') }}</a></td>
                                    <td><a href="">{{ getOrder(2, '18:15') }}</a></td>
                                </tr>
                                <tr>
                                    <th class="column-header">末日庇護所</th>
                                    <td><a href="">{{ getOrder(3, '10:30') }}</a></td>
                                    <td><a href="">{{ getOrder(3, '11:15') }}</a></td>
                                    <td><a href="">{{ getOrder(3, '12:55') }}</a></td>
                                    <td><a href="">{{ getOrder(3, '14:35') }}</a></td>
                                    <td><a href="">{{ getOrder(3, '16:30') }}</a></td>
                                    <td><a href="">{{ getOrder(3, '18:15') }}</a></td>
                                </tr>
                                <tr>
                                    <th class="column-header">代碼深淵</th>
                                    <td><a href="">{{ getOrder(4, '10:30') }}</a></td>
                                    <td><a href="">{{ getOrder(4, '11:15') }}</a></td>
                                    <td><a href="">{{ getOrder(4, '12:55') }}</a></td>
                                    <td><a href="">{{ getOrder(4, '14:35') }}</a></td>
                                    <td><a href="">{{ getOrder(4, '16:30') }}</a></td>
                                    <td><a href="">{{ getOrder(4, '18:15') }}</a></td>
                                </tr>
                                <tr>
                                    <th class="column-header">逃離武石監</th>
                                    <td><a href="">{{ getOrder(5, '10:30') }}</a></td>
                                    <td><a href="">{{ getOrder(5, '11:15') }}</a></td>
                                    <td><a href="">{{ getOrder(5, '12:55') }}</a></td>
                                    <td><a href="">{{ getOrder(5, '14:35') }}</a></td>
                                    <td><a href="">{{ getOrder(5, '16:30') }}</a></td>
                                    <td><a href="">{{ getOrder(5, '18:15') }}</a></td>
                                </tr>
                                <tr>
                                    <th class="column-header">恐怖密室</th>
                                    <td><a href="">{{ getOrder(6, '10:30') }}</a></td>
                                    <td><a href="">{{ getOrder(6, '11:15') }}</a></td>
                                    <td><a href="">{{ getOrder(6, '12:55') }}</a></td>
                                    <td><a href="">{{ getOrder(6, '14:35') }}</a></td>
                                    <td><a href="">{{ getOrder(6, '16:30') }}</a></td>
                                    <td><a href="">{{ getOrder(6, '18:15') }}</a></td>
                                </tr>
                                <tr>
                                    <th class="column-header">逃出虛空</th>
                                    <td><a href="">{{ getOrder(7, '10:30') }}</a></td>
                                    <td><a href="">{{ getOrder(7, '11:15') }}</a></td>
                                    <td><a href="">{{ getOrder(7, '12:55') }}</a></td>
                                    <td><a href="">{{ getOrder(7, '14:35') }}</a></td>
                                    <td><a href="">{{ getOrder(7, '16:30') }}</a></td>
                                    <td><a href="">{{ getOrder(7, '18:15') }}</a></td>
                                </tr>
                            </tbody>
                        </table>
                        
                    </div>
                </div>
                <div class="backstage_chart">
                    <div class="theme_income barChart">
                        <!-- bar -->
                        <Bar ref="barChart" :data="chartData" :options="chartOptions" />
                    </div>
                    <div class="store_income pieChart">
                        <!-- pie -->
                        <Doughnut ref="doughnutChart" :data="doughnutData" :options="doughnutOptions" /> 
                    </div>
                </div>
            </div>
        </div>
    </main>
<!-- <FooterbarBack /> -->
</template>