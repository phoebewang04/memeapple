<template>
    <section class="error_container">

        <div class="error_page">

            <span class="close_page" @click="closeLandingPage">&times;</span>


            <div class="error_information">
                <p><span>[plugin: vite:vue] </span>
                    Error: Undefined variable 'reservation'. Please enter it to proceed.(10:1)</p>
                <p> Address:台北市密逃路8之10號/台北館/代碼深淵.vue<br></p>
            </div>


            <div class="error_vue">
                <p>
                    100| <span>methods: {</span><br>
                    101| <span>handleAction(name, time) {</span><br>
                    102| <span>if (!name || !time) </span>{<br>
                    104| <span>this.marketingErrorMessage = `[Error]: 請提供您的姓名和預訂時間`;</span><br>
                    105| <span>} else if (!this.hasReservation) {</span><br>
                    107| <span>this.marketingErrorMessage = `[Error]: 未找到預約。請完成預約以繼續挑戰。`;</span><br>
                    108| <span> else{</span>
                    <!-- 109| this.marketingErrorMessage = 'Reservation successful! Looking forward to your debugging!';<br>
                110| this.proceedToNextStep();<br>
                111| }<br><br> -->
                    <!-- 112| }<br>
                113| },<br> -->
                </p>
            </div>

            <div class="error_btn_container">

                <p>Time:10:30/11:15/12:55/14:35/16:30/18:15</p>

                <div class="error_html">
                    <p>
                        &lt;div class="text"&gt;<br>
                        <span>&lt;p&gt;代碼深淵載入錯誤： 無法解析錯誤：徵求「頂尖高手debug」目前尚未找到&lt;/p&gt;</span><br>
                        <span>&lt;p&gt;請執行正確的動作來繼續...&lt;/p&gt;<br></span>
                        &lt;/div&gt;

                    </p>
                    <div class="error_btn">
                        <button class="aa">預約debug</button>
                    </div>


                </div>


            </div>


            <div class="error_other">
                <p>
                    at constructor (C:\xampp\htdocs\deep_code\node_modules\@babel\parser\lib\index.js:512:25)
                    at Parser.raise (C:\xampp\htdocs\deep_code\node_modules\@babel\parser\lib\index.js:4785:19)
                    <!-- at Parser.unexpected (C:\xampp\htdocs\deep_code\node_modules\@babel\parser\lib\index.js:4803:16)
                    at Parser.expect (C:\xampp\htdocs\deep_code\node_modules\@babel\parser\lib\index.js:4820:12)
                    at Parser.parseObjectLike
                    (C:\xampp\htdocs\deep_code\node_modules\@babel\parser\lib\index.js:11230:14)
                    at Parser.parseExprAtom (C:\xampp\htdocs\deep_code\node_modules\@babel\parser\lib\index.js:10854:23)
                    at Parser.parseExprSubscripts
                    (C:\xampp\htdocs\deep_code\node_modules\@babel\parser\lib\index.js:10510:23)
                    at Parser.parseUpdate (C:\xampp\htdocs\deep_code\node_modules\@babel\parser\lib\index.js:10549:21)
                    at Parser.parseMaybeUnary
                    (C:\xampp\htdocs\deep_code\node_modules\@babel\parser\lib\index.js:10522:23)
                    at Parser.parseMaybeUnaryOrPrivate
                    (C:\xampp\htdocs\deep_code\node_modules\@babel\parser\lib\index.js:10505:61) -->
                </p>
                <p>Click outside, press <span>Esc</span> key, or fix the code to dismiss.<br>
                    You can also disable this overlay by setting <span>server.hmr.overlay</span> to <span>false</span>
                    in <span>vite.config.js.</span></p>
            </div>




        </div>

    </section>
</template>

<script>
export default {

}
</script>
