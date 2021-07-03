<template>
    <input
      id="input"
      v-model="input"
      :placeholder="input"
      :aria-label="input"
      type="text"
      autocomplete="false"
      class="px-4 py-2 text-sm text-center bg-transparent border border-gray-200 rounded outline-none active:outline-none dark:border-gray-700"
      style="width: 250px"
      options="vets, admin"
      @keydown.enter="go"

    />
    <label class="hidden" for="input">Where do you want to go?</label>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const input = ref('')
const go = () => {
  if (input.value) router.push(`/${encodeURIComponent(input.value)}`)
}
</script>
