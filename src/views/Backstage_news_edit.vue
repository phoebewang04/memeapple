<script>
import '../assets/css/style.css';
import TopNavbarBack from '../components/TopNavbarBack.vue';
import FooterbarBack from '../components/FooterbarBack.vue';

import axios from 'axios';

export default {
    components: {
        TopNavbarBack,
        FooterbarBack
    },
    data() {
        return {
            showPasswordPrompt: false,
            password: '',
            id: null,
            isEditMode: false,
            title: '',
            content: '',
            image: null,
            fileName: '',
            isPreviewVisible: false
        };
    },
    // 判斷是新增模式還是編輯模式
    created() {
        this.id = this.$route.params.id;
        if (this.id) {
            this.isEditMode = true;
            this.loadNews();
        }
    },
    methods: {
        // 上傳最新消息驗證
        promptPassword() {
            this.showPasswordPrompt = true;
        },
        verifyPassword() {
            const correctPassword = 'meme123'; // 替換為你的密碼
            if (this.password == correctPassword) {
                this.saveNews();
                this.showPasswordPrompt = false;
                this.password = '';
            } else {
                alert('密碼錯誤');
            }
        },
        hideInputPreview() {
            this.showPasswordPrompt = false;
        },
        // 權限管控
        checkRole(){
            const user = JSON.parse(sessionStorage.getItem('user'));
            if (user && user.ROLE == 'admin') {
                this.saveNews();
            } else {
                alert('看就好，不要玩啦!');
            }
        },
        triggerFileInput() {
            this.$refs.fileInput.click();
        },
        onFileChange(event) {
            const file = event.target.files[0];
            this.fileName = file.name;
            const reader = new FileReader();
            reader.onload = (e) => {
                this.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        showPreview() {
            this.isPreviewVisible = true;
        },
        hidePreview() {
            this.isPreviewVisible = false;
        },
        // 載入最新消息資料
        async loadNews() {
            try {
                const response = await axios.get(import.meta.env.VITE_API_BASE + `/api/news.php?id=${this.id}`);
                // const response = await axios.get(`http://localhost/memeapple/public/php/api/news.php?id=${this.id}`);
                const news = response.data;
                this.title = news.TOPIC;
                this.content = news.ARTICLE;
                this.image = news.IMG;
                this.fileName = news.FILENAME;
            } catch (err) {
                console.error('An error occurred:', err);
            }
        },
        // 儲存最新消息
        async saveNews() {
            // 檢查輸入資料
            if (!this.title) {
                alert('請輸入標題');
                return;
            }
            if (!this.content) {
                alert('請輸入內容');
                return;
            }
            if (!this.$refs.fileInput.files[0]) {
                alert('請上傳圖片');
                return;
            }

            const formData = new FormData();
            formData.append('action', this.id ? 'update' : 'add');
            formData.append('title', this.title);
            formData.append('id', this.id);
            formData.append('content', this.content);
            formData.append('image', this.$refs.fileInput.files[0]);
            formData.append('imagePath', '/public/img/' + this.$refs.fileInput.files[0].name); // add this
            formData.append('status', 0); // add this
            // formData.append('publisherId', 1); // add this

            // 從session拿publisherID
            const user = JSON.parse(sessionStorage.getItem('user'));
            if (user && user.ID) {
                formData.append('publisherId', user.ID);
            } else {
                alert('無法從session獲取ID');
                return;
            }

            // 檢查 FormData 的內容
            for (let pair of formData.entries()) {
                console.log(pair[0] + ', ' + pair[1]);
            }

            try {
                const response = await axios.post(import.meta.env.VITE_API_BASE + '/api/news.php', formData, {
                // const response = await axios.post('http://localhost/memeapple/public/php/api/news.php', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                console.log(response);
                if (response.data.success) {
                    alert('儲存成功');
                    this.$router.push('/NewsMenage/');
                } else {
                    const message = response.data.message || '儲存失敗';
                    alert('儲存失敗' + message);
                }
            } catch (err) {
                console.error('An error occurred: ' + err.message);
                alert('儲存失敗，請稍後再試');
            }
        }




    },
};

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
                    <h2>{{ isEditMode ? '編輯最新消息' : '新增最新消息' }}</h2>
                    <h2>標題：</h2>
                    <input class="backstage_title_input" type="text" v-model="title">
                    <h2>內容：</h2>
                    <div>
                        <textarea name="" id="" v-model="content"></textarea>
                    </div>
                    <br>
                    <button class="btn backstage_button" @click="triggerFileInput">圖片</button>
                    <input type="file" ref="fileInput" @change="onFileChange" style="display: none;">
                    <span v-if="fileName">{{ fileName }}</span>
                </div>
                <div class="backstage_panel news_edit">
                    <!-- click this button to show div id="backstage_news_preview" -->
                    <button class="btn backstage_button" id="button_preview" @click="showPreview">預覽</button>
                    <!-- 普通版按鈕 -->
                    <!-- <button class="btn backstage_button" @click="saveNews">{{ isEditMode ? '更新' : '新增' }}</button> -->
                    <!-- 密碼驗證版按鈕 -->
                    <!-- <button class="btn backstage_button" @click="promptPassword">{{ isEditMode ? '更新' : '新增' }}</button>
                        <div v-if="showPasswordPrompt" class="backstage_news" @click="hideInputPreview">
                            <div class="backstage_news_preview" @click.stop
                            style="background-color: whitesmoke; border: .5px solid #8F9191; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2 );">
                                <input type="password" v-model="password" placeholder="輸入密碼" style="margin: 24px 24px 24px 24px; font-size: 20px; line-height: 1.6;">
                                <button class="btn backstage_button" @click="verifyPassword" style="margin: 0 auto; margin-bottom: 24px;">確認</button>
                            </div>
                        </div> -->
                    <!-- 登入後權限控管版按鈕 -->
                    <button class="btn backstage_button" @click="checkRole">{{ isEditMode ? '更新' : '新增' }}</button> 
                    <router-link to="/NewsMenage/"><button class="btn backstage_button">取消</button></router-link>
                </div>
                    <div v-if="isPreviewVisible" class="backstage_news" @click="hidePreview">
                        <div class="backstage_news_preview" @click.stop>
                            <div class="backstage_news_content">

                                <div class="backstage_news_image">
                                    <img :src="image" alt="Uploaded Image" class="announcementPic">
                                </div>

                                <div class="backstage_news_text">
                                    <h1>{{ title }}</h1>
                                    <p>{{ content }}</p>
                                </div>

                            </div>

                            <div class="backstage_panel">
                                <button class="btn backstage_button" @click="hidePreview">關閉</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </main>

    <FooterbarBack />

</template>