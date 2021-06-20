<script setup>
import { useRouter } from 'vue-router'
import { defineProps } from 'vue'
const router = useRouter()
const props = defineProps({
  message: String,
  name: {
    type: String,
  },
})


</script>

<template>
  <div>
    <p class="text-4xl">
      <heroicons-solid:badge-check class="inline-block w-10 h-10" fill="green" />
    </p>
    <p>
      name: {{ props.name }}
    </p>
    <p class="text-sm opacity-50">
      <em>Dynamic Routing</em>
    </p>

    <div>
      <button
        class="btn m-3 text-sm mt-8"
        @click="router.back()"
      >
Go Back
      </button>
    </div>
    Message from API: {{ props.message }}
  </div>
</template>
