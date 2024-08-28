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
                            <button class="btn btn_acc">會員登入</button>
                            <button class="btn btn_join">會員註冊</button>
                        </div>
                        <div class="mainLogin">
                           <ul>
                            <li><h3>會員登入</h3></li>
                            <li><h4>帳號</h4></li>
                            <li><input type="text" class="account" placeholder="請輸入帳號"></li>
                            <li><h4>密碼</h4></li>
                            <li><input type="text" class="PWD" placeholder="請輸入密碼"></li>
                            <li></li>
                            <li><button class="btn btnlogin">登入</button></li> 
                            </ul> 
                            <div class="checkforget">
                                <div>
                                    <input type="checkbox" name="onlogin" id="onlogin">保持登入
                                </div>
                                <a href="#">忘記密碼?</a>
                            </div>
                            <div class="linef">
                                <span class="fline"></span>
                                <p class="flinetext">or</p>
                                <span class="fline"></span>
                            </div>
                            <div class="outloginbtn">
                            <button class="btn btnfb"><i class="fa-brands fa-facebook"></i>使用Facebook登入</button>   
                            <button class="btn btngoogle"><i class="fa-brands fa-google"></i>使用Google登入</button>
                            <button class="btn btnline"><i class="fa-brands fa-line"></i>使用line登入</button>    
                            </div>
        
                        </div>
                    </div>
                 
                </div>
            </div>
        
    <Footerbar />
           

   
</template>


