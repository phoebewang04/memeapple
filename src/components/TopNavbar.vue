<script>
import { ref } from 'vue';
import '../assets/css/style.css'

export default {
    setup() {
    const menuBarVisible = ref(false);

    const showMenuBar = () => {
      console.log('Menu bar icon clicked');
      menuBarVisible.value = !menuBarVisible.value;
    };

    return {
      menuBarVisible,
      showMenuBar
    };
  }
};
</script>

<template>
    <header class="top">
        <!-- 這是logo，點了之後回到index.html -->
        <router-link to="/"><img src="../assets/img/memelogo.svg" alt=""></router-link>
        <!-- <i class="fa fa-bars" aria-hidden="true" @click="showMenuBar()"></i> -->
        <font-awesome-icon class="fa" icon="bars" @click="showMenuBar"></font-awesome-icon>
        <!-- 這是列表，透過router連結到其他 .vue 頁面 -->
        <ul id="menuBar" :class="{ 'visible': menuBarVisible }">
            <li><router-link to="/videogame/">線上體驗</router-link></li>
            <li><router-link to="/place-intro/">分館介紹</router-link></li>
            <li><router-link to="/register/">會員專區</router-link></li>
        </ul>
    </header>
</template>