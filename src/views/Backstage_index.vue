<script setup>
    import '../assets/css/style.css'
    import TopNavbarBack from '../components/TopNavbarBack.vue';
    import FooterbarBack from '../components/FooterbarBack.vue';
</script>

<template>
<TopNavbarBack />

 <main class="backstage_main">
        <div class="wrapper backstage_wrapper">
            <!-- 儀表板 -->
            <!-- <div class="backstage_daily">
                <div class="backstage_calendar"></div>
                <div class="backstage_booking"></div>
            </div>
            <div class="backstage_chart">
                <div class="theme_income"></div>
                <div class="store_income"></div>
            </div> -->

            <!-- 內頁 -->
            <!--  -->
            <div class="backstage_selection">
                <nav class="backstage_breadcrumb">
                    <ul>
                        <li><router-link to="/BackstageIndex/">後台管理系統</router-link></li>
                        <li>&gt;</li>
                        <li><router-link to="/NewsMenage/">最新消息管理</router-link></li>
                        <li>&gt;</li>
                        <li><router-link to="/BackstageIndex/">檢視</router-link></li>
                    </ul>
                </nav>
                <form class="backstage_form" method="get" action="">
                    <input class="backstage_input" type="text" placeholder="關鍵字搜尋">
                    <!-- <input class="backstage_input" type="text" placeholder="關鍵字搜尋"> -->
                    <!-- <input class="backstage_input" type="text" placeholder="關鍵字搜尋"> -->
                    <input class="backstage_date" type="date">
                    <select class="backstage_dropdown" name="selected">
                        <option value="" selected>下拉選單</option>
                        <option value="">選項</option>
                    </select>    
                </form>
                <div class="backstage_panel">
                    <button class="btn backstage_button">查詢</button>
                    <button class="btn backstage_button">新增</button>
                </div>
            </div>
            <div class="backstage_tablezone">
                <table class="backstage_table">
                    <thead class="backstage_tablehead">
                        <tr>
                            <th class="column-header">欄位1</th>
                            <th class="column-header">欄位2</th>
                            <th class="column-header">欄位3</th>
                            <th class="column-header">欄位4</th>
                            <th class="column-header">欄位5</th>
                        </tr>
                    </thead>
                    <tbody class="backstage_tablebody">
                        <tr>
                            <td>資料 1-1</td>
                            <td>資料 1-2</td>
                            <td>資料 1-3</td>
                            <td>資料 1-4</td>
                            <td>資料 1-5</td>
                        </tr>
                        <tr>
                            <td>資料 2-1</td>
                            <td>資料 2-2</td>
                            <td>資料 2-3</td>
                            <td>資料 2-4</td>
                            <td>資料 2-5</td>
                        </tr>
                        <tr>
                            <td>資料 2-1</td>
                            <td>資料 2-2</td>
                            <td>資料 2-3</td>
                            <td>資料 2-4</td>
                            <td>資料 2-5</td>
                        </tr>
                        <tr>
                            <td>資料 2-1</td>
                            <td>資料 2-2</td>
                            <td>資料 2-3</td>
                            <td>資料 2-4</td>
                            <td>資料 2-5</td>
                        </tr>
                        <tr>
                            <td>資料 2-1</td>
                            <td>資料 2-2</td>
                            <td>資料 2-3</td>
                            <td>資料 2-4</td>
                            <td>資料 2-5</td>
                        </tr>
                        <tr>
                            <td>資料 2-1</td>
                            <td>資料 2-2</td>
                            <td>資料 2-3</td>
                            <td>資料 2-4</td>
                            <td>資料 2-5</td>
                        </tr>
                        <tr>
                            <td>資料 2-1</td>
                            <td>資料 2-2</td>
                            <td>資料 2-3</td>
                            <td>資料 2-4</td>
                            <td>資料 2-5</td>
                        </tr>
                        <tr>
                            <td>資料 2-1</td>
                            <td>資料 2-2</td>
                            <td>資料 2-3</td>
                            <td>資料 2-4</td>
                            <td>資料 2-5</td>
                        </tr>
                        <tr>
                            <td>資料 2-1</td>
                            <td>資料 2-2</td>
                            <td>資料 2-3</td>
                            <td>資料 2-4</td>
                            <td>資料 2-5</td>
                        </tr>
                        <tr>
                            <td>資料 2-1</td>
                            <td>資料 2-2</td>
                            <td>資料 2-3</td>
                            <td>資料 2-4</td>
                            <td>資料 2-5</td>
                        </tr>
                        <tr class="backstage_tfoot">
                            <td colspan="5" style="text-align: center;">
                                <div class="backstage_pagination">
                                    <div class="backstage_paginator">
                                        <a href="#">&lt;</a>
                                        <input class="backstage_page_input" type="text" value="1">
                                        <a href="#">&gt;</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div> 
        </div>
    </main>
<FooterbarBack />
</template>