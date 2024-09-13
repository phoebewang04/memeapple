<script>
import '../assets/css/style.css'
import TopNavbarBack from '../components/TopNavbarBack.vue';

import axios from 'axios';

import 'v-calendar/style.css';
import { Calendar } from 'v-calendar';

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
      orders: {},
      chartData: {
        labels: ['成都醫院', '時光迷宮', '末日庇護所', '恐怖密室', '逃出虛空', '逃離武石監'],
        datasets: [
          { 
            backgroundColor: '#3c598d',
            data: [170000, 180000, 50000, 160000, 230000, 170000] 
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
        labels: ['台北館', '台中館'],
        Legend: { display: false },
        datasets:[
          {
            backgroundColor: ['#324872', '#4f71a8'],
            data: [60, 40]
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
        // 實現 PHP 查詢邏輯
        console.log('查詢日期：', date);

    },

    queryDatabaseByMonth(month, year) {
        // 實現 PHP 查詢邏輯
        console.log('查詢月份：', month, year);

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
                                    <td><a href="">{{ orders['10:30'] ? orders['10:30']['成都醫院'].orderId : '' }}</a></td>
                                    <td><a href="">{{ orders['11:15'] ? orders['11:15']['成都醫院'].orderId : '' }}</a></td>
                                    <td><a href="">{{ orders['12:55'] ? orders['12:55']['成都醫院'].orderId : '' }}</a></td>
                                    <td><a href="">{{ orders['14:35'] ? orders['14:35']['成都醫院'].orderId : '' }}</a></td>
                                    <td><a href="">{{ orders['16:30'] ? orders['16:30']['成都醫院'].orderId : '' }}</a></td>
                                    <td><a href="">{{ orders['18:15'] ? orders['18:15']['成都醫院'].orderId : '' }}</a></td>
                                </tr>
                                <tr>
                                    <th class="column-header">時光迷宮</th>
                                    <td><a href="">{{ orders['10:30'] ? orders['10:30']['時光迷宮'].orderId : '' }}</a></td>
                                    <td><a href="">{{ orders['11:15'] ? orders['11:15']['時光迷宮'].orderId : '' }}</a></td>
                                    <td><a href="">{{ orders['12:55'] ? orders['12:55']['時光迷宮'].orderId : '' }}</a></td>
                                    <td><a href="">{{ orders['14:35'] ? orders['14:35']['時光迷宮'].orderId : '' }}</a></td>
                                    <td><a href="">{{ orders['16:30'] ? orders['16:30']['時光迷宮'].orderId : '' }}</a></td>
                                    <td><a href="">{{ orders['18:15'] ? orders['18:15']['時光迷宮'].orderId : '' }}</a></td>
                                </tr>
                                <!-- <tr>
                                    <th class="column-header">末日庇護所</th>
                                        <td><a href="">{{ orders['10:30']['末日庇護所'] }}</a></td>
                                        <td><a href="">{{ orders['11:15']['末日庇護所'] }}</a></td>
                                        <td><a href="">{{ orders['12:55']['末日庇護所'] }}</a></td>
                                        <td><a href="">{{ orders['14:35']['末日庇護所'] }}</a></td>
                                        <td><a href="">{{ orders['16:30']['末日庇護所'] }}</a></td>
                                        <td><a href="">{{ orders['18:15']['末日庇護所'] }}</a></td>
                                </tr>
                                <tr>
                                    <th class="column-header">代碼深淵</th>
                                        <td><a href="">{{ orders['10:30']['代碼深淵'] }}</a></td>
                                        <td><a href="">{{ orders['11:15']['代碼深淵'] }}</a></td>
                                        <td><a href="">{{ orders['12:55']['代碼深淵'] }}</a></td>
                                        <td><a href="">{{ orders['14:35']['代碼深淵'] }}</a></td>
                                        <td><a href="">{{ orders['16:30']['代碼深淵'] }}</a></td>
                                        <td><a href="">{{ orders['18:15']['代碼深淵'] }}</a></td>
                                </tr>
                                <tr>
                                    <th class="column-header">逃離武石監</th>
                                        <td><a href="">{{ orders['10:30']['逃離武石監'] }}</a></td>
                                        <td><a href="">{{ orders['11:15']['逃離武石監'] }}</a></td>
                                        <td><a href="">{{ orders['12:55']['逃離武石監'] }}</a></td>
                                        <td><a href="">{{ orders['14:35']['逃離武石監'] }}</a></td>
                                        <td><a href="">{{ orders['16:30']['逃離武石監'] }}</a></td>
                                        <td><a href="">{{ orders['18:15']['逃離武石監'] }}</a></td>
                                </tr>
                                <tr>
                                    <th class="column-header">恐怖密室</th>
                                        <td><a href="">{{ orders['10:30']['恐怖密室'] }}</a></td>
                                        <td><a href="">{{ orders['11:15']['恐怖密室'] }}</a></td>
                                        <td><a href="">{{ orders['12:55']['恐怖密室'] }}</a></td>
                                        <td><a href="">{{ orders['14:35']['恐怖密室'] }}</a></td>
                                        <td><a href="">{{ orders['16:30']['恐怖密室'] }}</a></td>
                                        <td><a href="">{{ orders['18:15']['恐怖密室'] }}</a></td>
                                </tr>
                                <tr>
                                    <th class="column-header">逃出虛空</th>
                                        <td><a href="">{{ orders['10:30']['逃出虛空'] }}</a></td>
                                        <td><a href="">{{ orders['11:15']['逃出虛空'] }}</a></td>
                                        <td><a href="">{{ orders['12:55']['逃出虛空'] }}</a></td>
                                        <td><a href="">{{ orders['14:35']['逃出虛空'] }}</a></td>
                                        <td><a href="">{{ orders['16:30']['逃出虛空'] }}</a></td>
                                        <td><a href="">{{ orders['18:15']['逃出虛空'] }}</a></td>
                                </tr> -->
                            </tbody>
                        </table>
                        
                    </div>
                </div>
                <div class="backstage_chart">
                    <div class="theme_income barChart">
                        <!-- bar -->
                        <Bar :data="chartData" :options="chartOptions" />
                    </div>
                    <div class="store_income pieChart">
                        <!-- pie -->
                        <Doughnut :data="doughnutData" :options="doughnutOptions" /> 
                    </div>
                </div>
            </div>
        </div>
    </main>
<!-- <FooterbarBack /> -->
</template>