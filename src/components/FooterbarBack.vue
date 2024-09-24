<script>
    import '../assets/css/style.css'
    import axios from 'axios';

    export default {
        methods: {
            logoutAndRedirect() {
                axios.post('http://localhost/memeapple/public/php/api/backstagelogin.php', {
                    action: 'logout'
                })
                .then (response => {
                    if (response.data.success) {
                        sessionStorage.removeItem('user');
                        alert('您已登出，將回到前後台分流頁');
                        this.$router.push('/');
                    } else {
                        console.log(response.data.message || '沒有回傳資料');
                        alert(response.data.message || '登出失敗');
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
    <footer>
        <div class="backstage_footer_one">
            <router-link to="/" @click.native="logoutAndRedirect"><img src="@/assets/img/memelogo.svg" alt=""></router-link>
            <div class="bm_text1">
                <p>© Copyright Meme謎因工作室&nbsp;&nbsp;All Rights Reserved.</p>
                <p>本網站為緯育TibaMe【第93期】前端工程師專業技術養成班學員作品，僅供學習、展示之用途。</p>
            </div>
        </div>
    </footer>
</template>
