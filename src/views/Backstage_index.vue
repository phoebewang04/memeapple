<script>
import '../assets/css/style.css'
import TopNavbarBack from '../components/TopNavbarBack.vue';

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
import { valueOrDefault } from 'chart.js/helpers';

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
    onDateChange(date) {
      this.selectedDate = date;
      // 將選擇的日期傳遞給 PHP 後端
      this.queryDatabaseByDate(date);
    },
    // 切換月份時取得年月資訊
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
    queryDatabaseByDate(date) {
      // 實現你的 PHP 查詢邏輯
      console.log('查詢日期：', date);
    },
    queryDatabaseByMonth(month, year) {
      // 實現你的 PHP 查詢邏輯
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
                                    <th >10:00 ~ 12:00</th>
                                    <th >13:00 ~ 15:00</th>
                                    <th >16:00 ~ 18:00</th>
                                    <th >19:00 ~ 21:00</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th class="column-header">成都醫院</th>
                                        <td><a href="">ABC1234567</a></td>
                                        <td><a href=""></a></td>
                                        <td><a href=""></a></td>
                                        <td><a href="">ABC1234567</a></td>
                                </tr>
                                <tr>
                                    <th class="column-header">末日庇護所</th>
                                        <td><a href="">ABC1234567</a></td>
                                        <td><a href="">ABC1234567</a></td>
                                        <td><a href=""></a></td>
                                        <td><a href="">ABC1234567</a></td>
                                </tr>
                                <tr>
                                    <th class="column-header">時光迷宮</th>
                                        <td><a href=""></a></td>
                                        <td><a href="">ABC1234567</a></td>
                                        <td><a href=""></a></td>
                                        <td><a href="">ABC1234567</a></td>
                                    </tr>
                                <tr>
                                    <th class="column-header">恐怖密室</th>
                                        <td><a href="">ABC1234567</a></td>
                                        <td><a href="">ABC1234567</a></td>
                                        <td><a href="">ABC1234567</a></td>
                                        <td><a href=""></a></td>    
                                    </tr>
                                <tr>
                                    <th class="column-header">逃出虛空</th>
                                        <td><a href="">ABC1234567</a></td>
                                        <td><a href=""></a></td>
                                        <td><a href=""></a></td>
                                        <td><a href=""></a></td>
                                    </tr>
                                <tr>
                                    <th class="column-header">逃離武石監</th>
                                        <td><a href="">ABC1234567</a></td>
                                        <td><a href=""></a></td>
                                        <td><a href=""></a></td>
                                        <td><a href="">ABC1234567</a></td>
                                    </tr>
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