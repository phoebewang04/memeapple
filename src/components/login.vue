<script setup>
import "@/assets/css/style.css";
</script>

<template>
    <div class="wrapper_out">
        <header class="top">
                <a href="./index.html"><img src="./img/memelogo.svg" alt=""></a>
                <i class="fa fa-bars" aria-hidden="true" onclick="showMenuBar()"></i>
                <ul id="menuBar">
                    <li><a href="">線上體驗</a></li>
                    <li><a href="">遊戲主題</a></li>
                    <li><a href="">會員專區</a></li>
                </ul>
            </header>
        
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
        
            <footer>
        
                <div class="bottom">
        
                    <div>
                        <a href="#"><img src="./img/memelogo.svg" alt=""></a>
                    </div>
        
        
                    <div class="bm_text">
                        <p>© Copyright Meme謎因工作室&nbsp;&nbsp;All Rights Reserved.</p>
                        <p>本網站為緯育TibaMe【第93期】前端工程師專業技術養成班學員作品，僅供學習、展示之用途。</p>
                    </div>
        
                    <div class="icon">
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><i class="fa-brands fa-square-threads"></i></a>
                    </div>
        
                </div>
        
            </footer>
           

    </div>
</template>


