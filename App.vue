<template>
  <router-view />
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
useHead({
  title: 'Vet Nurse',
  meta: [
    { name: 'description', content: 'Insight into the world of Emergency Veterinary Nursing' },
    { name: 'time', content: 'June 2021' },
  ],
})
</script>
