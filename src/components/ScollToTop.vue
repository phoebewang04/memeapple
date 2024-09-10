<template>
    <button @click="topFunction()" id="toTopBTN" v-show="showTopButton">Top</button>
</template>

<script>
export default {
    data() {
        return {
            showButton: false
        };
    },
    mounted() {
        window.onscroll = this.scrollFunction;
    },
    methods: {
        scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                this.showButton = true;
            } else {
                this.showButton = false;
            }
        },
        topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }
};
</script>

<style lang="scss" scoped>
#toTopBTN {
    display: none;
    /* 隱藏按鈕 */
    position: fixed;
    /* 固定位置 */
    bottom: 20px;
    /* 距離底部20px */
    right: 30px;
    /* 距離右邊30px */
    z-index: 99;
    /* 確保按鈕在最上層 */
    border: none;
    /* 無邊框 */
    outline: none;
    /* 無外框 */
    color: map-get($colors, usered);
    /* 背景顏色 */
    color: white;
    /* 文字顏色 */
    cursor: pointer;
    /* 滑鼠指標 */
    padding: 15px;
    /* 內邊距 */
    border-radius: 10px;
    /* 圓角 */
}

#toTopBTN:hover {
    background-color: #555;
    /* 滑鼠懸停時的背景顏色 */
}
</style>