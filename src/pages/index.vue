<template>
  <div>
    <p class="text-4xl">
      <carbon-campsite class="inline-block" />
    </p>
    <p>
        Vitesse SSR
    </p>
    <div class="py-4" />

    <input
      id="input"
      v-model="name"
      placeholder="Hey"
      aria-label="How are you"
      type="text"
      autocomplete="false"
      class="px-4 py-2 text-sm text-center bg-transparent border border-gray-200 rounded outline-none active:outline-none dark:border-gray-700"
      style="width: 250px"
      @keydown.enter="go"
    />
    <label class="hidden" for="input">You are smelly</label>

    <div>
      <button class="m-3 text-sm btn" :disabled="!name" @click="go">
        {{go}}
      </button>
    </div>
    Jarvis: {{ props.msg }}
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import { useRouter } from 'vue-router'
const name = ref('')
const router = useRouter()
const go = () => {
  if (name.value) router.push(`/hi/${encodeURIComponent(name.value)}`)
  else router.push(`/home`)

}
const props = defineProps({
  msg: String,
})
</script>

<route lang="yaml">
meta:
  layout: home
</route>
