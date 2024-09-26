<script>
import '../assets/css/style.css';

import axios from 'axios';

import Swal from 'sweetalert2';

export default {
    data() {
        return {
            account: '',
            password: '',
            role: ''
        };
    },
    methods: {
        login() {
            axios.post(import.meta.env.VITE_API_BASE + '/api/backstagelogin.php', {
            // axios.post('http://localhost/memeapple/public/php/api/backstagelogin.php', {
                action: 'login',
                account: this.account,
                password: this.password,
            })
                .then(response => {
                    if (response.data.success) {
                        console.log(response.data);
                        this.role = response.data.role;
                        sessionStorage.setItem('user', JSON.stringify(response.data.user));
                        const userName = response.data.user.NAME;
                        // alert(`${userName}您好，歡迎回來！`);
                        // this.$router.push('/BackstageIndex');

                        Swal.fire({
                            title: `${userName}您好，歡迎回來！`,
                            text: '您現在是以管理者身分登入',
                            confirmButtonColor: '#FCD15B',
                            confirmButtonText: 'OK'
                        }).then(() => {
                            this.$router.push('/BackstageIndex');
                        });

                    } else {
                        console.log(response.data || '沒有回傳資料');
                        Swal.fire({
                            title: '登入失敗',
                            text: `${response.data.message || '登入失敗'}`,
                            confirmButtonColor: '#FCD15B',
                            confirmButtonText: 'OK'
                        })
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        },
        guestLogin() {
            sessionStorage.setItem('user', JSON.stringify({ role: 'guest' }));
            // alert('訪客登入成功');
            // this.$router.push('/BackstageIndex');

            Swal.fire({
                title: `進入成功！`,
                text: '您現在是以訪客身分進入後台管理系統，部分功能無法使用',
                confirmButtonColor: '#FCD15B',
                confirmButtonText: 'OK'
            }).then(() => {
                this.$router.push('/BackstageIndex');
            });
        }
    }
};
</script>

<template>
    <div class="popup">
    <!-- <div cla。ss="popup" style="background-color: lightgray; height: 100vh; width: 100vw;"> -->
        <div class="mainLogin backstage" id="loginForm">
            <form @submit.prevent="login">
                <ol class="backstage">
                    <li><span>管理者登入</span></li>
                    <li>
                        <i class="fa-solid fa-envelope"></i>
                        <input type="text" class="account" id="account" placeholder="請輸入帳號" v-model="account">
                    </li>

                    <li>
                        <i class="fa-solid fa-lock"></i>
                        <input type="password" class="PWD" id="password" placeholder="請輸入密碼" v-model="password">
                    </li>

                    <li style="margin-bottom: 10px;">
                        <button click="login" class="btn btnlogin" style="">登入</button>
                    </li>

                    <div class="linef" style="margin-top: 0px;">
                        <span class="fline"></span>
                        <p class="flinetext">or</p>
                        <span class="fline"></span>
                    </div>

                    <li style="margin-top: 10px;">
                        <button class="btn btnlogin" @click.prevent="guestLogin">訪客進入</button>
                    </li>
                </ol>

            </form>
        </div>
    </div>
</template>

