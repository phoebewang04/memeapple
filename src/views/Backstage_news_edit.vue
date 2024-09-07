<script>
    import '../assets/css/style.css'
    import TopNavbarBack from '../components/TopNavbarBack.vue';
    import FooterbarBack from '../components/FooterbarBack.vue';
    import Swal from 'sweetalert2';

    export default {
        components: {
            TopNavbarBack,
            FooterbarBack
        },
        methods: {
            showAlert(){
                Swal.fire({
                    html:
                        `
                        <main class="main-announcement backstage">
                            <section class="wrapper-announcement backstage">
                                <section class="content-announcement backstage">
                                    <!-- 左邊圖像內容 -->
                                    <section class="announcement-img backstage"><img src="../assets/img/AnnouncementPic01.jpg" alt="" class="announcementPic"> </section>

                                    <!-- 右邊文字內容 -->
                                    <section class="announcement-text backstage">
                                        <h1>成都廢院 無法驅散的幽冥殘穢</h1>
                                        <p>位於中國成都某間醫院發生一場嚴重爆炸事故，而後該醫院被政府勒令停業廢棄。自那之後追求刺激的年輕人紛紛結群成黨將其當作靈異事件的熱點。</p>
                                        <p>你和你的兄弟們決定進入這座醫院探險，就像其他年輕人一樣，準備帶回一些紀念品，殊不知這便是一切輪迴的開端……。</p> 
                                        <p>「看我帶回醫院裡面的消防斧頭，這樣我就可以證明我有來過這邊!」你一臉不屑的擊破被封鎖的窗戶，再次進入月光無法觸及的漆黑深淵，無數的眼睛凝視著你，期待下一隻迷路的羔羊成為祭品。</p>
                                    </section>
                                </section>

                                <!-- 按鈕 -->
                                <section class="NewsBack backstage"><router-link to="/index/"><button class="btn btnano">回到首頁</button></router-link></section>
                            </section>
                        </main>
                        `,
                    width: 'auto',
                    positon: 'center',
                });
            }
        }
    }

</script>



<template>

    <TopNavbarBack />

    <main class="backstage_main">
        <div class="wrapper backstage_wrapper">
            <div class="backstage_selection">
                <nav class="backstage_breadcrumb">
                    <ul>
                        <li><router-link to="/BackstageIndex/">後台管理系統</router-link></li>
                        <li>&gt;</li>
                        <li><router-link to="/NewsMenage/">最新消息管理</router-link></li>
                        <li>&gt;</li>
                        <li><router-link to="/NewsEdit/">編輯</router-link></li>
                    </ul>
                </nav>
            </div>
            <div class="backstage_page_content">
                <div class="backstage_news_editor">
                    <h2>標題：</h2>
                    <input class="backstage_title_input" type="text">
                    <h2>內容：</h2>
                    <!-- ckeditor -->
                    

                    <!-- textarea -->
                    <div>
                        <textarea name="" id="">測試</textarea>
                    </div>
                    <br>
                    <button class="btn backstage_button">圖片</button>
                </div>
                <div class="backstage_panel">
                    <!-- click this button to show div id="backstage_news_preview" -->
                    <button class="btn backstage_button" id="button_preview" @click="showAlert()">預覽</button>
                </div>
                <!-- 預覽，應該要改用popup -->
                <div class="backstage_news_preview" id="backstage_news_preview" style="display: none;">
                    <div class="test"></div>
                    <div class="backstage_panel">
                        <button class="btn backstage_button">儲存</button>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <FooterbarBack />

</template>