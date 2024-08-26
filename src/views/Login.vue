<script setup>
import '../assets/css/style.css';
import TopNavbar from '../components/TopNavbar.vue';
import Footerbar from '../components/Footerbar.vue';
</script>

<template>
    <TopNavbar />

    <div class="main">
        
        <div class="wrapper">
            <div class="join_login">
                <div class="join_loginHeader">
                    <button class="btn">會員登入</button>
                    <button class="btn">會員註冊</button>
                </div>
                <div class="mainLogin">
                   <ul>
                    <li><label>會員登入</label></li>
                    <li><label>帳號</label></li>
                    <li><input type="text" class="account" placeholder="請輸入帳號"></li>
                    <li><label>密碼</label></li>
                    <li><input type="text" class="PWD" placeholder="請輸入密碼"></li>
                    <li></li>
                    <li><input type="submit" class="send" value="登入"></li> 
                    </ul> 
                    <div>
                        <input type="checkbox" name="onlogin" id="onlogin">保持登入
                        <a href="#">忘記密碼?</a>
                    </div>
                    <div>
                        <span class="line"></span>
                        <label or></label>
                        <span class="line"></span>
                    </div>
                    <div>
                    <button class="btn"><i></i>使用Facebook登入</button>   
                    <button class="btn"><i></i>使用Google登入</button>
                    <button class="btn"><i></i>使用line登入</button>    
                    </div>

                </div>
            </div>
         
        </div>
    </div>

    <Footerbar />
</template>

