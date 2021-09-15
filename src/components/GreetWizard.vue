
<script setup>
const memRoot = "wizard.receiver.greet";
import { ref, watch } from "vue";
import store from "@/store";
const form = ref(store.get(memRoot, { gender: null }));
watch(
  () => JSON.stringify(form.value),
  (n) => store.save(memRoot, form.value)
);
</script>

<template>
  <div ref="root">
    <div class="bg-gray-50">קצת על מקבל הברכה</div>
    <div class="block">
      <span class="text-gray-700">שם כינוי של מקבל הברכה</span>
    </div>
    <div class="block">
      <span class="text-gray-700">האם לשמור לארוע מתחדש </span>
    </div>
    <div class="block">
      <span class="text-gray-700">תזכורת לארוע </span>
    </div>
    <div class="block">
      <span class="text-gray-700">מין</span>
      <div class="mt-2">
        <div>
          <label class="inline-flex items-center">
            <input
              type="radio"
              v-model="form.gender"
              class="form-radio"
              name="radio"
              value="female"
            />
            <span class="mr-2">בת</span>
          </label>
          <label class="inline-flex items-center mr-8">
            <input
              type="radio"
              v-model="form.gender"
              class="form-radio"
              name="radio"
              value="male"
            />
            <span class="mr-2">בן</span>
          </label>
          <label class="inline-flex items-center mr-8">
            <input
              type="radio"
              v-model="form.gender"
              class="form-radio"
              name="radio"
              value="universal"
            />
            <span class="mr-2">הן</span>
          </label>
          <label class="inline-flex items-center mr-8">
            <input
              type="radio"
              v-model="form.gender"
              class="form-radio"
              name="radio"
              value="they"
            />
            <span class="mr-2">הם</span>
          </label>
        </div>
      </div>
    </div>
    <div>משפחה/קריירה/שירות צבאי/ארוע עצוב</div>
    <div>יום הולדת/יום נישואין/בר מצווה/בת מצווה</div>
    <div>תפקיד חדש/ סיום תפקיד/עבודה חדשה/קידום</div>
    <div>פטירה/מחלה קשה/פרידה</div>
  </div>
</template>

