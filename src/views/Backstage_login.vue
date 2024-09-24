<script>
import '../assets/css/style.css';

import axios from 'axios';

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
            axios.post('http://localhost/memeapple/public/php/api/backstagelogin.php', {
                action: 'login',
                account: this.account,
                password: this.password,
            })
                .then(response => {
                    if (response.data.success) {
                        console.log(response.data);
                        this.role = response.data.role;
                        sessionStorage.setItem('user', JSON.stringify(response.data.user));
                        alert('登入成功');
                        this.$router.push('/BackstageIndex');
                    } else {
                        console.log(response.data || '沒有回傳資料');
                        alert(response.data.message || '登入失敗');
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        },
        guestLogin() {
            sessionStorage.setItem('user', JSON.stringify({ role: 'guest' }));
            alert('訪客登入成功');
            this.$router.push('/BackstageIndex');
        }
    }
};
</script>

<template>
    <div id="loginForm">
        <form @submit.prevent="login">
            <label for="account">Account:</label>
            <input type="text" id="account" v-model="account" required>

            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required>

            <button type="submit">Login</button>
        </form>
        <button @click="guestLogin">訪客</button>
    </div>
</template>

