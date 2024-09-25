<template>
    <section class="error_container">

        <div class="error_page">

            <span class="close_page" @click="closeLandingPage">&times;</span>


            <div class="error_information">
                <p><span>[plugin: vite:vue] </span>
                    Error: Undefined variable 'reservation'. Please enter it to proceed.(10:1)</p>

            </div>


            <div class="error_vue">
                <p> Address:台北市密逃路8之10號/台北館/限時主題/代碼深淵.vue</p>
                <p>
                    100| <span>methods: {</span><br>
                    101| <span>handleAction(name, time) {</span><br>
                    102| <span>if (!name || !time) </span>{<br>
                    104| <span>this.marketingErrorMessage = `[Error]: 請提供您的姓名和預訂時間`;</span><br>
                    105| <span>} else if (!this.hasReservation) {</span><br>
                    107| <span>this.marketingErrorMessage = `[Error]: 未找到預約！請完成預約以繼續挑戰。`;</span><br>
                    108| <span> else{</span>
                </p>
            </div>

            <div class="error_html_container">

                <p>Time:10:30/11:15/12:55/14:35/16:30/18:15</p>

                <div class="error_html">
                    <p>
                        &lt;div class="code_help"&gt;<br>
                        <span>&lt;p&gt;專題載入失敗：不小心寫了無窮迴圈導致我被吸入奇異的空間啦...&lt;/p&gt;</span><br>
                        <span>&lt;p&gt;徵求「頂尖高手debug」讓我順利回去發表...&lt;/p&gt;<br></span>
                        &lt;/div&gt;
                    </p>
                </div>
            </div>

   
            <div class="error_other">
                <p>at constructor (C:\xampp\htdocs\deep_code\node_modules\@babel\parser\lib\index.js:512:25)</p>
                <p>請嘗試點擊其他地方，或按下 <span>X</span> 來中止錯誤訊息。也可點擊<span>預約按鈕</span>選擇你的<span>挑戰時刻</span>，踏上<span>成為debug高手</span>的征途。</p>
            </div>

            <div class="error_btn_container">
                        <router-link to="/theme/4/preorder"><button class="error_btn">預約debug</button></router-link>
                    </div>




        </div>

    </section>
</template>

<script>
export default {
    methods: {
    closeLandingPage() {
      this.$emit('close');
    }
}
}

</script>
