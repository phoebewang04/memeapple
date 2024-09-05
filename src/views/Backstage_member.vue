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
                totalPages: '0'
            }
        },
        computed:{
            // 分頁計算
            paginatedData(){
                const start = (parseInt(this.pageInput) - 1) * this.pageSize;
                const end = start + this.pageSize;
                this.totalPages = Math.ceil(this.objArray.length / this.pageSize); 
                return this.objArray.slice(start, end);
            },
            totalPages(){
                return this.totalPages;
            }
        },
        methods: {
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
                    // const response = await axios.get('http://localhost:3000/api/member', { params });
                    const response = await axios.get('http://localhost/memeapple/public/php/member.php', { params });
                    console.log(response)
                    this.objArray = response.data
                
                } catch (err) {
                    this.error = 'An error occurred: ' + err.message
                } finally {
                    this.loading = false
                }
            },
            async search(){
                this.loading = true;
                await this.fetchData();
            },
            // 調整日期格式，移除時間戳記
            formatDate(timestamp){
                let date = new Date(timestamp);
                return date.toISOString().split('T')[0];
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
                        <li><router-link to="/MemberMenage/">會員資料管理</router-link></li>
                    </ul>
                </nav>
                <form class="backstage_form" method="get" action="" @submit.prevent="fetchData">
                    <input class="backstage_input" type="text" placeholder="關鍵字搜尋" v-model="keyword" @keypress="handleEnter">
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
                <div v-if = "loading">Loading...</div>
                <div v-if = "error">{{ error }}</div>
                <table v-if = "objArray" class="backstage_table">
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
                        <tr v-for = "item in paginatedData" :key="item.ID">
                            <td id="member_regi_date">{{ formatDate(item.REGI_DATE) }}</td>
                            <td id="member_name">{{ item.NAME }}</td>
                            <td id="member_email">{{ item.EMAIL }}</td>
                            <td id="member_phone">{{ item.PHONE }}</td>
                            <td id="member_status">
                                <!-- 根據狀態顯示對應狀態資訊 -->
                                <a href="" class="backstage_table_button" v-if="item.STATUS == '0'">正常</a>
                                <a href="" class="backstage_table_button" v-if="item.STATUS == '1'">停權</a>
                            </td>
                            <td id="member_action"><a href="" class="backstage_table_button">檢視訂單</a></td>
                        </tr>
                        <tr class="backstage_tfoot">
                            <td colspan="6" style="text-align: center;">
                                <div class="backstage_pagination">
                                    <div class="backstage_paginator">
                                        <button @click.prevent="prevPage">&lt;</button>
                                        <input class="backstage_page_input" type="text" v-model="pageInput" @blur="handleBlur">
                                        <button @click.prevent="nextPage">&gt;</button>
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