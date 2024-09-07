<script setup>
    import '../assets/css/style.css'
    import TopNavbarBack from '../components/TopNavbarBack.vue';
    import FooterbarBack from '../components/FooterbarBack.vue';

    import 'v-calendar/style.css';

    import { ref } from 'vue'
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


    ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale, ArcElement)
  
    const chartData = ref({
        labels: ['成都醫院', '時光迷宮', '末日庇護所', '恐怖密室', '逃出虛空', '逃離武石監'],
        datasets: [
            { 
                backgroundColor: '#3c598d',
                data: [170000, 180000, 50000, 160000, 230000, 170000] 
            }
        ]
    })
  
    const chartOptions = ref({
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
    })

    const doughnutData = ref({
        labels: ['台北館', '台中館'],
        Legend: { display: false },
        datasets:[
            {
                backgroundColor: ['#324872', '#4f71a8'],
                data: [60, 40]
            }
        ]
    })

    const doughnutOptions = ref({
        responsive: true,
        maintainAspectRatio: false,
        width: '355px'
    })

</script>

<template>
<TopNavbarBack />

 <main class="bindex_wrapper">
        <div class="wrapper backstage_wrapper">
            <!-- 儀表板 -->
            <div class="backstage_dashboard">
                <div class="backstage_daily">
                    <div class="backstage_calendar">
                        <VCalendar title-position="left" style="width: 100%; height: 100%;" />
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
<FooterbarBack />
</template>