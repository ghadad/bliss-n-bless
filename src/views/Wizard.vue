<script setup>
import { ref } from "vue";
import SenderWizard from "@/components/SenderWizard.vue";
import GiftWizard from "@/components/GiftWizard.vue";
import GreetWizard from "@/components/GreetWizard.vue";
let ActiveWizard = ref(SenderWizard);

const setActiveWizard = (w) => {
  ActiveWizard.value = w;
  console.log(1);
  return true;
};
</script>

<template>
  <div class="bg-gray-50 mt-7 mr-24">
    <h1 class="text-center text-3xl m-4">אשף המערכת</h1>
    <h1 class="text-center text-1xl m-4">
      המערכת שלנו מאוד חכמה אבל בואו נעזור לה להתאים ברכה ומתנה במספר דקות
    </h1>
    <div class="w-full text-center mx-auto">
      <button
        class="
          bg-pink-500
          text-white
          active:bg-pink-600
          font-bold
          uppercase
          text-base
          px-8
          py-3
          rounded-full
          shadow-md
          hover:shadow-lg
          outline-none
          focus:outline-none
          mr-3
          mb-3
          ease-linear
          transition-all
          duration-150
        "
        type="button"
        @click="setActiveWizard(SenderWizard)"
      >
        בואו נכיר אותכם
      </button>
      <button
        class="
          bg-pink-500
          text-white
          active:bg-pink-600
          font-bold
          uppercase
          text-base
          px-8
          py-3
          rounded-full
          shadow-md
          hover:shadow-lg
          outline-none
          focus:outline-none
          mr-3
          mb-3
          ease-linear
          transition-all
          duration-150
        "
        type="button"
        @click="setActiveWizard(GreetWizard)"
      >
        נתאים ברכה
      </button>

      <button
        class="
          bg-pink-500
          text-white
          active:bg-pink-600
          font-bold
          uppercase
          text-base
          px-8
          py-3
          rounded-full
          shadow-md
          hover:shadow-lg
          outline-none
          focus:outline-none
          mr-3
          mb-3
          ease-linear
          transition-all
          duration-150
        "
        type="button"
        @click="setActiveWizard(GiftWizard)"
      >
        נתאים מתנה
      </button>
    </div>
    <component :is="ActiveWizard"></component>
  </div>
</template>
