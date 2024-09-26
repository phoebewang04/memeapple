<script>
    import '../assets/css/style.css'
    import TopNavbarBack from '../components/TopNavbarBack.vue';
    import FooterbarBack from '../components/FooterbarBack.vue';

    import axios from 'axios';

    export default{
        // 進入頁面時先執行搜尋載入資料
        mounted(){
            this.fetchData();
        },
        components: {
            TopNavbarBack,
            FooterbarBack,
        },
        el: '.backstage_dropdown',
        data(){
            return{
                objArray: null,
                loading: true,
                error: null,
                order_date: '',
                store_name: '所有分館',
                theme_name: '所有主題',
                    themes: {
                        '所有分館': ['成都醫院', '末日庇護所', '時光迷宮', '代碼深淵', '恐怖密室', '逃出虛空', '逃離武石監'],
                        '台北館': ['成都醫院', '末日庇護所', '時光迷宮', '代碼深淵'],
                        '台中館': ['恐怖密室', '逃出虛空', '逃離武石監']
                    },
                order_status: '所有狀態',
                keyword: '',
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
            // 動態下拉選單
            filteredThemes() {
                if (this.store_name == '所有分館') {
                    return ['所有主題', ...new Set(Object.values(this.themes).flat().filter(theme => theme !== '所有主題'))];
                } else {
                    return ['所有主題', ...this.themes[this.store_name]];
                }
            },
            // 分頁計算
            paginatedData(){
                const start = (parseInt(this.pageInput) - 1) * this.pageSize;
                const end = start + this.pageSize;
                this.totalPages = Math.ceil(this.objArray.length / this.pageSize); 
                console.log("array:", this.objArray)
                return this.objArray || this.objArray.length > 0 ? this.objArray.slice(start, end):[];
            },
            totalPages(){
                return this.totalPages;
            }
        },
        watch: {
            store_name(newStore){
                this.theme_name = '所有主題';
            }
        },
        methods:{
            // 排序功能
            sortBy(key){
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
                if (this.sortKey == key) {
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
                    this.pageInput = page.toString();
                } else {
                    this.pageInput = this.pageInput .toString();
                }
            },
            // 呼叫API
            async fetchData(){
                try {
                    const params = {
                        order_date: this.order_date,
                        store_name: this.store_name,
                        theme_name: this.theme_name,
                        order_status: this.order_status,
                        keyword: this.keyword
                    };
                    const response = await axios.get(import.meta.env.VITE_API_BASE + '/api/order.php', { params });
                    //  const response = await axios.get('http://localhost/appleTeam/public/php/api/order.php', { params });
                    this.objArray = response.data;
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
            // 調整日期格式，移除時間戳記
            formatDate(timestamp){
                let date = new Date(timestamp);
                return date.toISOString().split('T')[0];
            },
            // 調整時間格式
            formatTime(time){
                return time.substring(0, 5);
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
                        <li><router-link to="/OrderMemage/">訂單資料管理</router-link></li>
                    </ul>
                </nav>
                <form class="backstage_form order_form" method="get" action="" @submit.prevent="fetchData">
                    <input class="backstage_date" type="date" v-model="order_date">
                    <select class="backstage_dropdown" name="selected" v-model="store_name">
                        <option value="所有分館" selected>所有分館</option>
                        <option value="台北館">台北館</option>
                        <option value="台中館">台中館</option>
                    </select>
                    <select class="backstage_dropdown" name="selected" v-model="theme_name">
                        <option v-for="theme in filteredThemes" :key="theme" :value="theme">{{ theme }}</option>
                    </select>
                    <select class="backstage_dropdown" name="selected" v-model="order_status">
                        <option value="所有狀態" selected>所有狀態</option>
                        <option value="已使用">已使用</option>
                        <option value="已預訂">已預訂</option>
                        <option value="已取消">已取消</option>
                    </select>
                    <input class="backstage_input" type="text" placeholder="關鍵字搜尋" v-model="keyword" @keypress="handleEnter">
                </form>
                <div class="backstage_panel">
                    <button type="submit" class="btn backstage_button" @click="search">查詢</button>
                </div>
            </div>
            <div class="backstage_tablezone">
                <div v-if = "loading">Loading...</div>
                <div v-if = "error">{{ error }}</div>
                <table v-if = "objArray" class="backstage_table">
                    <thead class="backstage_tablehead">
                        <tr>
                            <th class="column-header" style="width: 100px;" @click="sortBy('ORDER_DATE')">日期 {{ getSortIcon('ORDER_DATE') }}</th>
                            <th class="column-header" style="width: 75px;" @click="sortBy('ORDER_TIME')">時間 {{ getSortIcon('ORDER_TIME') }}</th>
                            <th class="column-header" style="width: 175px;" @click="sortBy('ORDER_ID')">訂單編號 {{ getSortIcon('ORDER_ID') }}</th>
                            <th class="column-header" style="width: 100px;" @click="sortBy('STORE_NAME')">分館 {{ getSortIcon('STORE_NAME') }}</th>
                            <th class="column-header" style="width: 100px;" @click="sortBy('THEME_NAME')">主題 {{ getSortIcon('THEME_NAME') }}</th>
                            <th class="column-header" style="width: 100px;" @click="sortBy('MEMBER_NAME')">姓名 {{ getSortIcon('MEMBER_NAME') }}</th>
                            <th class="column-header" style="width: 125px;" @click="sortBy('MEMBER_PHONE')">電話 {{ getSortIcon('MEMBER_PHONE') }}</th>
                            <th class="column-header" style="width: 175px;" @click="sortBy('MEMBER_EMAIL')">E-Mail {{ getSortIcon('MEMBER_EMAIL') }}</th>
                            <th class="column-header" style="width: 100px;" @click="sortBy('ORDER_STATUS')">狀態 {{ getSortIcon('ORDER_STATUS') }}</th>
                            <th class="column-header" style="width: 75px;" @click="sortBy('ATTENDANCE')">人數 {{ getSortIcon('ATTENDANCE') }}</th>
                            <th class="column-header" style="width: 100px;" @click="sortBy('TOTAL_AMOUNT')">總額 {{ getSortIcon('TOTAL_AMOUNT') }}</th>
                            <th class="column-header" style="width: 100px;" @click="sortBy('PENDING_AMOUNT')">待付 {{ getSortIcon('PENDING_AMOUNT') }}</th>
                        </tr>
                    </thead>
                    <tbody class="backstage_tablebody">
                        <tr v-for = "item in paginatedData" :key="item.ORDER_DATE">
                            <td id="order_date">{{ formatDate(item.ORDER_DATE) }}</td>
                            <td id="order_time">{{ formatTime(item.ORDER_TIME) }}</td>
                            <td id="order_ID">{{ item.ORDER_ID }}</td>
                            <td id="order_store">{{ item.STORE_NAME }}</td>
                            <td id="order_theme">{{ item.THEME_NAME }}</td>
                            <td id="member_name">{{ item.MEMBER_NAME }}</td>
                            <td id="member_phone">{{ item.MEMBER_PHONE }}</td>
                            <td id="member_email">{{ item.MEMBER_EMAIL }}</td>
                            <td id="order_status">{{ item.ORDER_STATUS }}</td>
                            <td id="order_attendance">{{ item.ATTENDANCE }}</td>
                            <td id="order_total">{{ item.TOTAL_AMOUNT }}</td>
                            <td id="order_amount">{{ item.PENDING_AMOUNT }}</td>
                        </tr>
                        <tr class="backstage_tfoot">
                            <td colspan="12" style="text-align: center;">
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

