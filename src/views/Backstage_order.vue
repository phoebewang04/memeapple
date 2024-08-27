<script setup>
    import '../assets/css/style.css'
    import TopNavbarBack from '../components/TopNavbarBack.vue';
    import FooterbarBack from '../components/FooterbarBack.vue';
</script>

<template>
    <TopNavbarBack />

    <main class="backstage_main">
        <div class="wrapper backstage_wrapper">
            <div class="backstage_selection">
                <nav class="backstage_breadcrumb">
                    <ul>
                        <li><router-link to="/BackstageIndex/">後台管理系統</router-link></li>
                        <li>&gt;</li>
                        <li><router-link to="/OrderMemage/">訂單資料管理</router-link></li>
                    </ul>
                </nav>
                <form class="backstage_form order_form" method="get" action="">
                    <input class="backstage_date" type="date">
                    <select class="backstage_dropdown" name="selected">
                        <option value="" selected>所有分館</option>
                        <option value="">台中館</option>
                        <option value="">台中館</option>
                    </select>
                    <select class="backstage_dropdown" name="selected">
                        <option value="" selected>所有主題</option>
                        <option value="">成都醫院</option>
                        <option value="">末日庇護所</option>
                        <option value="">時光迷宮</option>
                    </select>
                    <select class="backstage_dropdown" name="selected">
                        <option value="" selected>所有狀態</option>
                        <option value="">已使用</option>
                        <option value="">已預訂</option>
                    </select>
                    <input class="backstage_input" type="text" placeholder="關鍵字搜尋">
                </form>
                <div class="backstage_panel">
                    <button class="btn backstage_button">查詢</button>
                </div>
            </div>
            <div class="backstage_tablezone">
                <table class="backstage_table">
                    <thead class="backstage_tablehead">
                        <tr>
                            <th class="column-header" style="width: 100px;">日期</th>
                            <th class="column-header" style="width: 100px;">時間</th>
                            <th class="column-header" style="width: 175px;">訂單編號</th>
                            <th class="column-header" style="width: 100px;">分館</th>
                            <th class="column-header" style="width: 100px;">主題</th>
                            <th class="column-header" style="width: 100px;">姓名</th>
                            <th class="column-header" style="width: 125px;">電話</th>
                            <th class="column-header" style="width: 175px;">E-Mail</th>
                            <th class="column-header" style="width: 100px;">狀態</th>
                            <th class="column-header" style="width: 50px;">人數</th>
                            <th class="column-header" style="width: 100px;">總額</th>
                            <th class="column-header" style="width: 100px;">待付</th>
                        </tr>
                    </thead>
                    <tbody class="backstage_tablebody">
                        <tr>
                            <td id="order_date">2024.8.26</td>
                            <td id="order_time">10:00</td>
                            <td id="order_ID">2024082601</td>
                            <td id="order_store">台北館</td>
                            <td id="order_theme">成都醫院</td>
                            <td id="member_name">郭力仁</td>
                            <td id="member_phone">0911222333</td>
                            <td id="member_email">atlaskuowork@gmail.com</td>
                            <td id="order_status">已完成</td>
                            <td id="order_attendance">8</td>
                            <td id="order_total">8000</td>
                            <td id="order_amount">0</td>
                        </tr>
                        <tr class="backstage_tfoot">
                            <td colspan="12" style="text-align: center;">
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

