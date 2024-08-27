<script setup>
import '../assets/css/style.css';
import TopNavbar from '../components/TopNavbar.vue';
import Footerbar from '../components/Footerbar.vue';
</script>

<template>
   <TopNavbar />

   <body class="minigame_body">
    <section class="parallax">
      <div class="sticky-background"></div>
      <h2 ref="cemeteryText" id="cemetery_text">亡者之途：墓園的詛咒</h2>
      <img src="../assets/img/tree-left.png" ref="treeLeft" id="tree-left">
      <img src="../assets/img/tree-right.png" ref="treeRight" id="tree-right">
      <img src="../assets/img/gate-left.png" ref="gateLeft" id="gate-left">
      <img src="../assets/img/gate-right.png" ref="gateRight" id="gate-right">
      <img src="../assets/img/grass.png" id="grass">
    </section>

    <section class="sec">
      <div class="cemetery_text">
        <p class="split_text">
          在遙遠的靈息禁地，古老的墓園靜靜矗立，時間在這裡彷彿失去了意義。<br>
          生前貪婪的貴族家族沉眠於此，靈魂被詛咒所纏繞，無法獲得安息。
        </p>

        <p class="split_text">
          傳說，埋藏在這片土地深處的寶藏，只有穿透黑暗、解開宿命之謎的人才能得見真容。<br>
          命運的試煉從未如此接近，當陰霧籠罩，亡靈怒吼，你是否願意成為那位踏破詛咒的尋寶者？
        </p>
      </div>
    </section>

    <div class="minigame_huarong">
      <img src="../assets/img/cube.png" alt="">
    </div>
  </body>

   <Footerbar />
</template>



<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { gsap } from 'gsap';
import ScrollTrigger from '../../node_modules/gsap/ScrollTrigger';
// import Lenis from '@studio-freight/lenis';
import Lenis from '../../node_modules/@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

export default {
  setup() {
    const cemeteryText = ref(null);
    const treeLeft = ref(null);
    const treeRight = ref(null);
    const gateLeft = ref(null);
    const gateRight = ref(null);
    const cemeteryTextContainer = ref(null);

    const handleScroll = () => {
      const value = window.scrollY;
      cemeteryText.value.style.marginTop = value * 0.7 + 'px';
      treeLeft.value.style.left = value * -0.9 + 'px';
      treeRight.value.style.left = value * 0.9 + 'px';
      gateLeft.value.style.left = value * 0.2 + 'px';
      gateRight.value.style.left = value * -0.2 + 'px';
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);

      // 初始化 GSAP 動畫
      const tlGhost = gsap.timeline();
      tlGhost.from(".cemetery_text .char", {
        filter: "blur(20px)",
        willchange: "filter",
        stagger: 0.07,
        scrollTrigger: {
          trigger: cemeteryTextContainer.value,
          start: "top center",
          end: "bottom top+=300",
          scrub: 1.5,
          ease: "power4.out"
        }
      });

      // 初始化 Lenis 平滑滾動
      const lenis = new Lenis();
      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      cemeteryText,
      treeLeft,
      treeRight,
      gateLeft,
      gateRight,
      cemeteryTextContainer
    };
  }
};
</script>

