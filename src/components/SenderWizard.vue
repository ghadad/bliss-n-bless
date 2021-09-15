
<script setup>
import { ref, watch } from "vue";
import store from "@/store";
const form = ref(store.get("wizard.sender", { gender: null }));
console.log(form);
watch(
  () => JSON.stringify(form.value),
  (n) => store.save("wizard.sender", form.value)
);
</script>

<template>
  <div ref="root">
    <div class="bg-gray-50">קצת על שולח המתנה</div>
    <div class="block">
      <span class="text-gray-700">מין השולח</span>
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
            <span class="mr-2">אנחנו</span>
          </label>
        </div>
      </div>
    </div>
    <div>תאריך לידה</div>
    <div>אשף להעדפת מתנות</div>
  </div>
</template>

