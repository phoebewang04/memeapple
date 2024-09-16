<template>
  <router-view></router-view>
</template>

<script>
export default {
  watch: {
    $route(to) {
      document.title = to.meta.title || '主題頁';
    }
  },
  created() {
    document.title = this.$route.meta.title || '主題頁';
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
