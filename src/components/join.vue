<script setup>
import "@/assets/css/style.css";
import TopNavbar from './TopNavbar.vue';
import Footerbar from './Footerbar.vue';
</script>

<template>
    <TopNavbar />


            <div class="main">
        
                <div class="wrapper">
                    <div class="join_login">
                        <div class="join_loginHeader">
                            <button class="btn btn_joina">會員登入</button>
                            <button class="btn btn_join">會員註冊</button>
                        </div>
                        <div class="mainLogin mainJoin">
                            <ul>
                            <li><h3>會員註冊</h3></li>
                            <li><h4>帳號</h4></li>
                            <li><input type="text" class="account" placeholder="請輸入帳號"></li>
                            <li><h4>建立密碼</h4></li>
                            <li><input type="text" class="joinPWD" placeholder="請輸入密碼"></li>
                            <li><h4>請再次輸入密碼</h4></li>
                            <li><input type="text" class="joinPWD" placeholder="請再次輸入密碼"></li>
                            <li><h4>姓名</h4></li>
                            <li><input type="text" class="joinname" placeholder="請輸入姓名"></li>
                            <li><h4>電話</h4></li>
                            <li><input type="text" class="joinphone" placeholder="請輸入電話"></li>
                            <li><button class="btn btnlogin">註冊帳號</button></li> 
                            </ul> 
        
                        </div>
                    </div>
                 
                </div>
            </div>
        
    <Footerbar />
           

   
</template>


