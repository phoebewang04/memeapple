<template>
    <button @click="topFunction()" id="toTopBTN" v-show="showButton" @mouseover="pauseAnimation"
        @mouseout="resumeAnimation">Top</button>
</template>

<script>
import '../assets/css/style.css';
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
            // document.body.scrollTop = 0;
            // document.documentElement.scrollTop = 0;
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        pauseAnimation() {
            document.getElementById('toTopBTN').style.animationPlayState = 'paused';
        },
        resumeAnimation() {
            document.getElementById('toTopBTN').style.animationPlayState = 'running';
        }
    }
};
</script>