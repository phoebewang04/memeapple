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
                        <li><router-link to="/MemberMenage/">會員資料管理</router-link></li>
                    </ul>
                </nav>
                <form class="backstage_form" method="get" action="">
                    <input class="backstage_input" type="text" placeholder="關鍵字搜尋">
                    <select class="backstage_dropdown" name="selected">
                        <option value="" selected>狀態篩選</option>
                        <option value="">正常</option>
                        <option value="">停權</option>
                    </select>
                </form>
                <div class="backstage_panel">
                    <button class="btn backstage_button">查詢</button>
                </div>
            </div>
            <div class="backstage_tablezone">
                <table class="backstage_table">
                    <thead class="backstage_tablehead">
                        <tr>
                            <th class="column-header" style="width: 150px;">註冊日期</th>
                            <th class="column-header" style="width: 150px;">會員姓名</th>
                            <th class="column-header" style="width: 300px;">E-Mail</th>
                            <th class="column-header" style="width: 200px;">電話</th>
                            <th class="column-header" style="width: 150px;">狀態</th>
                            <th class="column-header" style="width: 150px;">動作</th>
                        </tr>
                    </thead>
                    <tbody class="backstage_tablebody">
                        <tr>
                            <td id="member_regidate">2024.8.26</td>
                            <td id="member_name">郭力仁</td>
                            <td id="member_email">atlaskuowork@gmail.com</td>
                            <td id="member_phone">0911222333</td>
                            <td id="member_status"><a href="" class="backstage_table_button">正常</a></td>
                            <td id="member_action"><a href="" class="backstage_table_button">檢視訂單</a></td>
                        </tr>
                        <tr class="backstage_tfoot">
                            <td colspan="6" style="text-align: center;">
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