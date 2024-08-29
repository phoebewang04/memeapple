let cemeteryText = document.getElementById('cemetery_text');
let treeLeft = document.getElementById('tree-left');
let treeRight = document.getElementById('tree-right');
let gateLeft = document.getElementById('gate-left');
let gateRight = document.getElementById('gate-right');

window.addEventListener('scroll', () => {
  let value = window.scrollY;

  cemeteryText.style.marginTop = value * 0.7 + 'px';
  treeLeft.style.left = value * -0.9 + 'px';
  treeRight.style.left = value * 0.9 + 'px';
  gateLeft.style.left = value * 0.2 + 'px';
  gateRight.style.left = value * -0.2 + 'px';

});

//------------------------------------------

const ghostText = new SplitType(".split_text");
gsap.registerPlugin(ScrollTrigger);

//建立gsap時間軸
const tlGhost = gsap.timeline();

//設置滾動觸發動畫
tlGhost.from(".cemetery_text .char", {
  filter: "blur(20px)",
  willchange: "filter",
  stagger: 0.07, //間隔
  scrollTrigger: {
    trigger: ".cemetery_text",
    start: "top center",
    end: "bottom top+=300", //元素的底部超過視口頂部 100px 時
    scrub: 1.5,
    // markers: true,
    ease: "power4.out",
    // pin: true
  }
});

/*
trigger: 定義觸發動畫的元素
start: 動畫開始的位置
end: 動畫結束的位置
scrub: 為 true 時，動畫會根據滾動的速度來控制播放進度，使動畫與滾動同步
ease: 動畫的緩動效果為 power4.out，這會讓動畫逐漸變慢並優雅地停止
 */

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//---------------------------------------
// $('#arrondissements a').click(function () {
//   if ($(this).attr("xlink:href").substring(0, 1) == "#") {
//     var the_id = $(this).attr("xlink:href");
//     $('html, body').animate({
//       scrollTop: $(the_id).offset().top
//     }, 'slow');
//   }
//   return false;
// });/**/


// // Smoothscrolling for standards anchors
// $('a[href^="#"]').click(function () {
//   var the_id = $(this).attr("href");
//   $('html, body').animate({
//     scrollTop: $(the_id).offset().top
//   }, 'slow');
//   return false;
// });
