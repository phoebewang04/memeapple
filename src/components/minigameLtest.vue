<template>
    <!-- <TopNavbar />
    <div>
        <div class="stage">
            <div class="game-name" v-show="!isStart">華容道</div>
            <div class="content clearfix" v-show="isStart">
            <div
            v-for="item in randomData"
            :key="item"
            :class="`img${level}`"
            @click="handleMove(item)"
            >
            <el-image
                v-if="item != randomData.length"
                :src="getSmallImg(`${gameImg}/${level}/${item}.jpg`)"
            ></el-image>
            </div>
            </div>
        </div>
    </div>
    <Footerbar /> -->
</template>

<script>
// import '../assets/js/vue.global';
// import '../assets/css/style.css';
// import TopNavbar from '../components/TopNavbar.vue';
// import Footerbar from '../components/Footerbar.vue';



// export default {
//     components:{
//       TopNavbar,
//       Footerbar,
//     },
//     data(){
//         return {
//         tiles: [1, 2, 3, 4, 5, 6, 7, 8, 0], // 0 表示空白
//         size: 3, // 3x3 的拼圖
//       };
//     // },
//         // return {
//         //     formData: {
//         //         gameImg: "cemetery1",
//         //         level: 3,
//         //     },
//         //     formInline: {
//         //         imgList: [
//         //         { label: "墓園1", value: "cemetery1" },
//         //         ],
//         //         levelList: [
//         //         { label: "初级", value: 3 },
//         //         { label: "高级", value: 5 },
//         //         ],
//         //         },
//         // }
//     },
//     methods: {
//       moveTile(index) {
//         const emptyIndex = this.tiles.indexOf(0);
//         const { size } = this;
  
//         const isAdjacent = (i, j) => {
//           const rowDiff = Math.abs(Math.floor(i / size) - Math.floor(j / size));
//           const colDiff = Math.abs(i % size - j % size);
//           return (rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1);
//         };
  
//         if (isAdjacent(index, emptyIndex)) {
//           this.tiles.splice(emptyIndex, 1, this.tiles[index]);
//           this.tiles.splice(index, 1, 0);
//         }
//       },
//     },
// }
</script>

  
