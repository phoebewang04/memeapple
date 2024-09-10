<template>
    <TopNavbar />


            <div class="main">
        
                <div class="wrapper">
                    <div class="join_login">
                    <div class="join_loginHeader" v-if="currentlogin === 'login'">
                        <button class="btn btn_acc" @click="loginbtn" :class="{active: activeButton === 'login'}">會員登入</button>
                        <button class="btn btn_accj" @click="joinbtn" :class="{active: activeButton === 'join'}">會員註冊</button>
                    </div>
                    <div class="join_loginHeader" v-if="currentlogin === 'join'">
                        <button class="btn btn_joina" @click="loginbtn" :class="{active: activeButton === 'login'}">會員登入</button>
                        <button class="btn btn_join" @click="joinbtn" :class="{active: activeButton === 'join'}">會員註冊</button>
                    </div>
                    <div class="mainLogin" v-if="currentlogin === 'login'">
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
                            <a href="#">忘記密碼？</a>
                        </div>
                        <div class="linef">
                            <span class="fline"></span>
                            <p class="flinetext">or</p>
                            <span class="fline"></span>
                        </div>
                        <div class="outloginbtn">
                        <button class="btn btnfb"><i class="fa-brands fa-square-facebook"></i></button>   
                        <button class="btn btngoogle"><i class="fa-brands fa-google"></i></button>
                        <button class="btn btnline"><i class="fa-brands fa-line"></i></button>    
                        </div>
                    </div>

                    <div class="mainLogin mainJoin" v-if="currentlogin === 'join'">
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

<script>
import '../assets/js/vue.global';
import '../assets/css/style.css';
import TopNavbar from '../components/TopNavbar.vue';
import Footerbar from '../components/Footerbar.vue';
import Swal from 'sweetalert2';


export default {
    components:{
      TopNavbar,
      Footerbar,
    },
    data (){
            return {
                currentlogin: 'login',
                activeButton: 'login',
                currentStartIndex: 0,
            }
    },    
    methods: {
        JoinLogin(){
            Swal.fire({
                html:
                `
                <div class="main">
        
                    <div class="wrapper">
                        <div class="join_login">
                        <div class="join_loginHeader" v-if="currentlogin === 'login'">
                            <button class="btn btn_acc" @click="loginbtn" :class="{active: activeButton === 'login'}">會員登入</button>
                            <button class="btn btn_accj" @click="joinbtn" :class="{active: activeButton === 'join'}">會員註冊</button>
                        </div>
                        <div class="join_loginHeader" v-if="currentlogin === 'join'">
                            <button class="btn btn_joina" @click="loginbtn" :class="{active: activeButton === 'login'}">會員登入</button>
                            <button class="btn btn_join" @click="joinbtn" :class="{active: activeButton === 'join'}">會員註冊</button>
                        </div>
                        <div class="mainLogin" v-if="currentlogin === 'login'">
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
                                <a href="#">忘記密碼？</a>
                            </div>
                            <div class="linef">
                                <span class="fline"></span>
                                <p class="flinetext">or</p>
                                <span class="fline"></span>
                            </div>
                            <div class="outloginbtn">
                            <button class="btn btnfb"><i class="fa-brands fa-square-facebook"></i></button>   
                            <button class="btn btngoogle"><i class="fa-brands fa-google"></i></button>
                            <button class="btn btnline"><i class="fa-brands fa-line"></i></button>    
                            </div>
                        </div>

                        <div class="mainLogin mainJoin" v-if="currentlogin === 'join'">
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
                `,
                showConfirmButton:false,
                color:'#FFFFFF',
                width:'auto',
                backgroundcolor:'transparent',
                position:'center',
            })
        },
        loginbtn (){
            this.currentlogin = 'login';
            this.activeButton = 'login';
            this.currentStartIndex = 0;
        },
        joinbtn(){
            this.currentlogin = 'join';
            this.activeButton = 'join';
            this.currentStartIndex = 0;
        },
    },
}
</script>

