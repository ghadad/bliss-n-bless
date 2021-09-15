<script setup>
import store from "@/store";
import TopNav from "@/components/TopNav.vue";
const gift = store.api.getGift(1);
const greet = store.api.getGreet(1);
setInterval(() => {
  store.increment();
}, 1000);
</script>
<template>
  <top-nav></top-nav>
  <router-view></router-view>
  <pre dir="ltr">{{ store }}</pre>
</template>
<style>
body {
  direction: rtl;
}
</style>