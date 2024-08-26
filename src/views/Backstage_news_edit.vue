<script setup>
    import '../assets/css/style.css'
    import TopNavbarBack from '../components/TopNavbarBack.vue';
    import FooterbarBack from '../components/FooterbarBack.vue';
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
                    <!-- <div id="editor">This is some sample content.</div>
                    <script>
                            ClassicEditor
                                    .create(document.querySelector( 
                                            '#editor'))
                                    .then(editor=>{
                                        console.log(editor);
                                    })
                                    .catch(error=>{
                                        console.error(error);
                                    });
                    </script> -->

                    <!-- textarea -->
                    <div>
                        <textarea name="" id=""></textarea>
                    </div>
                    <br>
                    <button class="btn backstage_button">圖片</button>
                </div>
                <div class="backstage_panel">
                    <!-- click this button to show div id="backstage_news_preview" -->
                    <button class="btn backstage_button" id="button_preview">預覽</button>
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