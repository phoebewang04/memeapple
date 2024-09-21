<script>
    import '../assets/css/style.css';

    import axios from 'axios';
    import { roleTypes } from 'element-plus';
    import { RouterLink } from 'vue-router';
    
    export default {
        data() {
            return {
                username: '',
                password: '',
                role: ''
            };
        },
        methods: {
            login(){
                axios.post('http://localhost/memeapple/public/php/api/backstagelogin.php', {
                    username: this.username,
                    password: this.password,
                })
                .then(response => {
                    if (response.data.sucess) {
                        this.role = response.data.role;
                        this.$router.push('/BackstageIndex');
                    } else {
                        alert('登入失敗');
                    }
                })
                .catch(error => {
                    console.log(error);
                });
            }
        }
    }
</script>

<template>
    <div id="loginForm">
        <form @submit.prevent="login">
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="username" required>

            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required>

            <button type="submit">Login</button>
        </form>
    </div>
</template>

