<script setup>
import '../assets/css/style.css';
import TopNavbar from '../components/TopNavbar.vue';
import Footerbar from '../components/Footerbar.vue';
import Swal from 'sweetalert2';
</script>

<template>
    <!-- header -->
    <TopNavbar />
    <!-- banner -->
    <div class="theme_banner">
        <video v-if="all_data.banner.type === 'video'" src="../assets/img/banner.mp4" playsinline="" autoplay="" muted="" loop="" type="video/mp4" height="100%"
            width="100%" class="banner_video"></video>
            <img src="../assets/img/header.png" alt="" class="banner" v-else> 


        <!-- <img src="../assets/img/header.png" alt="" class="banner"> -->
    </div>

    <main class="theme_container">
        <!-- -----主題文字介紹＋指數 start----- -->
        <section class="overview">
            <!-- <div class="blood"> </div> -->
            <p class="overview_text">
                五年前，成都醫院因連環失蹤案而成為禁地，身為菁英偵探的你，收到神秘委託，必須調查此宗懸案，隨著你步入醫院，腐朽的氣息和幽暗的走廊讓人不寒而慄。這裡的每一個角落似乎都隱藏著難以解釋的秘密…</p>

            <div class="theme_number hospital">
                <span>燒腦指數</span>
                <div class="progress_bar hospital">
                    <div class="progress hospital" style="width: 87%;">87%</div>
                </div>
                <span>驚嚇指數</span>
                <div class="progress_bar hospital">
                    <div class="progress hospital" style="width: 95%;">95%</div>
                </div>
                <span>推薦指數</span>
                <div class="progress_bar hospital">
                    <div class="progress hospital" style="width: 90%;">90%</div>
                </div>
            </div>
        </section>
        <!-- -----主題文字介紹＋指數 end----- -->

        <section class="gameinfo">
            <div class="theme_game hospital">
                <i class="fa-solid fa-clock"></i>
                <h3>遊戲時間
                </h3>
                <p>120分鐘<br>（含20分鐘解說）</p>
            </div>
            <div class="theme_game hospital">
                <i class="fa-solid fa-circle-user"></i>
                <h3>建議人數</h3>
                <p>4－8 人</p>
            </div>
            <div class="theme_game hospital">
                <div class="dollar hospital">
                    <i class="fa-solid fa-dollar-sign"></i>
                </div>
                <h3>遊戲費用</h3>
                <p class="game_price" @click="showAlart">＄710－＄990 / 人<br>▲ 點此查看詳細價格</p>
            </div>
        </section>

        <section class="iconinfo">
            <div class="theme_icon hospital">
                <div class="theme_icon_img">
                    <img src="../assets/img/icon-1.png" alt="">
                </div>
                <h3>極度重恐</h3>
                <p>真人互動，將恐懼推向極限<br>密閉驚悚的壓迫體驗</p>
            </div>
            <div class="theme_icon hospital">
                <div class="theme_icon_img">
                    <img src="../assets/img/icon-2.png" alt="">
                </div>
                <h3>身歷其境</h3>
                <p>精心還原醫院每個角落<br>逼真場景宛如置身其中</p>
            </div>
            <div class="theme_icon hospital">
                <div class="theme_icon_img">
                    <img src="../assets/img/icon-3.png" alt="">
                </div>
                <h3>海量謎題</h3>
                <p>層層難關，精心雕琢<br>由你揭開最深的秘密</p>
            </div>
        </section>
        <section class="theme_marketing_container">
            <div class="theme_marketing">
                <div class="theme_marketing_text">
                    <h3>廢墟深處，重重謎團</h3>
                    <p>步入禁地，調查塵封的過往<br>觸碰那被時間遺忘的秘密</p>
                </div>
            </div>
            <div class="theme_marketing">
                <div class="theme_marketing_text">
                    <h3>光影交錯，虛實難辨</h3>
                    <p>詭異的筆記，失蹤者的殘骸<br>指引你走向真相的深淵</p>
                </div>
            </div>
            <div class="theme_marketing">
                <div class="theme_marketing_text">
                    <h3>怨念瀰漫，等待救贖</h3>
                    <p>唯有步步為營，方能撕裂虛<br>幻的帷幕，讓真相水落石出</p>
                </div>
            </div>
            <div class="theme_marketing" >
                <!-- :class="item.type" -->
                <!-- <img src="hand.jpg" alt="" v-if="item.animation === 'hand'"> -->
                <div class="theme_marketing_text">
                    <p>沉寂五年的未解之謎，至今仍在黑暗中低語</p>
                    <p>你願意接下此次委託，揭開那些不該被遺忘的秘密嗎？</p>
                </div>
            </div>

            <input type="button" value="預約偵查" class="btn">
        </section>

        <section class="notice">

            <div class="small_mark">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 40 40" fill="none">
                    <path
                        d="M20 40C8.954 40 0 31.046 0 20C0 8.954 8.954 0 20 0C31.046 0 40 8.954 40 20C40 31.046 31.046 40 20 40ZM18 21.584V28H22V21.584C23.0528 21.1245 23.9153 20.3165 24.4424 19.2959C24.9696 18.2753 25.1292 17.1043 24.8945 15.9799C24.6598 14.8554 24.0451 13.846 23.1537 13.1215C22.2624 12.3969 21.1487 12.0014 20 12.0014C18.8513 12.0014 17.7376 12.3969 16.8463 13.1215C15.9549 13.846 15.3402 14.8554 15.1055 15.9799C14.8708 17.1043 15.0304 18.2753 15.5576 19.2959C16.0847 20.3165 16.9472 21.1245 18 21.584Z"
                        fill="#FEDA77" />
                </svg>
                <h2>注意事項</h2>
            </div>

            <div class="notice_text hospital">
                <p>＊ 建議遊戲人數 6 ~ 7 人，容納人數 4 - 8 人。</p>
                <p>＊ 建議穿著輕便服裝，避免穿裙子。</p>
                <p>＊ 會有真人ＮＰＣ互動，無法調整恐怖程度，膽小誤入</p>
                <p>＊ 未滿15歲孩童需有成人陪同參與。</p>
            </div>

        </section>
        <section>
            <div class="small_mark">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 40 40" fill="none">
                    <path
                        d="M20 40C8.954 40 0 31.046 0 20C0 8.954 8.954 0 20 0C31.046 0 40 8.954 40 20C40 31.046 31.046 40 20 40ZM18 21.584V28H22V21.584C23.0528 21.1245 23.9153 20.3165 24.4424 19.2959C24.9696 18.2753 25.1292 17.1043 24.8945 15.9799C24.6598 14.8554 24.0451 13.846 23.1537 13.1215C22.2624 12.3969 21.1487 12.0014 20 12.0014C18.8513 12.0014 17.7376 12.3969 16.8463 13.1215C15.9549 13.846 15.3402 14.8554 15.1055 15.9799C14.8708 17.1043 15.0304 18.2753 15.5576 19.2959C16.0847 20.3165 16.9472 21.1245 18 21.584Z"
                        fill="#FEDA77" />
                </svg>
                <h2>台北其他館主題</h2>
            </div>
            <div class="theme_arrow">

                <i class="fa-solid fa-angle-left" id="left"></i>
                <div class="theme_wrapper">
                    <ul class="theme_carousel">
                        <li class="theme_card">
                            <a href="#">
                                <img src="../assets/img/banner-dead.jpg" alt="末日庇護所">
                                <h4>末日庇護所</h4>
                            </a>
                        </li>
                        <li class="theme_card">
                            <a href="#">
                                <img src="../assets/img/banner-code.png" alt="代碼深淵">
                                <h4>代碼深淵</h4>
                            </a>
                        </li>
                        <li class="theme_card">
                            <a href="#">
                                <img src="../assets/img/banner-mazeofTime.png" alt="時空迷宮">
                                <h4>時空迷宮</h4>
                            </a>
                        </li>
                    </ul>
                </div>
                <i class="fa-solid fa-angle-right" id="right"></i>
            </div>
        </section>
    </main>

    <Footerbar />

