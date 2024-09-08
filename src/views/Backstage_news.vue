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
                        <li><router-link to="/NewsMenage/">最新消息管理</router-link></li>
                    </ul>
                </nav>
                <div class="backstage_panel panel_news" style="margin-top: 50px;">
                    <router-link to="/NewsEdit/"><button class="btn backstage_button">新增</button></router-link>
                </div>
            </div>
            <div class="backstage_tablezone">
                <table class="backstage_table">
                    <thead class="backstage_tablehead">
                        <tr>
                            <th class="column-header" style="width: 200px;">發佈日期</th>
                            <th class="column-header" style="width: 150px;">發佈者</th>
                            <th class="column-header" style="width: 500px;">主題</th>
                            <th class="column-header" style="width: 150px;">狀態</th>
                            <th class="column-header" style="width: 200px;">動作</th>
                        </tr>
                    </thead>
                    <tbody class="backstage_tablebody">
                        <tr>
                            <td id="news_date">2024.9.8</td>
                            <td id="news_author">劉明讓</td>
                            <td id="news_title">成都廢院 無法驅散的幽冥殘穢</td>
                            <td id="news_status"><a href="" class="backstage_table_button">開啟</a></td>
                            <td id="news_action">
                                <router-link to="/NewsEdit/"><a href="" class="backstage_table_button">編輯</a></router-link>
                                &ensp;
                                <a href="" class="backstage_table_button">刪除</a>
                            </td>
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

