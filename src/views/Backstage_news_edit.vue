<script>
    import '../assets/css/style.css'
    import TopNavbarBack from '../components/TopNavbarBack.vue';
    import FooterbarBack from '../components/FooterbarBack.vue';

    export default {
        components: {
            TopNavbarBack,
            FooterbarBack
        },
        data(){
            return{
                title: '',
                content: '',
                image: null,
                fileName: '',
                isPreviewVisible: false
            };
        },
        methods: {
            triggerFileInput(){
                this.$refs.fileInput.click();
            },
            onFileChange(event){
                const file = event.target.files[0];
                this.fileName = file.name;
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.image = e.target.result;
                };
                reader.readAsDataURL(file);
            },
            showPreview(){
                this.isPreviewVisible = true;
            },
            hidePreview(){
                this.isPreviewVisible = false;
            },
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
                    <h2>標題：</h2>
                        <input class="backstage_title_input" type="text" v-model="title">
                    <h2>內容：</h2>
                    <div>
                        <textarea name="" id="" v-model="content"></textarea>
                    </div>
                    <br>
                    <button class="btn backstage_button" @click="triggerFileInput" >圖片</button>
                        <input type="file" ref="fileInput" @change="onFileChange" style="display: none;">
                        <span v-if="fileName">{{ fileName }}</span>
                </div>
                <div class="backstage_panel">
                    <!-- click this button to show div id="backstage_news_preview" -->
                    <button class="btn backstage_button" id="button_preview" @click="showPreview">預覽</button>
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