</template>

<script>
// import all_data from 'xxx.js'
export default {
    data() {
        console.log(this.$route.query);
        console.log(this.$route.query.id);
        return {
            // all_data: all_data[this.$route.query.id]
            all_data: {
                
                banner: {
                    type: 'video',
                    src: '../assets/img/banner.mp4'
                    // type:'img',
                    // src:'../assets/img/banner.mp4',
                },
                progress: [
                    {
                        'title': '燒腦指數',
                        'per': 87,
                    },
                    {
                        'title': '驚嚇指數',
                        'per': 96,
                    },

                    {
                        'title': '推薦指數',
                        'per': 90,
                    }
                ],


                text_section: [
                    {
                        'title': '光影交錯，虛實難辨',
                        'type':'left',

                        'per': 87,
                    },
                    {
                        'title': null,
                        'type':'center',
                        'animation':'hand',
                        'per': 96,
                    },

                ],
                note:`<p>＊ 建議遊戲人數 6 ~ 7 人，容納人數 4 - 8 人。</p>
                <p>＊ 建議穿著輕便服裝，避免穿裙子。</p>
                <p>＊ 會有真人ＮＰＣ互動，無法調整恐怖程度，膽小誤入</p>
                <p>＊ 未滿15歲孩童需有成人陪同參與。</p>`,

            },

        }
    },
    methods: {
        showAlart() {
            Swal.fire({
                // icon: 'success',
                title: '詳細價格',
                html: `
        <br>4人－＄990元 / 人<br>
        <br>5人－＄920元 / 人<br>
        <br>6人－＄850元 / 人<br>
        <br>7人－＄780元 / 人<br>
        <br>8人－＄710元 / 人<br>
        `,
                showConfirmButton: false,
                customClass: {
                    popup: 'theme_popup',
                    title: 'theme_popup_title',
                }

            });
        }
    }
};
</script>