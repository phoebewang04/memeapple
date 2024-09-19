<script>
    import '../assets/css/style.css'
    import TopNavbarBack from '../components/TopNavbarBack.vue';
    import FooterbarBack from '../components/FooterbarBack.vue';

    import axios from 'axios';
    import { RouterLink } from 'vue-router';

    export default{
        // 進入頁面時先執行搜尋載入資料
        mounted(){
            this.fetchData();
        },
        components: {
            TopNavbarBack,
            FooterbarBack,
        },
        data(){
            return{
                objArray: null,
                loading: true,
                error: null,
                keyword: '',
                publish_date: '',
                pageInput: '1',
                pageSize: 10,
                totalPages: '0',
                sortKey: '',
                sortOrder: 1,
                sortIcons: {
                    '': '',
                    'asc': '▲',
                    'desc': '▼'
                }
            }
        },
        computed:{
            // 分頁計算
            paginatedData() {
                const start = (parseInt(this.pageInput) - 1) * this.pageSize;
                const end = start + this.pageSize;
                this.totalPages = Math.ceil(this.objArray.length / this.pageSize);
                console.log("array:", this.objArray);
                return this.objArray || this.objArray.length > 0 ? this.objArray.slice(start, end) : [];
            },
            totalPages() {
                return this.totalPages;
            }
        },
        methods:{
            // 排序功能
            sortBy(key) {
                this.sortOrder = this.sortKey === key ? this.sortOrder * -1 : 1;
                this.sortKey = key;
                this.objArray.sort((a, b) => {
                    if (a[key] < b[key]) return -1 * this.sortOrder;
                    if (a[key] > b[key]) return 1 * this.sortOrder;
                    return 0;
                });
            },
            // 排序後顯示icon
            getSortIcon(key) {
                if (this.sortKey === key) {
                    return this.sortOrder === 1 ? this.sortIcons['asc'] : this.sortIcons['desc'];
                }
                return this.sortIcons[''];
            },
            // 設定關鍵字查詢可透過Enter鍵觸發
            handleEnter(event){
                if (event.keyCode === 13) {
                    this.fetchData();
                }
            },
            // 分頁器前一頁
            prevPage(){
                if (this.pageInput > 1) {
                    this.pageInput --;
                    this.pageInput = this.pageInput .toString();
                }
                this.goToPage();
            },
            // 分頁器下一頁
            nextPage(){
                console.log(this.totalPages);
                if (this.pageInput < this.totalPages) {
                    this.pageInput ++;
                    this.pageInput = this.pageInput.toString();
                }
                this.goToPage();   
            },
            // 分頁器輸入頁碼跳轉
            handleBlur(){
                this.$nextTick(() => {
                    this.goToPage();
                });
            },
            // 切換頁面主程式
            goToPage(){
                console.log('goToPage called');
                const page = parseInt(this.pageInput, 10);
                if (!isNaN(page) && page > 0 && page <= this.totalPages) {
                    this.pageInput  = page.toString();
                } else {
                    this.pageInput = this.pageInput .toString();
                }
            },
            // 呼叫API執行查詢
            async fetchData(){
                try {
                    const params = {
                        publish_date: this.publish_date,
                        keyword: this.keyword
                    };
                    const response = await axios.get('http://localhost/memeapple/public/php/api/news.php', { params });
                    this.objArray = response.data                
                } catch (err) {
                    this.error = 'An error occurred: ' + err.message
                } finally {
                    this.loading = false
                }
            },
            async search(){
                this.loading = true;
                this.sortKey = ''; //重置排序欄位
                this.sortOrder = 1; //重置排序順序
                await this.fetchData();
            },
            formatDate(timestamp){
                let date = new Date(timestamp);
                return date.toISOString().split('T')[0];
            },
            // 更新狀態
            async updateStatus(news) {
                const newStatus = news.STATUS === 1 ? 0 : 1;
                try {
                    const response = await axios.post('http://localhost/memeapple/public/php/api/news.php', {
                        id: news.ID,
                        status: newStatus
                    });

                    console.log(response.data); // 加入這行來檢查回應資料
                    
                    if (response.data.success) {
                        news.STATUS = newStatus;
                    } else {
                        alert('更新失敗: ' + response.data.message);
                    }
                } catch (err) {
                    alert('An error occurred: ' + err.message);
                }
            },
            // 編輯最新消息
            editNews(item){
                this.$router.push({ name: 'NewsEdit', params: { id: item.ID }});
            }
        }
    }
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
                <form class="backstage_form" method="get" action="" @submit.prevent="fetchData">
                    <input v-model="publish_date" class="backstage_date" type="date">
                    <input class="backstage_input" type="text" placeholder="關鍵字搜尋" v-model="keyword" @keypress="handleEnter">
                </form>
                <div class="backstage_panel">
                    <button type="submit" class="btn backstage_button" @click="search">查詢</button>
                    <router-link to="/NewsEdit/"><button class="btn backstage_button">新增</button></router-link>
                </div>
            </div>
            <div class="backstage_tablezone">
                <div v-if = "loading">Loading...</div>
                <div v-if = "error">{{ error }}</div>
                <table v-if = "objArray" class="backstage_table">
                    <thead class="backstage_tablehead">
                        <tr>
                            <th class="column-header" style="width: 200px;" @click="sortBy('PUBLISH_DATE')">發佈日期 {{ getSortIcon('PUBLISH_DATE') }}</th>
                            <th class="column-header" style="width: 150px;" @click="sortBy('PUBLISHER_NAME')">發佈者 {{ getSortIcon('PUBLISHER_NAME') }}</th>
                            <th class="column-header" style="width: 500px;" @click="sortBy('TOPIC')">主題 {{ getSortIcon('TOPIC') }}</th>
                            <th class="column-header" style="width: 150px;" @click="sortBy('STATUS')">狀態 {{ getSortIcon('STATUS') }}</th>
                            <th class="column-header" style="width: 200px;">動作</th>
                        </tr>
                    </thead>
                    <tbody class="backstage_tablebody">
                        <tr v-for="item in paginatedData" :key="item.PUBLISH_DATE">
                            <td id="news_date">{{ formatDate(item.PUBLISH_DATE) }}</td>
                            <td id="news_author">{{ item.PUBLISHER_NAME }}</td>
                            <td id="news_title">{{ item.TOPIC }}</td>
                            <td id="news_status">
                                <button @click="updateStatus(item)" :class="{ banned: item.STATUS === 1 }">{{ item.STATUS === 1 ? '隱藏' : '顯示' }}</button>
                            </td>
                            <td id="news_action">
                                <RouterLink :to="{ name: 'NewsEdit', params: { id: String(item.ID) } }">
                                    <button @click="editNews(item)">編輯</button>
                                </RouterLink>
                                <!-- &ensp;
                                <button @click="">刪除</button> -->
                            </td>
                        </tr>
                        <tr class="backstage_tfoot">
                            <td colspan="5" style="text-align: center;">
                                <div class="backstage_pagination">
                                    <div class="backstage_paginator">
                                        <button class="paginator_button" @click.prevent="prevPage">&lt;</button>
                                        <input class="backstage_page_input" type="text" v-model="pageInput" @blur="handleBlur">
                                        <button class="paginator_button" @click.prevent="nextPage">&gt;</button>
                                    </div>
                                    <p>共有 {{ objArray.length }} 筆，總計 {{ totalPages }} 頁 </p>   
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

