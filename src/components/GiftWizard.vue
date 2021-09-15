
<script setup>
import { ref, watch } from "vue";
import store from "@/store";
const form = ref(store.get("wizard.recevier.gift", { gender: null }));
watch(
  () => JSON.stringify(form.value),
  (n) => store.save("wizard.sender", form.value)
);
</script>

<template>
  <div ref="root">
    <div class="bg-gray-50">התאמת מתנה מועדפת</div>
    <div>נופש</div>
    <div>רוחני</div>
    <div>פרחים</div>
    <div>משהו מתוק</div>
    <div>גאדגטים</div>
    <div>גאדגטים למטבח</div>
    <div>מופעי תרבות</div>
    <div>מופעי ספורט</div>
    <div>מסעדות</div>
    <div>שוברי קנייה</div>
    <div>טווח מחירים</div>
  </div>
</template>

