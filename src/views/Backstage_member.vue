<script>
    import '../assets/css/style.css'
    import TopNavbarBack from '../components/TopNavbarBack.vue';  
    import FooterbarBack from '../components/FooterbarBack.vue';

    import axios from 'axios';

    export default {
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
                status: '所有狀態',
                pageInput: '1',
                pageSize: 10,
                totalPages: '0',
                totalOrderPages: '0',
                sortKey: '',
                sortOrder: 1,
                sortIcons: {
                    '': '',
                    'asc': '▲',
                    'desc': '▼'
                },
                isPreviewVisible: false,
                selectedMemberID: '',
                paginatedOrderData: [],
            }
        },
        computed:{
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
            },
        },
        methods: {
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
                        keyword: this.keyword,
                        status: this.status
                    };
                    // const response = await axios.get(import.meta.env.VITE_API_BASE + '/api/member.php', { params });
                    const response = await axios.get('http://localhost/memeapple/public/php/api/member.php', { params });
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
            // 調整日期格式，移除時間戳記
            formatDate(timestamp){
                let date = new Date(timestamp);
                return date.toISOString().split('T')[0];
            },
            async updateStatus(member){
                const newStatus = member.STATUS === 1 ? 0 : 1;
                try{
                    // const response = await axios.post(import.meta.env.VITE_API_BASE + '/api/member.php', { 
                    const response = await axios.post('http://localhost/memeapple/public/php/api/member.php', { 
                        id: member.ID,
                        status: newStatus
                    });
                    if(response.data.success){
                        member.STATUS = newStatus;
                    } else {
                        alert('更新失敗' + response.data.message);
                    }
                } catch(err){
                    alert('An error occurred: ' + err.message);
                }
            },
            // popup
            showPreview(ID) {
                console.log('ID: ', ID);
                if (ID) {
                    this.selectedMemberID = ID;
                    this.isPreviewVisible = true;
                    this.fetchOrderData();
                }
            },
            hidePreview() {
                this.isPreviewVisible = false;
            },
            // 查會員訂單資料
            async fetchOrderData() {
                try {
                    const params = {
                        memberId: this.selectedMemberID
                    };
                    console.log('params: ', params)
                    const response = await axios.get('http://localhost/memeapple/public/php/api/order.php', { params });
                    this.paginatedOrderData = response.data;
                    this.totalOrderPages = Math.ceil(this.paginatedOrderData.length / this.pageSize); // 計算popup視窗的總頁數
                    console.log('paginatedOrderData: ', this.paginatedOrderData);
                    console.log('paginatedOrderData: ', this.paginatedOrderData);
                } catch (err) {
                    this.error = 'An error occurred: ' + err.message
                }
            },
            // 調整時間格式
            formatTime(time) {
                return time.substring(0, 5);
            },
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
                        <li><router-link to="/MemberMenage/">會員資料管理</router-link></li>
                    </ul>
                </nav>
                <form class="backstage_form" method="get" action="" @submit.prevent="fetchData">
                    <input class="backstage_input" type="text" placeholder="關鍵字搜尋" v-model="keyword"
                        @keypress="handleEnter">
                    <select class="backstage_dropdown" name="selected" v-model="status">
                        <option value="所有狀態" selected>所有狀態</option>
                        <option value="正常">正常</option>
                        <option value="停權">停權</option>
                    </select>
                </form>
                <div class="backstage_panel">
                    <button type="submit" class="btn backstage_button" @click="search">查詢</button>
                </div>
            </div>
            <div class="backstage_tablezone">
                <div v-if="loading">Loading...</div>
                <div v-if="error">{{ error }}</div>
                <table v-if="objArray" class="backstage_table">
                    <thead class="backstage_tablehead">
                        <tr>
                            <th class="column-header" style="width: 150px;" @click="sortBy('REGI_DATE')">註冊日期 {{
                                getSortIcon('REGI_DATE') }}</th>
                            <th class="column-header" style="width: 150px;" @click="sortBy('NAME')">會員姓名 {{
                                getSortIcon('NAME') }}</th>
                            <th class="column-header" style="width: 300px;" @click="sortBy('EMAIL')">E-Mail {{
                                getSortIcon('EMAIL') }}</th>
                            <th class="column-header" style="width: 200px;" @click="sortBy('PHONE')">電話 {{
                                getSortIcon('PHONE') }}</th>
                            <th class="column-header" style="width: 150px;" @click="sortBy('STATUS')">狀態 {{
                                getSortIcon('STATUS') }}</th>
                            <th class="column-header" style="width: 150px;">動作</th>
                        </tr>
                    </thead>
                    <tbody class="backstage_tablebody">
                        <tr v-for="item in paginatedData" :key="item.REGI_DATE">
                            <td id="member_regi_date">{{ formatDate(item.REGI_DATE) }}</td>
                            <td id="member_name">{{ item.NAME }}</td>
                            <td id="member_email">{{ item.EMAIL }}</td>
                            <td id="member_phone">{{ item.PHONE }}</td>
                            <td id="member_status">
                                <button @click="updateStatus(item)" :class="{ banned: item.STATUS === 1 }">{{
                                    item.STATUS === 1 ? '停權' : '正常' }}</button>
                            </td>
                            <td id="member_action">
                                <button @click="showPreview(item.ID)">檢視訂單</button>
                            </td>
                        </tr>
                        <tr class="backstage_tfoot">
                            <td colspan="6" style="text-align: center;">
                                <div class="backstage_pagination">
                                    <div class="backstage_paginator">
                                        <button class="paginator_button" @click.prevent="prevPage">&lt;</button>
                                        <input class="backstage_page_input" type="text" v-model="pageInput"
                                            @blur="handleBlur">
                                        <button class="paginator_button" @click.prevent="nextPage">&gt;</button>
                                    </div>
                                    <p>共有 {{ objArray.length }} 筆，總計 {{ totalPages }} 頁 </p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <!-- popup -->
            <div v-if="isPreviewVisible" class="backstage_news" @click="hidePreview">
                <div class="backstage_news_preview" @click.stop
                    style="background-color: #e5e5e5; border: .5px solid #8F9191; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2 );">
                    <div class="backstage_news_content" style="display: flex; flex-direction: column;">
                        <h4 style="line-height: 2; padding-left: 24px; color: gray;">僅顯示最近10筆訂單資料</h4>
                        <table class="backstage_table preview" style="padding: 12px 24px 24px 24px;">
                            <thead class="backstage_tablehead">
                                <tr>
                                    <th class="column-header" style="width: 100px;">日期</th>
                                    <th class="column-header" style="width: 75px;">時間</th>
                                    <th class="column-header" style="width: 175px;">訂單編號</th>
                                    <th class="column-header" style="width: 100px;">分館</th>
                                    <th class="column-header" style="width: 100px;">主題</th>
                                    <th class="column-header" style="width: 100px;">姓名</th>
                                    <th class="column-header" style="width: 125px;">電話</th>
                                    <th class="column-header" style="width: 175px;">E-Mail</th>
                                    <th class="column-header" style="width: 100px;">狀態</th>
                                    <th class="column-header" style="width: 75px;">人數</th>
                                    <th class="column-header" style="width: 100px;">總額</th>
                                    <th class="column-header" style="width: 100px;">待付</th>
                                </tr>
                            </thead>
                            <tbody class="backstage_tablebody">
                                <tr v-for="item in paginatedOrderData" :key="item.ORDER_DATE">
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
                            </tbody>
                        </table>
                    </div>

                    <!-- <div class="backstage_panel">
                        <button class="btn backstage_button" @click="hidePreview">關閉</button>
                    </div> -->
                </div>
            </div>
        </div>
    </main>

    <FooterbarBack />

</template>