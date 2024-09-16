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
                        <form @submit.prevent="submitLogin">
                            <ul>
                            <li><h3>會員登入</h3></li>
                            <li><i class="fa-solid fa-envelope"></i><h4>帳號</h4></li>
                            <li><input type="text" class="account" placeholder="請輸入帳號"  v-model="username"></li>
                            <li><i class="fa-solid fa-lock"></i><h4>密碼</h4></li>
                            <li><input type="text" class="PWD" placeholder="請輸入密碼" v-model="password"></li>
                            <li></li>
                            <li><button type="submit" class="btn btnlogin">登入</button></li> 
                            </ul> 
                            <div class="checkforget">
                                <div>
                                    <input type="checkbox" name="onlogin" id="onlogin" checked="checked">保持登入
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
                            <!-- <button class="btn btngoogle"><i class="fa-brands fa-google"></i></button> -->
                            <button class="btn btngoogle"><img src="../assets/img/icons_google.png" alt=""></button>
                            <button class="btn btnline"><i class="fa-brands fa-line"></i></button>    
                            </div>
                        </form>
                    </div>

                    <div class="mainLogin mainJoin" v-if="currentlogin === 'join'">
                        <form @submit.prevent="submitRegister">
                            <ul>
                            <li><h3>會員註冊</h3></li>
                            <li><i class="fa-solid fa-envelope"></i><h4>帳號</h4></li>
                            <li><input type="text" class="account" placeholder="請輸入信箱" v-model="registerEmail"></li>
                            <li><i class="fa-solid fa-lock"></i><h4>建立密碼</h4></li>
                            <li><input type="text" class="joinPWD" placeholder="請輸入密碼" v-model="registerPassword"></li>
                            <li><i class="fa-solid fa-circle-check"></i><h4>請再次輸入密碼</h4></li>
                            <li><input type="text" class="joinPWD" placeholder="請再次輸入密碼" v-model="registerPasswordConfirm"></li>
                            <li><i class="fa-solid fa-user"></i><h4>姓名</h4></li>
                            <li><input type="text" class="joinname" placeholder="請輸入姓名" v-model="registerName"></li>
                            <li><i class="fa-solid fa-phone"></i><h4>電話號碼</h4></li>
                            <li><input type="text" class="joinphone" placeholder="請輸入電話" v-model="registerPhone"></li>
                            <li class="checkservers"><input type="checkbox" class="checkserver" v-model="agreeTerms"><p>我同意</p><router-link to="/Privacy/" target="_blank">隱私權政策</router-link><p>&</p><router-link to="/Terms/" target="_blank">服務條款</router-link></li>
                            <li><button type="submit" class="btn btnlogin">註冊帳號</button></li> 
                            </ul> 
                        </form>
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
import axios from 'axios';


export default {
    components:{
      TopNavbar,
      Footerbar,
    },
    data (){
            return {
                currentlogin: 'login', // 切換登入/註冊狀態
                currentStartIndex: 0,
                username: '',
                password: '',
                registerEmail: '',
                registerPassword: '',
                registerPasswordConfirm: '',
                registerName: '',
                registerPhone: '',
                agreeTerms: false,
                activeButton: 'login',
            };
            // {
            //     currentlogin: 'login',
            //     activeButton: 'login',
            //     currentStartIndex: 0,
            // }
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
        async submitLogin() {
            try {
                const response = await axios.post('http://localhost/meme/public/php/api/login.php', {
                    username: this.username,
                    password: this.password
                });
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        },
        async submitRegister() {
            if (this.registerPassword !== this.registerPasswordConfirm) {
                alert('密碼不一致');
                return;
            }
            try {
                const response = await axios.post('http://localhost/meme/public/php/api/register.php', {
                    email: this.registerEmail,
                    password: this.registerPassword,
                    name: this.registerName,
                    phone: this.registerPhone
                });
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        },
        // loginbtn() {
        //     this.currentlogin = 'login';
        // },
        // joinbtn() {
        //     this.currentlogin = 'join';
        // }
    
    },
}
</script>

