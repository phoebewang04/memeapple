<script>
    import '../assets/css/style.css'
    import TopNavbarBack from '../components/TopNavbarBack.vue';
    import FooterbarBack from '../components/FooterbarBack.vue';

    // api test
    // 改寫Option API
    import axios from 'axios';

    export default {
        components: {
            TopNavbarBack,
            FooterbarBack
        },
        data(){
            return{
                objArray: null,
                loading: true,
                error: null,
                keyword: '',
                status: ''
            }
        },
        async mounted(){
            // await this.fetchData()
        },
        methods: {
            async fetchData(){
                try {
                    // try {
                    //     const response = await axios.get('http://localhost:3000/api/member');
                    //     this.objArray = response.data;
                    // } catch (error) {
                    //     console.error('Error fetching data:', error);
                    // }

                    const params = {
                        keyword: this.keyword,
                        status: this.status
                    };
                    const response = await axios.get('http://localhost:3000/api/member', { params });
                    // console.log('Response from fetchData:', response);
                    console.log(response)
                    // console.log('Updated objArray:', this.objArray);
                    this.objArray = response.data
                
                } catch (err) {
                    // console.error('Error in fetchData:', err);
                    this.error = 'An error occurred: ' + err.message
                } finally {
                    this.loading = false
                }
            },
            async search(){
                this.loading = true;
                await this.fetchData();
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
                <form class="backstage_form" method="get" action="">
                    <input class="backstage_input" type="text" placeholder="關鍵字搜尋" v-model="keyword">
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
                        <tr v-for = "item in objArray" :key="item.ID">
                            <td id="member_regi_date">{{ item.REGI_DATE }}</td>
                            <td id="member_name">{{ item.NAME }}</td>
                            <td id="member_email">{{ item.EMAIL }}</td>
                            <td id="member_phone">{{ item.PHONE }}</td>
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