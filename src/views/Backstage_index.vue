<script setup>
    import '../assets/css/style.css'
    import TopNavbarBack from '../components/TopNavbarBack.vue';
    import FooterbarBack from '../components/FooterbarBack.vue';

    import ChartJS from '../components/ChartJS.vue';
</script>

<template>
<TopNavbarBack />

 <main class="backstage_main">
        <div class="wrapper backstage_wrapper">
            <!-- 儀表板 -->
            <div class="backstage_dashboard">
                <div class="backstage_daily">
                    <div class="backstage_calendar"></div>
                    <div class="backstage_booking">
                        
                        <table class="backstage_table dashboard_table">
                            <thead class="backstage_tablehead">
                                <tr>
                                    <th class="column-header"></th>
                                    <th >Column 1</th>
                                    <th >Column 2</th>
                                    <th >Column 3</th>
                                    <th >Column 4</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th class="column-header">成都醫院</th>
                                        <td>Cell 1</td>
                                        <td>Cell 2</td>
                                        <td>Cell 3</td>
                                        <td>Cell 4</td>
                                </tr>
                                <tr>
                                    <th class="column-header">末日庇護所</th>
                                        <td>Cell 7</td>
                                        <td>Cell 8</td>
                                        <td>Cell 9</td>
                                        <td>Cell 10</td>
                                </tr>
                                <tr>
                                    <th class="column-header">時光迷宮</th>
                                        <td>Cell 13</td>
                                        <td>Cell 14</td>
                                        <td>Cell 15</td>
                                        <td>Cell 16</td>
                                    </tr>
                                <tr>
                                    <th class="column-header">恐怖密室</th>
                                        <td>Cell 19</td>
                                        <td>Cell 20</td>
                                        <td>Cell 21</td>
                                        <td>Cell 22</td>    
                                    </tr>
                                <tr>
                                    <th class="column-header">逃出虛空</th>
                                        <td>Cell 25</td>
                                        <td>Cell 26</td>
                                        <td>Cell 27</td>
                                        <td>Cell 28</td>
                                    </tr>
                                <tr>
                                    <th class="column-header">逃離武石監</th>
                                        <td>Cell 31</td>
                                        <td>Cell 32</td>
                                        <td>Cell 33</td>
                                        <td>Cell 34</td>
                                    </tr>
                            </tbody>
                        </table>
                        
                    </div>
                </div>
                <div class="backstage_chart">
                    <div class="theme_income">
                        <!-- chart.js 測試 -->
                        <ChartJS />
                    </div>
                    <div class="store_income"></div>
                </div>
            </div>
        </div>
    </main>
<FooterbarBack />
</template>