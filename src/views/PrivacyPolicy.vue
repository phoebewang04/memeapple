<script>
import '../assets/css/style.css';
import TopNavbar from '../components/TopNavbar.vue';
import Footerbar from '../components/Footerbar.vue';
import ScrollToTop from '../components/ScollToTop.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
    components: {
        TopNavbar,
        Footerbar,
        ScrollToTop,
    },
    data() {
        return {
            policys: [
                {
                    question: " 我們收集哪些個人資料？",
                    answer: "我們收集的個人資料包括姓名、生日、信箱和電話號碼。這些資料將用於會員註冊、提供優惠券和其他相關服務。"
                },
                {
                    question: "我們如何使用這些個人資料？",
                    answer: "我們將使用您的個人資料來管理會員帳戶、提供優惠券、改進我們的服務以及與您聯繫。您的資料不會用於其他未經授權的用途。"
                },
                {
                    question: "我們如何保護您的個人資料？",
                    answer: "我們採取嚴格的安全措施來保護您的個人資料，包括使用防火牆和加密技術。只有經過授權的工作人員才能訪問您的資料。"
                },
                {
                    question: "我們會與第三方分享您的個人資料嗎？",
                    answer: "我們不會與第三方分享您的個人資料，除非法律要求或您已經明確同意。"
                },
                {
                    question: "您如何查詢、更正或刪除您的個人資料？",
                    answer: "您可以隨時聯繫我們，查詢、更正或刪除您的個人資料。我們將在合理的時間內處理您的請求。"
                },
                {
                    question: "我們如何使用Cookies？",
                    answer: "我們使用Cookies來提升您的使用體驗，記錄您的偏好設置。如果您不希望接受Cookies，可以在瀏覽器中進行設置。"
                },
                {
                    question: "隱私權政策的變更",
                    answer: "我們可能會不時更新隱私權政策，任何變更將會在我們的網站上公佈。請定期查看以了解最新的隱私權政策。"
                },
            ],
        }
    },
    methods: {
        handleScroll() {
            requestAnimationFrame(() => {
                AOS.refresh(); // 刷新 AOS
            });
        },

    },
    mounted() {
        AOS.init({
            duration: 1200,
            once: false,
            easing: 'ease',
        });

        this.$nextTick(() => {
            setTimeout(() => {
                AOS.refresh(); // 延时刷新 AOS
            }, 100); // 100ms 延时
        });


        // faq縮放
        const questions = document.querySelectorAll('.index-question');

        questions.forEach(question => {
            question.addEventListener('click', function () {
                // 先關閉所有已經展開的問題
                questions.forEach(q => {
                    const answer = q.nextElementSibling;
                    if (answer !== this.nextElementSibling && answer.style.maxHeight) {
                        answer.style.maxHeight = null;
                        q.querySelector('.indexfaq-icon i').classList.replace('fa-minus', 'fa-plus');
                    }
                });

                // 展開或收攏當前點擊的問題
                const answer = this.nextElementSibling;
                if (answer.style.maxHeight) {
                    answer.style.maxHeight = null;
                    this.querySelector('.indexfaq-icon i').classList.replace('fa-minus', 'fa-plus');
                } else {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    this.querySelector('.indexfaq-icon i').classList.replace('fa-plus', 'fa-minus');
                }
                AOS.refresh();  // 確保 FAQ 展開時動畫正常觸發
            });
        });
    },
    updated() {
        this.$nextTick(() => {
            AOS.refresh(); // 手動刷新 AOS
        });
    },
}
</script>


<template>
    <TopNavbar />
    <main class="main-privacy">
        <ScrollToTop />
        <section class="content-privacy">
            <h1 data-aos="fade-up" data-aos-delay="100">隱私權政策</h1>
            <section class="privacy-text">
                <p data-aos="fade-up" data-aos-delay="150">謎因meme Studio 謎因工作室（以下簡稱「我們」）非常重視您的個人資料保護。</p>
                <p data-aos="fade-up" data-aos-delay="150">本隱私政策旨在說明我們如何收集、使用、披露、保存及保護您的個人資料。</p>
                <p data-aos="fade-up" data-aos-delay="150">請仔細閱讀以下內容，以了解我們對您個人資料的處理方式。</p>
            </section>
            <section class="content-p-faq-contenter privacy-question" data-aos="fade-up" data-aos-delay="200">
                <div v-for="(policy, index) in policys" :key="index">
                    <!-- 第1個問題 -->
                    <button class="index-question index-active-faq"> {{ policy.question }}
                        <div class="indexfaq-icon"><i class="fa-solid fa-plus"></i></div>
                    </button>
                    <!-- 第1個問題的回答 -->
                    <div class="index-answer">
                        <p>{{ policy.answer }}</p>
                    </div>
                </div>
            </section>
        </section>
    </main>
    <Footerbar />
</template>
