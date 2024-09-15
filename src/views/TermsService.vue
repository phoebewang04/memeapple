<template>
    <TopNavbar />
    <main class="main-terms">
        <h1 data-aos="fade-up" data-aos-delay="40">使用條款</h1>
        <section class="content-terms">
            <ScrollToTop />
            <section class="terms-loopCard">
                <div class="terms-loop" v-for="(term, index) in terms" :key="index">
                    <div class="terms-card" data-aos="fade-up" data-aos-delay="50">
                        <p class="terms-card-title" data-aos="fade-up" data-aos-delay="100">{{ term.termsTitle }}</p>
                        <p class="terms-card-text" data-aos="fade-up" data-aos-delay="150" v-if="term.termsAnswer01">{{
                            term.termsAnswer01 }}</p>
                        <p class="terms-card-text" data-aos="fade-up" data-aos-delay="150" v-if="term.termsAnswer02">{{
                            term.termsAnswer02 }}</p>
                        <p class="terms-card-text" data-aos="fade-up" data-aos-delay="150" v-if="term.termsAnswer03">{{
                            term.termsAnswer03 }}</p>
                    </div>
                </div>
            </section>
        </section>
        <!-- 
        <section class="content-p-faq-contenter" data-aos="fade-up" data-aos-delay="200">
          <div v-for="(faq, index) in faqs" :key="index">
            
            <button class="index-question index-active-faq"> {{ faq.question }}
                <div class="indexfaq-icon"><i class="fa-solid fa-plus"></i></div>
              </button>
             
              <div class="index-answer">
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </section>
-->

    </main>
    <Footerbar />
</template>

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
            terms: [
                {
                    termsTitle: "遊戲預訂與取消",
                    termsAnswer01: "預訂：玩家需提前預訂遊戲時間，並支付訂金以確認預訂，餘款可在現場付款。",
                    termsAnswer02: "增加人數：若需在遊戲開始前增加人數，只需在現場補繳相應的費用即可。請注意，增加人數不得超過遊戲房間的最大容納人數。",
                    termsAnswer03: "取消：若需取消預訂，請至少提前24小時通知我們。未提前通知的取消將不予退款。"
                },
                {
                    termsTitle: "遊戲參與",
                    termsAnswer01: "年齡限制：參與者需年滿12歲，12歲以下需有成人陪同。",
                    termsAnswer02: "健康狀況：有心血管疾病、懷孕或其他健康問題的玩家，建議在參與前諮詢醫生並告知工作人員。",
                    termsAnswer03: "人數限制：每個遊戲房間有最大和最小參與人數限制，請根據預訂時的說明進行安排。"
                },
                {
                    termsTitle: "遊戲規則",
                    termsAnswer01: "時間限制：每個遊戲有固定的時間限制，請在規定時間內完成挑戰。",
                    termsAnswer02: "禁止攜帶物品：為了遊戲的公平性和安全性，禁止攜帶手機、相機等電子設備進入遊戲房間。",
                    termsAnswer03: "遊戲中途退出：若在遊戲過程中感到不適或害怕，可以隨時告知工作人員，我們會協助您安全退出。"
                },
                {
                    termsTitle: "安全與責任",
                    termsAnswer01: "安全指導：參與者需遵守工作人員的指導和遊戲規則，確保自身和他人的安全。",
                    termsAnswer02: "損壞賠償：若參與者在遊戲過程中故意損壞遊戲設施，需承擔相應的賠償責任。",
                    termsAnswer03: "責任免除：我們對於因參與者自身行為或健康狀況引起的任何傷害或損失不承擔責任。"
                },
                {
                    termsTitle: "個人資料保護",
                    termsAnswer01: "資料收集：我們會收集參與者的姓名、聯絡方式等個人資料，用於預訂和聯繫。",
                    termsAnswer02: "資料使用：個人資料僅用於遊戲相關事務，不會用於其他用途或分享給第三方。"
                },
                {
                    termsTitle: "條款變更",
                    termsAnswer01: "變更通知：我們保留隨時修改使用條款的權利，任何變更將會在我們的網站上公佈。請定期查看以了解最新的使用條款。",
                    termsAnswer02: "適用範圍：本使用條款適用於所有參與我們密室逃脫遊戲的玩家。參與者在預訂和參與遊戲時，即表示同意遵守本使用條款。"
                }
            ],
        }
    },
    methods: {
        handleScroll() {
            requestAnimationFrame(() => {
                AOS.refresh(); // 刷新 AOS
            });
        },

    }, mounted() {
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
    }

}
</script>